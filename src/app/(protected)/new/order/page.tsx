import CustomInput from "@/app/_components/custom-input";
import GeneralLayout from "@/app/layout/general-layout";
import { Textarea } from "@nextui-org/react";

const NewProduct = () => {
  return (
    <GeneralLayout headerTitle="Order-142">
      <div>
        <form action="#" className="space-y-20">
          <div className="grid grid-cols-3 gap-x-4 gap-y-6">
            <CustomInput label="Full Name" placeholder="Enter Full Name" />
            <CustomInput
              label="Phone Number"
              placeholder="Enter Phone Number"
            />
            <Textarea
              label="Address"
              className="col-span-full"
              variant="bordered"
              labelPlacement="outside"
              classNames={{
                inputWrapper: "shadow-none border border-gray-300",
              }}
            />
          </div>
        </form>
      </div>
    </GeneralLayout>
  );
};

export default NewProduct;
