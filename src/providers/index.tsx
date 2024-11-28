"use client";

import { NextUIProvider } from "@nextui-org/system";
import { SessionProvider } from "next-auth/react";
import { DefaultStoreProvider } from "./default-store-provider";

const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<SessionProvider>
			<DefaultStoreProvider>
				<NextUIProvider>{children}</NextUIProvider>
			</DefaultStoreProvider>
		</SessionProvider>
	);
};

export default Providers;
