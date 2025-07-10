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

### Color Palette

The project uses a custom grayscale palette defined in `app/globals.css`. These colors are available as CSS variables.

| Variable | Hex Value |
|---|---|
| `--color-gray-0` | `#ffffff` |
| `--color-gray-25` | `#f8f9fc` |
| `--color-gray-50` | `#f3f4fa` |
| `--color-gray-75` | `#eef0f8` |
| `--color-gray-100` | `#e0e3f2` |
| `--color-gray-150` | `#d0d5e9` |
| `--color-gray-200` | `#c0c6de` |
| `--color-gray-250` | `#b0b8d1` |
| `--color-gray-300` | `#a3abc5` |
| `--color-gray-350` | `#969eb8` |
| `--color-gray-400` | `#8a93ae` |
| `--color-gray-450` | `#7b84a0` |
| `--color-gray-500` | `#6c7590` |
| `--color-gray-550` | `#626a85` |
| `--color-gray-600` | `#555d76` |
| `--color-gray-650` | `#4b526b` |
| `--color-gray-700` | `#3f475d` |
| `--color-gray-750` | `#31384d` |
| `--color-gray-775` | `#2b3143` |
| `--color-gray-800` | `#272d3e` |
| `--color-gray-850` | `#242836` |
| `--color-gray-875` | `#1d202a` |
| `--color-gray-900` | `#191b22` |
| `--color-gray-950` | `#0a0b0f` |

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
    -   `client-content.tsx`: Client-side content for the dropdown page.
-   `global-search/`: A route demonstrating a global search feature.
    -   `page.tsx`: The page for the `/global-search` route.
    -   `client-content.tsx`: Client-side content for the global search page.
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
    -   `button.tsx`: A button component.
    -   `dropdown-menu.tsx`: A dropdown menu component.
    -   `theme-provider.tsx`: Manages the application's theme (light/dark mode).
    -   `theme-toggle-button.tsx`: A button for switching themes.

## `/lib` Directory

-   `utils.ts`: A collection of utility functions.

## `/public` Directory

-   Contains static assets like images (`.svg`, `.png`). 