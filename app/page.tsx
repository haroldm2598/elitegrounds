import { Button } from '@/components/ui/kit/button';
import Image from 'next/image';

export default function Home() {
	return (
		<section className='min-h-screen max-w-7xl mx-auto flex relative flex-col md:flex-row items-center justify-between'>
			<section className='order-1 lg:order-0 flex'>
				<div className='w-3 h-44 bg-red-500 mr-4 rounded-sm'></div>

				<div className='space-y-4'>
					<h1 className='text-5xl font-bold'>Welcome to</h1>
					<h2 className='w-40 leading-5 text-xl font-medium'>
						Ran Online: Elite Grounds Ep7
					</h2>
					<h2 className='text-2xl font-medium'>Classic Gameplay</h2>
					<Button>Download Now</Button>
				</div>
			</section>

			<section className='order-0 lg:order-1'>
				<Image
					src='/images/chibi.png'
					alt='Chibi characters'
					width={1000}
					height={600}
					className='w-full h-auto max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl relative z-50'
				/>
			</section>

			<div className='h-[36rem] w-full max-w-3xl absolute z-0 -right-56 bg-red-400 rounded-md'></div>
		</section>
	);
}
