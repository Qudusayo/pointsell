"use client";

// import FileUploader from "@/components/file-uploader";
import CustomInput from "@/components/custom-input";
import GeneralLayout from "@/layout/general-layout";
import { Button, Select, SelectItem, Switch } from "@nextui-org/react";
import { useFormik } from "formik";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import Features from "./properties";

const rams = [
	{ key: "4", label: "4GB" },
	{ key: "8", label: "8GB" },
	{ key: "16", label: "16GB" },
	{ key: "18", label: "18GB" },
	{ key: "28", label: "28GB" },
	{ key: "32", label: "32GB" },
	{ key: "36", label: "36GB" },
];

const NewProduct = () => {
	const formData = useFormik({
		initialValues: {
			name: "",
			serialNo: "",
			price: "",
			ram: "",
			features: [],
			isCustomRam: false,
		},
		onSubmit: values => {
			console.log(values);
		},
	});

	return (
		<GeneralLayout
			headerTitle={
				<div>
					<h2 className="text-3xl font-bold">Add Product</h2>
					<Link
						href="/products"
						className="flex items-center gap-2 text-main-color-primary"
					>
						<MoveLeft size={24} />
						Back to Products
					</Link>
				</div>
			}
		>
			<div>
				<form className="space-y-20" onSubmit={formData.handleSubmit}>
					{/* <div>
						<FileUploader />
					</div> */}
					<div className="grid grid-cols-1 gap-x-4 gap-y-6 md:grid-cols-2 md:gap-y-12 lg:grid-cols-3">
						<CustomInput
							label="Name"
							placeholder="Name"
							{...formData.getFieldProps("name")}
						/>
						<CustomInput
							label="Serial No."
							placeholder="Enter Unit"
							{...formData.getFieldProps("serialNo")}
						/>
						<CustomInput
							label="Price"
							placeholder="Enter Price"
							{...formData.getFieldProps("price")}
						/>
						<div className="relative -top-1 flex flex-col items-start gap-1">
							<div className="flex items-center gap-2">
								<span className="text-sm">Custom RAM</span>
								<Switch
									size="sm"
									className="scale-80"
									checked={formData.values.isCustomRam}
									onValueChange={checked => {
										formData.setFieldValue("isCustomRam", checked);
									}}
								/>
							</div>
							{!formData.values.isCustomRam ? (
								<Select
									labelPlacement="outside"
									placeholder="Select RAM"
									variant="bordered"
									size="lg"
									classNames={{
										trigger: "shadow-none border-1 border-gray-300 rounded-lg",
									}}
									onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
										formData.setFieldValue("ram", e.target.value);
									}}
									selectedKeys={[formData.values.ram]}
								>
									{rams.map(ram => (
										<SelectItem key={ram.key}>{ram.label}</SelectItem>
									))}
								</Select>
							) : (
								<CustomInput
									placeholder="Enter RAM"
									{...formData.getFieldProps("ram")}
								/>
							)}
						</div>
						<Features />
						<div className="relative -top-1 flex items-end">
							<Button
								size="lg"
								className="w-full bg-main-color-primary align-bottom text-white"
								type="submit"
							>
								Add Product
							</Button>
						</div>
					</div>
				</form>
			</div>
		</GeneralLayout>
	);
};

export default NewProduct;
