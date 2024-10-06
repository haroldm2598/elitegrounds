import { HeadingSectionProps } from '@/lib/definitions';

export default function HeadingSection({ title }: HeadingSectionProps) {
	return (
		<section className='flex items-center'>
			<div className='w-3 h-20 bg-red-500 mr-4 rounded-sm'></div>

			<div className='-space-y-4'>
				<h1 className='text-[2.5rem] font-semibold'>{title}</h1>
				<h2 className='text-[#B89272] text-[2rem] font-medium'>
					Ran Online Elitegrounds Server EP7
				</h2>
			</div>
		</section>
	);
}
