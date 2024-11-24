import { formattedDate } from "@/lib/utils";
import { faker } from "@faker-js/faker";

const columns = [
	{ name: "CUSTOMER", uid: "name", sortable: true },
	{ name: "ORDERS", uid: "orders", sortable: true },
	{ name: "PHONE NUMBER", uid: "phone" },
	{ name: "ADDRESS", uid: "address" },
	{ name: "DATE ADDED", uid: "date_added", sortable: true },
	{ name: "", uid: "actions" },
];

const generateUsers = () => {
	const users = [];
	for (let i = 0; i < 0; i++) {
		const user = {
			id: i,
			name: faker.person.fullName(),
			address: faker.location.streetAddress({ useFullAddress: true }),
			team: faker.commerce.department(),
			orders: faker.string.numeric(),
			date_added: formattedDate(faker.date.recent()),
			avatar: faker.image.avatar(),
			phone: "(+" + faker.phone.number({ style: "national" }).slice(1),
		};
		users.push(user);
	}
	return users;
};

const users = generateUsers();

export { columns, users };
