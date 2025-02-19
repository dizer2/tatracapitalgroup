import Image from 'next/image'
import { Button } from '../button'

import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'

export default function TeamCard({
	name,
	position,
	description,
	image,
	buttonCard,
	buttonClose,
}: {
	name: string
	position: string | undefined
	description: string | undefined
	image: string
	buttonCard: string | undefined
	buttonClose: string | undefined
}) {
	return (
		<div className='md:w-80 w-full h-96 bg-white flex flex-col items-center justify-between rounded-2xl p-5'>
			<div className='flex flex-col items-center gap-4'>
				<div className='w-36 h-36 bg-black rounded-full flex items-center justify-center'>
					<Image src={image} width={150} height={150} alt='team-member' />
				</div>

				<div className='text-black flex flex-col items-center gap-1'>
					<p className='font-medium text-3xl'>{name}</p>
					<p className='text-black text-opacity-50 text-2xl'>{position}</p>
				</div>
			</div>

			<Dialog>
				<DialogTrigger asChild>
					<Button className='w-full h-16' variant='default'>
						{buttonCard}
					</Button>
				</DialogTrigger>

				<DialogContent className='sm:max-w-md'>
					<DialogHeader className='flex flex-col items-center gap-3'>
						<Image
							src={'/images/assets/landing/team/ceo.png'}
							width={150}
							height={150}
							alt='team-member'
						/>
						<DialogTitle>{name}</DialogTitle>
						<p className='text-white text-opacity-50 text-2xl'>{position}</p>
						<DialogDescription className='font-avenir h-40 overflow-y-scroll sroll__bar'>
							{description}
						</DialogDescription>
					</DialogHeader>

					<DialogFooter className='sm:justify-end mt-4'>
						<DialogClose asChild>
							<Button type='button' variant='white' className='w-40'>
								{buttonClose}
							</Button>
						</DialogClose>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	)
}
