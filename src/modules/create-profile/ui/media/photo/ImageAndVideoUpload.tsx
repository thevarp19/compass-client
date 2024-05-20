import { useLanguage } from "@/context/LanguageProvider";
import { FormProps } from "@/modules/create-profile/types";
import axios from "axios";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { YouTubeVideoModal } from "../../form/YoutubeVideoModal";

export const ImageAndVideoUpload: FC<FormProps> = ({ formik }) => {
    const { language } = useLanguage();
    const [imageURLs, setImageURLs] = useState<string[]>(
        formik.values.abstract_user_data.userPhotos
            ?.slice(-4)
            ?.map((photo) => photo.url)
    );
    useEffect(() => {
        if (formik.values.abstract_user_data.userPhotos) {
            const urls = formik.values.abstract_user_data.userPhotos
                .slice(-4)
                .filter((photo) => photo.url)
                .map((photo) => photo.url);
            setImageURLs(urls);
        }
    }, [formik.values.abstract_user_data.userPhotos]);
    const [showModal, setShowModal] = useState(false);
    const videoSlots = formik.values?.userVideos
        ?.slice(-2)
        ?.concat(
            Array.from({ length: 2 - formik.values.userVideos.length }).map(
                (_, i) => ({ url: "" })
            )
        );

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    const handleFileChange = async (event: any) => {
        const filesArray = Array.from(event.target.files);
        try {
            const uploadPromises = filesArray.map((file) =>
                uploadFileAndGetURL(file)
            );
            const urls = await Promise.all(uploadPromises);

            const nonEmptyPhotos =
                formik.values.abstract_user_data.userPhotos.filter(
                    (photo) => photo.url
                );
            const updatedPhotos = urls.map((url) => ({ url }));

            formik.setFieldValue("abstract_user_data.userPhotos", [
                ...nonEmptyPhotos,
                ...updatedPhotos,
            ]);
            setImageURLs((prevURLs) => [...prevURLs, ...urls].slice(-4));
        } catch (error) {
            console.error("Error uploading files:", error);
        }
    };

    return (
        <div className="flex flex-col gap-[10px] sm:gap-5">
            <div className="flex flex-col gap-[5px] sm:gap-[10px]">
                <div className="flex items-center justify-between">
                    <h2 className="text-black text-[8px] sm:text-base">
                        {language.FORM_TEXT.photos}{" "}
                        <span className="text-[8px] sm:text-[10px] text-[#FF0000] ">
                            мин. 3 фото
                        </span>
                    </h2>
                    <label
                        htmlFor="image-uploads"
                        className="text-center text-[6px] sm:text-xs text-button_color rounded cursor-pointer"
                    >
                        {language.FORM_TEXT.add}
                    </label>
                    <input
                        id="image-uploads"
                        multiple
                        accept="image/*"
                        type="file"
                        style={{ display: "none" }}
                        onChange={handleFileChange}
                    />
                </div>
                <div className="flex gap-[2px] sm:gap-2">
                    {imageURLs.length > 0
                        ? imageURLs
                              .map((url, index) => (
                                  <div
                                      key={index}
                                      className="relative bg-gray_border rounded-[3px] w-[21px] sm:w-[57px] h-[21px] sm:h-[57px]"
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
                              .concat(
                                  Array.from(
                                      { length: 4 - imageURLs?.length },
                                      (_, i) => (
                                          <div
                                              key={`placeholder-${i}`}
                                              className="relative bg-gray_border rounded-[3px] w-[21px] sm:w-[57px] h-[21px] sm:h-[57px]"
                                          ></div>
                                      )
                                  )
                              )
                        : Array.from({ length: 4 }, (_, index) => (
                              <div
                                  key={index}
                                  className="relative bg-gray_border rounded-[3px] w-[21px] sm:w-[57px] h-[21px] sm:h-[57px]"
                              ></div>
                          ))}
                </div>
            </div>
            <div className="flex flex-col gap-[10px]">
                <div className="flex items-center justify-between">
                    <h2 className="text-[8px] sm:text-base text-black">
                        {language.FORM_TEXT.videos}
                    </h2>
                    <button
                        type="button"
                        className="text-center text-[6px] sm:text-xs text-button_color rounded cursor-pointer"
                        onClick={openModal}
                    >
                        {language.FORM_TEXT.add}
                    </button>
                </div>
                <div className="flex sm:justify-between gap-[2px] sm:gap-2">
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
            <YouTubeVideoModal
                formik={formik}
                isOpen={showModal}
                onClose={closeModal}
            />
        </div>
    );
};

async function uploadFileAndGetURL(file: any) {
    const formData = new FormData();
    formData.append("file", file);

    try {
        const { data } = await axios.post(
            process.env.NEXT_PUBLIC_UPLOAD_FUNCTION_URL || "/api/upload",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );

        return data.link;
    } catch (error) {
        console.error("Upload failed:", error);
        throw new Error("Failed to upload file");
    }
}
function getYoutubeId(url: any) {
    if (!url) return "";

    const pattern =
        /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

    const match = url.match(pattern);

    return match ? match[1] : "";
}
