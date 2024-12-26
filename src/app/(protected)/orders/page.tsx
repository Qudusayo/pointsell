import GeneralLayout from "@/layout/general-layout";
import { orders } from "./data";
import Orders from "./orders";

const DashboardPage = () => {
	return (
		<GeneralLayout headerTitle="Orders">
			<Orders orders={orders} />
		</GeneralLayout>
	);
};

export default DashboardPage;
