import GeneralLayout from "@/layout/general-layout";
import { Button } from "@nextui-org/react";
import { Plus } from "lucide-react";
import Link from "next/link";
import Customers from "./customers";
import { users } from "./data";

const DashboardPage = () => {
	return (
		<GeneralLayout
			headerTitle="Customers"
			headerControl={
				<Button
					className="bg-main-color-primary text-white"
					endContent={<Plus size={16} />}
					as={Link}
					href="/customers/new"
				>
					Add New
				</Button>
			}
		>
			<Customers users={users} />
		</GeneralLayout>
	);
};

export default DashboardPage;
