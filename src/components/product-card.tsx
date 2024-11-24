import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Image,
} from "@nextui-org/react";
import { Add } from "iconsax-react";

const ProductCard = () => {
	return (
		<Card className="border py-3 shadow-none">
			<CardHeader className="overflow-visible py-0">
				<Image
					alt="Card background"
					className="rounded-xl object-cover"
					src="/placeholder.png"
				/>
			</CardHeader>
			<CardBody className="flex-col items-start px-4 pb-0 pt-2">
				<p className="text-tiny font-bold uppercase">Daily Mix</p>
				<small className="text-default-500">12 Tracks</small>
				<h4 className="text-large font-bold">Frontend Radio</h4>
			</CardBody>
			<CardFooter className="pb-0">
				<Button
					startContent={<Add size="20" color="#FFF" variant="Outline" />}
					className="w-full bg-main-color-primary text-white"
				>
					Add Product
				</Button>
			</CardFooter>
		</Card>
	);
};

export default ProductCard;
