# B.A.R.K.-Book-Archive-Reading-Kingdom Project Structure

```
📦 Root
├── 📄 .gitignore
├── 📄 eslint.config.js
├── 📄 index.html
├── 📄 LICENSE
├── 📄 package-lock.json
├── 📄 package.json
├── 📄 postcss.config.js
├── 📄 README.md
├── 📄 tsconfig.app.json
├── 📄 tsconfig.json
├── 📄 tsconfig.node.json
├── 📄 vite.config.ts
├── 📂 public
│   ├── 📄 fav-dark.ico
│   └── 📄 fav-light.ico
└── 📂 src
    ├── 📄 index.scss
    ├── 📄 main.tsx
    ├── 📄 vite-env.d.ts
    ├── 📂 app
    │   ├── 📄 http.ts
    │   ├── 📄 router.tsx
    │   └── 📂 store
    │       ├── 📄 hooks.ts
    │       └── 📄 store.ts
    ├── 📂 assets
    │   ├── 📂 fonts
    │   │   └── 📂 work-sans
    │   │       └── 📄 font-work-sans.scss
    │   ├── 📂 images
    │   │   └── 📂 error
    │   │       └── 📄 error-bg.webp
    │   ├── 📂 logo
    │   │   ├── 📄 favicon.ico
    │   │   ├── 📄 logo-dark-theme.webp
    │   │   ├── 📄 logo-large.png
    │   │   └── 📄 logo-light-theme.webp
    │   └── 📂 styles
    │       ├── 📄 _mixins.scss
    │       ├── 📄 _variables.scss
    │       └── 📄 reset.scss
    ├── 📂 features
    │   ├── 📂 auth
    │   │   ├── 📄 auth.api.ts
    │   │   ├── 📄 auth.slice.ts
    │   │   ├── 📄 auth.types.ts
    │   │   ├── 📄 auth.validation.ts
    │   │   ├── 📂 components
    │   │   │   ├── 📂 LoginForm
    │   │   │   │   ├── 📄 login-form.scss
    │   │   │   │   └── 📄 LoginForm.tsx
    │   │   │   └── 📂 RegisterForm
    │   │   │       ├── 📄 register-form.scss
    │   │   │       └── 📄 RegisterForm.tsx
    │   │   └── 📂 pages
    │   │       ├── 📂 LoginPage
    │   │       │   ├── 📄 login-page.scss
    │   │       │   └── 📄 LoginPage.tsx
    │   │       └── 📂 RegisterPage
    │   │           ├── 📄 register-page.scss
    │   │           └── 📄 RegisterPage.tsx
    │   ├── 📂 common-pages
    │   │   ├── 📂 error-page
    │   │   └── 📂 test
    │   ├── 📂 footer
    │   │   ├── 📄 footer.types.ts
    │   │   ├── 📂 components
    │   │   │   ├── 📄 footer.scss
    │   │   │   └── 📄 Footer.tsx
    │   │   └── 📂 data
    │   ├── 📂 header
    │   │   ├── 📄 header.types.ts
    │   │   ├── 📂 components
    │   │   │   ├── 📄 header.scss
    │   │   │   ├── 📄 Header.tsx
    │   │   │   ├── 📂 HeaderActions
    │   │   │   └── 📂 HeaderNav
    │   │   └── 📂 data
    │   ├── 📂 home
    │   │   ├── 📄 home.api.ts
    │   │   ├── 📄 home.slice.ts
    │   │   ├── 📂 components
    │   │   └── 📂 pages
    │   └── 📂 layouts
    │       └── 📂 components
    └── 📂 shared
        ├── 📂 components
        │   ├── 📂 Button
        │   │   ├── 📄 button.scss
        │   │   └── 📄 Button.tsx
        │   ├── 📂 ButtonLink
        │   │   ├── 📄 button-link.scss
        │   │   └── 📄 ButtonLink.tsx
        │   ├── 📂 ContentWrapper
        │   │   ├── 📄 content-wrapper.scss
        │   │   └── 📄 ContentWrapper.tsx
        │   ├── 📂 Input
        │   ├── 📂 Loader
        │   │   ├── 📄 loader.scss
        │   │   └── 📄 Loader.tsx
        │   └── 📂 Logo
        │       ├── 📄 logo.scss
        │       └── 📄 Logo.tsx
        ├── 📂 constants
        │   └── 📄 theme.ts
        ├── 📂 context
        │   └── 📂 ThemeContext
        ├── 📂 hooks
        ├── 📂 types
        │   └── 📄 error.ts
        └── 📂 utils
            └── 📄 clsify.ts
```

## Project Structure Overview

### Root Directory

Contains configuration files for the development environment:

-  TypeScript configurations
-  ESLint configuration
-  Vite configuration
-  Package management
-  Project documentation
-  Git configuration

### Public Directory

Contains public assets:

-  Favicon icons for light and dark themes

### Source Directory (`src`)

Main application code organized into several key directories:

#### `app/`

Core application setup:

-  HTTP client configuration
-  Router setup
-  Redux store configuration

#### `assets/`

Static resources:

-  Fonts (Work Sans font family with SCSS configuration)
-  Images for error states and UI
-  Logo files for light/dark themes
-  Global SCSS styles with mixins and variables

#### `features/`

Feature-based modules:

-  Auth (API integration, Redux slice, validation, components)
-  Common pages (error handling, testing)
-  Footer (types, components, data)
-  Header (types, components, data)
-  Home (API integration, Redux slice, components)
-  Layouts (shared layout components)

Each feature is organized into its own directory with dedicated:

-  API integration
-  State management (Redux slices)
-  Type definitions
-  UI components
-  Pages (when applicable)

#### `shared/`

Reusable components and utilities:

-  UI Components:
   -  Button
   -  ButtonLink
   -  ContentWrapper
   -  Input
   -  Loader
   -  Logo
-  Constants (theme configuration)
-  Context (Theme context management)
-  Custom hooks
-  Shared types
-  Utility functions
