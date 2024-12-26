import Header from "@/components/header";

const GeneralLayout = ({
	children,
	headerTitle,
	headerControl,
}: {
	headerTitle: React.ReactNode | string;
	headerControl?: React.ReactNode;
	children: React.ReactNode;
}) => {
	return (
		<div className="flex h-full flex-col">
			<Header title={headerTitle} control={headerControl} />
			<div className="h-full flex-1 overflow-auto px-2 pb-6 md:px-6">
				{children}
			</div>
		</div>
	);
};

export default GeneralLayout;
