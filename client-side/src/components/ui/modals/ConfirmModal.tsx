import { PropsWithChildren } from 'react'

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger
} from '../AlertDialog'

interface ConfirmModalProps {
	handleClick: () => void
}

export function ConfirmModal({
	children,
	handleClick
}: PropsWithChildren<ConfirmModalProps>) {
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Ви впевнені?</AlertDialogTitle>
					<AlertDialogDescription>
						Цю дію неможливо скасувати.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Закрыть</AlertDialogCancel>
					<AlertDialogAction
						className='bg-blue-500 hover:bg-blue-500/90'
						onClick={() => handleClick()}
					>
						Продовжити
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}
