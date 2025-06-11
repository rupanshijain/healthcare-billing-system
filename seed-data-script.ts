const { DataSource } = require('typeorm');
const mongoose = require('mongoose');

// Entities
const { Clinic } = require('./dist/clinics/clinics.entity');
const { Patient } = require('./dist/patients/patients.entity');
const { Service } = require('./dist/services/services.entity');
const { AuditLog } = require('./dist/audit-logs/audit-logs.entity');

// MongoDB Schemas
const {
  OhipCodeSchema,
} = require('./dist/ohip-codes/schemas/ohip-code.schema');
const {
  PricingRuleSchema,
} = require('./dist/config/schemas/pricing-rule.schema');

// DB Config
const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST || 'localhost',
  port: process.env.DATABASE_PORT || 5432,
  username: process.env.DATABASE_USERNAME || 'dbuser',
  password: process.env.DATABASE_PASSWORD || 'dbpass',
  database: process.env.DATABASE_NAME || 'healthcare_billing',
  synchronize: true,
});

async function seedData() {
  // Connect to PostgreSQL
  await dataSource.initialize();
  console.log('Connected to PostgreSQL');

  const clinicRepo = dataSource.getRepository(Clinic);
  const patientRepo = dataSource.getRepository(Patient);
  const serviceRepo = dataSource.getRepository(Service);
  const auditLogRepo = dataSource.getRepository(AuditLog);

  // Seed Clinics
  const clinicA = clinicRepo.create({ name: 'Clinic A', ownerId: 'owner1' });
  const clinicB = clinicRepo.create({ name: 'Clinic B', ownerId: 'owner2' });
  await clinicRepo.save([clinicA, clinicB]);
  console.log('✅ Seeded Clinics');

  // Seed Patients
  const patient1 = patientRepo.create({
    firstName: 'John',
    lastName: 'Doe',
    clinicId: clinicA.id,
  });
  const patient2 = patientRepo.create({
    firstName: 'Jane',
    lastName: 'Smith',
    clinicId: clinicB.id,
  });
  await patientRepo.save([patient1, patient2]);
  console.log('Seeded Patients');

  // Seed Services
  const service1 = serviceRepo.create({
    name: 'Physio Visit',
    price: 80,
    clinicId: clinicA.id,
  });
  const service2 = serviceRepo.create({
    name: 'Eye Exam',
    price: 120,
    clinicId: clinicB.id,
  });
  await serviceRepo.save([service1, service2]);
  console.log('Seeded Services');

  // Seed Audit Logs
  const auditLog = auditLogRepo.create({
    userId: 'staff1',
    action: 'created_clinic',
    metadata: { clinicId: clinicA.id },
  });
  await auditLogRepo.save(auditLog);
  console.log('Seeded Audit Logs');

  // Connect to MongoDB
  await mongoose.connect(
    process.env.MONGO_URI || 'mongodb://localhost:27017/healthcare_config',
  );
  console.log('Connected to MongoDB');

  const OhipCode = mongoose.model('OhipCode', OhipCodeSchema);
  const PricingRule = mongoose.model('PricingRule', PricingRuleSchema);

  // Seed OHIP Codes
  await OhipCode.create([
    {
      serviceId: service1.id,
      code: 'A001',
      description: 'Physiotherapy Session',
    },
    {
      serviceId: service2.id,
      code: 'E101',
      description: 'Comprehensive Eye Exam',
    },
  ]);
  console.log('Seeded OHIP Codes');

  // Seed Pricing Rules
  await PricingRule.create([
    {
      clinicId: clinicA.id,
      serviceId: service1.id,
      ruleType: 'discount',
      value: 10,
      description: 'Senior Discount',
    },
    {
      clinicId: clinicB.id,
      serviceId: service2.id,
      ruleType: 'override',
      value: 100,
      description: 'Insurance Covered',
    },
  ]);
  console.log('Seeded Pricing Rules');

  console.log('Seed data successfully inserted!');
  process.exit(0);
}

seedData().catch((err) => {
  console.error('Error seeding data:', err);
  process.exit(1);
});
