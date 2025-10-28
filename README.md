# SaaS Subscription Management Platform

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

### 3. Environment Configuration

Create `.env` files in both `packages/api` and `packages/web`:

**Backend (`packages/api/.env`):**
```env
# Server
NODE_ENV=development
PORT=4000

# Database
MONGODB_URI=mongodb://localhost:27017/subscription_platform

# Redis
REDIS_URL=redis://localhost:6379

# JWT
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_REFRESH_SECRET=your-refresh-token-secret-change-this
JWT_EXPIRES_IN=15m
JWT_REFRESH_EXPIRES_IN=7d

# Stripe
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret

# App
APP_NAME=Subscription Platform
APP_URL=http://localhost:3000
API_URL=http://localhost:4000
```

**Frontend (`packages/web/.env.local`):**
```env
NEXT_PUBLIC_API_URL=http://localhost:4000
NEXT_PUBLIC_APP_NAME=Subscription Platform
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key
```

### 4. Start Services with Docker

```bash
# Start MongoDB and Redis
docker-compose up -d
```

### 5. Run the Application

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

For support, email support@example.com or open an issue in the GitHub repository.

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

Made with ❤️ by the development team
FRONTEND_URL=http://localhost:3000

# JWT Secrets (WICHTIG: In Production ändern!)
JWT_SECRET=your_super_secure_jwt_secret_change_in_production
JWT_REFRESH_SECRET=your_super_secure_refresh_secret_change_in_production

# Stripe Configuration
STRIPE_SECRET_KEY=sk_test_... (siehe Stripe Setup)
STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Email Configuration (SendGrid)
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASSWORD=your_sendgrid_api_key
FROM_EMAIL=noreply@yourapp.com

# Frontend
NEXT_PUBLIC_API_URL=http://localhost:4000
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
```

## 💳 Stripe Setup

### 1. Stripe Account erstellen

1. Registriere dich bei [Stripe](https://stripe.com)
2. Aktiviere **Test Mode** (oben rechts Toggle)

### 2. API Keys erhalten

1. Gehe zu **Developers** → **API keys**
2. Kopiere:
   - **Publishable key** (beginnt mit `pk_test_`)
   - **Secret key** (beginnt mit `sk_test_`)
3. Trage diese in `.env` ein

### 3. Webhook einrichten

```bash
# Stripe CLI installieren (optional, für lokale Entwicklung)
# https://stripe.com/docs/stripe-cli

# Webhook URL in Stripe Dashboard registrieren
# URL: https://your-domain.com/api/webhooks/stripe
```

**Wichtige Events:**
- `customer.subscription.created`
- `customer.subscription.updated`
- `customer.subscription.deleted`
- `invoice.payment_succeeded`
- `invoice.payment_failed`
- `payment_intent.succeeded`
- `payment_intent.payment_failed`

### 4. Webhook Secret erhalten

1. Gehe zu **Developers** → **Webhooks**
2. Klicke auf deinen Webhook
3. Kopiere **Signing secret** (beginnt mit `whsec_`)
4. Trage in `.env` als `STRIPE_WEBHOOK_SECRET` ein

### 5. Test-Kreditkarten

Für Tests verwende:
- **Erfolgreich**: `4242 4242 4242 4242`
- **Fehlschlag**: `4000 0000 0000 0002`
- **3D Secure**: `4000 0027 6000 3184`
- **Ablaufdatum**: Beliebiges zukünftiges Datum
- **CVC**: Beliebige 3 Ziffern

## 🏗️ Entwicklung

### Backend API

```bash
cd packages/api

# Development Server mit Hot Reload
npm run dev

# Build für Production
npm run build

# Production Server starten
npm start

# Tests ausführen
npm test

# Linting
npm run lint
```

### Frontend Web App

```bash
cd packages/web

# Development Server
npm run dev

# Build für Production
npm run build

# Production Server starten
npm start
```

### Verfügbare Endpoints

**API Base URL**: `http://localhost:4000/api`

#### Authentication
- `POST /auth/register` - Benutzer registrieren
- `POST /auth/login` - Login
- `POST /auth/refresh` - Token erneuern
- `POST /auth/logout` - Logout
- `GET /auth/me` - Aktueller Benutzer

#### Plans
- `GET /plans` - Alle Pläne
- `POST /plans` - Plan erstellen (Admin)
- `PATCH /plans/:id` - Plan aktualisieren (Admin)

#### Subscriptions
- `GET /subscriptions` - Meine Subscriptions
- `POST /subscriptions` - Subscription erstellen
- `PATCH /subscriptions/:id/upgrade` - Upgrade
- `PATCH /subscriptions/:id/cancel` - Kündigen

#### Billing
- `GET /billing/invoices` - Alle Rechnungen
- `GET /billing/invoices/:id/download` - Rechnung herunterladen
- `GET /billing/payment-methods` - Zahlungsmethoden

#### Analytics (Admin)
- `GET /analytics/overview` - Dashboard Overview
- `GET /analytics/mrr` - Monthly Recurring Revenue
- `GET /analytics/churn` - Churn Rate

## 📊 Datenbankschema

### Collections

```
tenants        - Multi-Tenant Konfiguration
users          - Benutzer (Customers + Admins)
plans          - Subscription Pläne
subscriptions  - Aktive Subscriptions
invoices       - Rechnungen
payments       - Zahlungen
usage          - Usage Tracking für metered billing
webhooklogs    - Webhook Event Logs
```

