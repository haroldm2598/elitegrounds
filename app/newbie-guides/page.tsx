import { Suspense } from 'react';

import HeadingSection from '@/components/reusable/HeadingSection';
import Card from '@/components/newbie-guide/Card';
import SkeletonCard from '@/components/newbie-guide/SkeletonCard';

import { newbieData } from '@/lib/dataSample';
import { lato } from '@/lib/font';

export const metadata = {
	title: 'Ran online Elitegrounds | Newbie Guides'
};

export default function NewbiePage() {
	return (
		<main className={`${lato.className} bg-custom-main400`}>
			<section className='min-h-screen max-w-7xl mx-auto py-10'>
				<HeadingSection title='Newbie Guides' />

				<section className='max-w-5xl mx-auto my-5 lg:my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-y-10'>
					{newbieData?.map((item) => {
						const { id, imageSrc, title, date } = item;
						return (
							<Suspense key={id} fallback={<SkeletonCard />}>
								<Card
									key={id}
									id={id}
									imageSrc={imageSrc}
									title={title}
									date={date}
								/>
							</Suspense>
						);
					})}
				</section>
			</section>
		</main>
	);
}
