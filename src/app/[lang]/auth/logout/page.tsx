"use client";
import { Loading } from "@/components/shared/loading/Loading";
import { useLanguage } from "@/context/LanguageProvider";
import { logout } from "@/redux/user/auth/actions";
import { useAppDispatch } from "@/redux/utils";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
    const dispatch = useAppDispatch();
    const queryClient = useQueryClient();
    const router = useRouter();
    const { getHref } = useLanguage();
    useEffect(() => {
        dispatch(logout());
        localStorage.removeItem("isAdvancedSearchOpen");
        queryClient.invalidateQueries({ queryKey: ["profile"] });
        router.push(getHref("/"));
    }, []);
    return <Loading className="w-screen h-screen" />;
}
