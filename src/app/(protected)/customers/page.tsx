import GeneralLayout from "@/layout/general-layout";
import Customers from "./customers";

const DashboardPage = () => {
	return (
		<GeneralLayout headerTitle="Customers">
			<Customers />
		</GeneralLayout>
	);
};

export default DashboardPage;
