# B.A.R.K.-Book-Archive-Reading-Kingdom Project Structure

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

## Project Structure Overview

### Root Directory

Contains project configuration and setup:

-  Public assets directory
-  Source code directory

### Public Directory

Static assets accessible directly by the browser

### Source Directory (`src`)

Main application code organized into modules:

#### `app/`

Core application setup:

-  Store management (Redux)
-  Application configuration
-  Routing setup

#### `assets/`

Static resources:

-  Fonts directory (Work Sans font family)
-  Images for different parts of the application
-  Logo files
-  Global SCSS styles

#### `features/`

Feature-based modules:

-  Authentication (login/register forms and pages)
-  Common pages (error handling, testing)
-  Footer module
-  Header module (with navigation and actions)
-  Home module
-  Layout templates

#### `shared/`

Reusable resources:

-  UI Components (buttons, inputs, loaders)
-  Application constants
-  Theme context management
-  Custom hooks
-  Common types
-  Utility functions
