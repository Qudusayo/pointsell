"use client";

import {
	Button,
	Chip,
	ChipProps,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
	Input,
	Pagination,
	SortDescriptor,
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
} from "@nextui-org/react";
import { Ellipsis, Search, ShoppingBag } from "lucide-react";
import React from "react";
import { columns } from "./data";

type Product = {
	id: number;
	product_name: string;
	address: string;
	price: string;
	date_added: string;
	status: string;
	serial_number: string;
};

const statusColorMap: Record<string, ChipProps["color"]> = {
	in_stock: "success",
	out_of_stock: "danger",
	running_low: "warning",
};

export default function Orders({ orders }: { orders: Product[] }) {
	const [rowsPerPage] = React.useState(10);
	const [filterValue, setFilterValue] = React.useState("");
	const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
		column: "name",
		direction: "ascending",
	});
	const [page, setPage] = React.useState(1);

	const pages = Math.ceil(orders.length / rowsPerPage);

	const hasSearchFilter = Boolean(filterValue);

	const filteredItems = React.useMemo(() => {
		let filteredUsers = [...orders];

		if (hasSearchFilter) {
			filteredUsers = filteredUsers.filter(user =>
				user.product_name.toLowerCase().includes(filterValue.toLowerCase()),
			);
		}

		return filteredUsers;
	}, [orders, filterValue]);

	const items = React.useMemo(() => {
		const start = (page - 1) * rowsPerPage;
		const end = start + rowsPerPage;

		return filteredItems.slice(start, end);
	}, [page, filteredItems, rowsPerPage]);

	const sortedItems = React.useMemo(() => {
		return [...items].sort((a: Product, b: Product) => {
			const first = a[sortDescriptor.column as keyof Product] as number;
			const second = b[sortDescriptor.column as keyof Product] as number;
			const cmp = first < second ? -1 : first > second ? 1 : 0;

			return sortDescriptor.direction === "descending" ? -cmp : cmp;
		});
	}, [sortDescriptor, items]);

	const renderCell = React.useCallback(
		(products: Product, columnKey: React.Key) => {
			const cellValue = products[columnKey as keyof Product];

			switch (columnKey) {
				case "status":
					return (
						<Chip
							className="gap-1 border-none capitalize"
							color={statusColorMap[products.status]}
							size="sm"
							variant="faded"
						>
							{(cellValue as string).split("_").join(" ")}
						</Chip>
					);
				case "actions":
					return (
						<div className="relative flex items-center justify-center">
							<Dropdown className="border-1 border-default-200 bg-background">
								<DropdownTrigger>
									<Button isIconOnly radius="full" size="sm" variant="light">
										<Ellipsis className="text-default-400" size={20} />
									</Button>
								</DropdownTrigger>
								<DropdownMenu>
									<DropdownItem>View</DropdownItem>
									<DropdownItem>Edit</DropdownItem>
									<DropdownItem>Delete</DropdownItem>
								</DropdownMenu>
							</Dropdown>
						</div>
					);
				default:
					return cellValue;
			}
		},
		[],
	);

	const onSearchChange = React.useCallback((value?: string) => {
		if (value) {
			setFilterValue(value);
			setPage(1);
		} else {
			setFilterValue("");
		}
	}, []);

	const topContent = React.useMemo(() => {
		return (
			<div className="sticky left-0 top-0 z-10 flex flex-col gap-4 bg-background">
				<div className="flex items-end justify-between gap-3">
					<Input
						isClearable
						className="shadow-none"
						classNames={{
							mainWrapper: "shadow-none",
							innerWrapper: "shadow-none",
							base: "w-full shadow-none",
							inputWrapper: "border-none shadow-none bg-[#F4F4F5]",
							input: "text-base",
						}}
						placeholder="Search by name..."
						startContent={<Search className="text-default-300" />}
						value={filterValue}
						variant="bordered"
						onClear={() => setFilterValue("")}
						onValueChange={onSearchChange}
					/>
				</div>
			</div>
		);
	}, [filterValue, onSearchChange, orders.length, hasSearchFilter]);

	const bottomContent = React.useMemo(() => {
		return (
			<div className="sticky bottom-0 left-0 flex flex-grow items-end bg-white">
				<div className="flex w-full items-center justify-end border-t px-2 pt-4">
					<Pagination
						showControls
						classNames={{
							cursor: "text-white bg-main-color-primary",
							base: "py-1",
						}}
						color="default"
						isDisabled={hasSearchFilter}
						page={page}
						total={pages}
						variant="light"
						onChange={setPage}
					/>
				</div>
			</div>
		);
	}, [items.length, page, pages, hasSearchFilter]);

	const emptyContent = React.useMemo(() => {
		return (
			<div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center">
				<div className="max-w-80">
					<div className="relative mx-auto h-24 w-24 rounded-full bg-main-color-primary/10">
						<ShoppingBag
							size={40}
							className="absolute inset-0 m-auto text-main-color-primary"
						/>
					</div>
					<h2 className="text-lg font-medium text-black">
						You don&apos;t have any order.
					</h2>
					<span className="text-balance text-default-400">
						Please add a new order to see it here.
					</span>
				</div>
			</div>
		);
	}, []);

	return (
		<Table
			aria-label="Example table with custom cells"
			className="h-full"
			classNames={{
				base: "shadow-none items-start",
				wrapper: "shadow-none border min-h-full flex flex-col",
				table: "flex-grow overflow-auto",
			}}
			topContent={topContent}
			bottomContent={bottomContent}
			sortDescriptor={sortDescriptor}
			onSortChange={setSortDescriptor}
			isHeaderSticky
		>
			<TableHeader columns={columns}>
				{column => (
					<TableColumn
						key={column.uid}
						align={column.uid === "actions" ? "center" : "start"}
						allowsSorting={column.sortable}
					>
						{column.name}
					</TableColumn>
				)}
			</TableHeader>
			<TableBody items={sortedItems} emptyContent={emptyContent}>
				{item => (
					<TableRow key={item.id}>
						{columnKey => (
							<TableCell className="whitespace-nowrap text-nowrap py-3 text-base">
								{renderCell(item, columnKey)}
							</TableCell>
						)}
					</TableRow>
				)}
			</TableBody>
		</Table>
	);
}
