# Memorial Transportation - Professional Website

A modern, responsive transportation company website built with React, TypeScript, Tailwind CSS, and Express.js.

## 🚀 Features

### Core Pages
- **Homepage** - Hero section with fleet showcase and services overview
- **About Us** - Company background, mission, values, and credentials
- **Services** - Detailed service offerings with NAICS codes
- **Fleet Gallery** - Professional truck fleet photos with filtering
- **Fleet Coverage Map** - Interactive map showing 52 major US locations (login required)
- **Contact Us** - Contact form with company information
- **Quote Request** - Protected form for requesting shipping quotes (login required)

### Technical Features
- **User Authentication** - Manus OAuth integration with login/logout
- **Responsive Design** - Mobile-first approach, works on all devices
- **International Typographic Style** - Clean, professional design with mathematical precision
- **Database Integration** - MySQL/TiDB with Drizzle ORM
- **Real-time Forms** - Contact and quote request forms with validation
- **Protected Routes** - Authentication-required pages for logged-in users
- **Google Maps Integration** - Interactive fleet coverage visualization

### Design System
- **Color Palette**: White canvas, bold red accents (#EF4444), crisp black typography
- **Typography**: Professional sans-serif with strict hierarchy
- **Grid System**: Mathematical precision with consistent spacing
- **Visual Elements**: Fine black dividers, generous negative space

## 📋 Tech Stack

### Frontend
- React 19
- TypeScript
- Tailwind CSS 4
- Vite
- Wouter (routing)
- Lucide React (icons)

### Backend
- Express.js 4
- tRPC 11
- Drizzle ORM
- MySQL/TiDB

### Additional
- Manus OAuth
- Google Maps API
- Sonner (notifications)
- React Hook Form

## 🛠️ Installation

### Quick Start

1. **Clone or download the project**
```bash
git clone <repository-url>
cd transport-company-site
```

2. **Install dependencies**
```bash
npm install
# or
pnpm install
```

3. **Set up environment variables**
Create `.env.local`:
```env
DATABASE_URL=mysql://user:password@localhost:3306/transport_db
VITE_APP_ID=your_app_id
JWT_SECRET=your_secret_key
# ... see LOCAL_SETUP_GUIDE.md for all variables
```

4. **Set up database**
```bash
npm run db:push
```

5. **Start development server**
```bash
npm run dev
```

6. **Open in browser**
Navigate to `http://localhost:3000`

## 📁 Project Structure

```
transport-company-site/
├── client/                      # Frontend application
│   ├── src/
│   │   ├── pages/              # Page components
│   │   │   ├── Home.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Gallery.tsx
│   │   │   ├── FleetMap.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Quote.tsx
│   │   │   └── NotFound.tsx
│   │   ├── components/         # Reusable components
│   │   │   ├── Navigation.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── DashboardLayout.tsx
│   │   │   └── ui/             # shadcn/ui components
│   │   ├── App.tsx             # Main app with routing
│   │   ├── main.tsx            # Entry point
│   │   └── index.css           # Global styles
│   └── public/                 # Static assets
│       ├── truck-1.jpg
│       ├── truck-2.jpg
│       ├── truck-3.jpg
│       ├── workers-logistics.jpg
│       ├── warehouse-operations.jpg
│       ├── logo-memorial.png
│       └── logo-mt.png
├── server/                      # Backend application
│   ├── routers.ts              # tRPC procedures
│   ├── db.ts                   # Database queries
│   ├── auth.logout.test.ts     # Test example
│   └── _core/                  # Core utilities
│       ├── index.ts
│       ├── context.ts
│       ├── trpc.ts
│       ├── cookies.ts
│       ├── env.ts
│       ├── llm.ts
│       ├── notification.ts
│       └── voiceTranscription.ts
├── drizzle/                     # Database
│   ├── schema.ts               # Table definitions
│   └── migrations/             # Migration files
├── shared/                      # Shared code
│   ├── locations.ts            # Fleet locations data
│   └── const.ts
├── storage/                     # S3 storage helpers
├── company-config.ts           # Company configuration
├── LOCAL_SETUP_GUIDE.md        # Local setup instructions
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript config
├── tailwind.config.ts          # Tailwind config
└── drizzle.config.ts           # Drizzle config
```

## 🎨 Customization

### Update Company Information
Edit `company-config.ts`:
```typescript
export const companyConfig = {
  name: "Your Company Name",
  description: "Your company description",
  contact: {
    email: "your@email.com",
    phone: "(555) 123-4567",
    address: "123 Main St",
    city: "Your City",
    state: "ST",
    zip: "12345",
    country: "USA"
  },
  // ... more configuration
};
```

### Change Colors
Edit `client/src/index.css` to modify the design system:
```css
:root {
  --primary: #EF4444;        /* Primary red */
  --background: #FFFFFF;    /* White background */
  --foreground: #000000;    /* Black text */
  /* ... more CSS variables */
}
```

### Update Logo
Replace files in `client/public/`:
- `logo-memorial.png` - Main logo
- `logo-mt.png` - Alternative logo

### Add New Pages
1. Create `client/src/pages/YourPage.tsx`
2. Add route in `client/src/App.tsx`
3. Add navigation link in `client/src/components/Navigation.tsx`

## 🗄️ Database Schema

### Users Table
- Stores user information and authentication state
- Linked to Manus OAuth

### Trucks Table
- Fleet vehicle information
- Location and status tracking
- Driver details

### Contact Submissions Table
- Contact form submissions
- Timestamp and message storage

### Quote Requests Table
- Quote request form submissions
- Freight details and customer information
- Status tracking

## 🔐 Authentication

The site uses **Manus OAuth** for secure authentication:
- Users can log in via the login button
- Protected pages redirect to login if not authenticated
- Session maintained via secure cookies
- User context available throughout the app

### Protected Routes
- `/quote` - Quote request form
- `/fleet-map` - Fleet coverage map

## 📦 Available Commands

```bash
# Development
npm run dev              # Start development server
npm run check           # TypeScript type checking
npm run format          # Format code with Prettier

# Production
npm run build           # Build for production
npm start              # Start production server

# Database
npm run db:push        # Generate and run migrations

# Testing
npm run test           # Run Vitest tests
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Manus
Use the Management UI to publish your site with a custom domain.

### Deploy to Other Platforms
1. Build the project: `npm run build`
2. Deploy the `dist/` folder to your hosting provider
3. Set environment variables on your hosting platform
4. Start the server: `npm start`

## 📖 Documentation

- **Local Setup**: See `LOCAL_SETUP_GUIDE.md`
- **API Documentation**: Check `server/routers.ts` for tRPC procedures
- **Database Schema**: See `drizzle/schema.ts`
- **Fleet Locations**: See `shared/locations.ts`

## 🐛 Troubleshooting

### Port 3000 Already in Use
```bash
# Change port
PORT=3001 npm run dev
```

### Database Connection Error
- Verify DATABASE_URL in `.env.local`
- Check if MySQL is running
- Run `npm run db:push` to create tables

### Dependencies Not Installing
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
npm run check  # Check for TypeScript errors
npm run format # Format code
```

## 📝 License

This project is proprietary and confidential.

## 🤝 Support

For questions or issues:
1. Check the LOCAL_SETUP_GUIDE.md
2. Review error messages in the terminal
3. Check VS Code's integrated terminal for logs

## 🎯 Next Steps

1. ✅ Install and set up locally
2. ✅ Test all features
3. ✅ Customize with your content
4. ✅ Deploy to production
5. ✅ Monitor and maintain

---

**Built with ❤️ for Memorial Transportation**
