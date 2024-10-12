import Link from 'next/link';
import { socialLinks } from '@/lib/dataSample';

export default function Footer() {
	return (
		<footer className='py-4 px-4 lg:px-0 flex flex-col lg:flex-row justify-center gap-2 lg:gap-6 bg-black'>
			{socialLinks?.map((item, index) => {
				const { Icon, link, name, color } = item;
				return (
					<h1 key={index} className='text-custom-main200'>
						<Link href={link} className='flex items-center gap-2'>
							<Icon className={`${color} `} /> {name}
						</Link>
					</h1>
				);
			})}
		</footer>
	);
}
