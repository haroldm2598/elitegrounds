import { lato } from '@/lib/font';
import { ReactNode } from 'react';

interface LayoutProps {
	children: ReactNode;
}

export default function layout({ children }: LayoutProps) {
	return (
		<main className={`${lato.className} bg-custom-main400`}>{children}</main>
	);
}
