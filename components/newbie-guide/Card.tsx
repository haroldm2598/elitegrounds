import Image from 'next/image';
import { Button } from '../ui/kit/button';

interface CardProps {
	imageSrc: string;
}

export default function Card({ imageSrc }: CardProps) {
	return (
		<section className='bg-custom-main500 h-80 max-w-xs w-auto flex flex-col rounded-md shadow-lg hover:shadow-2xl transition-all ease-in-out duration-300 overflow-hidden group border-2 border-custom-main600'>
			<Image
				src={imageSrc}
				height='1000'
				width='1000'
				className='h-auto w-full object-fill transform transition-transform duration-300 group-hover:scale-110'
				alt='thumbnail'
			/>

			<div className='flex-1 p-2 flex flex-col justify-between'>
				<div className='-space-y-1'>
					<h1 className='text-custom-main200 font-bold text-lg uppercase'>
						title
					</h1>
					<h2 className='text-custom-main300 font-semibold text-sm'>
						02/12/24
					</h2>
				</div>

				<div className=''>
					<Button>Read more</Button>
				</div>
			</div>
		</section>
	);
}
