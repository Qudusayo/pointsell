import { Image } from "@nextui-org/react";

const CartProduct = () => {
	return (
		<div className="flex gap-3">
			<Image
				alt="nextui logo"
				height={40}
				radius="sm"
				src="https://nextui.org/images/hero-card-complete.jpeg"
				width={40}
				className="object-cover object-center"
			/>
			<div className="flex flex-col justify-center gap-1">
				<p className="text-md leading-4">Grill Sandwich</p>
				<p className="text-small text-main-color-primary">₦3,000</p>
			</div>
		</div>
	);
};

export default CartProduct;
