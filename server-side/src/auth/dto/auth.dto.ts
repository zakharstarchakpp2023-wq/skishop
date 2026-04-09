import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator'

export class AuthDto {
	@IsOptional()
	@IsString()
	name: string

	@IsString({
		message: 'Потрібна пошта'
	})
	@IsEmail()
	email: string

	@MinLength(6, {
		message: 'ПРоль повинна містити не менше 6 символів!'
	})
	@IsString({
		message: 'Потрібен пароль'
	})
	password: string
}
