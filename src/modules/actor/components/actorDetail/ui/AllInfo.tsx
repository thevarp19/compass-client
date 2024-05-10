import { GetActorDetailResponse } from "@/modules/actor/types";
import { FORM_TEXT } from "@/modules/create-profile/strings/string";
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
    return (
        <div className="flex py-[25px] sm:py-[60px]">
            <div className="flex flex-col">
                <div className="flex gap-[10px] sm:gap-10">
                    <div className="flex flex-col gap-12 ">
                        <div className="flex flex-col gap-[10px] sm:gap-5">
                            <div className="flex justify-center items-center bg-gray_border w-[70px] h-[100px] min-[425px]:w-[100px] sm:w-[250px] min-[425px]:h-[135px] sm:h-[350px] rounded-lg overflow-hidden relative">
                                <Image
                                    src={actor?.abstract_user_data.avatar || ""}
                                    fill
                                    alt="Uploaded photo"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="grid grid-cols-4 gap-[6px] sm:gap-[15px] sm:px-5">
                                {socialMediaIcons.map((social, index) => {
                                    const socialMediaUrl =
                                        actor?.abstract_user_data.userSocialMedias?.find(
                                            (media) =>
                                                media.name.toLowerCase() ===
                                                social.name.toLowerCase()
                                        )?.url || "#";

                                    return (
                                        <Link key={index} href={socialMediaUrl}>
                                            <Image
                                                src={social.imageSrc}
                                                width={20}
                                                height={20}
                                                alt={`${social.name} icon`}
                                                className="object-contain w-[20px] sm:w-[40px] h-[20px] sm:h-[40px]"
                                            />
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>

                        {actor?.userContacts && (
                            <div className="flex flex-col gap-[10px] sm:gap-5 w-full">
                                <h2 className="text-[10px] sm:text-xl font-semibold text-black">
                                    {FORM_TEXT.contacts}
                                </h2>

                                {actor?.userContacts?.map((contact, index) => (
                                    <div
                                        key={index}
                                        className="flex justify-between flex-wrap sm:flex-nowrap items-center"
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
                    <div className="flex flex-col min-w-[162px] max-w-[132px] min-[425px]:max-w-[162px] sm:min-w-[540px] sm:max-w-[540px] overflow-hidden">
                        <GeneralInformation actor={actor} />
                    </div>
                    <MediaInfo actor={actor} isEdit={isEdit} />
                </div>
            </div>
        </div>
    );
};
