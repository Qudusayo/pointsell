import GeneralLayout from "@/layout/general-layout";
import Products from "./products";

const DashboardPage = () => {
	return (
		<GeneralLayout headerTitle="Product">
			<div className="px-6 pb-6">
				<Products />
			</div>
		</GeneralLayout>
	);
};

export default DashboardPage;
