"use client";

import CustomInput from "@/app/_components/custom-input";
import GeneralLayout from "@/app/layout/general-layout";
import { Button } from "@nextui-org/react";
import { MoveLeft } from "lucide-react";
import Link from "next/link";

{
  /* <h2 className="text-3xl font-bold">{title}</h2> */
}

const NewCustomer = () => {
  return (
    <GeneralLayout
      headerTitle={
        <div>
          <h2 className="text-3xl font-bold">Add Customer</h2>
          <Link
            href="/customers"
            className="flex items-center gap-2 text-main-color-primary"
          >
            <MoveLeft size={24} />
            Back to Customers
          </Link>
        </div>
      }
    >
      <div>
        <form action="#">
          <div className="grid grid-cols-3 gap-x-4 gap-y-12">
            <CustomInput label="Full Name" placeholder="Enter Full Name" />
            <CustomInput label="Orders" placeholder="Enter Order Quantity" />
            <CustomInput label="Spent" placeholder="Enter Spent Amount" />
            <CustomInput
              label="Phone Number"
              placeholder="Enter Phone Number"
            />
            <CustomInput
              label="Address"
              placeholder="Enter Full Address"
              className="col-span-2"
            />
            <Button radius="sm" className="col-span-1 col-start-2 bg-main-color-primary text-white">
              Add Customer
            </Button>
          </div>
        </form>
      </div>
    </GeneralLayout>
  );
};

export default NewCustomer;
