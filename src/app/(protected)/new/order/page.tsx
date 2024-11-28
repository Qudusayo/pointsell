import GeneralLayout from "@/layout/general-layout";
import { Input, InputProps, Textarea } from "@nextui-org/react";

const NewProduct = () => {
	return (
		<GeneralLayout headerTitle="Order-142">
			<div>
				<form action="#" className="space-y-20">
					<div className="grid grid-cols-3 gap-x-4 gap-y-6">
						<CustomInput label="Full Name" placeholder="Enter Full Name" />
						<CustomInput
							label="Phone Number"
							placeholder="Enter Phone Number"
						/>
						<Textarea
							label="Address"
							className="col-span-full"
							variant="bordered"
							labelPlacement="outside"
							classNames={{
								inputWrapper: "shadow-none border border-gray-300",
							}}
						/>
					</div>
				</form>
			</div>
		</GeneralLayout>
	);
};

const CustomInput = (props: InputProps) => (
	<Input
		labelPlacement="outside"
		variant="bordered"
		classNames={{
			inputWrapper: "shadow-none border border-gray-300",
		}}
		{...props}
	/>
);

export default NewProduct;
