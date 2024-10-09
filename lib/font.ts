import { Lato } from 'next/font/google';
import localFont from 'next/font/local';

export const lato = Lato({
	weight: ['100', '300', '400', '700', '900'],
	subsets: ['latin']
});

export const geistSans = localFont({
	src: '../app/fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900'
});
export const geistMono = localFont({
	src: '../app/fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900'
});
