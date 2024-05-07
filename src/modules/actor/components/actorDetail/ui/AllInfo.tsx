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
        <div className="flex py-[60px]">
            <div className="flex flex-col gap-10">
                <div className="flex gap-10">
                    <div className="flex flex-col gap-12 ">
                        <div className="flex flex-col gap-5">
                            <div className="flex justify-center items-center bg-gray_border w-[250px] h-[350px] rounded-lg overflow-hidden relative">
                                <Image
                                    src={actor?.abstract_user_data.avatar || ""}
                                    fill
                                    alt="Uploaded photo"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="grid grid-cols-4 gap-[15px] px-5">
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
                                                width={40}
                                                height={40}
                                                alt={`${social.name} icon`}
                                                className="object-cover w-[40px] h-[40px]"
                                            />
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>

                        {actor?.userContacts && (
                            <div className="flex flex-col gap-5 w-full">
                                <h2 className="text-xl font-semibold text-black">
                                    {FORM_TEXT.contactInfo}
                                </h2>

                                {actor?.userContacts?.map((contact, index) => (
                                    <div
                                        key={index}
                                        className="flex justify-between items-center"
                                    >
                                        <h2 className="text-grayDark_text">
                                            {contact.number}{" "}
                                        </h2>
                                        <div className="w-max">
                                            <h2 className="text-grayDark_text w-max">
                                                {contact.name}
                                            </h2>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col gap-5 min-w-[540px] max-w-[540px]">
                        <GeneralInformation actor={actor} />
                    </div>
                    <MediaInfo actor={actor} isEdit={isEdit} />
                </div>
                <div className="flex justify-end text-center">
                    {/* <button
                        type="submit"
                        // onClick={(e) => {
                        //     e.preventDefault();
                        //     setIsConfirmDrawerVisible(true);
                        // }}
                        className="bg-button_color text-base text-white font-bold rounded-[5px] w-[160px] h-[40px] text-center"
                    >
                        Сохранить
                         {mutation.isPending && <Loading />} 
                    </button> */}
                </div>
            </div>
        </div>
    );
};
