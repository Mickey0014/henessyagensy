# Henessy Website

A static one-page marketing website for Henessy, a meme-first digital marketing and internet culture agency. The site presents the brand's positioning, services, proof points, about section, and contact details using responsive layouts and Lottie animations.

## Features

- Single-page website with smooth section navigation
- Responsive header with mobile hamburger menu
- Hero section with brand messaging and animated visual
- Services section with interactive service cards
- Service detail panels for:
  - Meme Marketing
  - Influencer Marketing
  - Video & Graphics Studio
  - Digital PR & Reputation
- X-Factor section with campaign proof points
- About section with agency positioning
- Contact section with Google Form CTA, email, and phone numbers
- Lottie animations for visual storytelling

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- LottieFiles web player

No build tool or package manager is required.

## Project Structure

```text
henesy-website/
|-- assets/
|   |-- logo/
|   |   |-- logo.svg
|   |   `-- logo2.svg
|   `-- lottie/
|       |-- ani.json
|       |-- hero.json
|       |-- influencer.json
|       |-- line.json
|       |-- meme.json
|       |-- meter.json
|       |-- paidpr.json
|       `-- videog.json
|-- css/
|   |-- about.css
|   |-- contact.css
|   |-- global.css
|   |-- header.css
|   |-- home.css
|   |-- services.css
|   `-- xfactor.css
|-- js/
|   |-- home.js
|   |-- main.js
|   `-- services.js
|-- index.html
`-- README.md
```

## Getting Started

Because this is a static website, you can run it by opening `index.html` directly in a browser.

For a local server, you can use any static server. For example, with Python:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Main Files

- `index.html` contains the complete page markup and section content.
- `css/global.css` defines shared site-wide styles.
- `css/header.css` styles the navigation and mobile menu.
- `css/home.css`, `services.css`, `xfactor.css`, `about.css`, and `contact.css` style individual sections.
- `js/main.js` controls the hamburger menu and smooth navigation.
- `js/services.js` controls service card selection and detail switching.
- `assets/lottie/` contains animation JSON files used by the Lottie player.

## External Dependencies

The site loads the Lottie web player from:

```html
https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js
```

An internet connection is required for the Lottie player script unless it is downloaded and served locally.

## Customization

To update the website content, edit the relevant sections in `index.html`.

Common updates:

- Change CTA form links in the hero and contact sections.
- Update contact email and phone numbers in the contact section.
- Replace logos in `assets/logo/`.
- Replace or add Lottie animations in `assets/lottie/`.
- Adjust section styling in the matching CSS file inside `css/`.

## Deployment

This project can be deployed on any static hosting platform, including:

- Netlify
- Vercel
- GitHub Pages
- Cloudflare Pages
- Any standard web hosting server

Deploy the project root as a static site with `index.html` as the entry file.

## License

No license file is currently included. Add a license before distributing or reusing the project publicly.
