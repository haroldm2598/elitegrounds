import { IconType } from 'react-icons';

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
	id: string;
	imageSrc: string;
	title: string;
	date: string;
}

export interface DownloadSourceProps {
	name: string;
	link: string;
	Icon: IconType;
}
