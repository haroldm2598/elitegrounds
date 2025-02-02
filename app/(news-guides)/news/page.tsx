import NewbieData from '@/components/newbie-guide/NewbieData';
import HeadingSection from '@/components/reusable/HeadingSection';

import { newsData } from '@/lib/dataSample';

export const metadata = {
	title: 'Ran online Elitegrounds | News'
};

export default function page() {
	return (
		<section className='min-h-screen max-w-7xl mx-auto py-10 lg:px-4 xl:px-0'>
			<HeadingSection title='News' />

			<section className='max-w-5xl mx-auto my-5 lg:my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-y-10'>
				<NewbieData dataArr={newsData} />
			</section>
		</section>
	);
}
