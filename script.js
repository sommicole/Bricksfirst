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

  // -----------------------------------------------
  // Promotional popup for Brick Layers Community
  // -----------------------------------------------
  const popupInterval = 6 * 60 * 1000; // 6 minutes
  let popupOverlay;

  function showPopup() {
    if (popupOverlay) {
      popupOverlay.style.display = 'flex';
      const firstInput = popupOverlay.querySelector('input');
      if (firstInput) {
        firstInput.focus();
      }
    }
  }

  function hidePopup() {
    if (popupOverlay) {
      popupOverlay.style.display = 'none';
    }
  }

  function createPopup() {
    const overlay = document.createElement('div');
    overlay.className = 'popup-overlay';
    overlay.innerHTML = `
      <div class="popup" role="dialog" aria-labelledby="popup-heading">
        <button type="button" class="popup-close" aria-label="Close">&times;</button>
        <h2 id="popup-heading">Join the Brick Layers Community</h2>
        <p>Sign up today and get 30% off your first purchase!</p>
        <form class="popup-form" action="https://formspree.io/f/mayvkkyk" method="POST">
          <label for="popup-name" class="visually-hidden">Name</label>
          <input id="popup-name" name="name" type="text" placeholder="Name" required>
          <label for="popup-email" class="visually-hidden">Email</label>
          <input id="popup-email" name="email" type="email" placeholder="Email" required>
          <button type="submit" class="btn">Get Discount</button>
        </form>
      </div>`;
    document.body.appendChild(overlay);

    const closeButton = overlay.querySelector('.popup-close');
    const form = overlay.querySelector('.popup-form');

    closeButton.addEventListener('click', hidePopup);
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) {
        hidePopup();
      }
    });
    form.addEventListener('submit', hidePopup);

    return overlay;
  }

  popupOverlay = createPopup();

  setTimeout(function () {
    showPopup();
    setInterval(showPopup, popupInterval);
  }, popupInterval);
});
