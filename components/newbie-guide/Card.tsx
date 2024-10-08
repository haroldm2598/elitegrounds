import Image from 'next/image';
import { Button } from '../ui/kit/button';
import { CardProps } from '@/lib/definitions';

export default function Card({ imageSrc, title, date }: CardProps) {
	return (
		<section className='bg-custom-main500 h-80 max-w-72 w-auto flex flex-col rounded-md shadow-lg hover:shadow-2xl transition-all ease-in-out duration-300 overflow-hidden group border-[1px] border-solid border-custom-main600'>
			<div className='aspect-[2]'>
				<Image
					src={imageSrc}
					height='1000'
					width='1000'
					className='h-auto w-full transform transition-transform duration-300 group-hover:scale-110'
					alt='thumbnail'
				/>
			</div>

			<div className='flex-1 p-2 flex flex-col justify-between'>
				<div>
					<h1 className='text-custom-main200 leading-5 font-bold text-lg uppercase'>
						{title}
					</h1>
					<h2 className='text-custom-main300 font-semibold text-sm'>{date}</h2>
				</div>

				<div>
					<Button>Read more</Button>
				</div>
			</div>
		</section>
	);
}
