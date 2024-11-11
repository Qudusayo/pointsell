const Header = ({ title }: { title: string }) => {
	return (
		<header className="p-8">
			<h2 className="text-3xl font-bold">{title}</h2>
		</header>
	);
};

export default Header;
