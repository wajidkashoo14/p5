const hamburger = document.querySelector(".sidemenu-toggler");
const sidemenu = document.querySelector("#sidemenu");
const closing = document.querySelector(".close");

hamburger.addEventListener("click", () => {
  sidemenu.classList.add("active");
  console.log("Classlist:", sidemenu.classList);
  // hamburger.style.display = "none";
});

closing.onclick = () => sidemenu.classList.replace("active", "close");
