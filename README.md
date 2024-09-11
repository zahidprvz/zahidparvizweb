# Zahid Parviz Portfolio Website

This is the source code for my **personal portfolio website**, designed to showcase my skills, projects, and provide an easy way for visitors to contact me. The website is built using modern technologies such as React, Vite, Tailwind CSS, Firebase, EmailJS, and various animation libraries to deliver a smooth, responsive, and visually appealing user experience.

The project also includes an **admin panel** for personal management, which is only accessible to me. The backend website is built with the same tech stack to ensure seamless integration with the frontend.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Firebase Setup](#firebase-setup)
- [EmailJS Setup](#emailjs-setup)
- [Admin Panel](#admin-panel)
- [Contact](#contact)
- [License](#license)

---

## Features

- **Responsive Design**: The website is fully responsive, providing a seamless experience across devices.
- **Projects Page**: A dedicated section to showcase my projects, including descriptions, live links, and repositories.
- **Contact Form**: Users can easily contact me through a form that integrates EmailJS to handle the message sending functionality.
- **Animations**: Enhanced user experience with smooth animations and transitions across various components.
- **Firebase Integration**: Firebase is used for hosting and data management.
- **Admin Panel**: A private backend panel to manage content, built with the same tech stack.

---

## Tech Stack

- **Frontend**:
  - React (with Vite)
  - Tailwind CSS
  - Firebase (Hosting & Authentication)
  - EmailJS (for Contact Form)
  - Framer Motion & React Icons (Animations and Icons)

- **Backend/Admin Panel**:
  - React (with Vite)
  - Tailwind CSS
  - Firebase (Authentication)
  - Custom logic for admin functionality

---

## Installation

To run this project locally, follow these steps:

### Prerequisites

Ensure you have the following installed:

- **Node.js**: [Download and install Node.js](https://nodejs.org/)
- **Git**: [Download and install Git](https://git-scm.com/)
- **Firebase CLI**: Install Firebase CLI using:
  ```bash
  npm install -g firebase-tools
  ```

### Clone the Repository

```bash
git clone https://github.com/zahidprvz/zahidparvizweb.git
```

### Install Dependencies

Navigate into the project directory and install all dependencies:

```bash
cd zahidparvizweb
npm install
```

### Environment Variables

Create a `.env` file in the root of the project and add the following environment variables for Firebase and EmailJS integration:

```bash
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_USER_ID=your_emailjs_user_id
```

Replace the placeholders (`your_firebase_api_key`, etc.) with your actual Firebase and EmailJS credentials.

---

## Usage

Once everything is set up, you can run the development server locally with:

```bash
npm run dev
```

This will start the application on `http://localhost:3000`.

To build the project for production:

```bash
npm run build
```

To deploy to Firebase:

```bash
firebase deploy
```

---

## Project Structure

Here’s an overview of the project structure:

```bash
├── public/                 # Public assets like favicon, images
├── src/
│   ├── components/         # Reusable components (Header, Footer, etc.)
│   ├── pages/              # Pages like Home, Projects, Contact
│   ├── assets/             # Static assets like images
│   ├── App.jsx             # Main App component
│   ├── main.jsx            # React and Vite setup
│   └── index.css           # Tailwind CSS config
├── firebase.json           # Firebase hosting config
├── .env                    # Environment variables
├── package.json            # Project dependencies and scripts
└── vite.config.js          # Vite configuration
```

---

## Firebase Setup

To use Firebase in your project, follow these steps:

1. Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
2. Add a web app to your Firebase project and configure it with your Firebase credentials.
3. Enable Firebase Authentication for email/password (if needed).
4. Install the Firebase SDK:
   ```bash
   npm install firebase
   ```
5. Use the `.env` file to store your Firebase credentials as shown above.

---

## EmailJS Setup

To enable the contact form to send emails using EmailJS:

1. Sign up on [EmailJS](https://www.emailjs.com/).
2. Create a new service and template in the EmailJS dashboard.
3. Add the service ID, template ID, and user ID to your `.env` file.
4. The form data will be sent through EmailJS when users submit the contact form.

---

## Admin Panel

The admin panel is designed for managing the portfolio content, which includes adding new projects and handling contact form submissions. It is only accessible to me, and the authentication is handled through Firebase.

For security reasons, the admin panel is restricted to authorized users only.

---

## Contact

For any queries or feedback, feel free to reach out to me:

- **Email**: [pervaizzahid55@gmail.com](mailto:pervaizzahid55@gmail.com)
- **GitHub**: [zahidprvz](https://github.com/zahidprvz)
- **LinkedIn**: [Zahid Parviz](https://www.linkedin.com/in/zahidprvz)

---

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute this project as long as the original author is credited.

---

## Acknowledgements

Special thanks to all the open-source libraries and tools used in this project, including:

- React
- Vite
- Tailwind CSS
- Firebase
- EmailJS
- Framer Motion

---
