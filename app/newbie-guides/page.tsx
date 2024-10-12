import Card from '@/components/newbie-guide/Card';
import HeadingSection from '@/components/reusable/HeadingSection';
import { newbieData } from '@/lib/dataSample';
import { lato } from '@/lib/font';

export default function page() {
	return (
		<main className={`${lato.className} bg-custom-main400`}>
			<section className='min-h-screen max-w-7xl mx-auto py-10'>
				<HeadingSection title='Newbie Guides' />

				<section className='max-w-5xl mx-auto mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-y-10'>
					{newbieData?.map((item, index) => {
						const { id, imageSrc, title, date } = item;
						return (
							<Card
								key={index}
								id={id}
								imageSrc={imageSrc}
								title={title}
								date={date}
							/>
						);
					})}
				</section>
			</section>
		</main>
	);
}
