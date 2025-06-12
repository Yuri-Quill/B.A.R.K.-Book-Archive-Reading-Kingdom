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
│   ├── 📄 fav-dark.ico
│   └── 📄 fav-light.ico
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
    │   │       ├── 📄 WorkSans-Black.woff
    │   │       ├── 📄 WorkSans-Black.woff2
    │   │       ├── 📄 WorkSans-BlackItalic.woff
    │   │       ├── 📄 WorkSans-BlackItalic.woff2
    │   │       ├── 📄 WorkSans-Bold.woff
    │   │       ├── 📄 WorkSans-Bold.woff2
    │   │       ├── 📄 WorkSans-BoldItalic.woff
    │   │       ├── 📄 WorkSans-BoldItalic.woff2
    │   │       ├── 📄 WorkSans-ExtraBold.woff
    │   │       ├── 📄 WorkSans-ExtraBold.woff2
    │   │       ├── 📄 WorkSans-ExtraBoldItalic.woff
    │   │       ├── 📄 WorkSans-ExtraBoldItalic.woff2
    │   │       ├── 📄 WorkSans-ExtraLight.woff
    │   │       ├── 📄 WorkSans-ExtraLight.woff2
    │   │       ├── 📄 WorkSans-ExtraLightItalic.woff
    │   │       ├── 📄 WorkSans-ExtraLightItalic.woff2
    │   │       ├── 📄 WorkSans-Italic.woff
    │   │       ├── 📄 WorkSans-Italic.woff2
    │   │       ├── 📄 WorkSans-Light.woff
    │   │       ├── 📄 WorkSans-Light.woff2
    │   │       ├── 📄 WorkSans-LightItalic.woff
    │   │       ├── 📄 WorkSans-LightItalic.woff2
    │   │       ├── 📄 WorkSans-Medium.woff
    │   │       ├── 📄 WorkSans-Medium.woff2
    │   │       ├── 📄 WorkSans-MediumItalic.woff
    │   │       ├── 📄 WorkSans-MediumItalic.woff2
    │   │       ├── 📄 WorkSans-Regular.woff
    │   │       ├── 📄 WorkSans-Regular.woff2
    │   │       ├── 📄 WorkSans-SemiBold.woff
    │   │       └── 📄 WorkSans-SemiBold.woff2
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
    │   │   └── 📂 pages
    │   ├── 📂 common-pages
    │   │   ├── 📂 error-page
    │   │   └── 📂 test
    │   ├── 📂 footer
    │   │   ├── 📄 footer.types.ts
    │   │   ├── 📂 components
    │   │   └── 📂 data
    │   ├── 📂 header
    │   │   ├── 📄 header.types.ts
    │   │   ├── 📂 components
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
        │   ├── 📂 ButtonLink
        │   ├── 📂 ContentWrapper
        │   ├── 📂 Input
        │   ├── 📂 Loader
        │   └── 📂 Logo
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

### Public Directory

Contains public assets:

-  Favicon icons for light and dark themes

### Source Directory (`src`)

Main application code organized into several key directories:

#### `app/`

Core application setup:

-  Axios instance configuration
-  Router setup
-  Redux store configuration
-  Common types and interfaces

#### `assets/`

Static resources:

-  Fonts (Work Sans family with complete set of weights and styles)
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
