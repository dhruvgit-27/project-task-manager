<p align="center">
  <img src="https://img.icons8.com/ios-filled/100/task.png" width="80" />
</p>

<h1 align="center">Task Manager App</h1>

<p align="center">🚀 A clean and modern task management app built with React + TypeScript + Tailwind CSS</p>

<p align="center">
  <img alt="React" src="https://img.shields.io/badge/React-18-blue?logo=react" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-Strict-blue?logo=typescript" />
  <img alt="TailwindCSS" src="https://img.shields.io/badge/Tailwind-CSS-blue?logo=tailwindcss" />
  <img alt="Responsive" src="https://img.shields.io/badge/Responsive-Mobile%20First-brightgreen?logo=android" />
  <img alt="License" src="https://img.shields.io/badge/License-MIT-green.svg" />
</p>

---

## ✨ Features

- ✅ Persistent login session (auto redirect to dashboard)
- 📝 Task creation, editing, deletion
- 🏷️ Categorize tasks (Work, Personal, etc.)
- ⚡ Priority & status tracking (To-Do, In Progress, Done)
- 🌙 Dark / Light theme toggle
- 📱 Fully responsive design (Desktop + Mobile)
- 📧 Advanced contact form with EmailJS
- 🔐 Secure localStorage usage (no exposed credentials)
- 🚫 No external database needed (Bolt AI only)

---

## 🚀 Quick Start to Live Link

### 🔹 Clone & Install

```bash
git clone https://github.com/dhruvgit-27/project-task-manager-app.git
cd project-task-manager-app
npm install
```

### 🔹 Configure Environment Variables

Create a `.env` file in the root directory and add:

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### 🔹 EmailJS Setup

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Create an account and connect an email service (Gmail, Outlook, etc.)
3. Set up a template with these variables:
   - `{{from_name}}, {{from_email}}, {{subject}}, {{message}}`
4. Copy your Service ID, Template ID, and Public Key
5. Paste them into your `.env` file

### 🔹 Run the App

```bash
npm run dev
```

### 🔹 Live Demo

🌐 [**Click to Open the App**](https://project-task-manager-five.vercel.app/)

---

## 💌 Contact Form Highlights

- ✅ Validates name, email, subject, and message fields
- 📧 Sends formatted email to admin via EmailJS
- 🎯 Success toast: “Your message has been sent successfully”
- ⏳ Loading indicator while submitting
- 🔁 Form clears after submission
- ❌ Error toast on failure

---

## 🧰 Tech Stack

| Tech         | Description              |
|--------------|--------------------------|
| React        | Frontend library         |
| TypeScript   | Strongly typed JS        |
| Vite         | Fast development tooling |
| Tailwind CSS | Utility-first styling    |
| React Router | Page routing             |
| Lucide React | Icon set                 |
| EmailJS      | Email integration        |

---

## 📁 Folder Structure

```
src/
├── components/      # Reusable UI components
├── contexts/        # Global app state
├── hooks/           # Custom React hooks
├── services/        # EmailJS handler
├── types/           # TypeScript interfaces
├── utils/           # Helper functions
└── main.tsx         # Entry point
```

---

## 📞 Contact Information

- 📧 Email: [contacttaskmanagerhere@gmail.com](mailto:contacttaskmanagerhere@gmail.com)
- 📱 Phone: [+91 6395227506](tel:+916395227506)

---

## 📎 Footer Links

- 📄 [Terms of Service](#)
- 🔐 [Privacy Policy](#)
- 📬 [Contact Us](mailto:contacttaskmanagerhere@gmail.com)

---

## 📄 License

© 2025 **Task Manager App**. All rights reserved.  
Licensed under the **MIT License**.

---

<p align="center"><strong>Built using ⚡ Bolt AI</strong></p>
