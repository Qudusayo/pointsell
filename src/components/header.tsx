import { ReactNode } from "react";

const Header = ({ title, control }: { title: string; control?: ReactNode }) => {
	return (
		<header className="flex items-center justify-between p-8">
			<h2 className="text-3xl font-bold">{title}</h2>
			{control}
		</header>
	);
};

export default Header;
