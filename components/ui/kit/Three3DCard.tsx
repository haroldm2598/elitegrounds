'use client';

import Image from 'next/image';
// import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

import { CardBody, CardContainer, CardItem } from '../3d-card';

interface Three3DCardProps {
	title: string;
	description?: string;
	btnName: string;
}

export function Three3DCard({ title, description, btnName }: Three3DCardProps) {
	return (
		<CardContainer className='inter-var'>
			<CardBody className='bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:max-w-sm h-auto rounded-xl p-6 border shadow-lg'>
				<CardItem translateZ='100' className='w-full mt-4'>
					<Image
						src='/images/chibi.png'
						height='1000'
						width='1000'
						className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
						alt='thumbnail'
					/>
				</CardItem>
				<CardItem
					translateZ='50'
					className='text-xl font-bold text-neutral-600 dark:text-white'
				>
					{title}
				</CardItem>
				<CardItem
					as='p'
					translateZ='60'
					className='text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300'
				>
					{description}
				</CardItem>

				<div className='flex justify-between items-center mt-20'>
					<CardItem
						translateZ={10}
						as='button'
						className='px-4 py-2 flex items-center rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold space-x-2 overflow-hidden group'
					>
						<h1 className='text-green-300'>{btnName}</h1>
						<span className='transition-all ease-in-out duration-300 group-hover:translate-x-2'>
							<FaArrowRightLong />
						</span>
					</CardItem>
				</div>
			</CardBody>
		</CardContainer>
	);
}
