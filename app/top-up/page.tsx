import HeadingSection from '@/components/reusable/HeadingSection';
import PopupDialog from '@/components/top-up/PopupDialog';
import { Button } from '@/components/ui/button';
import { lato } from '@/lib/font';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
	title: 'Ran online Elitegrounds | Top-up'
};

export default function page() {
	return (
		<main className={`${lato.className} bg-custom-main400`}>
			<section className='min-h-screen max-w-7xl mx-auto pt-10'>
				<HeadingSection title='Top-up' />

				<section className='px-4 py-6 lg:px-0 flex flex-col lg:flex-row'>
					<div className='flex-1 space-y-2 max-w-md'>
						<h1 className='text-[2rem] font-semibold text-white'>
							How to Top-up?
						</h1>

						<div className='space-y-4'>
							<p className='text-xl font-semibold text-custom-main200'>
								Step 1: Scan the QR or manually type the provided G-Cash Account
								Numbers Below
							</p>

							<p className='text-xl font-semibold text-custom-main200'>
								Step 2: Take a screenshot of your transaction receipt
							</p>

							<p className='text-xl font-semibold text-custom-main200'>
								Step 3: Send the screenshot of your receipt to Elite Grounds
								page along with your
							</p>

							<p className='text-xl font-semibold text-custom-main200'>
								In-game Username, Amount, your G-CASH name and number.
							</p>
						</div>

						<div className='flex justify-center py-4'>
							<PopupDialog imgSrc='/images/topup/top3.png' />
						</div>

						<p className='text-xl font-semibold text-custom-main200'>
							Step 4: Go to character select and find the Top-up icon and put
							your E-POINTS CODE.
						</p>

						<div className='space-y-4'>
							<Image
								src='/images/topup/top1.png'
								alt='gcash receipt'
								width='300'
								height='500'
								className=''
							/>

							<Image
								src='/images/topup/top2.png'
								alt='gcash receipt'
								width='300'
								height='500'
								className=''
							/>
						</div>

						<div className='flex justify-center py-4'>
							<Button
								size='lg'
								className='px-16 bg-custom-main500 text-[.75rem] font-semibold uppercase shadow-2xl'
							>
								<Link href='https://www.facebook.com/elitegroundsep7'>
									send your receipt
								</Link>
							</Button>
						</div>
					</div>

					<div className='flex-1'></div>
				</section>
			</section>
		</main>
	);
}
