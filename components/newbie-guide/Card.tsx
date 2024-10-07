import Image from 'next/image';
import { Button } from '../ui/kit/button';

interface CardProps {
	imageSrc: string;
}

export default function Card({ imageSrc }: CardProps) {
	return (
		<div className='bg-custom-main400 h-80 max-w-xs w-auto rounded-md shadow-lg overflow-hidden'>
			<div className='flex flex-col'>
				<Image
					src={imageSrc}
					height='1000'
					width='1000'
					className='h-auto w-full object-fill'
					alt='thumbnail'
				/>

				<div className='p-2 h-auto flex flex-col justify-between'>
					<h1 className='text-white font-semibold text-xl'>title</h1>

					<div className='self-end'>
						<Button>Read more..</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
