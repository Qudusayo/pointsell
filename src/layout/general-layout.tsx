import Header from "@/components/header";

const GeneralLayout = ({
	children,
	headerTitle,
	headerControl,
}: {
	headerTitle: string;
	headerControl?: React.ReactNode;
	children: React.ReactNode;
}) => {
	return (
		<div className="flex h-screen max-h-full flex-col overflow-hidden">
			<Header title={headerTitle} control={headerControl} />
			<div className="h-full flex-1 px-6 pb-6">{children}</div>
		</div>
	);
};

export default GeneralLayout;
