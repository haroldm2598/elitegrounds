import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/kit/button';

export default function DrawerKit() {
	return (
		<Drawer>
			<DrawerTrigger asChild>
				<Button variant='secondary'>Open</Button>
			</DrawerTrigger>
			<DrawerContent className='fixed inset-y-0  max-w-md w-full min-h-screen bg-white shadow-lg'>
				<DrawerHeader>
					<DrawerTitle>Are you absolutely sure?</DrawerTitle>
					<DrawerDescription>This action cannot be undone.</DrawerDescription>
				</DrawerHeader>
				<DrawerFooter>
					<Button>Submit</Button>
					<DrawerClose>
						<Button variant='outline'>Cancel</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}
