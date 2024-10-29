import { Button } from "@nextui-org/react";
import { Add } from "iconsax-react";
import CartProduct from "./cart-product";

const SideCart = () => {
	return (
		<div className="flex h-full flex-col border-l px-4 py-8">
			<div className="flex cursor-pointer items-center justify-between">
				<h2 className="font-semibold">Order #256482</h2>
				<Add size="32" color="#000" className="rotate-45" />
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
