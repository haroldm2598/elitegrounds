export default function ParagraphContent({ content }: { content: string }) {
	return (
		<p className='text-xl font-semibold text-custom-main200 leading-6'>
			{content}
		</p>
	);
}
