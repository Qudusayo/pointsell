import Sidebar from "@/components/sidebar";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<section className="flex h-dvh w-dvw flex-col-reverse overflow-hidden md:flex-row">
			<Sidebar />
			<div className="flex-grow overflow-hidden">{children}</div>
		</section>
	);
};

export default ProtectedLayout;
