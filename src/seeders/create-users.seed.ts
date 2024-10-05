// import { NestFactory } from '@nestjs/core';
// import { AppModule } from '../app.module';
// import { UsersService } from '../users/users.service';



// export async function seedUsers() {
//   const app = await NestFactory.createApplicationContext(AppModule);
//   const usersService = app.get(UsersService);

//   const users = [
//     { name: 'John Doe', email: 'john@example.com', password: 'password' },
//     { name: 'Admin', email: 'admin@example.com', password: 'password' },
//   ];

//   for (const user of users) {
//     await usersService.create(user);
//     console.log(`User ${user.name} has been created`);
//   }

//   await app.close();
//   console.log('Seeding complete');
// }


/* import { NestFactory } from "@nestjs/core";
import { AppModule } from "src/app.module";
import { UsersService } from "src/users/users.service";

export async function seedUsers() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const usersService = app.get(UsersService);

  try {
    const users = [
      { name: 'John Doe', email: 'john@example.com', password: 'password' },
      { name: 'Admin', email: 'admin@example.com', password: 'password' },
    ];

    for (const user of users) {
      try {
        await usersService.create(user);
        console.log(`User ${user.name} has been created`);
      } catch (error) {
        console.error(`Error creating user ${user.name}:`, error);
      }
    }

    console.log('Seeding complete');
  } catch (error) {
    console.error('Error during seeding:', error);
  } finally {
    await app.close();
  }
}
seedUsers(); */

/*  "seed": "ts-node -r tsconfig-paths/register src/seed.ts" */

import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { UsersService } from '../users/users.service';

export async function seedUsers() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const usersService = app.get(UsersService);

  try {
    const users = [
      { name: 'John Doe', email: 'john@example.com', password: 'password', role: 'user'  },
      { name: 'Admin', email: 'admin@example.com', password: 'password', role: 'admin' },
    ];

    for (const user of users) {
      try {
        const createdUser = await usersService.create(user);
        console.log(`User ${createdUser.name} has been created with ID: ${createdUser.id}`);
      } catch (error) {
        console.error(`Error creating user ${user.name}:`, error.message);
      }
    }

    console.log('Seeding complete');
  } catch (error) {
    console.error('Error during seeding:', error.message);
  } finally {
    await app.close();
  }
}

seedUsers();
// Run the seed script using the following command:     npm run seed