# Jay Auto Repair - Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from automotive industry leaders like AutoTrader, Carmax, and modern service businesses like Jiffy Lube, combined with local business trust-building patterns.

## Brand Identity
**Business**: Jay Auto Repair  
**Tagline**: "Reliable Repairs. Quality Cars."  
**Aesthetic**: Clean, trustworthy mechanic-shop aesthetic with bold typography  
**Tone**: Professional, straightforward, customer-focused

## Color Palette
- **Primary Navy**: #0a1a2f (headers, key sections)
- **Metallic Silver**: #c4c4c4 (accents, borders)
- **Accent Red**: #e63946 (CTAs, highlights, urgency elements)
- **White**: #ffffff (backgrounds, text on dark)

## Typography System
- **Headlines**: Bold, industrial sans-serif (700-800 weight) for trust and authority
- **Body**: Clean, readable sans-serif (400 weight) with 1.6 line-height
- **CTAs**: Semi-bold (600 weight), uppercase tracking for emphasis
- **Hierarchy**: H1 (48-56px desktop), H2 (36-42px), H3 (24-28px), Body (16-18px)

## Layout System
**Spacing Units**: Tailwind 4, 6, 8, 12, 16, 20, 24 for consistent rhythm  
**Container**: max-w-7xl for main content, max-w-6xl for text-heavy sections  
**Grid**: 3-column for services (mobile: 1-col, tablet: 2-col), 2-3 column for car listings

## Core Sections & Components

### 1. Sticky Header
- Dark navy background with business phone number prominently displayed
- Navigation: Services, Cars for Sale, About, Contact
- "Book Repair" CTA button in accent red
- Mobile: Hamburger menu

### 2. Hero Section
- Full-width, 85vh height
- **Hero Image**: Mechanic working on engine in professional shop environment
- Headline overlay: "Your Trusted Auto Repair Experts"
- Subtext: "From full-service repairs to quality used car sales, Jay Auto Repair keeps you on the road."
- Dual CTAs with blurred backgrounds: "Book a Repair" (red) + "View Cars for Sale" (silver outline)
- Subtle gradient overlay on image for text legibility

### 3. About Us Section
- 2-column layout (desktop): Text left, supporting imagery right
- Brief history emphasizing trust, honesty, fast service, expertise
- Trust badges: Years in business, certified mechanics, customer satisfaction stats
- Padding: py-20

### 4. Auto Repair Services Grid
- 3-column grid (lg), 2-column (md), 1-column (mobile)
- Each service card includes:
  - Icon (wrench, oil drop, brake disc, transmission, AC, tire, clipboard)
  - Service name (H3)
  - 2-3 sentence description
  - "Book Now" button
- Services: Engine diagnostics, Oil changes, Brake service, Transmission repair, AC repair, Tire rotation & alignment, Full vehicle inspections
- Background: Light gray section (#f8f9fa) for contrast

### 5. Cars for Sale Section
- Section intro with tagline
- Vehicle cards in 2-3 column grid:
  - Car image (16:9 aspect ratio)
  - Make/Model (H3)
  - Year, Mileage, Price (prominent red text)
  - 3-4 key features as bullet points
  - "View Details" button
- "View All Available Cars" CTA at bottom
- Display 6 featured vehicles

### 6. Why Choose Us
- 2-column layout with large checkmarks/icons
- 5-6 trust-building points with brief descriptions
- Include: Certified mechanics, Honest pricing, Fast turnaround, Reliable used cars, Customer satisfaction guarantee
- Navy background with white text for emphasis

### 7. Testimonials
- 3-column cards (desktop), stacked mobile
- Each testimonial: Quote, customer name, 5-star rating visual
- Include realistic names and specific service mentions
- 6 total testimonials showcasing both repair and car sales

### 8. Contact & Location
- 2-column: Contact form left, location details + map right
- Form fields: Name, Email, Phone, Service Type dropdown, Message
- Location details: Address, phone (clickable), email, business hours
- Google Maps embed (600px height)

### 9. Footer
- 3-column: Business hours, Quick links (Services, Cars, About, Contact), Social media
- Copyright and credentials at bottom
- Dark navy background

## Images Required
1. **Hero**: Professional mechanic working on engine in clean shop (wide, high-quality)
2. **About**: Shop exterior or team photo
3. **Service Icons**: Use icon library (wrenches, gears, automotive symbols)
4. **Car Listings**: 6 placeholder used car images (sedans, SUVs, trucks mix)
5. **Why Choose Us**: Subtle background texture or tools imagery

## Component Specifications
- **Buttons**: Rounded corners (rounded-md), py-3 px-6, semi-bold text, red primary, silver secondary
- **Cards**: Subtle shadow, white background, rounded-lg, hover lift effect
- **Forms**: Single-line borders, focus states with red accent, proper label spacing
- **Navigation**: Underline active state, smooth scroll behavior

## Mobile Optimization
- Hero text: Reduce to 36px, maintain CTAs stacked vertically
- All grids collapse to single column below md breakpoint
- Sticky header collapses to hamburger with phone number visible
- Touch-friendly button sizes (minimum 44px height)
- Map: Full-width on mobile, reduced height (400px)

## Trust & Conversion Elements
- Phone number in header (click-to-call on mobile)
- "Book Now" buttons throughout with consistent red styling
- Customer count or years in business prominently displayed
- Certification badges in About section
- Limited-time offers section (optional banner above hero)