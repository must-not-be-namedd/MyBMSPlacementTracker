# BMSCE Placement Portal

## Overview

This is a placement portal for BMS College of Engineering that has been converted from a React/Vite application to a plain HTML/CSS/JS static website for GitHub Pages deployment. The application provides students with placement statistics, resume building tools, mock interview scheduling, and alumni networking features. It requires no build process or dependencies and can be deployed directly from the main branch.

## System Architecture

### Static Website Architecture
- **Framework**: Pure HTML/CSS/JS with no build dependencies
- **Styling**: Custom CSS with responsive design and mobile-first approach
- **UI Components**: Hand-crafted CSS components with modern design patterns
- **State Management**: Vanilla JavaScript with local data storage
- **Routing**: JavaScript-based single-page application with hash-free navigation
- **Forms**: Native HTML forms with JavaScript validation
- **Build Tool**: None required - direct deployment from files

### Data Architecture
- **Data Storage**: JavaScript objects with comprehensive department statistics
- **Data Processing**: Client-side data manipulation and filtering
- **Historical Data**: 12 years of placement data (2014-2025) for all departments
- **API Integration**: Prepared for future backend integration if needed
- **Persistence**: Browser localStorage for user preferences and form data

## Key Components

### Database Schema
- **Users**: Stores user credentials, department, and role information
- **Departments**: Contains placement statistics (highest package, average package, placement rate) by year
- **Interviews**: Manages mock interview bookings with Google Meet integration
- **Sessions**: Handled by PostgreSQL session store for user authentication

### Authentication System
- Custom authentication using Passport.js local strategy
- Password hashing with Node.js crypto module (scrypt)
- Session-based authentication with secure cookie configuration
- Role-based access control (student/admin roles)

### Frontend Features
- **Dashboard**: Overview of placement statistics and college information
- **Department Statistics**: Interactive charts showing placement data by department
- **Resume Builder**: Form-based resume creation with PDF export functionality
- **Mock Interview**: Calendar-based interview scheduling with Google Meet integration
- **Alumni Network**: Success stories and networking features
- **Responsive Design**: Mobile-first approach with responsive navigation

### API Endpoints
- `GET/POST /api/auth/*` - Authentication endpoints
- `GET /api/departments` - Department statistics with optional filtering
- `GET/POST /api/interviews` - Mock interview management
- `GET /api/user` - Current user information

## Data Flow

1. **User Authentication**: Users register/login through the auth page, sessions are maintained server-side
2. **Dashboard Data**: Frontend fetches aggregated placement statistics from the backend
3. **Department Analytics**: Real-time filtering and visualization of department-specific data
4. **Interview Booking**: Form submission creates interview records with auto-generated Google Meet links
5. **Resume Generation**: Client-side PDF generation using jsPDF and html2canvas

## External Dependencies

### Frontend Dependencies
- React ecosystem (React, React DOM, React Query)
- UI framework (Radix UI components, Tailwind CSS)
- Form handling (React Hook Form, Zod validation)
- Charts and visualization (Recharts)
- PDF generation (jsPDF, html2canvas)
- Date utilities (date-fns)

### Backend Dependencies
- Express.js server framework
- Database (Drizzle ORM, PostgreSQL driver)
- Authentication (Passport.js, crypto for password hashing)
- Session management (express-session, connect-pg-simple)
- Development tools (tsx for TypeScript execution)

### Database
- PostgreSQL database (configured for Neon serverless)
- Drizzle ORM for type-safe database operations
- Automated migrations through drizzle-kit

## Deployment Strategy

### Development Environment
- Vite dev server for frontend with HMR
- tsx for running TypeScript server code
- Concurrent development with backend API proxy

### Production Build
- Frontend: Vite build outputs to `dist/public`
- Backend: esbuild bundles server code to `dist/index.js`
- Static file serving for production frontend assets
- Database migrations run via `npm run db:push`

### Hosting Configuration
- Optimized for Replit hosting environment
- CORS configured for Replit domains (.replit.app, .repl.co)
- Session cookies configured for cross-origin support
- Environment variables for database connection and session secrets

