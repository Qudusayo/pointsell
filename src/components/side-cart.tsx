"use client";

import { useDefaultStore } from "@/providers/default-store-provider";
import { Button, cn } from "@nextui-org/react";
import { X } from "lucide-react";
import CartProduct from "./cart-product";

const SideCart = () => {
	const { isSidebarCartOpen, closeSidebarCart } = useDefaultStore(
		state => state,
	);

	return (
		<div
			className={cn(
				"fixed z-10 flex h-full w-96 flex-col border border-l bg-white px-4 py-8 transition-all duration-300 ease-in-out",
				!isSidebarCartOpen ? "-right-96" : "-right-0",
			)}
		>
			<div className="flex cursor-pointer items-center justify-between">
				<h2 className="font-semibold">Order #256482</h2>
				<X size={24} color="#000" onClick={closeSidebarCart} />
			</div>
			<div className="flex flex-1 flex-col gap-4 py-8">
				<CartProduct />
				<CartProduct />
			</div>
			<div>
				<table className="min-w-full border-t text-[#001329]">
					<colgroup>
						<col className="w-1/2" />
						<col className="w-1/2" />
					</colgroup>
					<tbody>
						<tr>
							<td className="max-w-0 truncate py-6 pl-4 pr-3 text-sm font-semibold sm:pl-0">
								Total Amount
							</td>
							<td className="py-6 pl-3 pr-4 text-right text-sm font-semibold sm:pr-0">
								₦3,000
							</td>
						</tr>
					</tbody>
				</table>
				<Button className="w-full bg-main-color-primary text-white">
					Place Order
				</Button>
			</div>
		</div>
	);
};

export default SideCart;
