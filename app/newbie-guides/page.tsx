import Card from '@/components/newbie-guide/Card';
import HeadingSection from '@/components/reusable/HeadingSection';

export default function page() {
	return (
		<section className='min-h-screen max-w-7xl mx-auto my-10'>
			<HeadingSection title='Newbie Guides' />

			<section className='mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-y-10'>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</section>
		</section>
	);
}
