'use client';
import { useEffect, useState } from 'react';

import Card from '@/components/newbie-guide/Card';
import SkeletonCard from '@/components/newbie-guide/SkeletonCard';

import { newbieData } from '@/lib/dataSample';

interface NewbieItem {
	id: string;
	imageSrc: string;
	title: string;
	date: string;
}

export default function NewbieData() {
	const [isLoading, setIsloading] = useState<boolean>(true);
	const [data, setData] = useState<NewbieItem[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			await new Promise((resolve) => setTimeout(resolve, 500));
			setData(newbieData);
			setIsloading(false);
		};

		fetchData();
	}, []);

	return (
		<>
			{isLoading
				? newbieData.map((_, index) => <SkeletonCard key={index} />)
				: data?.map((item) => {
						const { id, imageSrc, title, date } = item;

						return (
							<Card
								key={id}
								id={id}
								imageSrc={imageSrc}
								title={title}
								date={date}
							/>
						);
				  })}
		</>
	);
}
