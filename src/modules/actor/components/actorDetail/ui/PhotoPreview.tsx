import Image from "next/image";
import { FC, useEffect, useState } from "react";

type ModalProps = {
    actorMedia: { url: string }[] | undefined;
    isOpen: boolean;
    closeModal: () => void;
    selectedImageUrl?: string;
};

export const PhotoPreview: FC<ModalProps> = ({
    actorMedia,
    isOpen,
    selectedImageUrl,
    closeModal,
}) => {
    const selectedIndex = actorMedia?.findIndex(
        (media) => media.url === selectedImageUrl
    );
    const [currentIndex, setCurrentIndex] = useState(selectedIndex || 0);

    useEffect(() => {
        window.scrollTo(0, 0);
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    const nextPhoto = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + 1 >= (actorMedia?.length || 0) ? 0 : prevIndex + 1
        );
    };

    const prevPhoto = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex - 1 < 0 ? (actorMedia?.length || 0) - 1 : prevIndex - 1
        );
    };

    if (!actorMedia || actorMedia.length === 0) {
        return null;
    }

    return (
        <div>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center backdrop-filter backdrop-blur-[2px] z-50">
                    <div className="max-w-[90%] max-h-[90%] flex justify-center items-center">
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 md:top-8 md:right-8 text-white text-3xl z-50"
                        >
                            &times;
                        </button>
                        <button
                            onClick={prevPhoto}
                            className="absolute left-4 md:left-8 text-white bg-black text-xl md:text-2xl rounded-full py-1 px-3"
                        >
                            &#10094;
                        </button>
                        <Image
                            src={actorMedia[currentIndex].url}
                            alt="Actor"
                            width={290}
                            height={350}
                            style={{ objectFit: "cover" }}
                            className="w-full max-w-[290px] max-h-[350px] sm:max-w-[640px] sm:max-h-[800px]"
                        />
                        <button
                            onClick={nextPhoto}
                            className="absolute right-4 md:right-8 text-white bg-black text-xl md:text-2xl rounded-full py-1 px-3"
                        >
                            &#10095;
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
