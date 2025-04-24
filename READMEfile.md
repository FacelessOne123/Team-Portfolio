# Team-Portfolio

A modern, responsive portfolio website built with React.js. This project showcases a professional portfolio with various sections including introduction, skills, projects, and contact information.

## Project Structure

```
portfolio/
├── public/                 # Static files
├── src/                    # Source files
│   ├── assets/            # Images and other static assets
│   │   ├── Intro/        # Introduction section
│   │   ├── Members/      # Team members section
│   │   └── ...           # Other components
│   ├── App.js            # Main application component
│   └── index.js          # Application entry point
├── package.json           # Project dependencies and scripts
└── README.md             # Project documentation
```

## Technologies Used

- React.js (v19.1.0)
- React DOM (v19.1.0)
- React Scroll (v1.9.3)
- EmailJS (v4.4.1)
- CSS3 for styling

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will run on `http://localhost:3000`

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from Create React App

## Features

- Responsive design
- Smooth scrolling navigation
- Contact form with EmailJS integration
- Team member profiles
- Skills showcase
- Project portfolio

## Development

The project follows a component-based architecture using React. Each section of the portfolio is implemented as a separate component in the `src/components` directory. Styling is done using CSS modules for component-specific styles.

## Deployment

To build the project for production:

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
