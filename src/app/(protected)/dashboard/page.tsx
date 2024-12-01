"use client";

import GeneralLayout from "@/layout/general-layout";
import { cn, Tab, Tabs } from "@nextui-org/react";
import { Wallet } from "iconsax-react";
import { ChartNoAxesColumn } from "lucide-react";
import Chart from "./Chart";
import AreaChart from "./area-chart";

const DashboardPage = () => {
	return (
		<GeneralLayout
			headerTitle="Manager Dashboard"
			headerControl={
				<Tabs
					size="lg"
					aria-label="Tabs sizes"
					classNames={{
						cursor: "bg-main-color-primary",
						tabContent: "group-data-[selected=true]:text-white min-w-20",
					}}
					radius="sm"
				>
					<Tab key="today" title="Today" />
					<Tab key="this-week" title="This Week" />
					<Tab key="this-month" title="This Month" />
					<Tab key="this-year" title="This Year" />
				</Tabs>
			}
		>
			<div className="space-y-8">
				<div className="grid grid-cols-2 gap-8">
					<div className="rounded-xl border p-6">
						<h2 className="text-2xl font-semibold">Total Income</h2>
						<div className="space-y-8">
							<Chart />
							<div className="flex items-center justify-between">
								<ChartLabel title="Group A" colour="bg-black" />
								<ChartLabel title="Group B" colour="bg-main-color-primary" />
								<ChartLabel title="Group C" colour="bg-gray-400" />
							</div>
						</div>
					</div>
					<div className="rounded-xl border p-6">
						<h2 className="text-2xl font-semibold">Total Balance</h2>
						<div>
							<h2 className="my-12 text-center text-3xl font-semibold text-[#12991F]">
								₦30,000
							</h2>

							<div className="space-y-6">
								<BreakDown isIncome />
								<BreakDown />
							</div>
						</div>
					</div>
				</div>
				<div className="space-y-8 rounded-xl border p-6 pr-0">
					<h2 className="text-2xl font-semibold">Daily Selling</h2>
					<AreaChart />
				</div>
			</div>
		</GeneralLayout>
	);
};

const ChartLabel = ({ title, colour }: { title: string; colour: string }) => {
	return (
		<div className="flex items-center">
			<div className={cn("mr-2 h-4 w-4 rounded-full", colour)}></div>
			<p>{title}</p>
		</div>
	);
};

const BreakDown = ({ isIncome }: { isIncome?: boolean }) => (
	<div className="flex items-center gap-3">
		<div
			className={cn(
				"flex h-12 w-12 items-center justify-center rounded-full text-white",
				isIncome ? "bg-black" : "bg-main-color-primary",
			)}
		>
			{isIncome ? (
				<ChartNoAxesColumn size={25} strokeWidth={4} />
			) : (
				<Wallet size="25" color="#FFF" variant="Bold" />
			)}
		</div>
		<div className="flex flex-1 flex-col leading-5">
			<span>Total {isIncome ? "Income" : "Expenses"}</span>
			<span>$ 4,500</span>
		</div>
		<span className="text-gray-400">(+ 20% Increase)</span>
	</div>
);

export default DashboardPage;
