# BMSCE Placement Portal

## Overview

This is a full-stack web application built for BMS College of Engineering's placement portal. The application provides students with placement statistics, resume building tools, mock interview scheduling, and alumni networking features. It's built using a modern tech stack with React on the frontend and Express.js on the backend.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom theme configuration
- **UI Components**: Radix UI primitives with custom shadcn/ui components
- **State Management**: React Query (TanStack Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: Passport.js with local strategy and bcrypt password hashing
- **Session Management**: Express sessions with PostgreSQL session store
- **API Design**: RESTful API with JSON responses
- **CORS**: Configured for Replit hosting with appropriate origin handling

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

- July 05, 2025. Enhanced department-wise analytics with 6 comprehensive visualization tabs including multi-year trends, detailed performance matrices, and market insights
- July 05, 2025. Fixed TypeScript error in department page query parameter handling
- July 05, 2025. Ensured resume template maintains white background for proper PDF generation
- July 03, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.