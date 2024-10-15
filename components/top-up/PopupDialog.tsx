import Image from 'next/image';
import { Button } from '../ui/button';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTrigger
} from '../ui/dialog';

interface PopupDialog {
	imgSrc: string;
}

export default function PopupDialog({ imgSrc }: PopupDialog) {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					size='lg'
					className='px-16 bg-custom-main500 text-[.75rem] font-semibold uppercase shadow-2xl'
				>
					Show Image
				</Button>
			</DialogTrigger>
			<DialogContent className='w-[20rem] md:max-w-md md:w-full rounded-sm'>
				<DialogHeader>
					<div className='px-4'>
						<Image
							src={imgSrc}
							alt='gcash receipt'
							width='320'
							height='500'
							className='w-full'
						/>
					</div>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}
