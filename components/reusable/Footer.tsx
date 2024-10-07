import Link from 'next/link';
import { socialLinks } from '@/lib/dataSample';

export default function Footer() {
	return (
		<footer className='pb-4 flex justify-center gap-6'>
			{socialLinks?.map((item, index) => {
				const { Icon, link, name } = item;
				return (
					<h1 key={index}>
						<Link href={link} className='flex items-center gap-2'>
							<Icon /> {name}
						</Link>
					</h1>
				);
			})}
		</footer>
	);
}
