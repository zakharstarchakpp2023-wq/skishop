import { IsString } from 'class-validator'

export class CreateStoreDto {
	@IsString({
		message: 'Потрібна назва'
	})
	title: string
}
