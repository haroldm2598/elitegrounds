import HeadingSection from '@/components/reusable/HeadingSection';
import { Three3DCard } from '@/components/ui/kit/Three3DCard';

const downloadSource = [
	{ name: 'mediafire', link: '/' },
	{ name: 'google drive', link: '/server-information' },
	{ name: 'mega', link: '/newbie-guides' }
];

export default function page() {
	return (
		<main className='bg-custom-main400'>
			<section className='min-h-screen max-w-7xl mx-auto pt-10'>
				<HeadingSection title='Downloads' />

				<div className=''>
					<Three3DCard
						title='download full client version and register via game launcher'
						downloadSource={downloadSource}
					/>
				</div>
			</section>
		</main>
	);
}
