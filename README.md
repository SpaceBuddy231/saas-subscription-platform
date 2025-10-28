# [SaaS Subscription Management Platform](https://web-fr05t47h1-spacebuddy231-7370s-projects.vercel.app/)

A comprehensive, production-ready SaaS subscription management platform built with modern technologies. This platform provides complete subscription lifecycle management, automated billing, multi-tenant architecture, and seamless Stripe integration.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)

## 🚀 Features

### Core Functionality
- **Subscription Management**: Complete lifecycle management (create, upgrade, downgrade, pause, cancel, reactivate)
- **Multi-Tier Pricing**: Support for multiple pricing tiers with customizable features and limits
- **Automated Billing**: Automatic invoice generation and payment processing via Stripe
- **Payment Processing**: Secure payment handling with PCI compliance through Stripe
- **Customer Portal**: Self-service portal for customers to manage their subscriptions
- **Usage Tracking**: Track and bill based on actual usage with configurable limits

### Technical Features
- **Multi-Tenant Architecture**: Complete tenant isolation with subdomain/custom domain support
- **RESTful API**: Well-documented API endpoints with OpenAPI/Swagger documentation
- **Webhook Integration**: Real-time Stripe webhook handling for subscription events
- **Authentication**: JWT-based authentication with refresh tokens
- **Revenue Analytics**: MRR, ARR, churn rate, and customer lifetime value tracking
- **Dunning Management**: Automatic retry logic for failed payments
- **Invoice Management**: PDF generation, download, and email delivery

## 🛠️ Technology Stack

### Backend
- **Runtime**: Node.js 18+
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB with Mongoose ODM
- **Cache**: Redis
- **Queue**: Bull (Redis-based)
- **Payment**: Stripe API
- **Authentication**: JWT (jsonwebtoken)
- **Validation**: express-validator
- **Logging**: Winston

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with Tailwind
- **State Management**: React Hooks

### DevOps
- **Containerization**: Docker & Docker Compose
- **Deployment**: Vercel (Frontend), Railway/Render (Backend)
- **CI/CD**: GitHub Actions (optional)

## 📋 Prerequisites

- Node.js 18.0.0 or higher
- MongoDB 7.0 or higher
- Redis 7.0 or higher
- Stripe account (for payment processing)
- npm or yarn package manager

## 🛠 Technologie-Stack

### Backend
- **Node.js 20.x** mit **TypeScript 5.x**
- **Express.js 4.x** für REST API
- **MongoDB 7.x** mit Mongoose
- **Stripe API 2024.x** für Zahlungen
- **Bull Queue** mit Redis für Background Jobs
- **JWT + Refresh Tokens** für Authentication
- **Winston** für Logging

### Frontend
- **React 18.x** mit **TypeScript**
- **Next.js 14.x** (App Router)
- **Tailwind CSS 3.x** mit Shadcn/ui
- **TanStack Query** für Data Fetching
- **Zustand** für State Management
- **Recharts** für Analytics

### DevOps
- **Docker & Docker Compose**
- **Redis** für Caching & Queues
- **GitHub Actions** für CI/CD

## 📦 Voraussetzungen

- **Node.js** >= 20.0.0
- **npm** >= 10.0.0
- **Docker** & **Docker Compose** (optional, aber empfohlen)
- **Stripe Account** (Test Mode für Development)
- **MongoDB** 7.x (oder via Docker)
- **Redis** 7.x (oder via Docker)

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/saas-subscription-platform.git
cd saas-subscription-platform
```

### 2. Install Dependencies

```bash
# Install backend dependencies
cd packages/api
npm install

# Install frontend dependencies
cd ../web
npm install
```

### 3. Start Services with Docker

```bash
# Start MongoDB and Redis
docker-compose up -d
```

### 4. Run the Application

**Terminal 1 - Backend:**
```bash
cd packages/api
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd packages/web
npm run dev
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:4000
- API Documentation: http://localhost:4000/api-docs

