"use client";

import HomeHeader from "@/components/home-header";
import HomeLayout from "@/layout/home-layout";
import { products } from "./data";
import Products from "./products";

export default function Home() {
	return (
		<HomeLayout>
			<div className="flex w-full flex-col overflow-y-hidden">
				<HomeHeader />
				<div className="flex-1 overflow-hidden px-6 pb-6">
					<Products products={products} />
				</div>
			</div>
		</HomeLayout>
	);
}
