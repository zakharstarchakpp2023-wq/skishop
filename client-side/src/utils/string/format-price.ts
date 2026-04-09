export function formatPrice(price: number) {
	return price.toLocaleString('ua-UA', {
		style: 'currency',
		currency: 'UAN',
		minimumFractionDigits: 0
	})
}
