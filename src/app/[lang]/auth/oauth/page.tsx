"use client";
import jwtService, { JwtType } from "@/lib/jwt";
import { App } from "antd";
// import { useMessage } from "@/context/MessageContext";
// import jwtService, { jwtType } from "@/lib/jwt";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CreatePasswordPage({ searchParams }: any) {
    const router = useRouter();
    const { message } = App.useApp();

    useEffect(() => {
        const oauthLanguage = localStorage.getItem("oauthLanguage") || "ru";
        const urlParams = new URLSearchParams(window.location.search);
        const jwtToken: JwtType = {
            access: urlParams.get("access") || "",
            refresh: urlParams.get("refresh") || "",
        };
        if (jwtToken) {
            jwtService.saveJwt(jwtToken);
            router.push(`/${oauthLanguage}/in/home/`);
        } else {
            message.error("Not authorized");
            router.push(`/${oauthLanguage}/auth`);
        }
    }, []);

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <svg
                className="animate-spin h-10 w-10 text-white"
                viewBox="0 0 24 24"
            >
                <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                ></circle>
                <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 0116 0v4h4v-4a12 12 0 10-24 0v4h4v-4z"
                ></path>
            </svg>
        </div>
    );
}