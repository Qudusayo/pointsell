import { Input, InputProps } from "@nextui-org/react";

const CustomInput = (props: InputProps) => (
	<Input
		labelPlacement="outside"
		variant="bordered"
		size="lg"
		classNames={{
			inputWrapper: "shadow-none border-gray-300 rounded-lg",
		}}
		{...props}
	/>
);

export default CustomInput;
