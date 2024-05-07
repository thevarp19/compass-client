"use client";
import { FORM_TEXT } from "@/modules/create-profile/strings/string";
import Image from "next/image";
import { FC, useState } from "react";
import ReactIframe from "react-iframe";
import { AllInfoProps } from "../AllInfo";
import { PhotoPreview } from "../PhotoPreview";

export const MediaView: FC<AllInfoProps> = ({ actor }) => {
    const [imageURLs, setImageURLs] = useState<string[]>(
        actor?.abstract_user_data.userPhotos.map((photo) => photo.url) || []
    );
    const [selectedImageUrl, setSelectedImageUrl] = useState<string | null>(
        null
    );

    const [isOpen, setIsOpen] = useState(false);
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const [selectedVideoUrl, setSelectedVideoUrl] = useState("");

    const openPhotoModal = (url: string) => {
        setSelectedImageUrl(url);
        setIsOpen(true);
    };
    const closeModal = () => setIsOpen(false);
    const openVideoModal = (url: string) => {
        setSelectedVideoUrl(url);
        setIsVideoOpen(true);
    };
    const closeVideoModal = () => setIsVideoOpen(false);

    const imageLength = actor?.abstract_user_data.userPhotos.length;
    const videoLength = actor?.userVideos.length || 0;

    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-10">
                <div className="flex items-center">
                    <h2 className="text-black text-[20px] font-medium">
                        {FORM_TEXT.photos}({imageLength})
                    </h2>
                </div>
                <div className="grid grid-cols-7 gap-4">
                    {imageURLs.map((url, index) => (
                        <div
                            onClick={() => openPhotoModal(url)}
                            key={index}
                            className="relative bg-gray_border rounded-[3px] w-[150px] h-[150px] cursor-pointer"
                        >
                            <Image
                                src={url}
                                alt={`Uploaded photo ${index}`}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-[3px]"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-10">
                <div className="flex items-center justify-between">
                    <h2 className="text-black text-[20px] font-medium">
                        {FORM_TEXT.videos}({videoLength})
                    </h2>
                </div>
                <div className="grid grid-cols-4 gap-[35px]">
                    {actor?.userVideos.map((video, index) => (
                        <div
                            key={index}
                            onClick={() => openVideoModal(video.url)}
                            className="bg-gray_border rounded-[3px] w-[260px] h-[160px] relative flex items-center justify-center"
                        >
                            {video.url ? (
                                <>
                                    <Image
                                        src={`https://img.youtube.com/vi/${getYoutubeId(
                                            video.url
                                        )}/0.jpg`}
                                        className="rounded-[3px]"
                                        alt={`Video preview ${index}`}
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                    <div className="z-20">
                                        <Image
                                            src={`/icons/play-button.svg`}
                                            className="w-[45px] h-[45px]"
                                            alt={`play`}
                                            width={45}
                                            height={45}
                                            objectFit="cover"
                                        />
                                    </div>
                                </>
                            ) : (
                                <div></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            {isOpen && (
                <PhotoPreview
                    actorMedia={actor?.abstract_user_data.userPhotos}
                    selectedImageUrl={selectedImageUrl || ""}
                    isOpen={isOpen}
                    closeModal={closeModal}
                />
            )}
            {isVideoOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-30"
                    onClick={closeVideoModal}
                >
                    <ReactIframe
                        url={
                            "https://www.youtube.com/embed/" +
                            getYoutubeId(selectedVideoUrl)
                        }
                        width="70%"
                        height="70%"
                        className="rounded-[8px] overflow-hidden"
                        frameBorder={0}
                        allow="autoplay; fullscreen"
                    />
                    <button
                        onClick={closeVideoModal}
                        className="absolute top-5 right-8 text-white text-2xl"
                    >
                        &times;
                    </button>
                </div>
            )}
        </div>
    );
};

function getYoutubeId(url: string) {
    var results = url.match("[\\?&]v=([^&#]*)");
    return results ? results[1] : "";
}
