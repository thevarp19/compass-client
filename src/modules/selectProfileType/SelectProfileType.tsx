import { useLanguage } from "@/context/LanguageProvider";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export const SelectProfileType: FC = () => {
    const { language, getHref } = useLanguage();
    return (
        <div className="bg-gray flex flex-col gap-10 items-center justify-center pt-[30px] sm:pt-[60px] pb-16 sm:pb-52">
            <div className="bg-white flex flex-col gap-[50px] px-5 sm:px-10 rounded-[9px] border border-gray_border sm:w-[427px] sm:h-[250px] py-[14px] sm:py-[27px]">
                <div>
                    <Link
                        href={getHref("/")}
                        className="flex items-center gap-4 sm:gap-14"
                    >
                        <Image
                            src={"/icons/left-white.svg"}
                            width={20}
                            height={20}
                            alt="left"
                            className="w-[10px] sm:w-[20px] h-[10px] sm:h-[20px] "
                            style={{ objectFit: "contain" }}
                        />
                        <h2 className="text-center text-[13px] sm:text-[26px] text-black font-semibold">
                            {language.PROFILE_TYPE.role}
                        </h2>
                    </Link>
                </div>
                <div className="flex flex-col gap-5">
                    <Link href={getHref("profile/create-director")}>
                        <div className="bg-button_color text-[7px] sm:text-sm text-white rounded-[9px] font-medium text-center py-[6px] sm:py-[11px]">
                            {language.PROFILE_TYPE.casting}
                        </div>
                    </Link>
                    <Link href={getHref("profile/create-profile")}>
                        <div className="bg-button_color text-[7px] sm:text-sm text-white rounded-[9px] font-medium text-center py-[6px] sm:py-[11px]">
                            {language.PROFILE_TYPE.actor}
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};
