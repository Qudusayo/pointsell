"use client";

import GeneralLayout from "@/app/layout/general-layout";
import { Button } from "@nextui-org/react";
import { Plus } from "lucide-react";
import Link from "next/link";
import { products } from "./data";
import Products from "./products";

const DashboardPage = () => {
  return (
    <GeneralLayout
      headerTitle="Products"
      headerControl={
        <Button
          startContent={<Plus size={16} />}
          className="bg-main-color-primary text-white"
          as={Link}
          href="/new/product"
        >
          Add Product
        </Button>
      }
    >
      <Products products={products} />
    </GeneralLayout>
  );
};

export default DashboardPage;
