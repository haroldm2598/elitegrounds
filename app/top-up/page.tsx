import Image from 'next/image';
import Link from 'next/link';

import HeadingSection from '@/components/reusable/HeadingSection';
import HeadingTitle from '@/components/reusable/HeadingTitle';
import ParagraphContent from '@/components/reusable/ParagraphContent';
import PopupDialog from '@/components/top-up/PopupDialog';
import { Button } from '@/components/ui/button';

import { lato } from '@/lib/font';

export const metadata = {
	title: 'Ran online Elitegrounds | Top-up'
};

export default function page() {
	return (
		<main className={`${lato.className} bg-custom-main400`}>
			<section className='min-h-screen max-w-7xl mx-auto pt-10 lg:px-4 xl:px-0'>
				<HeadingSection title='Top-up' />

				<section className='px-4 py-10 lg:px-0 lg:py-6 w-full flex flex-col lg:flex-row gap-0 lg:gap-40'>
					<section className='flex-1 space-y-2 max-w-md'>
						<HeadingTitle title='How to Top-up?' />

						<div className='space-y-4 max-w-md w-full'>
							<ParagraphContent
								content='Step 1: Scan the QR or manually type the provided G-Cash Account
								Numbers Below'
							/>
							<ParagraphContent content='Step 2: Take a screenshot of your transaction receipt' />
							<ParagraphContent
								content='Step 3: Send the screenshot of your receipt to Elite Grounds
								page along with your'
							/>
							<ParagraphContent content='In-game Username, Amount, your G-CASH name and number.' />
						</div>

						<div className='flex justify-center py-4'>
							<PopupDialog imgSrc='/images/topup/top3.png' />
						</div>

						<ParagraphContent
							content='Step 4: Go to character select and find the Top-up icon and put
							your E-POINTS CODE.'
						/>

						<div className='space-y-4 py-4'>
							<Image
								src='/images/topup/top1.png'
								alt='gcash receipt'
								width='300'
								height='500'
								className='mx-auto'
							/>

							<Image
								src='/images/topup/top2.png'
								alt='gcash receipt'
								width='300'
								height='500'
								className='mx-auto'
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
					</section>

					<section className='flex-1 space-y-7'>
						<section>
							<HeadingTitle title='E-Points Convertion Rate' />
							<p className='text-xl text-custom-main200'>1PHP = 1EP</p>
						</section>

						<section>
							<HeadingTitle title='G-CASH' />

							<section>
								<div className='relative max-w-md h-60 w-60'>
									<Image
										src='/images/topup/top4.png'
										alt='gcash qr code'
										fill
										sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw'
										className='object-cover rounded-md'
									/>
								</div>

								<h1 className='font-semibold text-custom-main200'>
									09157573942
								</h1>
								<h1 className='font-semibold text-custom-main200'>
									JO*N BE****D B.
								</h1>
							</section>
						</section>

						<section>
							<HeadingTitle title='How to Top-up?' />

							<div className='space-y-4 max-w-lg w-full'>
								<ParagraphContent
									content='Top-up is voluntary and non-refundable. Contributions support
									server operations, hardware, and software upgrades.'
								/>

								<ParagraphContent
									content='We do not guarantee player-to-player transactions. We prefer
									using Verified Midmans inside of our game!'
								/>
								<ParagraphContent
									content='Make sure to double check all the information provided before
									you send MONEY online.'
								/>
							</div>
						</section>
					</section>
				</section>
			</section>
		</main>
	);
}
