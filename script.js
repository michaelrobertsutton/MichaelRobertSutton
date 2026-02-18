/**
 * Michael Sutton - Editorial Portfolio
 * Vanilla JavaScript
 */

(function () {
  "use strict";

  var header = document.getElementById("site-header");
  var navToggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("site-nav");
  var navLinks = document.querySelectorAll(".nav-link");

  // ---------- Mobile Navigation ----------
  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    });

    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Open menu");
      });
    });

    document.addEventListener("click", function (event) {
      if (!nav.classList.contains("open")) {
        return;
      }

      var target = event.target;
      if (!(target instanceof Element)) {
        return;
      }

      var clickedInNav = nav.contains(target);
      var clickedOnToggle = navToggle.contains(target);

      if (!clickedInNav && !clickedOnToggle) {
        nav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Open menu");
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && nav.classList.contains("open")) {
        nav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Open menu");
        navToggle.focus();
      }
    });
  }

  // ---------- Active Section State ----------
  if (navLinks.length) {
    var bySection = new Map();

    navLinks.forEach(function (link) {
      var href = link.getAttribute("href");
      if (href && href.charAt(0) === "#") {
        bySection.set(href.slice(1), link);
      }
    });

    var sections = Array.from(bySection.keys())
      .map(function (id) {
        return document.getElementById(id);
      })
      .filter(Boolean);

    var setActive = function (id) {
      navLinks.forEach(function (link) {
        var isActive = link.getAttribute("href") === "#" + id;
        link.classList.toggle("active", isActive);

        if (isActive) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    };

    if ("IntersectionObserver" in window && sections.length) {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              setActive(entry.target.id);
            }
          });
        },
        {
          rootMargin: "-35% 0px -55% 0px",
          threshold: 0.05,
        }
      );

      sections.forEach(function (section) {
        observer.observe(section);
      });
    }
  }


  // ---------- Header Shadow ----------
  if (header) {
    window.addEventListener(
      "scroll",
      function () {
        if (window.pageYOffset > 12) {
          header.style.boxShadow = "0 6px 18px rgba(15, 23, 42, 0.08)";
        } else {
          header.style.boxShadow = "none";
        }
      },
      { passive: true }
    );
  }

  // ---------- Footer Year ----------
  var year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }
})();
