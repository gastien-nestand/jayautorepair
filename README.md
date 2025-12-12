# Jay Auto Repair Website

A modern, mobile-friendly, high-converting website for Jay Auto Repair - a business that provides auto repair services and sells used cars.

**Business Name:** Jay Auto Repair  
**Tagline:** "Reliable Repairs. Quality Cars."

![Jay Auto Repair](https://img.shields.io/badge/Status-Production%20Ready-success)
![License](https://img.shields.io/badge/License-MIT-blue)

## 🚀 Features

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

## 🛠️ Tech Stack

- **Frontend:** React + TypeScript + Vite
- **Styling:** Tailwind CSS + Shadcn UI components
- **Backend:** Express.js
- **Database:** PostgreSQL with Drizzle ORM
- **State Management:** TanStack Query (React Query)
- **Forms:** React Hook Form + Zod validation
- **Routing:** Wouter
- **Animations:** Framer Motion

## 📁 Project Structure

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
│   └── index.ts              # Server entry point
├── shared/
│   └── schema.ts             # Shared TypeScript types & Zod schemas
└── attached_assets/          # Stock images for the website
```

## 🔧 Installation

### Prerequisites

- Node.js 20.x or higher
- npm or yarn
- PostgreSQL database (optional, for production)

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd JayAutoRepair
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   NODE_ENV=development
   PORT=5001
   DATABASE_URL=your_postgresql_connection_string
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5001`

## 📦 Build & Deployment

### Build for Production

```bash
npm run build
```

This will create optimized production builds in the `dist` folder.

### Deploy to Render

1. **Create Render Account**
   - Go to https://render.com
   - Sign up with your GitHub account

2. **Create New Web Service**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select `gastien-nestand/jayautorepair`

3. **Configure Service**
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm run start`
   - **Plan:** Free

4. **Add Environment Variables**
   ```
   NODE_ENV=production
   PORT=10000
   DATABASE_URL=your_postgresql_connection_string
   SESSION_SECRET=your_random_secret_key
   ```

5. **Deploy**
   - Click "Create Web Service"
   - Wait 3-5 minutes for deployment
   - Your site will be live at `https://jay-auto-repair.onrender.com`

### Environment Variables on Render

Make sure to set the following environment variables in your Render service settings:

- `NODE_ENV` = `production`
- `PORT` = `10000`
- `DATABASE_URL` = Your PostgreSQL connection string
- `SESSION_SECRET` = Random secret key for sessions

## 🔌 API Endpoints

- `GET /api/services` - List all auto repair services
- `GET /api/cars` - List all vehicles for sale
- `GET /api/testimonials` - List customer testimonials
- `POST /api/contact` - Submit contact form inquiry

## 🎨 Brand Colors

- **Primary Navy:** #0a1a2f (213 54% 11% HSL)
- **Metallic Silver:** #c4c4c4 (0 0% 77% HSL)
- **Accent Red:** #e63946 (355 79% 56% HSL)
- **White:** #ffffff

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run check` - Type check with TypeScript
- `npm run db:push` - Push database schema changes

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 📞 Contact

For questions or support, please contact Jay Auto Repair:
- **Phone:** (555) 123-4567
- **Email:** info@jayautorepair.com
- **Address:** 123 Main Street, Anytown, USA

---

Built with ❤️ for Jay Auto Repair
