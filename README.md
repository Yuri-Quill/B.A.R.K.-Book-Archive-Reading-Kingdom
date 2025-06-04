# BARK — Book Archive Reading Kingdom

<div align="center">
  <img src="src/assets/logo/logo-large.png" alt="BARK Logo" width="300"/>
  
  ### *Sit. Stay. Read.*
</div>

BARK is your digital reading kingdom — a clean, modern bookstore where you can explore, search, and collect stories across genres. Built with React + TypeScript, BARK combines a beautiful UI with powerful features like filtering, favorites, carts, user profiles, and a responsive design ready for all screen sizes. Whether you're hunting for your next fantasy epic or a cozy weekend read, BARK makes discovery a breeze.

## 🚀 Features

- 📚 Extensive book catalog with detailed information
- 🔍 Advanced search and filtering system
- ❤️ Favorites and reading lists
- 🛒 Shopping cart functionality
- 👤 User profiles and authentication
- 📱 Responsive design for all devices
- 🌙 Dark/Light theme support
- 🌐 Modern, intuitive interface

## 🛠️ Tech Stack

- **Frontend Framework:** React 19
- **Language:** TypeScript
- **Build Tool:** Vite
- **State Management:** Redux Toolkit
- **Routing:** React Router v7
- **Styling:** SCSS with PostCSS
- **Form Handling:** Formik + Yup
- **HTTP Client:** Axios
- **UI Components:** Custom components with Lucide icons
- **Notifications:** React Toastify

## 📦 Project Structure

```
src/
├── api/          # API integration and services
├── assets/       # Images, fonts, and other static files
├── Components/   # Reusable UI components
├── hooks/        # Custom React hooks
├── Layout/       # Layout components
├── pages/        # Page components
├── shared/       # Shared utilities and types
├── store/        # Redux store configuration
├── styles/       # Global styles and SCSS modules
└── utils/        # Utility functions
```

## 🚀 Getting Started

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/BARK-Book-Archive-Reading-Kingdom.git
cd BARK-Book-Archive-Reading-Kingdom
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

4. **Build for production**
```bash
npm run build
```

## 🔧 Environment Variables

Create a `.env` file in the root directory with the following variables:
```env
VITE_API_URL=your_api_url
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

- **Author:** [Your Name]
- **GitHub:** [@yourusername]
- **Website:** [your-website.com]

---

<div align="center">
  Made with ❤️ by [Your Name]<br>
  Don't forget to ⭐ this repository if you found it helpful!
</div>

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
