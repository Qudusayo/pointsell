"use client";

import {
	Category,
	ClipboardText,
	Gallery,
	Home3,
	IconProps,
	Notification,
	Send,
	Setting2,
	User,
} from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC } from "react";

const Sidebar = () => {
	return (
		<section className="flex h-full flex-col border-r">
			<div className="border-b p-7 leading-[0]">
				<Image src="/logo.svg" alt="logo" width={45} height={45} />
			</div>
			<div className="flex flex-grow flex-col items-center justify-around">
				<LinkIcon href="/" icon={Home3} />
				<LinkIcon href="/dashboard" icon={Category} />
				<LinkIcon href="/orders" icon={ClipboardText} />
				<LinkIcon href="/products" icon={Gallery} />
				<LinkIcon href="/notifications" icon={Notification} />
				<LinkIcon href="/customers" icon={User} />
				<LinkIcon href="/messages" icon={Send} />
				<LinkIcon href="/settings" icon={Setting2} />
			</div>
		</section>
	);
};

const LinkIcon = ({ href, icon }: { href: string; icon: FC<IconProps> }) => {
	const pathname = usePathname();

	return (
		<Link href={href}>
			{React.createElement(icon, {
				size: 40,
				color: pathname === href ? "#F67F20" : "#BBBBBB",
				variant: "Bold",
			})}
		</Link>
	);
};

export default Sidebar;
