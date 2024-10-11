import { NavLinksProps } from '@/lib/definitions';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export const navLinks: Array<NavLinksProps> = [
	{ name: 'Server Information', links: '/server-information' },
	{ name: 'Downloads', links: '/downloads' },
	{ name: 'Newbie Guides', links: '/newbie-guides' }
];

export const mobileNavLinks: Array<NavLinksProps> = [
	{ name: 'Home', links: '/' },
	{ name: 'Server Information', links: '/server-information' },
	{ name: 'Newbie Guides', links: '/newbie-guides' }
];

export const socialLinks = [
	{ Icon: FaFacebookF, link: '/', name: 'Facebook' },
	{ Icon: FaTwitter, link: '/', name: 'Twitter' },
	{ Icon: FaInstagram, link: '/', name: 'Instagram' }
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
		imageSrc: '/newbieguide/elitegroundsnew.jpg',
		title: 'RAN ONLINE ELITEGROUNDS EVENT',
		date: '09/12/24'
	},
	{
		imageSrc: '/newbieguide/elitegroundsnew2.jpg',
		title: 'GUILD LEADER AND STREAMERS',
		date: '09/09/24'
	},
	{
		imageSrc: '/newbieguide/elitegroundsnew3.jpg',
		title: 'OFFICIAL BETA TEST',
		date: '09/05/24'
	},
	{
		imageSrc: '/newbieguide/elitegroundsnew4.jpg',
		title: 'bakbakan round',
		date: '09/04/24'
	},
	{
		imageSrc: '/newbieguide/elitegroundsnew5.jpg',
		title: 'RAN ONLINE ELITEGROUNDS OFFICIAL SERVER',
		date: '09/01/24'
	}
];
