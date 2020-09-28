const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// const polishElems = document.querySelectorAll('body [lang="pl-PL"]');
// const englishElems = document.querySelectorAll('body [lang="en"]');

// polishElems.forEach((elem) => (elem.style.display = "none"));
