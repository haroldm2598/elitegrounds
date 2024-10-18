'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { lato } from '@/lib/font';

import { navLinks } from '@/lib/dataSample';

// REFERRENCE NAV MENU
// # Navbar with menu and submenu
// https://daisyui.com/components/navbar/

export default function NavMenubarTest() {
	const pathname = usePathname();

	return (
		<ul className='menu lg:menu-horizontal space-x-4'>
			{navLinks.map((item) => {
				const { name, links, contents } = item;

				return (
					<li
						key={name}
						className={`${lato.className} ${
							pathname === links ? 'text-custom-main200' : 'text-custom-main300'
						}
                    text-lg hover:text-custom-main200 font-semibold transition-all duration-300 ease-in-out`}
					>
						{contents?.length ? (
							<details>
								<summary>{name}</summary>
								<ul className='max-w-xs w-full bg-custom-main500 relative z-50'>
									{contents?.map((content) => {
										return (
											<li
												key={content.contentTitle}
												className={`hover:text-custom-main200
                                                hover:bg-custom-main400 rounded-lg transition-all duration-300 ease-in-out`}
											>
												<Link href={content.contentLinks}>
													{content.contentTitle}
												</Link>
											</li>
										);
									})}
								</ul>
							</details>
						) : (
							<Link
								href={links}
								className={`${
									pathname === links
										? 'visited:text-custom-main200'
										: 'text-custom-main300'
								} hover:text-custom-main200`}
							>
								{name}
							</Link>
						)}
					</li>
				);
			})}
		</ul>
	);
}
