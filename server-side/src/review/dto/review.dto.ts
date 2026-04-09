import { IsNotEmpty, IsNumber, IsString, Max, Min } from 'class-validator'

export class ReviewDto {
	@IsString({
		message: 'Текст виводу повинен бути рядком'
	})
	@IsNotEmpty({ message: 'Потрібен опис тексту' })
	text: string

	@IsNumber({}, { message: 'Рейтинг повинен бути числом' })
	@Min(1, { message: 'Мінімальний рейтинг - 1' })
	@Max(5, { message: 'Максимальна оцінка - 5' })
	@IsNotEmpty({ message: 'Повинен бути рейтинг' })
	rating: number
}