## 📁 Project Structure

```
.
├── packages/
│   ├── api/                    # Backend API
│   │   ├── src/
│   │   │   ├── config/        # Configuration files
│   │   │   ├── controllers/   # Route controllers
│   │   │   ├── middleware/    # Express middleware
│   │   │   ├── models/        # Mongoose models
│   │   │   ├── routes/        # API routes
│   │   │   ├── services/      # Business logic services
│   │   │   ├── utils/         # Utility functions
│   │   │   ├── app.ts         # Express app setup
│   │   │   └── server.ts      # Server entry point
│   │   └── package.json
│   │
│   └── web/                   # Frontend Next.js app
│       ├── src/
│       │   ├── app/           # Next.js app directory
│       │   │   ├── page.tsx   # Home page
│       │   │   ├── pricing/   # Pricing page
│       │   │   ├── login/     # Login page
│       │   │   ├── register/  # Registration page
│       │   │   └── docs/      # Documentation page
│       │   └── styles/        # Global styles
│       └── package.json
│
├── docker-compose.yml         # Docker services
├── .gitignore
└── README.md
```

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/refresh` - Refresh access token
- `POST /api/auth/verify-email` - Verify email address
- `POST /api/auth/forgot-password` - Request password reset
- `POST /api/auth/reset-password` - Reset password

### Plans
- `GET /api/plans` - List all plans
- `GET /api/plans/:id` - Get plan details
- `POST /api/plans` - Create new plan
- `PUT /api/plans/:id` - Update plan
- `DELETE /api/plans/:id` - Archive plan

### Subscriptions
- `GET /api/subscriptions` - List user subscriptions
- `GET /api/subscriptions/:id` - Get subscription details
- `POST /api/subscriptions` - Create subscription
- `PUT /api/subscriptions/:id/upgrade` - Upgrade subscription
- `PUT /api/subscriptions/:id/downgrade` - Downgrade subscription
- `PUT /api/subscriptions/:id/cancel` - Cancel subscription
- `PUT /api/subscriptions/:id/reactivate` - Reactivate subscription
- `PUT /api/subscriptions/:id/pause` - Pause subscription
- `PUT /api/subscriptions/:id/resume` - Resume subscription

### Billing
- `GET /api/billing/invoices` - List user invoices
- `GET /api/billing/invoices/:id` - Get invoice details
- `GET /api/billing/invoices/:id/download` - Download invoice PDF
- `GET /api/billing/payments` - List payment history
- `GET /api/billing/payment-methods` - List payment methods
- `POST /api/billing/payment-methods` - Add payment method
- `DELETE /api/billing/payment-methods/:id` - Remove payment method
- `PUT /api/billing/payment-methods/:id/default` - Set default payment method

### Webhooks
- `POST /api/webhooks/stripe` - Stripe webhook endpoint

## 🔐 Security Features

- JWT-based authentication with access and refresh tokens
- Password hashing with bcrypt (12 rounds)
- Input validation and sanitization
- CORS configuration
- Rate limiting
- Helmet security headers
- XSS protection
- SQL injection prevention (via Mongoose)
- Secure cookie settings
- Environment variable protection

## 📦 Deployment

### Frontend (Vercel)

1. Push your code to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy

### Backend (Railway/Render)

1. Create new project
2. Connect GitHub repository
3. Set environment variables
4. Configure MongoDB and Redis addons
5. Deploy

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Support

For support, email jo_buerger@outlook.de or open an issue in the GitHub repository.

## 🗺️ Roadmap

- [ ] Add GraphQL API
- [ ] Implement real-time notifications
- [ ] Add mobile app (React Native)
- [ ] Advanced analytics dashboard
- [ ] Multi-currency support
- [ ] Tax calculation integration
- [ ] Affiliate system
- [ ] White-label customization
- [ ] Advanced dunning strategies
- [ ] AI-powered churn prediction

---

**Made with ❤️ using Node.js, TypeScript, React & Stripe**
