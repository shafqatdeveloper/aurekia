# Ecommerce Pro

A highly scalable, professional-grade E-commerce platform built with Next.js 15+, Tailwind CSS 4, and MongoDB.

## Architecture

This project follow a **Feature-Based Architecture**, ensuring high scalability and maintainability for large-scale applications.

### Directory Structure

- `src/features/`: Domain-driven features (Auth, Products, Cart, etc.).
- `src/components/ui/`: Atomic, reusable UI components.
- `src/lib/`: Shared library configurations and utilities.
- `src/models/`: Mongoose database models.
- `src/services/`: API client service layer.
- `src/store/`: Global state management.
- `src/types/`: Shared TypeScript interfaces.
- `src/styles/`: Global CSS and theme configurations.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
- **Auth**: [NextAuth.js](https://next-auth.js.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Validation**: [Zod](https://zod.dev/) & [React Hook Form](https://react-hook-form.com/)

## Getting Started

1. **Clone the repository**
2. **Install dependencies**: `npm install`
3. **Configure environment variables**: Copy `.env.example` to `.env.local` and fill in your details.
4. **Run development server**: `npm run dev`

## Linting and Quality

Run `npm run lint` to ensure code quality standards are met.
