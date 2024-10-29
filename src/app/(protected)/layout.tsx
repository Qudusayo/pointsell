import Sidebar from "@/components/sidebar";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<section className="flex h-screen">
			<Sidebar />
			<div className="flex-1">{children}</div>
		</section>
	);
};

export default ProtectedLayout;
