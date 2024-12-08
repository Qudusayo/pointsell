"use client";

import FileUploader from "@/app/_components/file-uploader";
import GeneralLayout from "@/app/layout/general-layout";
import { Button, Input, InputProps } from "@nextui-org/react";
import { MoveLeft } from "lucide-react";
import Link from "next/link";

const NewProduct = () => {
  return (
    <GeneralLayout
      headerTitle={
        <div>
          <h2 className="text-3xl font-bold">Add Product</h2>
          <Link
            href="/products"
            className="text-main-color-primary flex items-center gap-2"
          >
            <MoveLeft size={24} />
            Back to Products
          </Link>
        </div>
      }
    >
      <div>
        <form action="#" className="space-y-20">
          <div>
            <FileUploader />
          </div>
          <div className="grid grid-cols-3 gap-x-4 gap-y-12">
            <CustomInput label="Product Name" placeholder="Product Name" />
            <CustomInput label="Product Unit" placeholder="Enter Unit" />
            <CustomInput label="Category" placeholder="Enter Category" />
            <CustomInput label="Price" placeholder="Enter Price" />
            <CustomInput label="Status" placeholder="Enter Status" />
            <CustomInput label="Product ID" placeholder="123456789" />
            <Button className="bg-main-color-primary col-span-1 col-start-2 text-white">
              Add Product
            </Button>
          </div>
        </form>
      </div>
    </GeneralLayout>
  );
};

const CustomInput = (props: InputProps) => (
  <Input
    labelPlacement="outside"
    variant="bordered"
    classNames={{
      inputWrapper: "shadow-none border border-gray-300",
    }}
    {...props}
  />
);

export default NewProduct;
