import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('CategoriesController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/categories (GET)', () => {
    return request(app.getHttpServer())
      .get('/categories')
      .expect(200)
      .expect('Content-Type', /json/);
  });

  it('/categories/:id (GET)', () => {
    return request(app.getHttpServer())
      .get('/categories/1')
      .expect(200)
      .expect('Content-Type', /json/);
  });

  it('/categories (POST)', () => {
    return request(app.getHttpServer())
      .post('/categories')
      .send({ name: 'Test Category', description: 'Test Description' })
      .expect(201)
      .expect('Content-Type', /json/);
  });

  it('/categories/:id (DELETE)', () => {
    return request(app.getHttpServer())
      .delete('/categories/1')
      .expect(200);
  });
});