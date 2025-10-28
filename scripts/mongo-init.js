// MongoDB Initialization Script
db = db.getSiblingDB('subscription_platform');

// Create collections with validation
db.createCollection('tenants', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['name', 'slug', 'createdAt'],
      properties: {
        name: { bsonType: 'string' },
        slug: { bsonType: 'string' },
        domain: { bsonType: 'string' },
        stripeAccountId: { bsonType: 'string' },
        branding: { bsonType: 'object' },
        settings: { bsonType: 'object' },
        createdAt: { bsonType: 'date' }
      }
    }
  }
});

db.createCollection('users');
db.createCollection('plans');
db.createCollection('subscriptions');
db.createCollection('invoices');
db.createCollection('payments');
db.createCollection('usage');
db.createCollection('webhooklogs');

// Create indexes
db.tenants.createIndex({ slug: 1 }, { unique: true });
db.tenants.createIndex({ domain: 1 }, { unique: true, sparse: true });

db.users.createIndex({ email: 1, tenantId: 1 }, { unique: true });
db.users.createIndex({ tenantId: 1 });
db.users.createIndex({ createdAt: -1 });

db.plans.createIndex({ tenantId: 1 });
db.plans.createIndex({ stripePriceId: 1 }, { unique: true, sparse: true });
db.plans.createIndex({ isActive: 1 });

db.subscriptions.createIndex({ userId: 1 });
db.subscriptions.createIndex({ tenantId: 1 });
db.subscriptions.createIndex({ stripeSubscriptionId: 1 }, { unique: true, sparse: true });
db.subscriptions.createIndex({ status: 1 });
db.subscriptions.createIndex({ currentPeriodEnd: 1 });

db.invoices.createIndex({ userId: 1 });
db.invoices.createIndex({ tenantId: 1 });
db.invoices.createIndex({ stripeInvoiceId: 1 }, { unique: true, sparse: true });
db.invoices.createIndex({ createdAt: -1 });

db.payments.createIndex({ userId: 1 });
db.payments.createIndex({ invoiceId: 1 });
db.payments.createIndex({ status: 1 });
db.payments.createIndex({ createdAt: -1 });

db.usage.createIndex({ userId: 1, subscriptionId: 1, metricName: 1, timestamp: -1 });
db.usage.createIndex({ tenantId: 1, timestamp: -1 });

db.webhooklogs.createIndex({ createdAt: -1 });
db.webhooklogs.createIndex({ source: 1, status: 1 });

print('✅ MongoDB initialization completed successfully');
