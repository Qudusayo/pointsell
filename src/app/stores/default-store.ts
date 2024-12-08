// src/stores/default-store.ts
import { createStore } from "zustand/vanilla";

export type DefaultState = {
	isSidebarCartOpen: boolean;
};

export type DefaultActions = {
	openSidebarCart: () => void;
	closeSidebarCart: () => void;
};

export type DefaultStore = DefaultState & DefaultActions;

export const initDefaultStore = (): DefaultState => {
	return {
		isSidebarCartOpen: false,
	};
};

export const defaultInitState: DefaultState = {
	isSidebarCartOpen: false,
};

export const createDefaultStore = (
	initState: DefaultState = defaultInitState,
) => {
	return createStore<DefaultStore>()(set => ({
		...initState,
		isSidebarCartOpen: initState.isSidebarCartOpen,
		openSidebarCart: () => set({ isSidebarCartOpen: true }),
		closeSidebarCart: () => set({ isSidebarCartOpen: false }),
	}));
};
