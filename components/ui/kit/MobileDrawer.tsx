import { IoMdMenu, IoMdClose } from 'react-icons/io';
import Link from 'next/link';

import { Button } from './button';

import { mobileNavLinks } from '@/lib/dataSample';

export default function MobileDrawer() {
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
						>
							<IoMdClose size='42' />
						</Button>
					</div>

					<ul className='flex flex-col items-end'>
						{mobileNavLinks?.map((item, index) => {
							return (
								<li
									key={index}
									className='text-custom-main300 text-lg hover:text-custom-main200 font-semibold transition-all duration-300 ease-in-out'
								>
									<Link href={item.links}>{item.name}</Link>
								</li>
							);
						})}
					</ul>

					<hr className='border-t border-gray-500 my-4 mx-0 w-full' />
				</section>
			</section>
		</div>
	);
}
