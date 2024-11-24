// src/providers/default-store-provider.tsx
"use client";

import { type ReactNode, createContext, useContext, useRef } from "react";
import { useStore } from "zustand";

import {
	type DefaultStore,
	createDefaultStore,
	initDefaultStore,
} from "@/stores/default-store";

export type DefaultStoreApi = ReturnType<typeof createDefaultStore>;

export const DefaultStoreContext = createContext<DefaultStoreApi | undefined>(
	undefined,
);

export interface DefaultStoreProviderProps {
	children: ReactNode;
}

export const DefaultStoreProvider = ({
	children,
}: DefaultStoreProviderProps) => {
	const storeRef = useRef<DefaultStoreApi>();
	if (!storeRef.current) {
		storeRef.current = createDefaultStore(initDefaultStore());
	}

	return (
		<DefaultStoreContext.Provider value={storeRef.current}>
			{children}
		</DefaultStoreContext.Provider>
	);
};

export const useDefaultStore = <T,>(
	selector: (store: DefaultStore) => T,
): T => {
	const defaultStoreContext = useContext(DefaultStoreContext);

	if (!defaultStoreContext) {
		throw new Error(`useDefaultStore must be used within DefaultStoreProvider`);
	}

	return useStore(defaultStoreContext, selector);
};
