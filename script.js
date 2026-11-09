/* Small enhancements. The site works fine without JavaScript. */
(function () {
  'use strict';

  var root = document.documentElement;
  var media = window.matchMedia('(prefers-color-scheme: dark)');

  function currentTheme() {
    return root.dataset.theme || (media.matches ? 'dark' : 'light');
  }

  function syncToggle() {
    var button = document.querySelector('.theme-toggle');
    if (!button) return;
    var isDark = currentTheme() === 'dark';
    button.setAttribute('aria-pressed', String(isDark));
    button.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
  }

  var toggle = document.querySelector('.theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.dataset.theme = next;
      try { localStorage.setItem('theme', next); } catch (e) { /* ignore */ }
      syncToggle();
    });
    syncToggle();
  }

  // Follow the operating system until the visitor makes an explicit choice.
  if (media.addEventListener) {
    media.addEventListener('change', function () {
      try { if (localStorage.getItem('theme')) return; } catch (e) { return; }
      syncToggle();
    });
  }

  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  var items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  items.forEach(function (el) {
    el.classList.add('will-reveal');
    observer.observe(el);
  });
}());
