'use client';

import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { lato } from '@/lib/font';

import { navLinks } from '@/lib/dataSample';

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';

export default function NavMenubar() {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				{navLinks.map((item, index) => {
					const { name, links, contents } = item;
					return (
						<NavigationMenuItem className={lato.className} key={index}>
							{/* absolute should be at bottom of current target */}

							{contents?.length ? (
								<>
									<NavigationMenuTrigger>{name}</NavigationMenuTrigger>
									<NavigationMenuContent>
										<ul className='grid gap-3 p-4 md:w-[100px] lg:w-[200px] lg:grid-cols-1'>
											{contents?.map((component) => (
												<ListItem
													key={component.contentTitle}
													title={component.contentTitle}
													href={component.contentLinks}
												></ListItem>
											))}
										</ul>
									</NavigationMenuContent>
								</>
							) : (
								<NavigationMenuItem>
									<Link href={links} legacyBehavior passHref>
										<NavigationMenuLink
											className={navigationMenuTriggerStyle()}
										>
											{name}
										</NavigationMenuLink>
									</Link>
								</NavigationMenuItem>
							)}
						</NavigationMenuItem>
					);
				})}
			</NavigationMenuList>
		</NavigationMenu>
	);
}

// (
// 	<NavigationMenu>
// 		<NavigationMenuList>
// 			<NavigationMenuItem className={lato.className}>
// 				<NavigationMenuTrigger>Server Information</NavigationMenuTrigger>
// 				<NavigationMenuContent>
// 					<ul className='grid gap-3 p-4 md:w-[100px] lg:w-[200px] lg:grid-cols-1'>
// 						{contents?.map((component) => (
// 							<ListItem
// 								key={component.title}
// 								title={component.title}
// 								href={component.href}
// 							></ListItem>
// 						))}
// 					</ul>
// 				</NavigationMenuContent>
// 			</NavigationMenuItem>

// 			<NavigationMenuItem>
// 				<Link href='/testing' legacyBehavior passHref>
// 					<NavigationMenuLink className={navigationMenuTriggerStyle()}>
// 						Downloads
// 					</NavigationMenuLink>
// 				</Link>
// 			</NavigationMenuItem>
// 		</NavigationMenuList>
// 	</NavigationMenu>
// );

const ListItem = forwardRef<ElementRef<'a'>, ComponentPropsWithoutRef<'a'>>(
	({ className, title, ...props }, ref) => {
		return (
			<li>
				<NavigationMenuLink asChild>
					<a
						ref={ref}
						className={cn(
							'text-lg hover:text-custom-main200 font-semibold transition-all duration-300 ease-in-out',
							className
						)}
						{...props}
					>
						{title}
					</a>
				</NavigationMenuLink>
			</li>
		);
	}
);
ListItem.displayName = 'ListItem';
