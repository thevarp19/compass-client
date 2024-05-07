import { GetActorDetailResponse } from "@/modules/actor/types";
import { FormikProps } from "formik";
import { FC, useEffect, useState } from "react";

type ModalProps = {
    formik: FormikProps<GetActorDetailResponse>;
    isOpen: boolean;
    onClose: () => void;
};

export const YouTubeVideoModal: FC<ModalProps> = ({
    formik,
    isOpen,
    onClose,
}) => {
    const [url, setUrl] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        if (!isOpen) setUrl("");
        setError("");
    }, [isOpen]);

    const isValidYouTubeUrl = (url: string) => {
        const pattern = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
        return pattern.test(url);
    };

    const handleSubmit = () => {
        if (url.trim() && isValidYouTubeUrl(url)) {
            const filteredVideos = formik.values.userVideos.filter(
                (video) => video.url.trim() !== ""
            );
            const updatedVideos = [...filteredVideos, { url }];
            formik.setFieldValue("userVideos", updatedVideos);
            onClose();
        } else {
            setError("Please enter a valid YouTube URL.");
        }
    };

    const handleKeyDown = (event: any) => {
        if (event.key === "Enter") {
            handleSubmit();
        } else if (event.key === "Escape") {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center p-4 backdrop-filter backdrop-blur-sm">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-sm w-full">
                <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray mb-4">
                        Добавьте ссылку на видео
                    </h3>
                    <input
                        type="text"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="YouTube URL"
                        className="w-full p-2 border border-gray_border rounded focus:outline-none focus:border-button_color"
                        aria-label="YouTube URL"
                    />
                    {error && (
                        <div className="text-red text-sm mt-2">{error}</div>
                    )}
                </div>
                <div className="flex justify-end gap-2 p-4">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray text-black rounded focus:outline-none"
                        aria-label="Close"
                    >
                        Close
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="px-4 py-2 bg-button_color text-white rounded focus:outline-none"
                        aria-label="Add Video"
                    >
                        Add Video
                    </button>
                </div>
            </div>
        </div>
    );
};
