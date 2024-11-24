import { NextUIProvider } from "@nextui-org/system";
import { DefaultStoreProvider } from "./default-store-provider";

const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<DefaultStoreProvider>
			<NextUIProvider>{children}</NextUIProvider>
		</DefaultStoreProvider>
	);
};

export default Providers;
