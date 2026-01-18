# Personal Portfolio Website

[![Link to Live Site](https://img.shields.io/badge/Live-Demo-blueviolet?style=for-the-badge&logo=googlechrome&logoColor=white)](https://tomasdvorak.eu/)

A modern, responsive personal portfolio built with **React** and **TypeScript**. This project serves as a professional landing page to showcase my software development projects, technical skills, and experience.

## 🛠 Tech Stack

* **Framework:** [React](https://reactjs.org/) (Functional Components & Hooks)
* **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict Mode enabled)
* **Bundler:** [Vite](https://vitejs.dev/) (for fast HMR and optimized builds)
* **Styling:** CSS3 (Custom Modules / Responsive Design)
* **Deployment:** GitHub Pages / Actions

## 🚀 Key Technical Features

* **Type Safety:** Heavy use of TypeScript interfaces and types to ensure data integrity across components.
* **Modular Architecture:** Components are separated by concern (UI, Layout, Features) for high maintainability.
* **Performance:** Optimized asset loading and minimal bundle size via Vite.
* **Contact System:** Integrated form validation and state management for user inquiries.
* **Responsive UI:** Mobile-first approach ensuring a seamless experience across all device sizes.

## 📂 Project Structure

```text
src/
├── assets/             # Static assets (images, icons)
├── components/         # Reusable UI components
│   ├── Contact/
│   ├── Projects/
│   └── Shared/
├── data/               # Centralized project & skill data
├── styles/             # Global and component-specific styles
└── App.tsx