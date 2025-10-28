# 🚀 Deployment Guide - Vercel & Railway

Dieses Projekt verwendet eine **Split-Deployment Strategie**:
- **Frontend (Next.js)** → Vercel (kostenlos)
- **Backend (Node.js/Express + MongoDB + Redis)** → Railway oder Render (kostenlos)

---

## 📦 Teil 1: Backend auf Railway deployen

Railway bietet kostenloses MongoDB, Redis und Node.js Hosting.

### 1. Railway Account erstellen

1. Gehe zu [railway.app](https://railway.app)
2. Melde dich mit GitHub an
3. Klicke auf "New Project"

### 2. Services hinzufügen

```bash
# In Railway Dashboard:
1. Click "New Project" → "Empty Project"
2. Add Service → "MongoDB"
3. Add Service → "Redis"
4. Add Service → "GitHub Repo" (verbinde dein Repository)
```

### 3. Environment Variables für Backend setzen

Im Railway Dashboard → Backend Service → Variables:

```env
NODE_ENV=production
PORT=4000

# MongoDB (Railway stellt automatisch bereit)
DATABASE_URL=${{MongoDB.MONGO_URL}}

# Redis (Railway stellt automatisch bereit)
REDIS_URL=${{Redis.REDIS_URL}}

# JWT Secrets (generiere sichere Werte!)
JWT_SECRET=dein_super_sicheres_production_secret_hier
JWT_REFRESH_SECRET=anderes_super_sicheres_secret_hier
JWT_EXPIRES_IN=15m
JWT_REFRESH_EXPIRES_IN=7d

# Stripe LIVE Keys (nicht Test!)
STRIPE_SECRET_KEY=sk_live_DEIN_LIVE_SECRET_KEY
STRIPE_PUBLISHABLE_KEY=pk_live_DEIN_LIVE_PUBLISHABLE_KEY
STRIPE_WEBHOOK_SECRET=whsec_DEIN_WEBHOOK_SECRET

# Email (SendGrid)
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASSWORD=DEIN_SENDGRID_API_KEY
FROM_EMAIL=noreply@deinedomain.com
FROM_NAME=Deine Platform

# URLs
FRONTEND_URL=https://deine-app.vercel.app
API_URL=https://deine-api.railway.app

# CORS
CORS_ORIGINS=https://deine-app.vercel.app,https://www.deinedomain.com
```

### 4. Railway.json erstellen

```json
{
  "$schema": "https://railway.app/railway.schema.json",
  "build": {
    "builder": "NIXPACKS"
  },
  "deploy": {
    "startCommand": "cd packages/api && npm start",
    "restartPolicyType": "ON_FAILURE",
    "restartPolicyMaxRetries": 10
  }
}
```

### 5. Backend deployen

```bash
# Railway erkennt automatisch package.json und deployt
# URL wird generiert: z.B. https://saas-api-production.railway.app
```

---

## 🌐 Teil 2: Frontend auf Vercel deployen

### 1. Vercel Account erstellen

1. Gehe zu [vercel.com](https://vercel.com)
2. Melde dich mit GitHub an

### 2. Projekt importieren

```bash
# In Vercel Dashboard:
1. Click "Add New" → "Project"
2. Import dein GitHub Repository
3. Framework Preset: "Next.js"
4. Root Directory: "packages/web"
```

### 3. Environment Variables für Frontend setzen

Im Vercel Dashboard → Settings → Environment Variables:

```env
# Backend API URL (Railway URL von oben)
NEXT_PUBLIC_API_URL=https://saas-api-production.railway.app

# Stripe Publishable Key (LIVE Key!)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_DEIN_LIVE_PUBLISHABLE_KEY

# App Name
NEXT_PUBLIC_APP_NAME=Subscription Platform
```

### 4. Deploy Settings

```
Build Command: npm run build
Output Directory: .next
Install Command: npm install
Development Command: npm run dev
```

### 5. Deploy!

```bash
# Vercel deployed automatisch bei jedem Git Push
# URL: https://deine-app.vercel.app
```

---

## 🔧 Teil 3: Stripe Webhook konfigurieren

### 1. Stripe Dashboard

1. Gehe zu [dashboard.stripe.com](https://dashboard.stripe.com)
2. Developers → Webhooks
3. "Add endpoint"

### 2. Webhook URL

```
https://saas-api-production.railway.app/api/webhooks/stripe
```

### 3. Events auswählen

Wähle diese Events aus:
- ✅ `customer.subscription.created`
- ✅ `customer.subscription.updated`
- ✅ `customer.subscription.deleted`
- ✅ `invoice.payment_succeeded`
- ✅ `invoice.payment_failed`
- ✅ `payment_intent.succeeded`
- ✅ `payment_intent.payment_failed`

### 4. Signing Secret

1. Kopiere den "Signing secret" (beginnt mit `whsec_`)
2. Füge ihn in Railway unter `STRIPE_WEBHOOK_SECRET` ein
3. Deploye Backend neu

---

## ✅ Teil 4: Testen

### 1. Health Check

```bash
curl https://saas-api-production.railway.app/health
```

Erwartete Response:
```json
{
  "status": "ok",
  "timestamp": "2024-10-28T...",
  "uptime": 123.45
}
```

### 2. Frontend öffnen

```
https://deine-app.vercel.app
```

### 3. Test-Registration

1. Öffne `https://deine-app.vercel.app/register`
2. Registriere einen Test-User
3. Prüfe ob die API funktioniert

---

## 💰 Kostenlose Tier Limits

### Vercel (Frontend)
- ✅ **100 GB Bandwidth** / Monat
- ✅ **Unlimited** Deployments
- ✅ **Unlimited** Projekte
- ✅ SSL Certificates
- ⚠️ Serverless Functions: 100 GB-Hrs

### Railway (Backend)
- ✅ **$5 Guthaben** / Monat (kostenlos)
- ✅ **512 MB RAM** / Service
- ✅ **1 GB Disk** / Service
- ✅ MongoDB & Redis inklusive
- ⚠️ Services schlafen nach Inaktivität

**Reicht für**: ~500 Users, ~1000 Requests/Tag

---

## 🔄 Alternative: Render.com

Falls Railway nicht funktioniert, verwende Render:

### Backend auf Render

```bash
1. Gehe zu render.com
2. "New" → "Web Service"
3. Connect GitHub Repository
4. Settings:
   - Name: saas-api
   - Environment: Node
   - Build Command: cd packages/api && npm install && npm run build
   - Start Command: cd packages/api && npm start
   - Instance Type: Free
```

### MongoDB Atlas (kostenlos)

```bash
1. Gehe zu mongodb.com/cloud/atlas
2. Create Free Cluster (M0)
3. Database Access: Create User
4. Network Access: Allow All (0.0.0.0/0)
5. Kopiere Connection String
6. In Render: DATABASE_URL=mongodb+srv://...
```

### Redis (Upstash, kostenlos)

```bash
1. Gehe zu upstash.com
2. Create Redis Database (Free)
3. Copy Redis URL
4. In Render: REDIS_URL=redis://...
```

---

## 🚨 Wichtig vor Go-Live

### 1. Sicherheit

```bash
✅ Ändere alle JWT_SECRET zu starken, zufälligen Werten
✅ Verwende Stripe LIVE Keys (nicht Test Keys)
✅ Setze NODE_ENV=production
✅ Aktiviere Rate Limiting
✅ SSL/TLS überall (automatisch bei Vercel/Railway)
```

### 2. Monitoring

```bash
# Railway bietet integriertes Monitoring
# Alternativ: Sentry für Error Tracking
SENTRY_DSN=https://...@sentry.io/...
```

### 3. Email Setup

```bash
# SendGrid Account erstellen
# API Key generieren
# Domain verifizieren für bessere Zustellbarkeit
```

### 4. Custom Domain (optional)

**Vercel:**
```bash
1. Settings → Domains
2. Add Domain → deinedomain.com
3. DNS Settings in deinem Domain-Provider:
   - CNAME: www → cname.vercel-dns.com
   - A: @ → 76.76.21.21
```

**Railway:**
```bash
1. Service Settings → Domains
2. Generate Domain oder Custom Domain hinzufügen
```

---

## 🐛 Troubleshooting

### Backend startet nicht

```bash
# Railway Logs ansehen
railway logs

# Häufige Probleme:
- DATABASE_URL falsch → Check MongoDB connection string
- Port bereits belegt → Railway nutzt automatisch $PORT
- Dependencies fehlen → npm install in Build Command
```

### Frontend kann Backend nicht erreichen

```bash
# CORS Problem
- Check CORS_ORIGINS in Backend ENV
- NEXT_PUBLIC_API_URL muss Railway URL sein

# In Browser Console:
- Network Tab → Check API Calls
- Fehler: "CORS blocked" → CORS_ORIGINS anpassen
```

### Stripe Webhooks funktionieren nicht

```bash
# In Stripe Dashboard → Webhooks → dein Webhook
- Check "Recent deliveries" für Fehler
- Test mit "Send test webhook"
- Signing Secret muss in STRIPE_WEBHOOK_SECRET sein
```

---

## 📊 Deployment Status

Nach erfolgreichem Deployment:

✅ Frontend: https://deine-app.vercel.app  
✅ Backend API: https://saas-api-production.railway.app  
✅ MongoDB: Managed by Railway  
✅ Redis: Managed by Railway  
✅ Stripe Webhooks: Konfiguriert  

**Status**: 🟢 Production Ready!

---

## 🎉 Fertig!

Deine SaaS Subscription Platform ist jetzt live!

**Nächste Schritte:**
1. Erste Pläne in Stripe erstellen
2. Test-Subscription durchführen
3. Analytics Dashboard prüfen
4. Marketing starten! 🚀
