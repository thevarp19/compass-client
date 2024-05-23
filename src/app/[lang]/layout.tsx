import { Footer } from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import { AuthProvider } from "@/context/AuthContext";
import { LanguageKey, LanguageProvider } from "@/context/LanguageProvider";
import { QueryWrapper } from "@/context/QueryProvider";
import "@/styles/globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { App } from "antd";
import { notFound } from "next/navigation";
import { ReactNode } from "react";
import StoreProvider from "./StoreProvider";

export default async function LanguageLayout({
    children,
    params,
}: {
    children: ReactNode;
    params: { lang: string };
}) {
    const languageKey = params.lang;

    if (!["kz", "ru"].includes(languageKey)) {
        return notFound();
    }
    return (
        <LanguageProvider languageKey={languageKey as LanguageKey}>
            <QueryWrapper>
                <StoreProvider>
                    <AntdRegistry>
                        <App className="min-h-screen flex flex-col">
                            <AuthProvider>
                                <Navbar />
                                <div className="flex-grow">{children}</div>
                                <Footer />
                            </AuthProvider>
                        </App>
                    </AntdRegistry>
                </StoreProvider>
            </QueryWrapper>
        </LanguageProvider>
    );
}
export async function generateStaticParams() {
    const languageKeys = ["kz", "ru"];
    return languageKeys;
}
