"use client";
import { useLanguage } from "@/context/LanguageProvider";
import { App, Spin } from "antd";
import axios from "axios";
import Image from "next/image";
import { ChangeEvent, FC, useRef, useState } from "react";

interface PhotoUploadProps {
    link: string | null;
    setLink: (newLink: string) => void;
}
export const UploadImage: FC<PhotoUploadProps> = ({ link, setLink }) => {
    const [loading, setLoading] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const { message } = App.useApp();
    const { language } = useLanguage();
    const handlePhotoInputChange = async (
        event: ChangeEvent<HTMLInputElement>
    ) => {
        if (inputRef?.current?.files?.length) {
            const selectedFile = inputRef.current.files[0];
            if (selectedFile.size > 5 * 1024 * 1024) {
                // 5MB in bytes
                message.error("Размер файла превышает 5MB");
                return;
            }
            setLoading(true);
            try {
                const formData = new FormData();
                formData.append("image", selectedFile);

                const { data } = await axios.post<{
                    message: string;
                    link: string;
                }>(
                    process.env.NEXT_PUBLIC_UPLOAD_FUNCTION_URL || "",
                    formData,
                    {
                        headers: { "Content-Type": "multipart/form-data" },
                    }
                );
                setLink(data.link);
                message.success("Успешно загружено!");
            } catch (error) {
                message.error("Ошибка загрузки");
            } finally {
                setLoading(false);
            }
        } else {
            setLink("");
        }
    };

    return (
        <div className="flex flex-col items-center gap-[10px] sm:gap-5">
            <div className="flex justify-center items-center bg-gray_border w-[70px] h-[100px] min-[400px]:w-[100px] min-[400px]:h-[135px] sm:w-[250px] sm:h-[350px] rounded-lg overflow-hidden relative">
                {loading && <Spin size="large" />}
                {link ? (
                    <Image
                        src={link}
                        fill
                        alt="Uploaded photo"
                        className="object-cover w-full h-full"
                    />
                ) : (
                    <div className=""></div>
                )}
            </div>
            <label
                htmlFor="profile-image-upload"
                className="text-center flex justify-center items-center py-[5px] sm:py-2 sm:px-4 cursor-pointer bg-button_color text-[8px] sm:text-base text-white font-bold w-[70px] h-[20px] min-[400px]:w-[100px] min-[400px]:h-[20px] sm:w-[250px] sm:h-[40px] rounded-[5px]"
            >
                {language.FORM_TEXT.uploadButton}
            </label>
            <input
                id="profile-image-upload"
                type="file"
                ref={inputRef}
                style={{ display: "none" }}
                className="bg-button_color text-base text-white font-bold w-[100px] sm:w-[250px] h-[20px] sm:h-[40px] rounded-[5px]"
                accept="image/*"
                onChange={handlePhotoInputChange}
            />
        </div>
    );
};
