import HeadingSection from '@/components/reusable/HeadingSection';
import { Three3DCard } from '@/components/ui/kit/Three3DCard';
import { downloadSource } from '@/lib/dataSample';
import { lato } from '@/lib/font';

export const metadata = {
	title: 'Ran online Elitegrounds | Downloads'
};

export default function page() {
	return (
		<main className={`${lato.className} bg-custom-main400`}>
			<section className='min-h-screen max-w-7xl mx-auto pt-10'>
				<HeadingSection title='Downloads' />

				<div>
					<Three3DCard
						title='download full client version and register via game launcher'
						downloadSource={downloadSource}
					/>
				</div>
			</section>
		</main>
	);
}
