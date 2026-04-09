import { EnumOrderStatus } from '@prisma/client'
import { Type } from 'class-transformer'
import {
	IsArray,
	IsEnum,
	IsNumber,
	IsOptional,
	IsString,
	ValidateNested
} from 'class-validator'

export class OrderDto {
	@IsOptional()
	@IsEnum(EnumOrderStatus, {
		message: 'Потрібен статус замовлення'
	})
	status: EnumOrderStatus

	@IsArray({
		message: 'Немає товару в замовленні'
	})
	@ValidateNested({ each: true })
	@Type(() => OrderItemDto)
	items: OrderItemDto[]
}

export class OrderItemDto {
	@IsNumber({}, { message: 'Кількість має бути числом' })
	quantity: number

	@IsNumber({}, { message: 'Ціна повинна бути цифрою' })
	price: number

	@IsString({ message: 'Ідентифікатор продукту повинен бути рядком' })
	productId: string

	@IsString({ message: 'Ідентифікатор магазину повинен бути рядковим' })
	storeId: string
}
