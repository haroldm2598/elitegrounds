'use client';
import { useEffect, useState } from 'react';

import Image from 'next/image';
import { useParams } from 'next/navigation';

import { guideData } from '@/lib/dataSample';
import { lato } from '@/lib/font';
import { CardProps } from '@/lib/definitions';

export default function GuidePage() {
	const params = useParams<{ id: string }>();
	// these code will be change if im gonna use supabase instead of usestate the guide will be prisma demo folder
	const [findResult, setFindResult] = useState<CardProps | null>(null);
	const dataResult = guideData?.find((item) => item.id === params.id);

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
					const descriptions = item?.descriptions;

					if (Array.isArray(descriptions)) {
						const midIndex = Math.ceil(descriptions.length / 2);
						const firstColumn = descriptions.slice(0, midIndex);
						const secondColumn = descriptions.slice(midIndex);

						return (
							<>
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

								{item!.descriptions && (
									<section className='my-10 flex flex-col lg:flex-row justify-center lg:gap-32'>
										<section className='space-y-4'>
											{firstColumn?.map((description, index) => {
												return (
													<section
														className='text-2xl text-white font-semibold'
														key={index}
													>
														<h1>{description.title}</h1>

														<section>
															{description.contents.map((content, index) => {
																return (
																	<section
																		key={index}
																		className='flex items-center'
																	>
																		<span className='inline-block w-3 h-3 bg-green-800 rounded-full mr-3 shadow-md'></span>
																		<h1 className='text-lg text-custom-main300 font-medium'>
																			{content.value}
																		</h1>
																	</section>
																);
															})}
														</section>
													</section>
												);
											})}
										</section>

										<section className='space-y-4'>
											{secondColumn?.map((description, index) => {
												return (
													<section
														className='text-2xl text-white font-semibold'
														key={index}
													>
														<h1>{description.title}</h1>

														<section>
															{description.contents.map((content, index) => {
																return (
																	<section
																		key={index}
																		className='flex items-center'
																	>
																		<span className='inline-block w-3 h-3 bg-green-800 rounded-full mr-3 shadow-md'></span>
																		<h1 className='text-lg text-custom-main300 font-medium'>
																			{content.value}
																		</h1>
																	</section>
																);
															})}
														</section>
													</section>
												);
											})}
										</section>
									</section>
								)}
							</>
						);
					}

					return <h1 key={index}>not an Array</h1>;
				})}
			</section>
		</main>
	);
}
