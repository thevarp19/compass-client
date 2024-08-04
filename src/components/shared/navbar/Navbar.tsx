"use client";
import { useAuthContext } from "@/context/AuthContext";
import { useLanguage } from "@/context/LanguageProvider";
import { getProfile } from "@/modules/auth/api";
import { useAppSelector } from "@/redux/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LanguageSelector } from "../language-selector/LanguageSelector";

export default function Navbar() {
    const auth = useAppSelector((state) => state.user.auth);
    const [profile, setProfile] = useState<any | undefined>();
    const [clientLoaded, setClientLoaded] = useState(false);
    const { isHasProfile } = useAuthContext();
    const { language, getHref } = useLanguage();

    useEffect(() => {
        const fetchProfile = async () => {
            if (!isHasProfile) return;

            // setIsLoading(true);
            try {
                const { data } = await getProfile();
                setProfile(data);
            } catch (error) {
                console.error("Failed to fetch profile:", error);
            } finally {
                // setIsLoading(false);
            }
        };

        fetchProfile();
    }, [isHasProfile, auth.isLoggedIn]);
    useEffect(() => {
        setClientLoaded(true);
    }, []);
    return (
        <nav className="bg-primary flex justify-around h-12 sm:h-24 items-center">
            <div>
                <Link
                    href={getHref("/")}
                    className="text-xs sm:text-2xl font-montserrat font-bold text-white"
                >
                    {language.NAVBAR.text}
                </Link>
            </div>
            <div className="flex gap-[10px] sm:gap-10 items-center text-[8px] sm:text-lg text-white font-medium">
                <div className="flex gap-[10px] sm:gap-10 items-center">
                    <Link href={getHref("/about-us")} className="text-white ">
                        {language.NAVBAR.about_us}
                    </Link>
                    <Link href={getHref("/actors")} className="text-white">
                        {language.NAVBAR.actors}
                    </Link>
                    <div className="text-primary sm:w-[120px]"></div>
                </div>
                {clientLoaded ? (
                    !auth.isLoggedIn ? (
                        <div className="flex gap-[10px] sm:gap-10 items-center">
                            <Link
                                href={getHref("/auth/login")}
                                className="text-white bg-button_color rounded-[5px] py-[5px] px-[12px] sm:py-[10px] sm:px-6 cursor-pointer text-[8px] font-semibold  sm:text-lg"
                            >
                                {language.NAVBAR.login}
                            </Link>
                            <Link
                                href={getHref("/auth/registration")}
                                className={`bg-button_color rounded-[5px] py-[5px] px-[12px] sm:py-[10px] sm:px-6 cursor-pointer text-[8px] text-white font-semibold  sm:text-lg`}
                            >
                                {language.NAVBAR.registration}
                            </Link>
                        </div>
                    ) : (
                        <Link href={getHref("/profile")} className="block">
                            <Image
                                src={
                                    isHasProfile &&
                                    profile?.abstract_user_data?.avatar
                                        ? profile?.abstract_user_data?.avatar
                                        : "/images/default-avatar.jpeg"
                                }
                                width={40}
                                height={40}
                                style={{ objectFit: "cover" }}
                                className="w-[20px] h-[20px] sm:w-[40px] sm:h-[40px] rounded-full"
                                alt="profile"
                            />
                        </Link>
                    )
                ) : (
                    <div className="w-[40px] h-[40px]"></div>
                )}

                <LanguageSelector />
            </div>
        </nav>
    );
}
