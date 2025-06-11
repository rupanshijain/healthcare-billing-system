Modular Healthcare Billing System
A modular NestJS-based healthcare billing system that supports:

Multi-tenant clinic setup
Business-specific pricing
Patient billing sessions
Invoice generation
OHIP code mapping (simulated)
Audit logging
Role-based access control

Backend - NestJS (TypeScript)
Relational DB - PostgreSQL
NoSQL DB - MongoDB
Auth - JWT + Email/Password
Infrastructure - Docker, Docker Compose
Docs - Swagger

swagger url - http://localhost:8000/api/docs

steps
docker-compose up -d

npm run build

node seed-data-script.js --- This inserts:

Sample clinics
Patients
Services
OHIP codes
Pricing rules
Audit logs
