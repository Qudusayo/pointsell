import Header from "@/components/header";

const GeneralLayout = ({
	headerTitle,
	children,
}: {
	headerTitle: string;
	children: React.ReactNode;
}) => {
	return (
		<div className="flex h-screen max-h-full flex-col overflow-hidden">
			<Header title={headerTitle} />
			<div className="h-full flex-1 px-6 pb-6">{children}</div>
		</div>
	);
};

export default GeneralLayout;
