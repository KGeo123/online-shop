import { Body, Controller, Post } from '@nestjs/common';
import { SignUpDto } from './dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('sign-up')
  signUp(@Body() { email, password }: SignUpDto): Promise<User> {
    console.log('hello')
    return this.userService.createNewUser(email, password);
  }
}
