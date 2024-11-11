"use client";

import {
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
	Tooltip,
	User,
} from "@nextui-org/react";
import { PenLineIcon, Trash2 } from "lucide-react";
import React from "react";
import { columns, users } from "./data";

type User = (typeof users)[0];

export default function Customers() {
	const renderCell = React.useCallback((user: User, columnKey: React.Key) => {
		const cellValue = user[columnKey as keyof User];

		switch (columnKey) {
			case "name":
				return (
					<User
						avatarProps={{ radius: "md", src: "" }}
						description={user.phone}
						name={cellValue}
					>
						{user.phone}
					</User>
				);
			case "role":
				return (
					<div className="flex flex-col">
						<p className="text-bold text-sm capitalize">{cellValue}</p>
						<p className="text-bold text-sm capitalize text-default-400">
							{user.team}
						</p>
					</div>
				);
			case "gender":
				return <p className="text-bold text-sm capitalize">{cellValue}</p>;
			case "actions":
				return (
					<div className="relative flex w-full items-end justify-center gap-6">
						<Tooltip content="Edit user">
							<span className="cursor-pointer text-lg text-default-400 active:opacity-50">
								<PenLineIcon />
							</span>
						</Tooltip>
						<Tooltip color="danger" content="Delete user">
							<span className="cursor-pointer text-lg text-danger active:opacity-50">
								<Trash2 />
							</span>
						</Tooltip>
					</div>
				);
			default:
				return cellValue;
		}
	}, []);

	return (
		<Table
			aria-label="Example table with custom cells"
			className="h-full"
			classNames={{
				base: "shadow-none",
				wrapper: "shadow-none border min-h-full",
			}}
		>
			<TableHeader columns={columns}>
				{column => (
					<TableColumn
						key={column.uid}
						align={column.uid === "actions" ? "center" : "start"}
					>
						{column.name}
					</TableColumn>
				)}
			</TableHeader>
			<TableBody items={users}>
				{item => (
					<TableRow key={item.id}>
						{columnKey => <TableCell>{renderCell(item, columnKey)}</TableCell>}
					</TableRow>
				)}
			</TableBody>
		</Table>
	);
}
