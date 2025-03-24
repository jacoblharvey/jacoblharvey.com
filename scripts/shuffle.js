const profileImg = document.getElementById("profile-img");

profileImg.addEventListener("click", () => {
  const imgSrc = profileImg.getAttribute("src");
  if (imgSrc === "images/profile1.jpg") {
    profileImg.setAttribute("src", "images/profile2.jpg");
  } else {
    profileImg.setAttribute("src", "images/profile1.jpg");
  }
});
