"use client";

import { useCounterStore } from "@/providers/counter-store-provider";
import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";

export default function Home() {
	const { count, incrementCount, decrementCount } = useCounterStore(
		state => state,
	);

	return (
		<div>
			<Card>
				<CardHeader>Count</CardHeader>
				<CardBody>{count} </CardBody>
			</Card>
			<Button type="button" onClick={() => void incrementCount()}>
				Increment Count
			</Button>
			<Button type="button" onClick={() => void decrementCount()}>
				Decrement Count
			</Button>
		</div>
	);
}
