# B.A.R.K.-Book-Archive-Reading-Kingdom Project Structure

```
📦 Root
├── 📄 eslint.config.js
├── 📄 index.html
├── 📄 LICENSE
├── 📄 package.json
├── 📄 postcss.config.js
├── 📄 README.md
├── 📄 tsconfig.app.json
├── 📄 tsconfig.json
├── 📄 tsconfig.node.json
├── 📄 vite.config.ts
├── 📂 public
└── 📂 src
    ├── 📄 index.scss
    ├── 📄 main.tsx
    ├── 📄 vite-env.d.ts
    ├── 📂 app
    │   ├── 📄 axios-instance.ts
    │   ├── 📄 router.tsx
    │   ├── 📂 store
    │   │   ├── 📄 hooks.ts
    │   │   └── 📄 store.ts
    │   └── 📂 types
    │       ├── 📄 api.ts
    │       └── 📄 common.ts
    ├── 📂 assets
    │   ├── 📂 fonts
    │   │   └── 📂 work-sans
    │   │       ├── 📄 font-work-sans.scss
    │   │       └── 📄 [Work Sans font files (.woff/.woff2)]
    │   ├── 📂 images
    │   │   └── 📂 error
    │   │       └── 📄 error-bg.webp
    │   ├── 📂 logo
    │   │   ├── 📄 favicon.ico
    │   │   ├── 📄 logo-large.png
    │   │   ├── 📄 logo-medium.png
    │   │   └── 📄 logo-small.png
    │   └── 📂 styles
    │       ├── 📄 _mixins.scss
    │       ├── 📄 _variables.scss
    │       └── 📄 reset.scss
    ├── 📂 features
    │   ├── 📂 footer
    │   │   ├── 📄 footer.types.ts
    │   │   ├── 📂 components
    │   │   │   ├── 📄 footer.scss
    │   │   │   └── 📄 Footer.tsx
    │   │   └── 📂 data
    │   │       └── 📄 footer.data.ts
    │   └── 📂 header
    │       ├── 📄 header.types.ts
    │       ├── 📂 components
    │       └── 📂 data
    ├── 📂 layouts
    │   └── 📄 MainLayout.tsx
    ├── 📂 pages
    │   ├── 📂 auth-page
    │   │   └── 📄 AuthPage.tsx
    │   ├── 📂 error-page
    │   │   ├── 📄 error-page.scss
    │   │   └── 📄 ErrorPage.tsx
    │   └── 📂 home-page
    │       └── 📄 HomePage.tsx
    └── 📂 shared
        ├── 📂 components
        │   ├── 📂 Button
        │   ├── 📂 ButtonLink
        │   ├── 📂 Input
        │   └── 📂 Loader
        ├── 📂 constants
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

### Source Directory (`src`)

Main application code organized into several key directories:

#### `app/`

Core application setup:

-  Axios instance configuration
-  Router setup
-  Redux store configuration
-  Common types

#### `assets/`

Static resources:

-  Fonts (Work Sans family)
-  Images and error assets
-  Logo files in various sizes
-  Global SCSS styles

#### `features/`

Feature-based components:

-  Footer
-  Header
   Each feature contains its own types, components, and data

#### `layouts/`

Application layout components

#### `pages/`

Page-level components:

-  Authentication page
-  Error page
-  Home page

#### `shared/`

Reusable components and utilities:

-  Common UI components (Button, Input, Loader)
-  Constants
-  Custom hooks
-  Shared types
-  Utility functions
