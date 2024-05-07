import { FORM_TEXT } from "@/modules/create-profile/strings/string";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { AllInfoProps } from "../../AllInfo";
export const ImageAndVideo: FC<AllInfoProps> = ({ actor, isEdit }) => {
    const [imageURLs, setImageURLs] = useState<string[]>(
        actor?.abstract_user_data.userPhotos.map((photo) => photo.url) || []
    );
    const videoSlots = actor?.userVideos.slice(-2).concat(
        Array.from({ length: 2 - actor.userVideos.length }).map((_, i) => ({
            url: "",
        }))
    );
    const [actorId, setActorId] = useState<string | undefined>();
    const imageLength = imageURLs.length;
    const videoLength = actor?.userVideos.length || 0;
    useEffect(() => {
        setActorId(localStorage.getItem("actorId") ?? undefined);
    }, []);
    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-[10px]">
                <div className="flex items-center justify-between">
                    <h2 className="text-black">
                        {FORM_TEXT.photos}({imageLength})
                    </h2>
                    <Link href={isEdit ? "/profile/media" : `${actorId}/media`}>
                        <label
                            htmlFor="image-uploads"
                            className="text-center text-xs text-button_color rounded cursor-pointer"
                        >
                            {FORM_TEXT.showAll}
                        </label>
                    </Link>
                </div>
                <div className="flex gap-2">
                    {imageURLs.length > 0
                        ? imageURLs.slice(0, 4).map((url, index) => (
                              <div
                                  key={index}
                                  className="relative bg-gray_border rounded-[3px] w-[57px] h-[57px]"
                              >
                                  <Image
                                      src={url}
                                      alt={`Uploaded photo ${index}`}
                                      layout="fill"
                                      objectFit="cover"
                                      className="rounded-[3px]"
                                  />
                              </div>
                          ))
                        : Array.from({ length: 4 }, (_, index) => (
                              <div
                                  key={index}
                                  className="relative bg-gray_border rounded-[3px] w-[57px] h-[57px]"
                              ></div>
                          ))}
                </div>
            </div>
            <div className="flex flex-col gap-[10px]">
                <div className="flex items-center justify-between">
                    <h2 className="text-black">
                        {FORM_TEXT.videos}({videoLength})
                    </h2>
                    <Link href={isEdit ? "/profile/media" : `${actorId}/media`}>
                        <button
                            type="button"
                            className="text-center text-xs text-button_color rounded cursor-pointer"
                        >
                            {FORM_TEXT.showAll}
                        </button>
                    </Link>
                </div>
                <div className="flex justify-between">
                    {videoSlots?.map((video, index) => (
                        <div
                            key={index}
                            className="bg-gray_border rounded-[3px] w-[121px] h-[80px] relative flex items-center justify-center"
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
    var results, video;
    if (url === null) {
        return "";
    }
    results = url.match("[\\?&]v=([^&#]*)");
    video = results === null ? url : results[1];

    return video;
}
