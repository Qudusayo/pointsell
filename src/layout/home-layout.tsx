import SideCart from "@/components/side-cart";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<section className="flex h-screen grid-cols-4 overflow-hidden">
			<section className="flex max-h-full flex-1 flex-col overflow-hidden transition-all duration-300 ease-in-out">
				{children}
			</section>
			<SideCart />
		</section>
	);
};

export default HomeLayout;
