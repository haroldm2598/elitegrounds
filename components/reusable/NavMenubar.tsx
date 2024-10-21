'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { lato } from '@/lib/font';

import { NavLinksProps } from '@/lib/definitions';

// REFERRENCE NAV MENU
// # Navbar with menu and submenu
// https://daisyui.com/components/navbar/

interface NavMenubarProps {
	dataArr: Array<NavLinksProps>;
	menuPosition?: string;
	onClick?: () => void;
}

export default function NavMenubar({
	dataArr,
	menuPosition,
	onClick
}: NavMenubarProps) {
	const pathname = usePathname();

	return (
		<ul className={`menu ${menuPosition} space-x-4`}>
			{dataArr?.map((item) => {
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
												className={` hover:text-custom-main200
                                                hover:bg-custom-main400 rounded-lg transition-all duration-300 ease-in-out`}
											>
												<Link
													href={content.contentLinks}
													className={`${
														pathname === content.contentLinks
															? 'link:text-custom-main200 visited:text-custom-main200'
															: 'text-custom-main300'
													}`}
													onClick={onClick}
												>
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
										? 'link:text-custom-main200 visited:text-custom-main200'
										: 'text-custom-main300'
								} hover:text-custom-main200`}
								onClick={onClick}
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
