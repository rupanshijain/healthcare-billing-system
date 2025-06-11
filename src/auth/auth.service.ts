import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(loginDto: any) {
    const payload = {
      email: loginDto.email,
      sub: 'userIdHere',
      role: 'staff',
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
