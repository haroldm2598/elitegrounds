import HeadingSection from '@/components/reusable/HeadingSection';
import { Three3DCard } from '@/components/ui/kit/Three3DCard';

export default function page() {
	return (
		<section className='min-h-screen max-w-7xl mx-auto mt-10'>
			<HeadingSection title='Downloads' />

			<div className='flex flex-wrap justify-center  lg:gap-4'>
				<Three3DCard title='Download thru mega' btnName='download' />
				<Three3DCard title='Download thru media fire' btnName='download' />
				<Three3DCard title='Download thru google drive' btnName='download' />
			</div>
		</section>
	);
}
