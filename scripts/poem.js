const lines = document.getElementsByClassName("line-wrapper");
const finishButton = document.getElementById("finish-button");
const upButton = document.getElementById("up-button");
const downButton = document.getElementById("down-button");
const charCount = document.getElementById("char-count");
const restartButton = document.getElementById("restart-button");
const fourLinesForm = document.getElementById("four-lines-form");
let currentCount = 0;
let lineIndex = 0;

const initializePoem = () => {
  currentCount = 0;
  lineIndex = 0;

  Array.from(lines).forEach((line) => {
    line.classList.add("hidden");

    line.children[1].addEventListener("input", () => {
      currentCount = line.children[1].value.length;
      charCount.textContent = currentCount + "/80";
    });
  });

  // NOTE: Disabled fields don't enforce the required attribute
  lines[0].classList.remove("hidden");
  lines[0].children[1].focus();
  finishButton.classList.add("hidden");
  poem.classList.add("hidden");
  downButton.classList.remove("hidden");
  restartButton.classList.add("hidden");
  upButton.classList.add("hidden");
  charCount.classList.remove("hidden");
  charCount.textContent = "0/80";
};

const destroyPoem = () => {
  Array.from(lines).forEach((line) => {
    document.getElementById("poem").innerHTML = `<h2>Your Poem</h2>`;
  });
};

upButton.addEventListener("click", () => {
  if (lineIndex > 0) {
    lines[lineIndex--].classList.add("hidden");
    lines[lineIndex].classList.remove("hidden");
    lines[lineIndex].children[1].focus();
    currentCount = lines[lineIndex].children[1].value.length;
    charCount.textContent = currentCount + "/80";
  }
  
  if (lineIndex < 1) {
    upButton.classList.add("hidden");
  } else if (lineIndex < 3) {
    downButton.classList.remove("hidden");
    finishButton.classList.add("hidden");
  }
});

downButton.addEventListener("click", () => {
  if (lineIndex < 3) {
    lines[lineIndex++].classList.add("hidden");
    lines[lineIndex].classList.remove("hidden");
    lines[lineIndex].children[1].focus();
    currentCount = lines[lineIndex].children[1].value.length;
    charCount.textContent = currentCount + "/80";
  } 
  
  if (lineIndex > 2) {
    downButton.classList.add("hidden");
    finishButton.classList.remove("hidden");
  } else if (lineIndex > 0) {
    upButton.classList.remove("hidden");
  }
});

finishButton.addEventListener("click", () => {
  lines[3].classList.add("hidden");
  upButton.classList.add("hidden");
  downButton.classList.add("hidden");
  finishButton.classList.add("hidden");
  charCount.classList.add("hidden");
  restartButton.classList.remove("hidden");
  poem.classList.remove("hidden");
  Array.from(lines).forEach((line) => {
    document.getElementById("poem").innerHTML += `<p>${line.children[1].value}</p>`;
  });
});

restartButton.addEventListener("click", () => {
  fourLinesForm.reset();
  destroyPoem();
  initializePoem();
});

window.onload = function() {
  fourLinesForm.reset();
  initializePoem();
};
