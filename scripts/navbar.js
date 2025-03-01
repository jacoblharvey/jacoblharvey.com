const dropdownButton = document.getElementById("dropdown-button");
const dropdownContent = document.getElementById("dropdown-content");
const toggleArrow = document.getElementById("dropdown-arrow");

// Toggle dropdown function
const toggleDropdown = () => {
  dropdownContent.classList.toggle("show");
  toggleArrow.classList.toggle("drop");
  dropdownButton.classList.toggle("highlight");
};

// Toggle dropdown open/close when dropdown button is clicked
dropdownButton.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleDropdown();
});

// Close dropdown when dom element is clicked
document.documentElement.addEventListener("click", () => {
  if (dropdownContent.classList.contains("show")) {
    toggleDropdown();
  }
});

// Close dropdown when esc is clicked
document.documentElement.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && dropdownContent.classList.contains("show")) {
    toggleDropdown();
  }
});
