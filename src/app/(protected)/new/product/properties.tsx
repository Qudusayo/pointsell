"use client";

import { Select, SelectItem } from "@nextui-org/react";
import React from "react";

export const properties = [
	{ key: "mac", label: "MacBook" },
	{ key: "touch-screen", label: "Touch Screen" },
	{ key: "fingerprint", label: "Fingerprint" },
	{ key: "face-recognition", label: "Face Recognition" },
	{ key: "expandable-memory", label: "Expandable Memory" },
	{ key: "dedicated-graphic-card", label: "Dedicated Graphic Card" },
	{ key: "convertible", label: "Convertible" },
];

export default function Features() {
	const [values, setValues] = React.useState<Set<string>>(new Set([]));

	return (
		<div className="flex w-full flex-col gap-2">
			<Select
				label="Features"
				labelPlacement="outside"
				placeholder="Select Features"
				selectedKeys={values}
				size="lg"
				selectionMode="multiple"
				onSelectionChange={keys =>
					setValues(new Set(keys as unknown as string[]))
				}
				variant="bordered"
				classNames={{
					trigger: "shadow-none border-1 border-gray-300 rounded-lg",
				}}
			>
				{properties.map(animal => (
					<SelectItem key={animal.key}>{animal.label}</SelectItem>
				))}
			</Select>
			{/* <p className="text-small text-default-500">
				Selected: {Array.from(values).join(", ")}
			</p> */}
		</div>
	);
}
