"use client";
import { FORM_TEXT } from "@/modules/create-profile/strings/string";
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
    const handleLogout = () => {
        router.push("/auth/logout");
    };

    return (
        <div className="bg-gray flex flex-col px-[146px] py-[60px]">
            <div className="flex justify-between">
                <span className="text-[32px] font-semibold text-black">
                    {details?.abstract_user_data.firstName}{" "}
                    {details?.abstract_user_data.thirdName}{" "}
                    {details?.abstract_user_data.lastName}
                </span>
                {isEdit && (
                    <Link href={`/profile/edit`}>
                        <Image
                            src={"/icons/edit.svg"}
                            width={24}
                            height={24}
                            alt="edit"
                            className="object-cover w-[24px] h-[24px]"
                        />
                    </Link>
                )}
            </div>
            <AllInfo actor={details} isEdit={isEdit} />
            {isEdit && (
                <div className="flex justify-end">
                    <span
                        onClick={handleLogout}
                        className="bg-[#F66] cursor-pointer text-base flex items-center justify-center text-white font-semibold w-[160px] h-[40px] rounded-lg"
                    >
                        {FORM_TEXT.logout}
                    </span>
                </div>
            )}
        </div>
    );
};
