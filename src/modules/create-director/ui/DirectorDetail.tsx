"use client";
import { useLanguage } from "@/context/LanguageProvider";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { GetDirectorType } from "../types";
interface ActorDetailProps {
    details?: GetDirectorType;
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
export const DirectorDetail: FC<ActorDetailProps> = ({ details }) => {
    const router = useRouter();
    const { language, getHref } = useLanguage();
    const handleLogout = () => {
        router.push(getHref("/auth/logout"));
    };
    const [imageURLs, setImageURLs] = useState<string[]>(
        details?.abstract_user_data.userPhotos?.map((photo) => photo.url) || []
    );

    const imageLength = imageURLs?.length;
    return (
        <div className="bg-gray flex flex-col px-[10px] min-[425px]:px-[25px] sm:px-[146px] py-[30px] sm:py-[60px]">
            <div className="flex justify-between">
                <span className="text-[20px] sm:text-[32px] font-semibold text-black">
                    {details?.abstract_user_data?.firstName}{" "}
                    {details?.abstract_user_data?.thirdName}{" "}
                    {details?.abstract_user_data?.lastName}
                </span>

                <Link href={getHref(`/profile/edit-director`)}>
                    <Image
                        src={"/icons/edit.svg"}
                        width={24}
                        height={24}
                        alt="edit"
                        className="w-[12px] sm:w-[24px] h-[12px] sm:h-[24px]"
                    />
                </Link>
            </div>
            <div className="flex justify-center sm:justify-normal py-[25px] sm:py-[60px]">
                <div className="flex flex-col">
                    <div className="flex gap-[10px] sm:gap-10">
                        <div className="flex flex-col gap-12 ">
                            <div className="flex flex-col gap-[10px] sm:gap-5">
                                <div className="flex justify-center items-center bg-gray_border w-[70px] h-[100px] min-[415px]:w-[100px] sm:w-[250px] min-[415px]:h-[135px] sm:h-[350px] rounded-lg overflow-hidden relative">
                                    <Image
                                        src={
                                            details?.abstract_user_data
                                                ?.avatar || ""
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
                                                details?.abstract_user_data?.userSocialMedias?.find(
                                                    (media) =>
                                                        media.name.toLowerCase() ===
                                                        social.name.toLowerCase()
                                                )?.url;
                                            return url;
                                        })
                                        .map((social, index) => {
                                            const socialMediaUrl =
                                                details?.abstract_user_data?.userSocialMedias?.find(
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
                        </div>
                        <div className="flex flex-col max-w-[132px] gap-[10px] sm:gap-[15px] min-[425px]:max-w-[162px] sm:min-w-[540px] sm:max-w-[540px] overflow-hidden">
                            Кастинг Директор
                        </div>
                        <div className="border border-gray_border h-max max-w-[100px] sm:max-w-[268px] rounded-[5px] p-[5px] sm:p-[10px] flex flex-col gap-[10px] sm:gap-5 pb-20 sm:pb-40">
                            <h2 className="text-[10px] sm:text-xl font-semibold text-black">
                                {language.FORM_TEXT.media}
                            </h2>
                            <div className="flex flex-col gap-[10px] sm:gap-5">
                                <div className="flex flex-col gap-[5px] sm:gap-[10px]">
                                    <div className="flex items-center justify-between">
                                        <h2 className="text-[8px] sm:text-base text-black">
                                            {language.FORM_TEXT.photos}(
                                            {imageLength})
                                        </h2>
                                        <Link
                                            href={getHref("/profile/media")}
                                            className="flex items-center"
                                        >
                                            <label
                                                htmlFor="image-uploads"
                                                className="text-center text-[6px] sm:text-xs text-button_color rounded cursor-pointer"
                                            >
                                                {language.FORM_TEXT.showAll}
                                            </label>
                                        </Link>
                                    </div>
                                    <div className="flex gap-[2px] sm:gap-2">
                                        {imageURLs.length > 0
                                            ? imageURLs
                                                  .slice(0, 4)
                                                  .map((url, index) => (
                                                      <div
                                                          key={index}
                                                          className="relative bg-gray_border rounded-[3px] w-[21px] h-[21px] sm:w-[57px] sm:h-[57px]"
                                                      >
                                                          <Image
                                                              src={url}
                                                              alt={`Uploaded photo ${index}`}
                                                              fill
                                                              objectFit="cover"
                                                              className="rounded-[3px]"
                                                          />
                                                      </div>
                                                  ))
                                            : Array.from(
                                                  { length: 4 },
                                                  (_, index) => (
                                                      <div
                                                          key={index}
                                                          className="relative bg-gray_border rounded-[3px] w-[21px] h-[21px] sm:w-[57px] sm:h-[57px]"
                                                      ></div>
                                                  )
                                              )}
                                    </div>
                                </div>
                            </div>

                            {/* <Award actor={actor} /> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-end">
                <span
                    onClick={handleLogout}
                    className="bg-[#F66] cursor-pointer text-[8px] sm:text-base flex items-center justify-center text-white font-semibold w-[80px] sm:w-[160px] h-[20px] sm:h-[40px] rounded-lg"
                >
                    {language.FORM_TEXT.logout}
                </span>
            </div>
        </div>
    );
};
