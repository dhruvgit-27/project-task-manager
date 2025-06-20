<p align="center">
  <img src="https://img.icons8.com/ios-filled/100/task.png" width="80" />
</p>

<h1 align="center">Task Manager App</h1>

<p align="center">
  🚀 A clean and modern task management app built with React + TypeScript + Tailwind CSS
</p>

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
- 📧 Advanced contact form with Email & WhatsApp integration
- 🔐 Secure localStorage usage (no exposed keys)
- 🚫 No external database needed (Bolt AI only)

---

## 🛠️ Quick Start

### 1. Clone & Install

```bash
git clone https://github.com/your-dhruvgit-27/project-task-manager-app.git
cd project-task-manager
npm install

2. 🔐 Configure Environment Variables
Create a .env file in the root directory and add the following:

env
Copy
Edit
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key 

3. 📧 EmailJS Setup
Go to EmailJS.com

Create an account and connect an email service (like Gmail)

Create an email template with the following fields:

{{from_name}}, {{from_email}}, {{subject}}, {{message}}

Copy your Service ID, Template ID, and Public Key

Paste them into your .env file 

4. ▶️ Run the App
npm run dev

---

## Or Simply Click the Link : https://project-task-manager-five.vercel.app/

---

## 💌 Contact Form Features:

✅ Validates name, email, subject, and message fields

📧 Sends formatted email directly to admin via EmailJS

🎯 Success toast: “Your message has been sent successfully”

⏳ Submission loader + disabled state

❌ Error toast on failure

🔁 Clears form after successful submission

---

## 🧰 Tech Stack:


| Tech         | Description              |
| ------------ | ------------------------ |
| React        | Frontend library         |
| TypeScript   | Strongly typed JS        |
| Vite         | Build tool for fast dev  |
| TailwindCSS  | Utility-first styling    |
| React Router | Page routing             |
| Lucide React | Icon library             |
| EmailJS      | Contact form integration |

---

## 🗂️ Project Structure:

src/
├── components/      # Reusable UI components
├── contexts/        # Global state/context
├── hooks/           # Custom React hooks
├── services/        # EmailJS API handler
├── types/           # TypeScript types
├── utils/           # Utility functions
└── main.tsx         # App entry point

---

## 📞 Contact:

📧 Email: contacttaskmanagerhere@gmail.com

📱 Phone: +91 6395227506

---

## 📎 Footer Links:

Terms of Service

Privacy Policy

Contact Us

---

## 📄 License:

© 2025 Task Manager App. All rights reserved.
Licensed under the MIT License.

<p align="center"> Built using <strong>Bolt AI</strong> ⚡ — Fast. Serverless. Beautiful. </p> ```




