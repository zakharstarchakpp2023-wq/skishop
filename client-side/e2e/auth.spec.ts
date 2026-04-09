import { test, expect } from '@playwright/test'

test.describe('Auth page E2E', () => {
  test('перемикає форму з входу на реєстрацію', async ({ page }) => {
    await page.goto('/auth')

    await expect(
      page.getByText('Увійти в обліковий запис')
    ).toBeVisible()

    await expect(
      page.getByText('Не маєте облікового запису?')
    ).toBeVisible()

    await page.getByRole('button', { name: 'Створити', exact: true }).click()

    await expect(
      page.getByText('Створити обліковий запис')
    ).toBeVisible()

    await expect(
      page.getByText('Вже зареєстровані?')
    ).toBeVisible()
  })

  test('показує помилки валідації при порожній або невалідній формі', async ({ page }) => {
    await page.goto('/auth')

    await page.getByRole('button', { name: 'Продовжити', exact: true }).click()

    await expect(page.getByText('Пошта обовязкова')).toBeVisible()
    await expect(page.getByText('Пароль обовязковий')).toBeVisible()

    await page.getByPlaceholder('natan@examle.com').fill('wrong-email')
    await page.getByPlaceholder('******').fill('123')

    await page.getByRole('button', { name: 'Продовжити', exact: true }).click()

    await expect(page.getByText('Введіть правильну пошту')).toBeVisible()
    await expect(page.getByText('Мінімум 6 символів')).toBeVisible()
  })
})