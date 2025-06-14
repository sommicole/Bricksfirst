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

    // close the menu when clicking outside of it
    document.addEventListener('click', function (event) {
      if (
        navLinks.classList.contains('open') &&
        !navLinks.contains(event.target) &&
        !navToggle.contains(event.target)
      ) {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  const searchInput = document.getElementById('search-input');
  const categorySelect = document.getElementById('category-select');
  const posts = document.querySelectorAll('.post-link');

  function filterPosts() {
    const term = searchInput ? searchInput.value.toLowerCase() : '';
    const category = categorySelect ? categorySelect.value : 'all';
    posts.forEach(function (post) {
      const matchesTerm = post.innerText.toLowerCase().includes(term);
      const matchesCategory = category === 'all' || post.dataset.category === category;
      post.style.display = matchesTerm && matchesCategory ? 'block' : 'none';
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', filterPosts);
  }
  if (categorySelect) {
    categorySelect.addEventListener('change', filterPosts);
  }
});
