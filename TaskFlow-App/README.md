# TaskFlow-App

## Overview

TaskFlow is a beautiful and customizable to-do/task tracker application that supports light and dark modes, real-time filtering, and data persistence. The app allows users to manage their tasks efficiently while providing a visually appealing interface.

## Features

- Reusable Components: Includes Button, Card, Navbar, and Footer components for a consistent UI.
- Task Management: Users can add, complete, delete, and filter tasks.
- Data Persistence: Tasks are saved using local storage for easy access.
- Light/Dark Mode: Tailwind CSS is used to implement light and dark themes.
- API Integration: Fetches random motivational quotes/tasks from a public API.

## Technologies Used

- React.js
- Vite
- Tailwind CSS
- React Router
- Custom Hooks
- Context API

## Project Structure

`
taskflow-App
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
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
`

## Setup Instructions

1. Clone the Repository:
   `bash
   git clone <repository-url>
   cd taskflow-advanced-task-manager
   `

2. Install Dependencies:
   Make sure you have Node.js installed (v18 or higher recommended).
   `bash
   npm install
   `

3. Start the Development Server:
   `bash
   npm run dev
   `

4. Open in Browser:
   Navigate to `http://localhost:3000` to view the application.

## Usage

- Use the Navbar to navigate between different pages.
- On the Tasks page, you can add new tasks, mark them as completed, delete them, and filter the task list.
- Switch between light and dark modes using the theme switcher.

## Deployment

Deploy your application to platforms like Vercel, Netlify, or GitHub Pages for public access.

## Screenshots

(Include screenshots of your application here)

## License

This project is licensed under the MIT License.
