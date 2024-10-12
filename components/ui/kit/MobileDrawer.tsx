'use state';
import { useState } from 'react';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import Link from 'next/link';

import { Button } from './button';

import { mobileNavLinks, socialLinks } from '@/lib/dataSample';

export default function MobileDrawer() {
	const [isClick, setIsClick] = useState<boolean>(false);

	const handleCloseMenu = () => {
		setIsClick(false);
		(document.getElementById('sidebar-drawer') as HTMLInputElement).checked =
			isClick;
	};

	return (
		<div className='drawer drawer-end'>
			<input id='sidebar-drawer' type='checkbox' className='drawer-toggle' />
			<section className='drawer-content'>
				<Button
					onClick={() =>
						((
							document.getElementById('sidebar-drawer') as HTMLInputElement
						).checked = true)
					}
					size='icon'
					variant='ghost'
				>
					<IoMdMenu
						size='42'
						className='text-custom-main200 hover:text-custom-main400'
					/>
				</Button>
			</section>

			<section className='drawer-side z-[100]'>
				<label
					htmlFor='sidebar-drawer'
					aria-label='close sidebar'
					className='drawer-overlay'
				></label>
				<section className='menu bg-custom-main500 text-base-content min-h-full w-full md:w-96 py-2 px-4'>
					<div className='mx-0 block md:hidden'>
						<Button
							onClick={() =>
								((
									document.getElementById('sidebar-drawer') as HTMLInputElement
								).checked = false)
							}
							size='icon'
							variant='ghost'
						>
							<IoMdClose
								size='42'
								className='text-custom-main200 hover:text-custom-main400'
							/>
						</Button>
					</div>

					<section className='flex flex-col justify-between h-[28rem]'>
						<ul className='flex flex-col items-end'>
							{mobileNavLinks?.map((item, index) => {
								return (
									<li
										key={index}
										className='text-custom-main300 text-lg hover:text-custom-main200 font-semibold transition-all duration-300 ease-in-out'
									>
										<Link href={item.links} onClick={handleCloseMenu}>
											{item.name}
										</Link>
									</li>
								);
							})}
						</ul>

						<hr className='border-t border-gray-500 my-4 mx-0 w-full' />

						<div className='flex flex-col gap-4'>
							{socialLinks?.map((item, index) => {
								const { Icon, link, name } = item;
								return (
									<h1
										key={index}
										className='text-custom-main200 text-lg font-semibold'
									>
										<Link href={link} className='flex items-center gap-2'>
											<Icon /> {name}
										</Link>
									</h1>
								);
							})}
						</div>
					</section>
				</section>
			</section>
		</div>
	);
}
