"use client";

import { cn } from "@nextui-org/react";
import {
	Category,
	ClipboardText,
	Home3,
	IconProps,
	LogoutCurve,
	Setting2,
	ShoppingBag,
	User,
} from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC } from "react";

const Sidebar = () => {
	return (
		<section className="h-20 w-full flex-col border-t py-4 md:flex md:h-full md:w-fit md:min-w-28 md:border-r md:py-0">
			<div className="hidden items-center justify-center border-b p-7 leading-[0] md:flex">
				<Image src="/logo.svg" alt="logo" width={45} height={45} />
			</div>
			<div className="flex h-full items-center justify-around md:flex-grow md:flex-col md:justify-between">
				<div className="flex flex-grow items-center justify-around md:h-full md:flex-col md:gap-10 md:py-10">
					<LinkIcon href="/store" icon={Category} name="Store" />
					<LinkIcon href="/dashboard" icon={Home3} name="Home" />
					<LinkIcon href="/orders" icon={ClipboardText} name="Orders" />
					<LinkIcon href="/products" icon={ShoppingBag} name="Products" />
					<LinkIcon
						href="/customers"
						icon={User}
						name="Customers"
						className="hidden md:block"
					/>
					{/* </div>
				<div className="flex flex-col items-center gap-10 py-10"> */}
					<LinkIcon href="/settings" icon={Setting2} name="Settings" />
					<LinkIcon
						href="/"
						icon={LogoutCurve}
						logout
						className="hidden md:block"
					/>
				</div>
			</div>
		</section>
	);
};

const LinkIcon = ({
	href,
	icon,
	name,
	logout,
	className,
}: {
	href: string;
	icon: FC<IconProps>;
	name?: string;
	logout?: boolean;
	className?: string;
}) => {
	const pathname = usePathname();

	return (
		<Link
			href={href}
			className={cn(
				"flex flex-col items-center",
				pathname === href ? "text-main-color-primary" : "text-gray-400",
				logout && "text-red-500",
				className,
			)}
		>
			{React.createElement(icon, {
				size: 40,
				variant: logout ? "Broken" : "Bulk",
			})}
			<span className="text-xs">{name}</span>
		</Link>
	);
};

export default Sidebar;
