import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppDataSource } from './data-source';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  async testDatabaseConnection(): Promise<string> {
    try {
      await AppDataSource.initialize();
      return 'Database connection successful!';
    } catch (error) {
      return `Database connection failed: ${error.message}`;
    }
  }

  getHello(): string {
    return 'Hello World!';
  }
}