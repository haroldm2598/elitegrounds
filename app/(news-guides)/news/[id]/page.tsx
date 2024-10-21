'use client';
import { useEffect, useState } from 'react';

import Image from 'next/image';
import { useParams } from 'next/navigation';

import { newsData } from '@/lib/dataSample';
import { lato } from '@/lib/font';
import { CardProps } from '@/lib/definitions';

export default function NewsPage() {
	const params = useParams<{ id: string }>();
	// these code will be change if im gonna use supabase instead of usestate the guide will be prisma demo folder
	const [findResult, setFindResult] = useState<CardProps | null>(null);
	const dataResult = newsData?.find((item) => item.id === params.id);

	useEffect(() => {
		if (dataResult) {
			setFindResult(dataResult);
		} else {
			setFindResult(null);
		}
	}, [findResult, dataResult]);

	return (
		<main className={`${lato.className} bg-custom-main400`}>
			<section className='min-h-screen max-w-7xl mx-auto py-10 px-4 md:px-0'>
				{[dataResult].map((item, index) => {
					return (
						<section
							key={index}
							className='w-full md:max-w-xl mx-auto space-y-4'
						>
							<Image
								src={item!.imageSrc}
								height='1000'
								width='1000'
								className='h-auto w-full  transform transition-transform duration-300 group-hover:scale-110'
								alt={item!.title}
							/>

							<div className='-space-y-2'>
								<h1 className='text-[1.5rem] lg:text-[2rem] font-semibold text-custom-main200 uppercase'>
									{item!.title}
								</h1>
								<h2 className='text-[1rem] lg:text-[1.5rem] font-medium text-custom-main300'>
									Ran Online Elitegrounds Server EP7
								</h2>
							</div>

							<h1 className='text-custom-main300 font-semibold opacity-60'>
								{item!.date}
							</h1>
						</section>
					);
				})}
			</section>
		</main>
	);
}
