'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

import { navLinks } from '@/lib/dataSample';
import { lato } from '@/lib/font';

// import DrawerKit from '../ui/kit/Drawer';
import DrawerDaisy from '../ui/kit/DrawerDaisy';

export default function Navbar() {
	const pathname = usePathname();

	return (
		<header className={`${lato.className} bg-custom-main100 py-4`}>
			<nav className='max-w-7xl mx-auto flex justify-between items-center'>
				<div>
					<Link href='/'>
						<Image
							src='/images/eliteglogo.png'
							height='1000'
							width='1000'
							className='w-full'
							alt='thumbnail'
						/>
					</Link>
				</div>

				<ul className='hidden lg:flex gap-8'>
					{navLinks?.map((item, index) => {
						return (
							<li
								key={index}
								className={`${
									pathname === item.links
										? 'text-custom-main200'
										: 'text-custom-main300'
								} text-lg hover:text-custom-main200 font-semibold transition-all duration-300 ease-in-out`}
							>
								<Link href={item.links}>{item.name}</Link>
							</li>
						);
					})}
				</ul>

				<div className='flex mr-6 lg:hidden'>
					{/* <DrawerKit /> */} <DrawerDaisy />
				</div>
			</nav>
		</header>
	);
}
