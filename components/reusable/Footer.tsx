import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const socialLinks = [
	{ Icon: FaFacebookF, link: '/', name: 'Facebook' },
	{ Icon: FaTwitter, link: '/', name: 'Twitter' },
	{ Icon: FaInstagram, link: '/', name: 'Instagram' }
];

export default function Footer() {
	return (
		<footer className='flex justify-center gap-6'>
			{socialLinks?.map((item, index) => {
				const { Icon, link, name } = item;
				return (
					<h1 key={index}>
						<Link href={link} className='flex items-center gap-2'>
							<Icon /> {name}
						</Link>
					</h1>
				);
			})}
		</footer>
	);
}
