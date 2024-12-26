"use client";

import CustomInput from "@/components/custom-input";
import GeneralLayout from "@/layout/general-layout";
import {
	Avatar,
	Button,
	cn,
	Select,
	SelectItem,
	User,
} from "@nextui-org/react";
import { Plus, Trash2, UserPlus, Users } from "lucide-react";
import { useState } from "react";

const SettingsPage = () => {
	const [activeTab, setActiveTab] = useState<
		"employees" | "add-employee" | "edit-employee"
	>("employees");

	return (
		<GeneralLayout headerTitle="Settings">
			<div className="grid h-full gap-8 md:grid-cols-2">
				<div className="rounded-lg border p-4">
					<div className="flex flex-col items-center gap-4 border-b py-14">
						<Avatar className="h-40 w-40 text-large" />
						<div className="space-y-4 text-center">
							<h2 className="text-2xl font-medium">Balogun Emmanuel</h2>
							<span>General Manager</span>
						</div>
					</div>
					<div className="my-4 space-y-4">
						<LinkSwitcher
							title="Employees"
							icon={<Users />}
							isActive={activeTab === "employees"}
							clickHandler={() => setActiveTab("employees")}
						/>
						<LinkSwitcher
							title="Add Employee"
							icon={<UserPlus />}
							isActive={activeTab === "add-employee"}
							clickHandler={() => setActiveTab("add-employee")}
						/>
					</div>
				</div>
				<div className="">
					{activeTab === "employees" && <EmployeeList />}
					{activeTab === "add-employee" && <AddEmployee />}
				</div>
			</div>
		</GeneralLayout>
	);
};

const roles = [
	{ key: "admin", label: "Admin" },
	{ key: "manager", label: "Manager" },
	{ key: "employee", label: "Employee" },
];

const AddEmployee = () => {
	return (
		<div>
			<div>
				<div className="">
					<h2 className="text-2xl font-medium">Add Employees</h2>
				</div>
				<div className="my-4 grid gap-x-4 gap-y-8 md:grid-cols-2">
					<CustomInput label="First Name" placeholder="Enter First Name" />
					<CustomInput label="Last Name" placeholder="Enter Last Name" />
					<CustomInput label="Email" placeholder="Enter Email" />
					<Select
						labelPlacement="outside"
						placeholder="Select Role"
						variant="bordered"
						size="lg"
						classNames={{
							trigger: "shadow-none border-gray-300 rounded-lg",
						}}
						// onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
						// 	formData.setFieldValue("ram", e.target.value);
						// }}
						// selectedKeys={[formData.values.ram]}
					>
						{roles.map(role => (
							<SelectItem key={role.key}>{role.label}</SelectItem>
						))}
					</Select>
					<Button
						radius="sm"
						className="col-span-full col-start-1 bg-main-color-primary text-white"
					>
						Add Employees
					</Button>
				</div>
			</div>
		</div>
	);
};

const EmployeeList = () => {
	return (
		<div>
			<div>
				<div className="flex items-center justify-between">
					<h2 className="text-2xl font-medium">Employees</h2>
					<Button
						variant="solid"
						radius="sm"
						startContent={<Plus size={20} />}
						size="md"
						className="bg-main-color-primary text-white"
					>
						Add Employee
					</Button>
				</div>
				<div className="my-4 grid gap-4">
					<EmployeeCard />
					<EmployeeCard />
					<EmployeeCard />
					<EmployeeCard />
					<EmployeeCard />
				</div>
			</div>
		</div>
	);
};

const EmployeeCard = () => {
	return (
		<div className="flex items-center justify-between gap-4 rounded-lg border p-3">
			<User description="Product Designer" name="Jane Doe" />
			<Trash2 size={20} className="cursor-pointer text-red-500" />
		</div>
	);
};

const LinkSwitcher = ({
	title,
	icon,
	isActive,
	clickHandler,
}: {
	title: string;
	icon?: React.ReactNode;
	isActive?: boolean;
	clickHandler?: () => void;
}) => (
	<Button
		size="lg"
		variant={isActive ? "solid" : "bordered"}
		className={cn(
			"flex w-full justify-between border-1 px-3 text-left",
			isActive
				? "border-transparent bg-main-color-primary text-white"
				: "text-black",
		)}
		endContent={icon}
		radius="sm"
		onClick={clickHandler}
	>
		{title}
	</Button>
);

export default SettingsPage;