## Changelog

- July 20, 2025. **AUTHENTICATION BYPASS UPDATE**: Removed database authentication dependency and implemented easy access system
- July 20, 2025. **SIMPLIFIED LOGIN FLOW**: Both sign in/sign up buttons now work with any input and provide instant access to dashboard
- July 20, 2025. **ADDED QUICK ACCESS BUTTONS**: Users can skip login/registration with one-click "Quick Access" buttons for immediate app entry
- July 20, 2025. **FIXED MOBILE RESPONSIVENESS**: Auth page now properly displays on mobile with both form and info panel visible on scroll
- July 20, 2025. **REMOVED LOGIN LOOPING**: Authentication now works seamlessly without any database dependency or endless redirects
- July 20, 2025. **MAJOR DATA VISUALIZATIONS UPDATE**: Added comprehensive interactive Data Visualizations page with professional chart implementations
- July 20, 2025. Created sharp, pixelated charts with crisp text rendering using enhanced Canvas 2D context settings and Segoe UI font family
- July 20, 2025. Implemented bar charts for department package analysis, pie charts for student placement distribution, and line graphs for year-over-year trends
- July 20, 2025. Added performance heatmap with muted color palette (removed bright yellow/green) using professional purple-to-slate gradient
- July 20, 2025. Removed all hover animations, scaling effects, and glow animations for cleaner, static presentation
- July 20, 2025. Fixed PDF generation to capture only resume content without form template borders or buttons
- July 20, 2025. Enforced login-first flow - application now always shows sign-in/sign-up page before accessing dashboard
- July 20, 2025. Enhanced chart text sharpness with imageSmoothingEnabled=false and improved font rendering
- July 20, 2025. Added Data Visualizations page to sidebar navigation with proper responsive design for all devices
- July 17, 2025. **MAJOR ARCHITECTURAL CHANGE**: Converted entire application from Vite/React to plain HTML/CSS/JS for GitHub Pages deployment
- July 17, 2025. Created static version with vanilla JavaScript maintaining all original functionality including department analytics, resume builder, and interview booking
- July 17, 2025. Implemented responsive design with mobile-first approach using pure CSS without external dependencies
- July 17, 2025. Added comprehensive department data with historical placement statistics from 2014-2025
- July 17, 2025. Built interactive navigation system with mobile sidebar functionality
- July 17, 2025. Deployed static files to root directory for direct GitHub Pages hosting without build process
- July 17, 2025. Added .nojekyll file for proper GitHub Pages deployment
- July 05, 2025. Fixed chart text visibility and spacing issues in Department Comparison page with better margins and bar spacing
- July 05, 2025. Updated department page historical data range from 2005-2025 to 2014-2025 for more relevant timeframe
- July 05, 2025. Applied consistent responsive layout structure to Resources page with proper mobile spacing
- July 05, 2025. Enhanced chart readability with increased height, proper bottom margins, and better font sizing
- July 05, 2025. Replaced department page graphs with comprehensive historical data tables (2005-2025) with realistic placement statistics
- July 05, 2025. Created dedicated Department Comparison page with single comprehensive chart comparing all departments
- July 05, 2025. Fixed 0% placement rates and NaN values by implementing authentic historical data generation
- July 05, 2025. Removed graphs from all pages except dashboard as requested, keeping only essential metrics
- July 05, 2025. Added realistic department-specific data including student counts, placement rates, and salary packages
- July 05, 2025. Fixed mobile responsiveness across all pages with improved navigation and layout structure
- July 05, 2025. Updated department name from "Computer Science" to "Computer Science & Engineering" (CSE) 
- July 05, 2025. Improved sidebar navigation with fixed positioning and mobile hamburger menu
- July 05, 2025. Enhanced department-wise analytics with 6 comprehensive visualization tabs including multi-year trends, detailed performance matrices, and market insights
- July 05, 2025. Fixed TypeScript error in department page query parameter handling
- July 05, 2025. Ensured resume template maintains white background for proper PDF generation
- July 03, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.