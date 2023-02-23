import { SuccessInterceptor } from './interceptors/success.interceptor';
import { UsersService } from './users/users.service';
import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
@UseInterceptors(SuccessInterceptor)
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly usersService: UsersService,
  ) {}

  @Get()
  getHello(): string {
    console.log('여기요 여기!!');
    return this.appService.getHello();
  }

  @Get('/test')
  test(): string {
    return this.usersService.findAll();
  }
}
