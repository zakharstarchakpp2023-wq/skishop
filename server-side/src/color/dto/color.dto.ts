import { IsString } from 'class-validator'

export class ColorDto {
	@IsString({
		message: 'Потрібна назва'
	})
	name: string

	@IsString({
		message: 'Потрібне значення'
	})
	value: string
}
