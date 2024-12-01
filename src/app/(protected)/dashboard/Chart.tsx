"use client";

import { Cell, Pie, PieChart } from "recharts";

const data = [
	{ name: "Group A", value: 400 },
	{ name: "Group B", value: 300 },
	{ name: "Group C", value: 300 },
];
const COLORS = ["#000000", "#F67F20", "#DDDDDD"];

export default function Chart() {
	return (
		<div className="relative mx-auto w-fit">
			<PieChart
				width={200}
				height={200}
				className="flex items-center justify-center"
			>
				<Pie
					data={data}
					innerRadius={60}
					outerRadius={80}
					paddingAngle={1}
					dataKey="value"
					style={{
						cursor: "pointer",
						margin: "auto",
					}}
				>
					{data.map((entry, index) => (
						<Cell
							key={`cell-${index}`}
							fill={COLORS[index % COLORS.length]}
							style={{
								outline: "none",
							}}
						/>
					))}
				</Pie>
			</PieChart>
			<h2 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center text-lg font-medium">
				40,000
			</h2>
		</div>
	);
}
