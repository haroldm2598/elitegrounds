import { Button } from '@/components/ui/kit/button';

export default function Home() {
	return (
		<section className='min-h-screen max-w-7xl mx-auto flex items-center'>
			{/* content */}
			<div className='w-3 h-44 bg-red-500 mr-4 rounded-sm'></div>

			<section className='space-y-4'>
				<h1 className='text-5xl font-bold'>Welcome to</h1>
				<h2 className='w-40 leading-5 text-xl font-medium'>
					Ran Online: Elite Grounds Ep7
				</h2>
				<h2 className='text-2xl font-medium'>Classic Gameplay</h2>
				<Button>Download Now</Button>
			</section>

			{/* images */}
			<section></section>
		</section>
	);
}
