import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';

// import {  } from '@nestjs/common';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @UseGuards(AuthGuard('jwt'))
  @Get('protected')
  getProtected() {
    return 'This route is protected';
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
