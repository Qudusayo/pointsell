import SideCart from "@/components/side-cart";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<section className="flex h-dvh w-full overflow-hidden">
			<section className="flex h-full w-full overflow-hidden border-2 border-red-600">
				{children}
			</section>
			<SideCart />
		</section>
	);
};

export default HomeLayout;
