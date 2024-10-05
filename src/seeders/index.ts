import { seedCategories } from './create-categories.seed';
import { seedUsers } from './create-users.seed';

async function runSeeders() {
  await seedUsers();
  await seedCategories();
}

runSeeders()
  .then(() => {
    console.log('Seeding complete');
  })
  .catch((error) => {
    console.error('Seeding failed', error);
  });
