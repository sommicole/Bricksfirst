document.addEventListener('DOMContentLoaded', function () {
  const year = document.getElementById('copyright-year');
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('#primary-navigation');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', (!isExpanded).toString());
      navLinks.classList.toggle('open');
      // retain focus on the toggle button for accessibility
      navToggle.focus();

      // close the menu when any navigation link is clicked
      document.querySelectorAll('.nav-links a').forEach(function (link) {
        link.addEventListener(
          'click',
          function () {
            navLinks.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
          },
          { once: true }
        );
      });
    });
  }
});
