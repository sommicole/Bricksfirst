# Bricks First Publishing Website

This repository hosts the static files for the **Bricks First Publishing** website.
It is a small HTML/CSS project used to showcase upcoming releases and basic information
about the publisher. The latest version includes a more visually engaging layout,
SEO improvements, and clear calls to action for upcoming books.

## Previewing the Site

The site can be viewed locally by simply opening `index.html` in your browser.
For a hosted preview, the repository is configured to work with **GitHub Pages**:

1. Push the contents of the `main` branch to GitHub.
2. In your repository settings, enable GitHub Pages and select the `main` branch as
   the source.
3. GitHub will provide a URL where the site is automatically deployed after each push.

## Updating Content

All of the website files live at the repository root:

- `index.html` – landing page with release information
- `shop.html` – simple shop/coming-soon page
- `images/` – folder containing images such as book covers
- `style.css` – styling for all pages

Make your edits directly in these files and commit the changes. Once pushed to
GitHub, the updated site will be redeployed by GitHub Pages.

Feel free to modify the HTML and CSS as needed to add new releases or update
copy.

## Custom 404 Page

The site includes a simple `404.html` so visitors are redirected to a friendly error page if they hit an unknown URL. If GitHub Pages is already enabled for the `main` branch, this page will automatically be served on 404 errors.

