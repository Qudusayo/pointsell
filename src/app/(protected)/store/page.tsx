"use client";

import HomeHeader from "@/app/_components/home-header";
import ProductCard from "@/app/_components/product-card";
import HomeLayout from "@/app/layout/home-layout";
import { useDefaultStore } from "@/app/providers/default-store-provider";

import { cn } from "@nextui-org/react";

export default function Store() {
  const { isSidebarCartOpen } = useDefaultStore(
    (state: { isSidebarCartOpen: boolean }) => state,
  );

  return (
    <HomeLayout>
      <div
        style={{
          width: isSidebarCartOpen ? "calc(100% - 384px)" : "100%",
          transition: "width 0.3s",
        }}
        className="flex flex-col overflow-y-hidden"
      >
        <HomeHeader />
        <div
          className={cn(
            "grid flex-1 gap-4 overflow-scroll px-6 pb-6",
            isSidebarCartOpen ? "grid-cols-3" : "grid-cols-4",
          )}
        >
          {Array(10)
            .fill(0)
            .map((_, index) => (
              <div key={index}>
                <ProductCard />
              </div>
            ))}
        </div>
      </div>
    </HomeLayout>
  );
}
