"use strict";

// MOBILE NAVIGATION
const mobileNav = document.querySelector(".header");
const btnNav = document.querySelector(".btn-mobile-nav");
const section1 = document.querySelector(".section-featured");
const footer = document.querySelector(".footer");

btnNav.addEventListener("click", function () {
  mobileNav.classList.toggle("nav-open");
});

// STICKY NAV
const footerHeight = footer.getBoundingClientRect().top;

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) mobileNav.classList.remove("sticky");
  else mobileNav.classList.add("sticky");
};

const obsOptions = {
  root: null,
  threshold: [0.5, 1],
  rootMargin: `${footerHeight}px`,
};

const observer = new IntersectionObserver(stickyNav, obsOptions);
observer.observe(section1);

// REVEAL SECTION
const allSections = document.querySelectorAll(".section");
const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach((section) => {
  sectionObserver.observe(section);

  section.classList.add("section--hidden");
});
