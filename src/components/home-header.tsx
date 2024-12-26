"use client";

import { useDefaultStore } from "@/providers/default-store-provider";
import { Button } from "@nextui-org/react";
import { ShoppingCart } from "iconsax-react";
import Logo from "./logo";

const HomeHeader = () => {
	const { openSidebarCart } = useDefaultStore(state => state);

	return (
		<div className="flex items-center justify-between p-4 md:p-[27px]">
			<Logo />

			<Button
				isIconOnly
				className="bg-main-color-primary"
				aria-label="Cart"
				radius="full"
				size="lg"
				onClick={openSidebarCart}
			>
				<ShoppingCart color="#FFF" variant="Bold" />
			</Button>
		</div>
	);
};

export default HomeHeader;
