import { lato } from '@/lib/font';

import HeadingSection from '@/components/reusable/HeadingSection';
import NewbieData from '@/components/newbie-guide/NewbieData';

export const metadata = {
	title: 'Ran online Elitegrounds | Newbie Guides'
};

export default function NewbiePage() {
	return (
		<main className={`${lato.className} bg-custom-main400`}>
			<section className='min-h-screen max-w-7xl mx-auto py-10 lg:px-4 xl:px-0'>
				<HeadingSection title='Newbie Guides' />

				<section className='max-w-5xl mx-auto my-5 lg:my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-y-10'>
					<NewbieData />
				</section>
			</section>
		</main>
	);
}
