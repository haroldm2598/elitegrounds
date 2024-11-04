import { HeadingSectionProps } from '@/lib/definitions';

export default function HeadingSection({ title }: HeadingSectionProps) {
	return (
		<section className='flex items-center px-4 lg:px-0'>
			<div className='w-3 h-14 lg:h-20 bg-custom-gradient-top mr-4 rounded-sm'></div>

			<div className='-space-y-4'>
				<h1 className='text-[2rem] lg:text-[2.5rem] font-semibold text-custom-main200'>
					{title}
				</h1>
				<h2 className='text-[1.5rem] lg:text-[2rem] font-medium text-custom-main300'>
					Ran Online: Elite Grounds EP7
				</h2>
			</div>
		</section>
	);
}
