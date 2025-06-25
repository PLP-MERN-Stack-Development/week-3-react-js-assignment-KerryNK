# TaskFlow - Advanced Task Manager App

## Overview
TaskFlow is a beautiful, customizable to-do/task tracker application that features light/dark mode, real-time filtering, and data persistence. This application allows users to manage their tasks efficiently while providing a visually appealing interface.

## Features
- **Reusable Components**: Includes Button, Card, Navbar, and Footer components for a consistent UI.
- **Task Management**: Users can add, complete, delete, and filter tasks.
- **Data Persistence**: Tasks are saved using local storage for data persistence.
- **Light/Dark Mode**: Tailwind CSS is used to implement light and dark themes.
- **API Integration**: Fetches random motivational quotes/tasks from a public API.

## Technologies Used
- React.js
- Vite
- Tailwind CSS
- React Router
- Custom Hooks
- Context API

## Project Setup

### Prerequisites
- Node.js (v18 or higher recommended)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd TaskFlow-App
   ```
3. Install the required dependencies:
   ```
   npm install
   ```

### Running the Application
To start the development server, run:
```
npm run dev
```
Open your browser and navigate to `http://localhost:3000` to view the application.

## Project Structure
```
TaskFlow-App
├── public
│   └── index.html
├── src
│   ├── components
│   ├── hooks
│   ├── pages
│   ├── context
│   ├── utils
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── README.md
└── vite.config.js
```

## Deployment
This application can be deployed on platforms like Vercel, Netlify, or GitHub Pages. Follow the respective platform's documentation for deployment instructions.

## Screenshots
(Include screenshots of your application here)

## License
This project is licensed under the MIT License - see the LICENSE file for details.