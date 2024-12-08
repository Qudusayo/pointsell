import SideCart from "@/app/_components/side-cart";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<section className="flex h-screen grid-cols-4 overflow-hidden">
			<section className="flex max-h-full overflow-hidden">{children}</section>
			<SideCart />
		</section>
	);
};

export default HomeLayout;
