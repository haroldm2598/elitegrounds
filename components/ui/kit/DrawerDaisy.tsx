import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { Button } from './button';

export default function DrawerDaisy() {
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
				<section className='menu bg-custom-main500 text-base-content min-h-full w-full md:w-96 p-2'>
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
				</section>
			</section>
		</div>
	);
}
