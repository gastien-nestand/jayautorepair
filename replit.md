# Jay Auto Repair Website

## Overview
A modern, mobile-friendly, high-converting website for Jay Auto Repair - a business that provides auto repair services and sells used cars.

**Business Name:** Jay Auto Repair  
**Tagline:** "Reliable Repairs. Quality Cars."

## Tech Stack
- **Frontend:** React + TypeScript + Vite
- **Styling:** Tailwind CSS + Shadcn UI components
- **Backend:** Express.js
- **State Management:** TanStack Query (React Query)
- **Forms:** React Hook Form + Zod validation
- **Routing:** Wouter
- **Storage:** In-memory storage

## Project Structure
```
├── client/
│   ├── src/
│   │   ├── components/ui/    # Shadcn UI components
│   │   ├── hooks/            # Custom hooks (use-toast)
│   │   ├── lib/              # Utilities (queryClient)
│   │   ├── pages/            # Page components
│   │   │   ├── home.tsx      # Main landing page
│   │   │   └── not-found.tsx
│   │   ├── App.tsx           # Main app component
│   │   ├── index.css         # Global styles & CSS variables
│   │   └── main.tsx          # Entry point
│   └── index.html            # HTML template with SEO meta tags
├── server/
│   ├── routes.ts             # API endpoints
│   ├── storage.ts            # In-memory data storage
│   └── index.ts              # Server entry point
├── shared/
│   └── schema.ts             # Shared TypeScript types & Zod schemas
└── attached_assets/          # Stock images for the website
```

## Features
- **Hero Section:** Full-width background with compelling headline and dual CTAs
- **About Section:** Company history, trust indicators, and statistics
- **Services Grid:** 7 auto repair services with icons and booking buttons
- **Cars for Sale:** 6 vehicle listings with images, prices, and features
- **Why Choose Us:** Trust-building bullet points
- **Testimonials:** 6 customer reviews with star ratings
- **Contact Form:** Form with validation, connected to backend API
- **Google Maps:** Embedded map for location
- **Dark Mode:** Toggle between light and dark themes
- **Sticky Header:** Navigation with phone number
- **Responsive Design:** Mobile-first, works on all screen sizes

## API Endpoints
- `GET /api/services` - List all auto repair services
- `GET /api/cars` - List all vehicles for sale
- `GET /api/testimonials` - List customer testimonials
- `POST /api/contact` - Submit contact form inquiry

## Brand Colors
- **Primary Navy:** #0a1a2f (213 54% 11% HSL)
- **Metallic Silver:** #c4c4c4 (0 0% 77% HSL)
- **Accent Red:** #e63946 (355 79% 56% HSL)
- **White:** #ffffff

## Running the Project
The project runs with `npm run dev` which starts the Express server on port 5000. The frontend is served via Vite in development mode.
