import { AppDataSource } from './data-source';
import { seedUsers } from './seeders/create-users.seed';

async function seed() {
  try {
    await AppDataSource.initialize();
    await seedUsers();
  } catch (error) {
    console.error('Error during seeding:', error);
  } finally {
    await AppDataSource.destroy();
  }
}

seed().catch((error) => console.error(error));
