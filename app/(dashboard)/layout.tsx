import { ReactNode } from 'react';

interface DashboardLayoutProps {
	children: ReactNode;
}
export default function dashboardLayout({ children }: DashboardLayoutProps) {
	return <main className='min-h-screen bg-custom-main400'>{children}</main>;
}
