import { ArrayMinSize, IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class ProductDto {
	@IsString({
		message: 'Потрібна назва'
	})
	@IsNotEmpty({ message: 'Назва не може бути порожньою' })
	title: string

	@IsString({ message: 'Потрібен опис' })
	@IsNotEmpty({ message: 'Опис не може бути порожнім' })
	description: string

	@IsNumber({}, { message: 'Ціна повинна бути цифрою' })
	@IsNotEmpty({ message: 'Ціна не може бути порожньою' })
	price: number

	@IsString({
		message: 'Будь ласка, вкажіть хоча б одну картинку',
		each: true
	})
	@ArrayMinSize(1, { message: 'Має бути хоча б одна картинка' })
	@IsNotEmpty({
		each: true,
		message: 'Шлях до зображення не може бути порожнім'
	})
	images: string[]

	@IsString({
		message: 'Категория обязательна'
	})
	@IsNotEmpty({ message: 'ID категории не может быть пустым' })
	categoryId: string

	@IsString({
		message: 'Потрібна категорія'
	})
	@IsNotEmpty({ message: 'Ідентифікатор кольору не може бути порожнім' })
	colorId: string
}
