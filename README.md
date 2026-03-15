# Personal Portfolio

A framework-free, static portfolio website built with vanilla HTML, CSS, and JavaScript.

## Features

- **Zero Runtime Dependencies**: No JavaScript framework required
- **Multi-language Support**: English and Spanish with instant switching
- **Dark/Light Mode**: Theme persistence with localStorage
- **Glassmorphism Design**: Modern UI with blur effects and transparency
- **Fully Responsive**: Works on all devices
- **SEO Optimized**: Semantic HTML5 markup
- **Fast Loading**: Minimal bundle size

## Tech Stack

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, flexbox, grid, animations
- **Vanilla JavaScript**: ES6+ modules, classes, localStorage
- **Google Fonts**: Space Grotesk typography
- **Material Symbols**: Icon system

## Development

### Prerequisites

- Node.js (for dev server only)
- Any modern web browser

### Setup

```bash
# Install dev dependencies (optional)
npm install

# Start development server
npm run dev

# Or simply open index.html in your browser
```

### Project Structure

```
├── index.html          # Main HTML file
├── styles/
│   └── main.css        # Complete stylesheet
├── js/
│   └── main.js         # JavaScript functionality
├── public/             # Static assets
└── package.json        # Dev dependencies only
```

## Features Implementation

### Language Switching

- Translations stored in JavaScript objects
- No page reload required
- Preference saved in localStorage
- Dynamic content rendering

### Theme Toggle

- CSS custom properties for theming
- System preference detection
- Smooth transitions
- Icon updates based on current theme

### Performance

- No build step required
- Minimal HTTP requests
- Optimized CSS with custom properties
- Efficient DOM manipulation

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## License

MIT
