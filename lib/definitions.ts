import { IconType } from 'react-icons';

export interface NavLinksProps {
	name: string;
	links: string;
	contents?: Array<{
		contentTitle: string;
		contentLinks: string;
	}>;
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
	id: string;
	imageSrc: string;
	title: string;
	date: string;
	descriptions?: Array<DescriptionProps>;
}

interface DescriptionProps {
	title: string;
	contents: Array<{
		value: string;
	}>;
}

export interface DownloadSourceProps {
	name: string;
	link: string;
	Icon: IconType;
}
