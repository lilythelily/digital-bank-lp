"use strict";

const topUl = document.querySelectorAll(".top-ul li");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const mobileNav = document.querySelector(".mobile-nav");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-btn");

function removeHide(item) {
  item.classList.remove("hide");
}

function addHide(item) {
  item.classList.add("hide");
}

// === display top nav underbar  ===
topUl.forEach((li) => {
  li.addEventListener("mouseenter", () => {
    removeHide(li.lastElementChild);
  });

  li.addEventListener("mouseleave", () => {
    addHide(li.lastElementChild);
  });
});

// === mobile nav menu ===

hamburgerIcon.addEventListener("click", () => {
  if (hamburgerIcon.classList.contains("close-btn")) {
    hamburgerIcon.classList.remove("close-btn");
    addHide(mobileNav);
    addHide(overlay);
  } else {
    removeHide(mobileNav);
    removeHide(overlay);
    hamburgerIcon.classList.add("close-btn");
  }
});

overlay.addEventListener("click", () => {
  addHide(mobileNav);
  addHide(overlay);
  hamburgerIcon.classList.remove("close-btn");
});
