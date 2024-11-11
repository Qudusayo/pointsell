// import { faker } from "@faker-js/faker";

const columns = [
	{ name: "CUSTOMER", uid: "name" },
	{ name: "ORDERS", uid: "orders" },
	{ name: "SPENT", uid: "spent" },
	{ name: "GENDER", uid: "gender" },
	{ name: "ADDRESS", uid: "role" },
	{ name: "ACTIONS", uid: "actions" },
];

// const generateUsers = () => {
// 	const users = [];
// 	for (let i = 0; i < 5; i++) {
// 		const user = {
// 			id: i,
// 			name: faker.person.fullName(),
// 			role: faker.name.jobTitle(),
// 			team: faker.commerce.department(),
// 			gender: faker.person.sex(),
// 			orders: faker.string.numeric(),
// 			spent: faker.commerce.price(),
// 			avatar: faker.image.avatar(),
// 			phone: faker.phone.number({ style: "international" }),
// 		};
// 		users.push(user);
// 	}
// 	return users;
// };

// const users = generateUsers();

const users = [
	{
		id: 1,
		name: "Tony Reichert",
		role: "CEO",
		team: "Management",
		gender: "Male",
		orders: "12",
		spent: "$1,200",
		avatar: "https://randomuser.me/api",
		phone: "+1234567890",
	},
];

export { columns, users };
