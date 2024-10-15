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
			<section className='min-h-screen max-w-7xl mx-auto py-10 px-4 md:px-0'>
				{[dataResult]?.map((item, index) => {
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

							{item!.description &&
								item!.description.map((item, index) => {
									return (
										<section
											className='text-2xl text-white font-semibold'
											key={index}
										>
											<h1>{item.title}</h1>

											<section>
												{item.contents.map((item, index) => {
													return (
														<section key={index} className='flex items-center'>
															<span className='inline-block w-3 h-3 bg-green-800 rounded-full mr-3 shadow-md'></span>
															<h1 className='text-lg text-custom-main300 font-medium'>
																{item.value}
															</h1>
														</section>
													);
												})}
											</section>
										</section>
									);
								})}
							{/* 

							tapos gawa ako ng nullish operator hindi naman kasi lahat ng array meron non
							ito yung way na may color green na bullet point
							<section key={index} className='flex items-center'>
								<span className='inline-block w-3 h-3 bg-green-800 rounded-full mr-3 shadow-md'></span>
								<h1 className='text-custom-main200'>{item.infoName}</h1>
							</section>
							*/}
						</section>
					);
				})}
			</section>
		</main>
	);
}
