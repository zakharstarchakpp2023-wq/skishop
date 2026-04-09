'use client'

import Image from 'next/image'
import { useState } from 'react'

import { Button } from '@/components/ui/Button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/components/ui/Card'
import { Form } from '@/components/ui/form-elements/Form'

import styles from './Auth.module.scss'
import { AuthFields } from './AuthFields'
import { Social } from './Social'
import { useAuthForm } from './useAuthForm'

export function Auth() {
	const [isReg, setIsReg] = useState(false)

	const { onSubmit, form, isPending } = useAuthForm(isReg)

	return (
		<div className={styles.wrapper}>
			<div className={styles.left}>
				<Image
					src='/images/auth.svg'
					alt='TeaShop auth'
					width={100}
					height={100}
				/>
			</div>
			<div className={styles.right}>
				<Card className={styles.card}>
					<CardHeader className={styles.header}>
						<CardTitle>
							{isReg ? 'Створити обліковий запис' : 'Увійти в обліковий запис'}
						</CardTitle>
						<CardDescription>
							Увійдіть або створіть обліковий запис для здійснення покупок!
						</CardDescription>
					</CardHeader>
					<CardContent className={styles.content}>
						<Form {...form}>
							<form onSubmit={form.handleSubmit(onSubmit)}>
								<AuthFields
									form={form}
									isPending={isPending}
									isReg={isReg}
								/>

								<Button disabled={isPending}>Продовжити</Button>
							</form>
						</Form>
						<Social />
					</CardContent>
					<CardFooter className={styles.footer}>
						{isReg ? 'Вже зареєстровані?' : 'Не маєте облікового запису?'}
						<button onClick={() => setIsReg(!isReg)}>
							{isReg ? 'Увійти' : 'Створити'}
						</button>
					</CardFooter>
				</Card>
			</div>
		</div>
	)
}
