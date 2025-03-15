const showTocButton = document.getElementById("show-toc");
const hideTocButton = document.getElementById("hide-toc");
const tableOfContents = document.getElementById("toc");
const dimmer = document.getElementById("dimmer");

const showToc = () => {
  tableOfContents.classList.add("show");
  disableScroll();
  dim(true);
};

const hideToc = () => {
  tableOfContents.classList.remove("show");
  enableScroll();
  dim(false);
};

const disableScroll = () => {
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  window.onscroll = () => {
    window.scrollTo(scrollLeft, scrollTop);
  };
};

const enableScroll = () => {
  window.onscroll = () => {};
};

const dim = (bool) => {
  dimmer.style.display = (bool ? 'block' : 'none');
};

// Toggle toc on button clicks
showTocButton.addEventListener("click", (event) => {
  event.stopPropagation();
  showToc();
});

hideTocButton.addEventListener("click", (event) => {
  event.stopPropagation();
  hideToc();
});

// Close toc on any other DOM click except toc itself
document.documentElement.addEventListener("click", (event) => {
  if (!tableOfContents.contains(event.target) 
      && tableOfContents.classList.contains("show")) {
    hideToc();
  }
});

// Close dropdown when esc is pressed
document.documentElement.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && tableOfContents.classList.contains("show")) {
    hideToc();
  }
});

// Prevent issues if viewport is increased while toc is open
window.onresize = () => {
  if (window.innerWidth >= 1012) {
    hideToc();
  }
};
