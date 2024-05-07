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
                    <div className="max-w-[1140px] max-h-[802px] flex justify-center items-center">
                        <button
                            onClick={closeModal}
                            className="absolute top-32 right-48 text-black text-4xl "
                        >
                            &times;
                        </button>
                        <button
                            onClick={prevPhoto}
                            className="absolute left-48 text-white bg-black text-2xl rounded-full px-4 py-1"
                        >
                            &#10094;
                        </button>
                        <Image
                            src={actorMedia[currentIndex].url}
                            alt="Actor"
                            width={640}
                            height={800}
                            style={{ objectFit: "cover" }}
                            className="w-[640px]"
                        />
                        <button
                            onClick={nextPhoto}
                            className="absolute right-48 text-white bg-black text-2xl rounded-full px-4 py-1"
                        >
                            &#10095;
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
