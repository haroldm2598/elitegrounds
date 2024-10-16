import { DownloadSourceProps, NavLinksProps } from '@/lib/definitions';
import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { SiMediafire, SiGoogledrive, SiMega } from 'react-icons/si';

export const navLinks: Array<NavLinksProps> = [
	{ name: 'Server Information', links: '/server-information' },
	{ name: 'Downloads', links: '/downloads' },
	{ name: 'Newbie Guides', links: '/newbie-guides' },
	{ name: 'Top-up', links: '/top-up' }
];

export const mobileNavLinks: Array<NavLinksProps> = [
	{ name: 'Home', links: '/' },
	{ name: 'Server Information', links: '/server-information' },
	{ name: 'Newbie Guides', links: '/newbie-guides' },
	{ name: 'Top-up', links: '/top-up' }
];

export const socialLinks = [
	{
		Icon: FaFacebookF,
		link: 'https://www.facebook.com/elitegroundsep7',
		name: 'elitegroundsep7',
		color: 'text-sky-800'
	},
	{
		Icon: FcGoogle,
		link: 'mailto:elitegroundsran@gmail.com',
		name: 'elitegroundsran@gmail.com',
		color: 'default'
	}
];

export const serverInfoData = [
	{ infoName: '230 Max Level | 207 Max Skill' },
	{ infoName: 'Sync Gameplay' },
	{ infoName: '6 Balanced Classes (Classic Extreme)' },
	{ infoName: 'InGame Item Mall ' },
	{ infoName: 'In-Game Registration' },
	{ infoName: 'Max Upgrade: +10' },
	{ infoName: 'Experience Rate: High' },
	{ infoName: 'Drop Rate: Low' },
	{ infoName: 'No Reform' },
	{ infoName: 'No Premium Refines' },
	{ infoName: 'No Spoon Feed' },
	{ infoName: 'Pots Based Gameplay' },
	{ infoName: 'Hunt Based' },
	{ infoName: 'Dungeon RCB1' },
	{ infoName: 'Open skills click to learn' },
	{ infoName: 'Pull/Push (No anti skills, stuns and etc)' },
	{ infoName: 'Official Gunner Int Summon' },
	{ infoName: 'Official use of Contribution & Activity Points' },
	{ infoName: 'Official Item Combination' },
	{ infoName: 'Official Item and System Update' },
	{ infoName: 'Last weapon: Black Dragon & Astral Weapon(TBA)' },
	{ infoName: 'Last Armor: Celestial Set And Dark Lunar(TBA)' },
	{ infoName: 'PVP Events' },
	{ infoName: 'Official Tyranny War (GvG)' },
	{ infoName: 'Official School War' },
	{ infoName: 'Official Club War' },
	{ infoName: '101% Free to play' },
	{ infoName: 'Guaranteed 101% Play to earn' }
];

export const newbieData = [
	{
		id: '0',
		imageSrc: '/images/chibi.png',
		title: 'farm guide',
		date: '09/15/24',
		descriptions: [
			{
				title: 'Farming Guide RCB1 ( St. Research Dungeon)',
				contents: [{ value: 'Dark Lunar set' }]
			},
			{
				title: 'Saint Research',
				contents: [
					{ value: 'Alternative Weapon' },
					{ value: 'Materials to exchange bagpack (nylon)' },
					{ value: 'Materials to exchange elite dragon' },
					{ value: 'Refines' },
					{ value: 'Gold' }
				]
			},
			{
				title: 'Saint Power Plant',
				contents: [
					{ value: 'Alternative Weapon' },
					{ value: 'Materials to exchange elite dragon' },
					{ value: 'Refines' },
					{ value: 'Gold' }
				]
			},
			{
				title: 'HeadB',
				contents: [{ value: 'Refines' }, { value: 'Gold' }]
			},
			{
				title: 'RootHole/Prison Test Zone/Prison',
				contents: [
					{ value: 'Level 180 Accesories (Rosary and Rings)' },
					{ value: 'Refines' },
					{ value: 'Gold' }
				]
			},
			{
				title: 'Mini Boss',
				contents: [{ value: 'Matts and etc' }]
			},
			{
				title: 'Big Boss',
				contents: [
					{ value: 'Last Weapon (Black Dragon and Astral Weapons)' },
					{ value: 'Last Armor (Dark Lunar and Celestial Weaps)' }
				]
			}
		]
	},
	{
		id: '1',
		imageSrc: '/newbieguide/elitegroundsnew.jpg',
		title: 'RAN ONLINE ELITEGROUNDS EVENT',
		date: '09/12/24'
	},
	{
		id: '2',
		imageSrc: '/newbieguide/elitegroundsnew2.jpg',
		title: 'GUILD LEADER AND STREAMERS',
		date: '09/09/24'
	},
	{
		id: '3',
		imageSrc: '/newbieguide/elitegroundsnew3.jpg',
		title: 'OFFICIAL BETA TEST',
		date: '09/05/24'
	},
	{
		id: '4',
		imageSrc: '/newbieguide/elitegroundsnew4.jpg',
		title: 'bakbakan round',
		date: '09/04/24'
	},
	{
		id: '5',
		imageSrc: '/newbieguide/elitegroundsnew5.jpg',
		title: 'RAN ONLINE ELITEGROUNDS OFFICIAL SERVER',
		date: '09/01/24'
	}
];

export const downloadSource: DownloadSourceProps[] = [
	{
		name: 'mediafire',
		link: 'https://www.mediafire.com/file/sb89yqaj4c7upne/RanEliteGroundsEP7.exe/file',
		Icon: SiMediafire
	},
	{
		name: 'google drive',
		link: 'https://drive.google.com/file/d/1YRqS6C6dnakbzkcpPGEDGj4mQf9QYUBD/view',
		Icon: SiGoogledrive
	},
	{
		name: 'mega',
		link: 'https://mega.nz/file/UQAUDCab#q8Tj10iKOuBEgEfmDcG8Sm0xj0C41619b4ANopYfX7Y',
		Icon: SiMega
	}
];
