import { NavLinksProps } from '@/lib/definitions';
import Link from 'next/link';

const navLinks: Array<NavLinksProps> = [
	{ name: 'Server Information', links: '/server-information' },
	{ name: 'Downloads', links: '/downloads' },
	{ name: 'Newbie Guides', links: '/newbie-guides' }
];

export default function Navbar() {
	return (
		<header className='max-w-7xl mx-auto flex justify-between items-center'>
			<h1 className='text-5xl font-bold'>
				<Link href='/'>LOGO</Link>
			</h1>

			<ul className='hidden lg:flex gap-4'>
				{navLinks?.map((item, index) => {
					return (
						<li key={index} className='font-medium'>
							<Link href={item.links}>{item.name}</Link>
						</li>
					);
				})}
			</ul>
		</header>
	);
}
