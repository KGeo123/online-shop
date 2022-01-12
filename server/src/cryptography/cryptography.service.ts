import { Injectable } from '@nestjs/common';
import { randomBytes, scrypt } from 'crypto';

@Injectable()
export class CryptographyService {
  salt: string;

  constructor() {
    this.salt = randomBytes(16).toString('hex');
  }

  hashStr(strToHash: string): Promise<string> {
    return new Promise((resolve, reject) => {
      scrypt(strToHash, this.salt, 32, (error, hash) => {
        if (error) return reject(error);
        const hashedString = hash.toString('hex');
        resolve(`${this.salt}:${hashedString}`);
      });
    });
  }
}
