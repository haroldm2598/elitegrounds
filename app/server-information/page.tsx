import HeadingSection from '@/components/reusable/HeadingSection';
import TwoColumnSection from '@/components/reusable/TwoColumnSection';
import { serverInfoData } from '@/lib/dataSample';

export default function page() {
	return (
		<main className='bg-custom-main400'>
			<section className='min-h-screen max-w-7xl mx-auto pt-10'>
				<HeadingSection title='Server Information' />

				<section className='p-8'>
					<TwoColumnSection items={serverInfoData} />
				</section>
			</section>
		</main>
	);
}
