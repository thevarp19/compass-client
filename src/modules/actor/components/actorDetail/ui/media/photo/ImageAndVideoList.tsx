"use client";
import { useLanguage } from "@/context/LanguageProvider";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { AllInfoProps } from "../../AllInfo";
export const ImageAndVideoList: FC<AllInfoProps> = ({ actor, isEdit }) => {
    const [imageURLs, setImageURLs] = useState<string[]>(
        actor?.abstract_user_data.userPhotos?.map((photo) => photo.url) || []
    );
    const videoSlots = actor?.userVideos?.slice(-2).concat(
        Array.from({ length: 2 - actor.userVideos.length }).map((_, i) => ({
            url: "",
        }))
    );

    const { language, getHref } = useLanguage();
    const [actorId, setActorId] = useState<string | undefined>();
    const imageLength = imageURLs?.length;
    const videoLength = actor?.userVideos?.length || 0;
    useEffect(() => {
        setActorId(localStorage.getItem("actorId") ?? undefined);
    }, []);
    return (
        <div className="flex flex-col gap-[10px] sm:gap-5">
            <div className="flex flex-col gap-[5px] sm:gap-[10px]">
                <div className="flex items-center justify-between">
                    <h2 className="text-[8px] sm:text-base text-black">
                        {language.FORM_TEXT.photos}({imageLength})
                    </h2>
                    <Link
                        href={
                            isEdit
                                ? getHref("/profile/media")
                                : getHref(`actors/${actorId}/media`)
                        }
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
                        ? imageURLs.slice(0, 4).map((url, index) => (
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
                        : Array.from({ length: 4 }, (_, index) => (
                              <div
                                  key={index}
                                  className="relative bg-gray_border rounded-[3px] w-[21px] h-[21px] sm:w-[57px] sm:h-[57px]"
                              ></div>
                          ))}
                </div>
            </div>
            <div className="flex flex-col gap-[5px] sm:gap-[10px]">
                <div className="flex items-center justify-between">
                    <h2 className="text-[8px] sm:text-base text-black">
                        {language.FORM_TEXT.videos}({videoLength})
                    </h2>
                    <Link
                        href={
                            isEdit
                                ? getHref("/profile/media")
                                : getHref(`actors/${actorId}/media`)
                        }
                        className="flex items-center"
                    >
                        <button
                            type="button"
                            className="text-center text-[6px] sm:text-xs text-button_color rounded cursor-pointer"
                        >
                            {language.FORM_TEXT.showAll}
                        </button>
                    </Link>
                </div>
                <div className="flex sm:justify-between gap-[2px] sm:gap-0">
                    {videoSlots?.map((video, index) => (
                        <div
                            key={index}
                            className="bg-gray_border rounded-[3px] w-[44px] sm:w-[121px] h-[21px] sm:h-[80px] relative flex items-center justify-center"
                        >
                            {video.url ? (
                                <Image
                                    src={`https://img.youtube.com/vi/${getYoutubeId(
                                        video.url
                                    )}/0.jpg`}
                                    className="rounded-[3px]"
                                    alt={`Video preview ${index}`}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            ) : (
                                <div></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

function getYoutubeId(url: any) {
    if (!url) return "";
    const pattern =
        /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

    const match = url.match(pattern);
    return match ? match[1] : "";
}
