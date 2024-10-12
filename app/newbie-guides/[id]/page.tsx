'use client';
import { useEffect, useState } from 'react';

import Image from 'next/image';

import { newbieData } from '@/lib/dataSample';
import { lato } from '@/lib/font';
import { CardProps } from '@/lib/definitions';

interface IdProps {
	params: {
		id: string;
	};
}

export default function NewbieIdPage({ params }: IdProps) {
	// these code will be change if im gonna use supabase instead of usestate the guide will be prisma demo folder
	const [findResult, setFindResult] = useState<CardProps | null>(null);
	const dataResult = newbieData?.find((item) => item.id === params.id);

	useEffect(() => {
		if (dataResult) {
			setFindResult(dataResult);
		} else {
			setFindResult(null);
		}
	}, [findResult, dataResult]);

	return (
		<main className={`${lato.className} bg-custom-main400`}>
			<section className='min-h-screen max-w-7xl mx-auto py-10'>
				{[dataResult]?.map((item, index) => {
					return (
						<div key={index}>
							<Image
								src={item!.imageSrc}
								height='1000'
								width='1000'
								className='h-auto w-full object-contain transform transition-transform duration-300 group-hover:scale-110'
								alt={item!.title}
							/>
						</div>
					);
				})}
			</section>
		</main>
	);
}
