import { ReactNode } from "react";

const Header = ({
	title,
	control,
}: {
	title: ReactNode | string;
	control?: ReactNode;
}) => {
	return (
		<header className="flex flex-wrap items-center justify-between gap-4 px-2 py-8 md:p-8">
			{typeof title === "string" ? (
				<h2 className="text-3xl font-bold">{title}</h2>
			) : (
				title
			)}
			{control}
		</header>
	);
};

export default Header;
