"use client";
import { makeStore } from "@/redux/store";
import { ReactNode, useRef } from "react";
import { Provider } from "react-redux";
import { Store } from "redux";

interface StoreProviderProps {
    children: ReactNode;
}

const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
    const storeRef = useRef<Store>();

    if (!storeRef.current) {
        storeRef.current = makeStore();
    }

    return <Provider store={storeRef.current}>{children}</Provider>;
};

export default StoreProvider;
