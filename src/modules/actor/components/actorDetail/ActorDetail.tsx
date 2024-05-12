"use client";
import { useLanguage } from "@/context/LanguageProvider";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { GetActorDetailResponse } from "../../types";
import { AllInfo } from "./ui/AllInfo";
interface ActorDetailProps {
    details?: GetActorDetailResponse;
    isEdit?: boolean;
}
export const ActorDetail: FC<ActorDetailProps> = ({ details, isEdit }) => {
    const router = useRouter();
    const { language, getHref } = useLanguage();
    const handleLogout = () => {
        router.push(getHref("/auth/logout"));
    };

    return (
        <div className="bg-gray flex flex-col px-[10px] min-[425px]:px-[25px] sm:px-[146px] py-[30px] sm:py-[60px]">
            <div className="flex justify-between">
                <span className="text-[20px] sm:text-[32px] font-semibold text-black">
                    {details?.abstract_user_data?.firstName}{" "}
                    {details?.abstract_user_data?.thirdName}{" "}
                    {details?.abstract_user_data?.lastName}
                </span>
                {isEdit && (
                    <Link href={getHref(`/profile/edit`)}>
                        <Image
                            src={"/icons/edit.svg"}
                            width={24}
                            height={24}
                            alt="edit"
                            className="w-[12px] sm:w-[24px] h-[12px] sm:h-[24px]"
                        />
                    </Link>
                )}
            </div>
            <AllInfo actor={details} isEdit={isEdit} />
            {isEdit && (
                <div className="flex justify-end">
                    <span
                        onClick={handleLogout}
                        className="bg-[#F66] cursor-pointer text-[8px] sm:text-base flex items-center justify-center text-white font-semibold w-[80px] sm:w-[160px] h-[20px] sm:h-[40px] rounded-lg"
                    >
                        {language.FORM_TEXT.logout}
                    </span>
                </div>
            )}
        </div>
    );
};
