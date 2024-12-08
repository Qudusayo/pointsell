"use client";

import { Input, InputProps } from "@nextui-org/react";

const CustomInput = (props: InputProps) => (
  <Input
    labelPlacement="outside"
    variant="bordered"
    radius="sm"
    classNames={{
      inputWrapper: "shadow-none border border-gray-300",
    }}
    {...props}
  />
);

export default CustomInput;
