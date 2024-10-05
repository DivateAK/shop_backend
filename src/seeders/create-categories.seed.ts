import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { CategoriesService } from '../categories/categories.service';

export async function seedCategories() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const categoriesService = app.get(CategoriesService);

  const categories = [
    { name: 'panjabi', description: 'anjabi' },
    { name: 'south-indian', description: 'south indian' },
    { name: 'maharashtrian', description: 'maharashtrian' },
  ];

  for (const category of categories) {
    await categoriesService.create(category);
  }

  await app.close();
}