## 🧪 Testing

### Unit Tests

```bash
npm test
```

### Integration Tests

```bash
npm run test:integration
```

### E2E Tests

```bash
npm run test:e2e
```

### Test Coverage

```bash
npm run test:coverage
```

## 🚢 Deployment

### Docker Production Build

```bash
# Images bauen
docker-compose -f docker-compose.prod.yml build

# Container starten
docker-compose -f docker-compose.prod.yml up -d
```

### Umgebungsvariablen (Production)

**WICHTIG**: In Production folgende Werte ändern:
- `NODE_ENV=production`
- `JWT_SECRET` - Starkes Secret generieren
- `JWT_REFRESH_SECRET` - Starkes Secret generieren
- Stripe **Live Keys** verwenden (`sk_live_...`, `pk_live_...`)
- `DATABASE_URL` - Production MongoDB
- `REDIS_URL` - Production Redis

### Health Checks

```bash
# API Health Check
curl http://localhost:4000/health

# Erwartete Response:
# {"status":"ok","timestamp":"...","uptime":123.45}
```

## 📖 API Dokumentation

Die vollständige API-Dokumentation ist verfügbar unter:

```
http://localhost:4000/api-docs
```

(Swagger/OpenAPI Interface)

## 🏛️ Architektur

### Folder Structure

```
packages/
├── api/                    # Backend API
│   ├── src/
│   │   ├── config/        # Konfiguration
│   │   ├── models/        # Mongoose Models
│   │   ├── routes/        # Express Routes
│   │   ├── controllers/   # Request Handler
│   │   ├── services/      # Business Logic
│   │   ├── middleware/    # Express Middleware
│   │   ├── jobs/          # Background Jobs
│   │   ├── utils/         # Utility Functions
│   │   └── index.ts       # Entry Point
│   └── tests/             # Tests
├── web/                    # Frontend
│   ├── app/               # Next.js App Router
│   ├── components/        # React Components
│   ├── lib/               # Utilities
│   └── public/            # Static Assets
└── shared/                # Shared Types/Utils
```

### Design Patterns

- **Repository Pattern** für Datenbank-Zugriff
- **Service Layer** für Business Logic
- **Factory Pattern** für Object Creation
- **Observer Pattern** für Webhooks

## 🔐 Sicherheit

### Implementierte Security Features

- **HTTPS Only** (TLS 1.3)
- **Helmet.js** für HTTP Headers
- **CORS** konfiguriert
- **Rate Limiting** auf allen Endpoints
- **JWT + Refresh Token** Rotation
- **Password Hashing** mit bcrypt (12 rounds)
- **Input Validation** mit express-validator
- **SQL/NoSQL Injection** Prevention
- **XSS Protection**

### GDPR Compliance

- User Data Export
- Right to be Forgotten (Delete Account)
- Cookie Consent
- Privacy Policy & Terms

## 🐛 Troubleshooting

### MongoDB Connection Error

```bash
# Prüfe ob MongoDB läuft
docker ps

# Logs ansehen
docker logs subscription_mongodb
```

### Stripe Webhook nicht erhalten

1. Prüfe Webhook URL in Stripe Dashboard
2. Teste mit Stripe CLI:
   ```bash
   stripe listen --forward-to localhost:4000/api/webhooks/stripe
   ```

### Port bereits belegt

```bash
# Windows: Port 4000 freigeben
netstat -ano | findstr :4000
taskkill /PID <PID> /F
```

## 📚 Nächste Schritte

Um das Projekt zu vervollständigen, müssen noch folgende Dateien implementiert werden:

### Backend Controllers (packages/api/src/controllers/)
- ✅ `auth.controller.ts` - Authentication Logic
- ✅ `subscription.controller.ts` - Subscription Management
- ✅ `billing.controller.ts` - Billing & Invoices
- ✅ `plan.controller.ts` - Plan Management
- ✅ `customer.controller.ts` - Customer Management
- ✅ `analytics.controller.ts` - Analytics & Reporting
- ✅ `webhook.controller.ts` - Stripe Webhook Handler

### Background Jobs (packages/api/src/jobs/)
- ⏳ `dunning.job.ts` - Failed Payment Retry Logic
- ⏳ `invoice.job.ts` - Invoice Generation
- ⏳ `analytics.job.ts` - Analytics Calculation
- ⏳ `email.job.ts` - Email Sending

### Email Service (packages/api/src/services/)
- ⏳ `email.service.ts` - Nodemailer Setup
- ⏳ Email Templates (Handlebars)

### Frontend (packages/web/)
- ⏳ Next.js Setup & Configuration
- ⏳ Dashboard Components
- ⏳ Customer Portal Components
- ⏳ Analytics Charts
- ⏳ Authentication Pages

## 🤝 Contributing

Pull Requests sind willkommen! Für größere Änderungen bitte zuerst ein Issue erstellen.

## 📄 Lizenz

Dieses Projekt ist unter der MIT License lizenziert.

## 👨‍💻 Support

Bei Fragen oder Problemen:
- **Email**: support@yourapp.com
- **GitHub Issues**: [Issues erstellen](https://github.com/your-repo/issues)
- **Dokumentation**: [Wiki](https://github.com/your-repo/wiki)

---

**Made with ❤️ using Node.js, TypeScript, React & Stripe**
