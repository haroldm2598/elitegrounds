interface ParagraphContentProps {
	content: string;
	textColor?: string;
}

export default function ParagraphContent({
	content,
	textColor
}: ParagraphContentProps) {
	return (
		<p
			className={`text-xl font-semibold leading-6 text-custom-main200 ${textColor}`}
		>
			{content}
		</p>
	);
}
