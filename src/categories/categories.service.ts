import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';


@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>,
  ) {}

  findAll(): Promise<Category[]> {
    return this.categoriesRepository.find();
  }

  findOne(id: number): Promise<Category> {
    return this.categoriesRepository.findOne({ where: { id } });
  }

  create(category: Category): Promise<Category> {
    return this.categoriesRepository.save(category);
  }

  async remove(id: number): Promise<void> {
    await this.categoriesRepository.delete(id);
  }
}