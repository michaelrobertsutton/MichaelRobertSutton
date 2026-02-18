/**
 * Michael Sutton - Personal Website
 * Vanilla JavaScript - Minimal & Accessible
 */

(function () {
  'use strict';

  const header = document.getElementById('header');
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // ---------- Headshot Fallback ----------
  const headshot = document.getElementById('headshot');
  const headshotFallback = document.getElementById('headshot-fallback');

  if (headshot && headshotFallback) {
    headshot.addEventListener('error', function () {
      headshot.style.display = 'none';
      headshotFallback.style.display = 'flex';
    });
  }

  // ---------- Mobile Navigation Toggle ----------
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      const isOpen = navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
      navToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });

    // Close menu when a nav link is clicked
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Open menu');
      });
    });

    // Close menu when clicking away from navigation
    document.addEventListener('click', function (e) {
      if (!navMenu.classList.contains('open')) return;
      const target = e.target;
      if (!(target instanceof Element)) return;

      const clickedInsideMenu = navMenu.contains(target);
      const clickedToggle = navToggle.contains(target);
      if (!clickedInsideMenu && !clickedToggle) {
        navMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Open menu');
      }
    });

    // Close menu on escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Open menu');
        navToggle.focus();
      }
    });
  }

  // ---------- Active Section in Navigation ----------
  if (navLinks.length) {
    const linkBySectionId = new Map();
    navLinks.forEach(function (link) {
      const target = link.getAttribute('href');
      if (target && target.startsWith('#')) {
        linkBySectionId.set(target.slice(1), link);
      }
    });

    const sections = Array.from(linkBySectionId.keys())
      .map(function (id) {
        return document.getElementById(id);
      })
      .filter(Boolean);

    const setActiveLink = function (id) {
      navLinks.forEach(function (link) {
        const isActive = link.getAttribute('href') === '#' + id;
        link.classList.toggle('active', isActive);
        if (isActive) {
          link.setAttribute('aria-current', 'page');
        } else {
          link.removeAttribute('aria-current');
        }
      });
    };

    if ('IntersectionObserver' in window && sections.length) {
      const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      }, {
        rootMargin: '-35% 0px -55% 0px',
        threshold: 0.1
      });

      sections.forEach(function (section) {
        observer.observe(section);
      });
    }
  }

  // ---------- Set Current Year in Footer ----------
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // ---------- Smooth Scroll for Safari ----------
  // Native smooth scroll is supported, but this adds a fallback
  if (!('scrollBehavior' in document.documentElement.style)) {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  // ---------- Header Shadow on Scroll ----------
  if (header) {
    window.addEventListener('scroll', function () {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 10) {
        header.style.boxShadow = '0 1px 3px 0 rgb(0 0 0 / 0.1)';
      } else {
        header.style.boxShadow = 'none';
      }
    }, { passive: true });
  }

})();
