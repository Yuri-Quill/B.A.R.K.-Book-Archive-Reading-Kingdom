# B.A.R.K — Book Archive Reading Kingdom

<div align="center">
  <img src="src/assets/logo/logo-large.png" alt="BARK Logo" width="300"/>

### _Sit. Stay. Read._

</div>

BARK is your digital reading kingdom — a clean, modern bookstore where you can explore, search, and collect stories across genres. Built with React + TypeScript, BARK combines a beautiful UI with powerful features like filtering, favorites, carts, user profiles, and a responsive design ready for all screen sizes. Whether you're hunting for your next fantasy epic or a cozy weekend read, BARK makes discovery a breeze.

## 🚀 Features

-  📚 Extensive book catalog with detailed information
-  🔍 Advanced search and filtering system
-  ❤️ Favorites and reading lists
-  🛒 Shopping cart functionality
-  👤 User profiles and authentication
-  📱 Responsive design for all devices
-  🌙 Dark/Light theme support
-  🌐 Modern, intuitive interface

## 🛠️ Tech Stack

-  **Frontend Framework:** React 19
-  **Language:** TypeScript
-  **Build Tool:** Vite
-  **State Management:** Redux Toolkit
-  **Routing:** React Router v7
-  **Styling:** SCSS with PostCSS
-  **Form Handling:** Formik + Yup
-  **HTTP Client:** Axios
-  **UI Components:** Custom components with Lucide icons
-  **Notifications:** React Toastify

## 📦 Project Structure

```
📦 Root
├── 📂 public                      # Public static assets directory
└── 📂 src                         # Source code directory
    ├── 📂 app                     # Core application setup
    │   └── 📂 store              # Redux store configuration
    ├── 📂 assets                 # Static assets
    │   ├── 📂 fonts             # Application fonts
    │   │   └── 📂 work-sans     # Work Sans font family
    │   ├── 📂 images            # Application images
    │   │   └── 📂 error         # Error page images
    │   ├── 📂 logo              # Application logos
    │   └── 📂 styles            # Global styles
    ├── 📂 features              # Feature modules
    │   ├── 📂 auth             # Authentication feature
    │   │   ├── 📂 components   # Auth components
    │   │   │   ├── 📂 LoginForm     # Login form component
    │   │   │   └── 📂 RegisterForm  # Registration form component
    │   │   └── 📂 pages        # Auth pages
    │   │       ├── 📂 LoginPage     # Login page
    │   │       └── 📂 RegisterPage  # Registration page
    │   ├── 📂 common-pages     # Common pages
    │   │   ├── 📂 error-page   # Error handling pages
    │   │   └── 📂 test         # Test pages
    │   ├── 📂 footer          # Footer module
    │   │   ├── 📂 components  # Footer components
    │   │   └── 📂 data        # Footer data
    │   ├── 📂 header          # Header module
    │   │   ├── 📂 components  # Header components
    │   │   │   ├── 📂 HeaderActions  # Header actions components
    │   │   │   └── 📂 HeaderNav      # Navigation components
    │   │   └── 📂 data        # Header data
    │   ├── 📂 home           # Home page module
    │   │   ├── 📂 components # Home components
    │   │   └── 📂 pages      # Home pages
    │   └── 📂 layouts        # Layout templates
    │       └── 📂 components # Layout components
    └── 📂 shared             # Shared resources
        ├── 📂 components     # Reusable components
        │   ├── 📂 Button          # Button component
        │   ├── 📂 ButtonLink      # Button link component
        │   ├── 📂 ContentWrapper  # Content wrapper component
        │   ├── 📂 Input          # Input component
        │   ├── 📂 Loader         # Loading indicator component
        │   └── 📂 Logo           # Logo component
        ├── 📂 constants     # Application constants
        ├── 📂 context       # React contexts
        │   └── 📂 ThemeContext  # Theme context
        ├── 📂 hooks         # Custom hooks
        ├── 📂 types        # Common types
        └── 📂 utils        # Utility functions
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

-  **Author:** [Chehorynsky Yuri aka Yuri Quill]
-  **GitHub:** [Yuri-Quill](https://github.com/Yuri-Quill)
-  **Website:** [Yuri Quill](https://www.linkedin.com/in/yuri-quill-ab125635a/)

---

<div align="center">
  Made with ❤️ by [Yuri Quill]<br>
  Don't forget to ⭐ this repository if you found it helpful!
</div>
