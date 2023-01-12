import { Controller, HttpCode, Post } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
	@Post('register')
	async register(@Body() dto: AuthDto) {}

	@HttpCode(200)
	@Post('login')
	async login(@Body() dto: AuthDto) {}
}
