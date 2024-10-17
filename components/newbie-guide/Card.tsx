import Image from 'next/image';
import { Button } from '../ui/kit/button';
import { CardProps } from '@/lib/definitions';
import Link from 'next/link';

export default function Card({ id, imageSrc, title, date }: CardProps) {
	return (
		<section className='bg-custom-main500 h-80 max-w-72 w-full flex flex-col rounded-md shadow-lg hover:shadow-2xl transition-all ease-in-out duration-300 overflow-hidden group border-[1px] border-solid border-custom-main600'>
			<figure className=''>
				<Image
					src={imageSrc}
					height='1500'
					width='1500'
					className='h-44 w-full object-cover transform transition-transform duration-300 group-hover:scale-110'
					alt='thumbnail'
				/>
			</figure>

			<div className='flex-1 p-2 flex flex-col justify-between'>
				<div>
					<h1 className='text-custom-main200 leading-5 font-bold text-lg uppercase'>
						{title}
					</h1>
					<h2 className='text-custom-main300 font-semibold text-sm'>{date}</h2>
				</div>

				<div>
					<Link href={`/newbie-guides/${id}`}>
						<Button className='hover:bg-primary/70'>Read more</Button>
					</Link>
				</div>
			</div>
		</section>
	);
}
