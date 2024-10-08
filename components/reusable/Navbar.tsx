'use client';

import Link from 'next/link';
import { navLinks } from '@/lib/dataSample';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Navbar() {
	const pathname = usePathname();

	return (
		<header className='bg-custom-main100 py-4'>
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

				<ul className='hidden lg:flex gap-4'>
					{navLinks?.map((item, index) => {
						return (
							<li
								key={index}
								className={`${
									pathname === item.links
										? 'text-custom-main200'
										: 'text-custom-main300'
								} hover:text-custom-main200 font-semibold uppercase transition-all duration-300 ease-in-out`}
							>
								<Link href={item.links}>{item.name}</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</header>
	);
}
