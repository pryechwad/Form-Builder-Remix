# 🧩 Form Builder – SDE Intern Frontend Assignment

A drag-and-drop form builder that allows users to visually create, configure, preview, and share custom forms in real time. Built using **React Remix** and **Tailwind CSS**, this project focuses on intuitive UX, real-time feedback, and extendability with local storage and shareable links.

---

## 🚀 Features

### ✅ Core Functionality
- **Drag & Drop Fields**: Easily add and arrange fields like Text, Textarea, Dropdown, Checkbox, Date.
- **Field Reordering**: Use drag actions to rearrange fields dynamically.
- **Field Configuration**: Customize label, placeholder, required status, help text, and options.
- **Live Preview**: Real-time form preview with validation (required, min/max length, pattern match).
- **Responsive Preview Modes**: Toggle between Desktop, Tablet, and Mobile views.
- **Multi-Step Forms**: Add step-by-step navigation with progress indicator and per-step validation.
- **Template Support**:
  - Load predefined templates (e.g., Contact Us).
  - Save templates to local storage or API (extendable).
- **Shareable Forms**:
  - Generate a public URL (form ID based).
  - Load & fill a form using the shared ID.

---

### ✨ Bonus Tasks Implemented
- **📝 Auto-Save**: Real-time form state saving to `localStorage` with debounce.
- **📬 View Submissions**: Form creators can view all responses submitted to their forms.
- **🌗 Dark/Light Theme**: Toggle between light and dark modes for better accessibility.
- **↩️ Undo/Redo**: Supports step-wise undo/redo while building the form (with history stack).

---

## 🧪 Tech Stack

- **Frontend Framework**: [React Remix](https://remix.run/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand) / Redux / Context API (pluggable)
- **Drag & Drop**: `@dnd-kit` for highly accessible drag-and-drop functionality
- **Form Validation**: Custom + HTML5 + optional integration-ready for libraries like `react-hook-form`
- **Persistence**: `localStorage`, extendable to API or Firebase backend

---


## 🧠 Project Architecture
src/
│
├── components/ # Reusable UI elements
├── features/ # Form builder logic (field types, validations, etc.)
├── pages/ # Remix routes
├── hooks/ # Custom hooks (e.g., useUndoRedo, useFormPersist)
├── store/ # Zustand store config
├── utils/ # Utility functions
└── styles/ # Tailwind & theme configs


---

## 🛠️ Setup & Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/your-username/form-builder-remix.git

# 2. Navigate to the project
cd form-builder-remix

# 3. Install dependencies
npm install

# 4. Run the development server
npm run dev
🔗 Live Demo: https://form-builder-remix-main.vercel.app/
🌐 


📽️ Video Walkthrough
🎥 Watch the full demo



🧪 Future Improvements
🔐 Backend sync with Firebase or Supabase

📤 Export forms as JSON or embed code

👨‍👩‍👧‍👦 Team collaboration (multi-user editing)

🧩 Plugin system for custom field types
👨‍💻 Author
Made with ❤️ by Prathmesh
🔗 Portfolio • LinkedIn
