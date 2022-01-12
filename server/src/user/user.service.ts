import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CryptographyService } from 'src/cryptography/cryptography.service';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private UserRepo: Repository<User>,
    private CryptographyService: CryptographyService
  ) {}

  async createNewUser(email: string, password: string): Promise<User | null> {
    const hashedPassword = await this.CryptographyService.hashStr(password);
    const newUser = this.UserRepo.create({ email, password: hashedPassword });
    const savedUser = await this.UserRepo.save(newUser);
    return savedUser;
  }
}
