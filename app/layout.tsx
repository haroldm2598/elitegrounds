import { ReactNode } from 'react';
import type { Metadata } from 'next';

import './globals.css';
import Navbar from '@/components/reusable/Navbar';
import Footer from '@/components/reusable/Footer';
import { geistMono, geistSans } from '@/lib/font';

interface RootLayoutProps {
	children: ReactNode;
}

export const metadata: Metadata = {
	title: 'Ran Online | Elitegrounds',
	description:
		'Ran Online Elitegrounds server where you can enjoy and play your nostalgic mmorpg'
};

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang='en'>
			{/* <head>
				{metadata && (
					<>
						<title>{metadata.title}</title>
						<meta name='description' content={metadata.description} />
					</>
				)}
			</head> */}
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
			>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
