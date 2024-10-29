"use client";

import HomeHeader from "@/components/home-header";
import ProductCard from "@/components/product-card";
import HomeLayout from "@/layout/home-layout";

export default function Home() {
	// const { count, incrementCount, decrementCount } = useCounterStore(
	// 	state => state,
	// );

	return (
		<HomeLayout>
			<HomeHeader />
			<div className="grid flex-1 grid-cols-3 gap-4 overflow-y-auto px-6 pb-6">
				{Array(10)
					.fill(0)
					.map((_, index) => (
						<div key={index}>
							<ProductCard />
						</div>
					))}
			</div>
		</HomeLayout>
	);
}
