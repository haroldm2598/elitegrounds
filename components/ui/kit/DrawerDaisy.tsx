import { Button } from './button';

export default function DrawerDaisy() {
	return (
		<div className='drawer drawer-end'>
			<input id='my-drawer-4' type='checkbox' className='drawer-toggle' />
			<div className='drawer-content'>
				{/* Page content here */}
				<label htmlFor='my-drawer-4' className='drawer-button btn btn-primary'>
					Open drawer
				</label>
			</div>
			<div className='drawer-side z-[100]'>
				<label
					htmlFor='my-drawer-4'
					aria-label='close sidebar'
					className='drawer-overlay'
				></label>
				<ul className='menu bg-base-200 text-base-content min-h-full w-full md:w-96 p-4'>
					{/* Sidebar content here */}
					<li>
						<Button
							onClick={() =>
								((
									document.getElementById('my-drawer-4') as HTMLInputElement
								).checked = false)
							}
						>
							Close Button
						</Button>
					</li>
					<li>
						<a>Sidebar Item 1</a>
					</li>
					<li>
						<a>Sidebar Item 2</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
