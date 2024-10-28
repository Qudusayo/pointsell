import { NextUIProvider } from "@nextui-org/system";
import { CounterStoreProvider } from "./counter-store-provider";

const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<CounterStoreProvider>
			<NextUIProvider>{children}</NextUIProvider>
		</CounterStoreProvider>
	);
};

export default Providers;
