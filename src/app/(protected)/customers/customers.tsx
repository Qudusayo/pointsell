"use client";

import {
  Button,
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
  User,
} from "@nextui-org/react";
import { Ellipsis, Search, Users } from "lucide-react";
import React from "react";
import { columns } from "./data";

type User = {
  id: number;
  name: string;
  address: string;
  team: string;
  orders: string;
  date_added: string;
  avatar: string;
  phone: string;
};

export default function Customers({ users }: { users: User[] }) {
  const [rowsPerPage] = React.useState(10);
  const [filterValue, setFilterValue] = React.useState("");
  const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
    column: "name",
    direction: "ascending",
  });
  const [page, setPage] = React.useState(1);

  const pages = Math.ceil(users.length / rowsPerPage);

  const hasSearchFilter = Boolean(filterValue);

  const filteredItems = React.useMemo(() => {
    let filteredUsers = [...users];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user) =>
        user.name.toLowerCase().includes(filterValue.toLowerCase()),
      );
    }

    return filteredUsers;
  }, [users, filterValue]);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a: User, b: User) => {
      const first = a[sortDescriptor.column as keyof User] as number;
      const second = b[sortDescriptor.column as keyof User] as number;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = React.useCallback((user: User, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof User];

    switch (columnKey) {
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
  }, []);

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
      <div className="flex flex-col gap-4">
        <div className="flex items-end justify-between gap-3">
          <Input
            isClearable
            className="shadow-none"
            classNames={{
              mainWrapper: "shadow-none",
              innerWrapper: "shadow-none",
              base: "w-full shadow-none",
              inputWrapper: "border-none shadow-none bg-[#F4F4F5]",
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
  }, [filterValue, onSearchChange, users.length, hasSearchFilter]);

  const bottomContent = React.useMemo(() => {
    return (
      <div className="flex flex-grow items-end">
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
          <div className="bg-main-color-primary/10 relative mx-auto h-24 w-24 rounded-full">
            <Users
              size={40}
              className="text-main-color-primary absolute inset-0 m-auto"
            />
          </div>
          <h2 className="text-lg font-medium text-black">
            You don&apos;t have any customers
          </h2>
          <span className="text-default-400 text-balance">
            You have not recieved any customers added to this list yet.
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
        wrapper: "shadow-none border min-h-full",
      }}
      topContent={topContent}
      bottomContent={bottomContent}
      sortDescriptor={sortDescriptor}
      onSortChange={setSortDescriptor}
    >
      <TableHeader columns={columns}>
        {(column) => (
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
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell className="py-3 text-base">
                {renderCell(item, columnKey)}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
