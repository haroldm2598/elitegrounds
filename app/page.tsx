import { Button } from '@/components/ui/kit/button';
import Image from 'next/image';
import { FaArrowRightLong } from 'react-icons/fa6';

export default function Home() {
	return (
		<main className='bg-custom-main400'>
			<section className='min-h-screen max-w-7xl mx-auto flex relative flex-col md:flex-row items-center justify-between '>
				<section className='order-1 lg:order-0 flex'>
					<div className='w-3 h-44 bg-custom-gradient-top mr-4 rounded-sm'></div>

					<div className='space-y-4'>
						<h1 className='text-5xl font-bold text-custom-main200'>
							Welcome to
						</h1>
						<h2 className='w-40 leading-5 text-xl font-medium text-custom-main300'>
							Ran Online: Elite Grounds Ep7
						</h2>
						<h2 className='text-2xl font-medium text-custom-main200'>
							Classic Gameplay
						</h2>
						<Button
							variant='outline'
							size='lg'
							className='bg-custom-main100 text-custom-main200 hover:text-black group'
						>
							Download Now
							<span className='ml-2 transition-all ease-in-out duration-300 group-hover:translate-x-2'>
								<FaArrowRightLong />
							</span>
						</Button>
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

				<div className='h-[36rem] w-full max-w-3xl absolute z-0 -right-56 bg-custom-gradient-right rounded-md'></div>
			</section>
		</main>
	);
}
