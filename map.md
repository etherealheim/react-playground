<!-- 
 Gemini, this file is a map of the project structure. 
 It is your responsibility to keep this file up-to-date as you make changes to the codebase.
-->

# Project Structure Map

This document outlines the structure of the `react-playground` project.

## Tech Stack & Design

This project is built with a modern, component-based architecture.

### Key Technologies
- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/)
- **Animation**: [Framer Motion](https://motion.dev/)
- **Icons**:
    - [Tabler Icons](https://tabler-icons.io/)
    - [Animated Icons by pquoqubbw](https://github.com/pqoqubbw/icons)

### Design Philosophy
- **Theming**: All components are designed to support both **light and dark modes** out of the box.
- **Responsiveness**: The UI is built using a mobile-first approach to ensure a seamless experience across all screen sizes.

## Root Directory

-   `app/`: Contains all the routes, pages, and layouts for the Next.js application, following the App Router paradigm.
-   `components/`: Holds shared React components used across the application.
-   `lib/`: Contains utility functions and libraries.
-   `public/`: Stores static assets like images and icons that are publicly accessible.
-   `README.md`: The main README file for the project.
-   Configuration Files: `next.config.ts`, `tsconfig.json`, `package.json`, `postcss.config.mjs`, `eslint.config.mjs`, `components.json`, `bun.lockb`.

## `/app` Directory

-   `layout.tsx`: The root layout of the application.
-   `page.tsx`: The home page of the application.
-   `globals.css`: Global styles for the application.
-   `favicon.ico`: The application's favicon.
-   `dropdown/`: A route demonstrating a dropdown component.
    -   `page.tsx`: The page for the `/dropdown` route.
-   `global-search/`: A route demonstrating a global search feature.
    -   `page.tsx`: The page for the `/global-search` route.
    -   `components/`: Components specific to the global search feature.
        -   `global-search-modal.tsx`: Modal for the search interface.
        -   `search-header.tsx`: The header for the search modal.
        -   `search-store-cta.tsx`: The "Explore from Store" section.
        -   `search-actions.tsx`: The "Actions" section.
        -   `search-input.tsx`: The main search input component.

## `/components` Directory

-   `grid.tsx`: A generic grid component.
-   `top-navigation.tsx`: The main navigation bar for the application.
-   `icons/`: A directory for SVG icon components.
-   `ui/`: UI components, mostly from Shadcn UI.
    -   `badge.tsx`: A badge component.
    -   `theme-provider.tsx`: Manages the application's theme (light/dark mode).
    -   `theme-toggle-button.tsx`: A button for switching themes.

## `/lib` Directory

-   `utils.ts`: A collection of utility functions.

## `/public` Directory

-   Contains static assets like images (`.svg`, `.png`). 