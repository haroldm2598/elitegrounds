import TestUpload from '@/components/newbie-guide/TestUpload';
import HeadingSection from '@/components/reusable/HeadingSection';

export const metadata = {
	title: 'Ran online Elitegrounds | Test Upload'
};

export default function page() {
	return (
		<section className='min-h-screen max-w-7xl mx-auto py-10 lg:px-4 xl:px-0'>
			<HeadingSection title='Test Upload with Tiny PNG' />

			<section className='max-w-5xl mx-auto my-5 lg:my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-y-10'>
				<TestUpload />
			</section>
		</section>
	);
}
