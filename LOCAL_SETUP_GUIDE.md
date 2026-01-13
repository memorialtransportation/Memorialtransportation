# Transportation Company Website - Local Setup Guide

This guide will help you run the Memorial Transportation website locally on your computer using VS Code and Node.js.

## Prerequisites

Before you start, make sure you have installed:

1. **Node.js** (v18 or higher)
   - Download from: https://nodejs.org/
   - Verify installation: `node --version` and `npm --version`

2. **Git** (optional but recommended)
   - Download from: https://git-scm.com/

3. **VS Code** (or any code editor)
   - Download from: https://code.visualstudio.com/

## Step 1: Set Up the Project

### Option A: Using Git (Recommended)
```bash
git clone <your-repo-url>
cd transport-company-site
```

### Option B: Manual Setup
1. Create a new folder: `transport-company-site`
2. Copy all project files into this folder
3. Open the folder in VS Code

## Step 2: Install Dependencies

Open the terminal in VS Code (Ctrl + ` or View → Terminal) and run:

```bash
npm install
# or if you prefer pnpm
pnpm install
```

This will install all required packages listed in `package.json`.

## Step 3: Set Up Environment Variables

Create a `.env.local` file in the project root with the following variables:

```env
# Database
DATABASE_URL=mysql://user:password@localhost:3306/transport_db

# OAuth (Manus)
VITE_APP_ID=your_app_id
OAUTH_SERVER_URL=https://api.manus.im
VITE_OAUTH_PORTAL_URL=https://oauth.manus.im

# JWT Secret
JWT_SECRET=your_secret_key_here

# Owner Information
OWNER_NAME=Your Name
OWNER_OPEN_ID=your_open_id

# Manus APIs
BUILT_IN_FORGE_API_URL=https://api.manus.im
BUILT_IN_FORGE_API_KEY=your_api_key
VITE_FRONTEND_FORGE_API_URL=https://api.manus.im
VITE_FRONTEND_FORGE_API_KEY=your_frontend_api_key

# Analytics (Optional)
VITE_ANALYTICS_ENDPOINT=https://analytics.manus.im
VITE_ANALYTICS_WEBSITE_ID=your_website_id

# App Configuration
VITE_APP_TITLE=Memorial Transportation
VITE_APP_LOGO=/logo-memorial.png
```

**Note:** For local development without Manus OAuth, you can use placeholder values.

## Step 4: Set Up the Database

### Option A: Using SQLite (Easiest for Local Development)

Update your `.env.local`:
```env
DATABASE_URL=file:./dev.db
```

Then run:
```bash
npm run db:push
```

### Option B: Using MySQL

1. Install MySQL Server locally
2. Create a database:
```sql
CREATE DATABASE transport_db;
```

3. Update `.env.local` with your MySQL connection string:
```env
DATABASE_URL=mysql://root:password@localhost:3306/transport_db
```

4. Run migrations:
```bash
npm run db:push
```

## Step 5: Start the Development Server

Run the development server:

```bash
npm run dev
```

You should see output like:
```
Server running on http://localhost:3000/
```

Open your browser and navigate to: **http://localhost:3000**

## Project Structure

```
transport-company-site/
├── client/                 # Frontend React code
│   ├── src/
│   │   ├── pages/         # Page components
│   │   ├── components/    # Reusable components
│   │   ├── App.tsx        # Main app component
│   │   └── index.css      # Global styles
│   └── public/            # Static assets
├── server/                # Backend code
│   ├── routers.ts         # API endpoints
│   ├── db.ts              # Database queries
│   └── _core/             # Core server utilities
├── drizzle/               # Database schema
│   └── schema.ts          # Table definitions
├── shared/                # Shared code
│   └── locations.ts       # Fleet locations data
├── package.json           # Dependencies
└── .env.local            # Environment variables (create this)
```

## Available Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run tests
npm run test

# Format code
npm run format

# Type check
npm run check

# Database migrations
npm run db:push
```

## Key Features

### Pages
- **Home** (`/`) - Landing page with hero section
- **About** (`/about`) - Company information
- **Services** (`/services`) - Service offerings
- **Gallery** (`/gallery`) - Fleet photos
- **Fleet Map** (`/fleet-map`) - National coverage map (login required)
- **Contact** (`/contact`) - Contact form
- **Quote** (`/quote`) - Quote request form (login required)

### Authentication
- Login/Logout via Manus OAuth
- Protected pages require authentication
- User context available throughout the app

### Database
- Users table for authentication
- Trucks table for fleet data
- Contact submissions table
- Quote requests table

## Troubleshooting

### Port 3000 Already in Use
```bash
# Kill the process using port 3000
# On Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# On Mac/Linux:
lsof -i :3000
kill -9 <PID>
```

### Database Connection Error
- Verify DATABASE_URL is correct
- Check if MySQL/SQLite is running
- Run `npm run db:push` to create tables

### Dependencies Not Installing
```bash
# Clear npm cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Port Already in Use
Change the port in `server/_core/index.ts` or set environment variable:
```bash
PORT=3001 npm run dev
```

## Customization Tips

### Update Company Information
Edit `company-config.ts` with your company details:
```typescript
export const companyConfig = {
  name: "Your Company Name",
  contact: {
    email: "your@email.com",
    phone: "(555) 123-4567",
    // ... more details
  },
  // ... more config
};
```

### Change Colors
Edit `client/src/index.css` to modify the color scheme:
```css
:root {
  --primary: #EF4444; /* Red */
  --background: #FFFFFF; /* White */
  --foreground: #000000; /* Black */
  /* ... more colors */
}
```

### Add New Pages
1. Create a new file in `client/src/pages/YourPage.tsx`
2. Add the route in `client/src/App.tsx`
3. Add navigation link in `client/src/components/Navigation.tsx`

### Add New API Endpoints
1. Create a procedure in `server/routers.ts`
2. Call it from the frontend using `trpc.yourProcedure.useQuery()`

## Deployment

To deploy to production:

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist/` folder to your hosting provider

3. Set production environment variables on your hosting platform

4. Start the server:
```bash
npm start
```

## Getting Help

For issues or questions:
- Check the error message in the terminal
- Review the troubleshooting section above
- Check VS Code's integrated terminal for detailed logs
- Verify all environment variables are set correctly

## Next Steps

1. ✅ Install dependencies
2. ✅ Set up environment variables
3. ✅ Configure database
4. ✅ Start development server
5. ✅ Test all pages and features
6. ✅ Customize with your content
7. ✅ Deploy to production

Happy coding! 🚀
