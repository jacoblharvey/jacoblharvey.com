const dropdownButton = document.getElementById("dropdown-button");
const dropdownContent = document.getElementById("dropdown-content");
const dropdownArrow = document.getElementById("dropdown-arrow");

const toggleDropdown = () => {
  dropdownContent.classList.toggle("show");
  dropdownArrow.classList.toggle("drop");
};

// Toggle dropdown on button clicks
dropdownButton.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleDropdown();
});

// Close dropdown on any other DOM click except for dropdown itself
document.documentElement.addEventListener("click", (event) => {
  if (!dropdownContent.contains(event.target)
      && dropdownContent.classList.contains("show")) {
    toggleDropdown();
  }
});

// Close dropdown when esc is pressed
document.documentElement.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && dropdownContent.classList.contains("show")) {
    toggleDropdown();
  }
});
