import SideCart from "@/components/side-cart";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<section className="grid h-screen grid-cols-4 overflow-hidden">
			<section className="col-span-3 flex max-h-full flex-col overflow-hidden">
				{children}
			</section>
			<section className="col-span-1 h-full">
				<SideCart />
			</section>
		</section>
	);
};

export default HomeLayout;
