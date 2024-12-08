import { formattedDate } from "@/app/lib/utils";
import { faker } from "@faker-js/faker";

const columns = [
  { name: "PRODUCT", uid: "product_name", sortable: true },
  { name: "PRICE", uid: "price", sortable: true },
  { name: "SERIAL NUMBER", uid: "serial_number" },
  { name: "STATUS", uid: "status" },
  { name: "DATE ADDED", uid: "date_added", sortable: true },
  { name: "", uid: "actions" },
];

const statuses = ["in_stock", "out_of_stock", "running_low"] as const;

const generateProducts = () => {
  const products = [];
  for (let i = 0; i < 100; i++) {
    const product = {
      id: i,
      product_name: faker.commerce.productName(),
      address: faker.location.streetAddress({ useFullAddress: true }),
      price: faker.commerce.price({
        min: 40000,
        max: 1000000,
        dec: 0,
        symbol: "₦",
      }),
      date_added: formattedDate(faker.date.recent()),
      status:
        statuses[Math.floor(Math.random() * statuses.length)] ?? "out_of_stock",
      serial_number: faker.commerce.isbn(13),
    };
    products.push(product);
  }
  return products;
};

const products = generateProducts();

export { columns, products };
