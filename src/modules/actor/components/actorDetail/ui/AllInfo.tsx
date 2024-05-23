import { GetActorDetailResponse } from "@/modules/actor/types";

import { useLanguage } from "@/context/LanguageProvider";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { GeneralInformation } from "./GeneralInformation";
import { MediaInfo } from "./media/MediaInfo";
export interface AllInfoProps {
    actor?: GetActorDetailResponse;
    isEdit?: boolean;
}
const socialMediaIcons = [
    { name: "kinopoisk", imageSrc: "/icons/kinopoisk.svg" },
    { name: "instagram", imageSrc: "/icons/instagram-black.svg" },
    { name: "youtube", imageSrc: "/icons/youtube.svg" },
    { name: "linkedin", imageSrc: "/icons/linkedin-black.svg" },
    { name: "telegram", imageSrc: "/icons/telegram-black.svg" },
    { name: "facebook", imageSrc: "/icons/facebook.svg" },
    { name: "twitter", imageSrc: "/icons/twitter.svg" },
    { name: "tiktok", imageSrc: "/icons/tiktok.png" },
];

export const AllInfo: FC<AllInfoProps> = ({ actor, isEdit }) => {
    const { language, getHref } = useLanguage();

    return (
        <div className="flex justify-center sm:justify-normal py-[25px] sm:py-[60px]">
            <div className="flex flex-col">
                <div className="flex gap-[10px] sm:gap-10">
                    <div className="flex flex-col gap-12 ">
                        <div className="flex flex-col gap-[10px] sm:gap-5">
                            <div className="flex justify-center items-center bg-gray_border w-[70px] h-[100px] min-[415px]:w-[100px] sm:w-[250px] min-[415px]:h-[135px] sm:h-[350px] rounded-lg overflow-hidden relative">
                                <Image
                                    src={
                                        actor?.abstract_user_data?.avatar || ""
                                    }
                                    fill
                                    alt="Uploaded photo"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="flex flex-wrap gap-[6px] sm:gap-[15px] w-[70px] min-[415px]:w-[100px] sm:w-[250px] sm:px-5">
                                {socialMediaIcons
                                    .filter((social) => {
                                        const url =
                                            actor?.abstract_user_data?.userSocialMedias?.find(
                                                (media) =>
                                                    media.name.toLowerCase() ===
                                                    social.name.toLowerCase()
                                            )?.url;
                                        return url;
                                    })
                                    .map((social, index) => {
                                        const socialMediaUrl =
                                            actor?.abstract_user_data?.userSocialMedias?.find(
                                                (media) =>
                                                    media.name.toLowerCase() ===
                                                    social.name.toLowerCase()
                                            )?.url;

                                        return (
                                            <Link
                                                key={index}
                                                href={socialMediaUrl ?? ""}
                                            >
                                                <Image
                                                    src={social.imageSrc}
                                                    width={20}
                                                    height={20}
                                                    alt={`${social.name} icon`}
                                                    className="object-contain w-[12px] h-[12px] min-[415px]:w-[20px] sm:w-[40px] min-[415px]:h-[20px] sm:h-[40px]"
                                                />
                                            </Link>
                                        );
                                    })}
                            </div>
                        </div>

                        {actor?.userContacts && (
                            <div className="flex flex-col gap-[10px] sm:gap-5 w-full">
                                <h2 className="text-[10px] sm:text-xl font-semibold text-black">
                                    {language.FORM_TEXT.contacts}
                                </h2>

                                {actor?.userContacts?.map((contact, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col sm:flex-row sm:gap-5 justify-between sm:items-center"
                                    >
                                        <h2 className="sm:text-base text-[8px] text-grayDark_text">
                                            {contact.number}{" "}
                                        </h2>
                                        <div className="w-max">
                                            <h2 className="sm:text-base text-[8px] text-grayDark_text w-max">
                                                {contact.name}
                                            </h2>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col max-w-[132px] gap-[10px] sm:gap-[15px] min-[425px]:max-w-[162px] sm:min-w-[540px] sm:max-w-[540px] overflow-hidden">
                        <GeneralInformation actor={actor} />
                    </div>
                    <MediaInfo actor={actor} isEdit={isEdit} />
                </div>
            </div>
        </div>
    );
};
