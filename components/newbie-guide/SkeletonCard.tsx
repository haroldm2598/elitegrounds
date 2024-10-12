import { Skeleton } from '../ui/kit/skeleton';

export default function SkeletonCard() {
	return (
		<section className='bg-custom-main500 h-80 max-w-72 w-auto flex flex-col rounded-md shadow-lg overflow-hidden border-[1px] border-solid border-custom-main600'>
			<Skeleton className='h-40 w-full rounded-sm' />

			<div className='flex-1 p-2 flex flex-col justify-between'>
				<div className='space-y-2'>
					<Skeleton className='h-6 w-64 rounded-lg' />
					<Skeleton className='h-6 w-20 rounded-lg' />
				</div>

				<Skeleton className='h-10 w-32 rounded-lg' />
			</div>
		</section>
	);
}
