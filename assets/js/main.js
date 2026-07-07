(function () {
  "use strict";

  // Current year in footer
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile menu toggle
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("mobile-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Typing effect
  var typingEl = document.querySelector(".typing");
  if (typingEl && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var words = [
      "Quant Analyst",
      "Web Developer",
      "Problem Solver",
      "Fast Learner",
      "Software Developer"
    ];
    var wordIndex = 0;
    var charIndex = 0;
    var deleting = false;

    function tick() {
      var current = words[wordIndex];
      if (deleting) {
        charIndex--;
      } else {
        charIndex++;
      }
      typingEl.textContent = current.substring(0, charIndex);

      var delay = deleting ? 45 : 90;
      if (!deleting && charIndex === current.length) {
        delay = 1600;
        deleting = true;
      } else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        delay = 400;
      }
      setTimeout(tick, delay);
    }
    tick();
  } else if (typingEl) {
    typingEl.textContent = "Software Developer";
  }
})();
