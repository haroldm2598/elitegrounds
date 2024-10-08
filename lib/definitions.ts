export interface NavLinksProps {
	name: string;
	links: string;
}

export interface HeadingSectionProps {
	title: string;
}

export interface TwoColumnSectionProps {
	items: ServerInfoData[];
}

interface ServerInfoData {
	infoName: string;
}

export interface CardProps {
	imageSrc: string;
	title: string;
	date: string;
}
