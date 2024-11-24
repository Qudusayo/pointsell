"use client";

import { useDefaultStore } from "@/providers/default-store-provider";
import { Button, Input } from "@nextui-org/react";
import { SearchNormal1, ShoppingCart } from "iconsax-react";

const HomeHeader = () => {
	const { openSidebarCart } = useDefaultStore(state => state);

	return (
		<div className="flex items-center justify-between p-[27px]">
			<h1 className="text-center text-3xl font-bold">
				Point
				<span className="text-main-color-primary">sell</span>
			</h1>
			<div className="flex max-w-xl flex-1 gap-4">
				<Input
					type="search"
					placeholder="Search anything here"
					labelPlacement="outside"
					radius="full"
					variant="bordered"
					classNames={{ inputWrapper: "shadow-none" }}
					size="lg"
					endContent={
						<SearchNormal1
							size={20}
							className="pointer-events-none flex-shrink-0 text-2xl text-default-400"
						/>
					}
				/>
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
		</div>
	);
};

export default HomeHeader;
