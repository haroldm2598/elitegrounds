import { FaArrowRightLong } from 'react-icons/fa6';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/kit/button';

import { lato } from '@/lib/font';

export default function Home() {
	return (
		<main className={`${lato.className} bg-custom-main400 overflow-hidden`}>
			<section className='min-h-screen max-w-7xl py-10 lg:py-0 mx-auto flex relative flex-col lg:flex-row items-center lg:justify-between '>
				<section className='order-1 lg:order-0 flex py-10 lg:py-0 pl-6 xl:pl-0'>
					<div className='w-3 h-44 bg-custom-gradient-top mr-4 my-auto rounded-sm'></div>

					<div className='space-y-6'>
						<div className='space-y-2'>
							<h1 className='text-5xl font-bold text-custom-main200'>
								Welcome to
							</h1>
							<h2 className='w-40 leading-5 text-xl font-medium text-custom-main300'>
								Ran Online: Elite Grounds Ep7
							</h2>
						</div>

						<div className='space-y-2'>
							<h2 className='text-2xl font-medium text-custom-main200'>
								Classic Gameplay
							</h2>
							<Button
								variant='outline'
								size='lg'
								className='hidden lg:block bg-custom-main100 text-custom-main200 hover:text-black group'
							>
								<Link href='/downloads' className='flex items-center'>
									<span className='font-semibold'>Download Now</span>
									<span className='ml-2 transition-all ease-in-out duration-300 group-hover:translate-x-2'>
										<FaArrowRightLong />
									</span>
								</Link>
							</Button>

							<Button
								variant='outline'
								size='lg'
								className='block lg:hidden bg-custom-main100 text-custom-main200 hover:text-black group'
							>
								Download on Desktop
							</Button>
						</div>
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
				<div className='h-[36rem] w-full max-w-3xl hidden lg:block lg:absolute z-0 bottom-auto -right-56 bg-custom-gradient-right md:rounded-none lg:rounded-md'></div>
			</section>
		</main>
	);
}
