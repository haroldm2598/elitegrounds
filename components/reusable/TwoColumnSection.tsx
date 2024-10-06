import { TwoColumnSectionProps } from '@/lib/definitions';

export default function TwoColumnSection({ items }: TwoColumnSectionProps) {
	const midIndex = Math.ceil(items?.length / 2);
	const firstColumn = items.slice(0, midIndex);
	const secondColumn = items.slice(midIndex);

	return (
		<section className='flex flex-col lg:flex-row'>
			<div className='flex-1'>
				{firstColumn?.map((item, index) => {
					return (
						<section key={index} className='flex items-center'>
							<span className='inline-block w-3 h-3 bg-green-800 rounded-full mr-3 shadow-md'></span>
							<h1>{item.infoName}</h1>
						</section>
					);
				})}
			</div>

			<div className='flex-1'>
				{secondColumn?.map((item, index) => {
					return (
						<section key={index} className='flex items-center'>
							<span className='inline-block w-3 h-3 bg-green-800 rounded-full mr-3 shadow-md'></span>
							<h1>{item.infoName}</h1>
						</section>
					);
				})}
			</div>
		</section>
	);
}
