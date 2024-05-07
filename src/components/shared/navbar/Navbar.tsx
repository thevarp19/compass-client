"use client";
import { useAuthContext } from "@/context/AuthContext";
import { useAppSelector } from "@/redux/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NAVBAR } from "./string";

export default function Navbar() {
    const auth = useAppSelector((state) => state.user.auth);
    const [clientLoaded, setClientLoaded] = useState(false);
    const { isHasProfile, avatar } = useAuthContext();
    useEffect(() => {
        setClientLoaded(true);
        // console.log(isHasProfile, avatar);
    }, []);
    return (
        <nav className="bg-primary flex justify-around h-12 sm:h-24 items-center">
            <div>
                <Link
                    href="/"
                    className="text-xs sm:text-2xl font-montserrat font-bold text-white"
                >
                    {NAVBAR.text}
                </Link>
            </div>
            <div className="flex gap-[10px] sm:gap-10 items-center text-[8px] sm:text-lg text-white font-medium">
                <div className="flex gap-[10px] sm:gap-10 items-center">
                    <Link href="/about-us" className="text-white">
                        {NAVBAR.about_us}
                    </Link>
                    <Link href="/actors" className="text-white">
                        {NAVBAR.actors}
                    </Link>
                    <Link href="/our-projects" className="text-white">
                        {NAVBAR.our_project}
                    </Link>
                </div>
                {clientLoaded ? (
                    !auth.isLoggedIn ? (
                        <div className="flex gap-[10px] sm:gap-10 items-center">
                            <Link href="/auth/login" className="text-white">
                                {NAVBAR.login}
                            </Link>
                            <Link
                                href="/auth/registration"
                                className={`bg-button_color rounded-[5px] py-[5px] px-[12px] sm:py-[10px] sm:px-6 cursor-pointer text-[8px] text-white font-semibold  sm:text-lg`}
                            >
                                {NAVBAR.registration}
                            </Link>
                        </div>
                    ) : (
                        <Link href="/profile" className="block">
                            <Image
                                src={
                                    isHasProfile && avatar
                                        ? avatar
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

                <div className="flex justify-center items-center border-[1px] rounded-[7px] w-[20px] h-[20px] sm:w-[40px] sm:h-[40px]">
                    <Image
                        src="/images/kazakh.png"
                        width={32}
                        style={{ objectFit: "contain" }}
                        height={21.33}
                        alt="Kazakh flag"
                        className=""
                    />
                </div>
            </div>
        </nav>
    );
}
