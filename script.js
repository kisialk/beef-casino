(function () {
  "use strict";

  var header = document.querySelector(".site-header");
  var burger = document.querySelector(".burger");
  var mobileNav = document.querySelector(".nav-mobile");

  if (!header || !burger || !mobileNav) {
    return;
  }

  function setOpen(isOpen) {
    if (isOpen) {
      header.classList.add("is-open");
      burger.setAttribute("aria-expanded", "true");
    } else {
      header.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
    }
  }

  burger.addEventListener("click", function () {
    setOpen(!header.classList.contains("is-open"));
  });

  mobileNav.addEventListener("click", function (e) {
    var t = e.target;
    if (t && t.tagName === "A") {
      setOpen(false);
    }
  });

  document.addEventListener("click", function (e) {
    if (!header.contains(e.target)) {
      setOpen(false);
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      setOpen(false);
    }
  });

  window.addEventListener("resize", function () {
    if (window.matchMedia("(min-width: 1100px)").matches) {
      setOpen(false);
    }
  });
})();
