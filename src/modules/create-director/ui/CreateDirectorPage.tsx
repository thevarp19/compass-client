"use client";
import { FormikInput } from "@/components/shared/formik-input/FormikInput";
import { SelectInput } from "@/components/shared/select-input/SelectInput";
import { UploadImage } from "@/components/shared/upload-image/UploadImage";
import { useLanguage } from "@/context/LanguageProvider";
import useWarnIfUnsavedChanges from "@/hooks/useWarnIfUnsavedChanges";
import { axios } from "@/lib/axios";
import { socialMediaOptions } from "@/modules/create-profile/const/data";
import { useCreateDirector } from "@/modules/create-profile/forms";
import { FormConfirmationDrawer } from "@/modules/create-profile/ui/form/Form";
import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";

export const CreateDirectorPage = () => {
    const { formik, isDirty } = useCreateDirector();
    const { language } = useLanguage();
    const [isConfirmDrawerVisible, setIsConfirmDrawerVisible] =
        useState<boolean>(false);
    const [imageURLs, setImageURLs] = useState<string[]>(
        formik.values.userPhotos?.slice(-4)?.map((photo) => photo.url)
    );
    useEffect(() => {
        if (formik.values.userPhotos) {
            const urls = formik.values.userPhotos
                .slice(-4)
                .filter((photo) => photo.url)
                .map((photo) => photo.url);
            setImageURLs(urls);
        }
    }, [formik.values.userPhotos]);

    const handleFileChange = async (event: any) => {
        const filesArray = Array.from(event.target.files);
        try {
            const uploadPromises = filesArray.map((file) =>
                uploadFileAndGetURL(file)
            );
            const urls = await Promise.all(uploadPromises);

            const nonEmptyPhotos = formik.values.userPhotos.filter(
                (photo) => photo.url
            );
            const updatedPhotos = urls.map((url) => ({ url }));

            formik.setFieldValue("userPhotos", [
                ...nonEmptyPhotos,
                ...updatedPhotos,
            ]);
            setImageURLs((prevURLs) => [...prevURLs, ...urls].slice(-4));
        } catch (error) {
            console.error("Error uploading files:", error);
        }
    };
    const [socials, setSocials] = useState(formik.values.userSocialMedias);
    useEffect(() => {
        setSocials(formik.values.userSocialMedias || []);
    }, [formik.values.userSocialMedias]);

    const handleSelectChange = (index: number, name: string, value: string) => {
        const newSocials = socials.map((social, idx) =>
            idx === index ? { ...social, name: value } : social
        );
        setSocials(newSocials);
        formik.setFieldValue("userSocialMedias", newSocials);
    };
    const handleInputChange = (
        index: number,
        e: ChangeEvent<HTMLInputElement>
    ) => {
        const newSocials = socials.map((social, idx) =>
            idx === index
                ? { ...social, [e.target.name]: e.target.value }
                : social
        );
        setSocials(newSocials);
        formik.setFieldValue("userSocialMedias", newSocials);
    };

    const addSocial = () => {
        const newSocial = {
            name: "",
            url: "",
        };
        const newSocials = [...socials, newSocial];
        setSocials(newSocials);
        formik.setFieldValue("userSocialMedias", newSocials);
    };

    const removeSocial = (index: number) => {
        const newSocials = socials.filter((_, idx) => idx !== index);
        setSocials(newSocials);
        formik.setFieldValue("userSocialMedias", newSocials);
    };

    useWarnIfUnsavedChanges(isDirty);

    return (
        <>
            <FormConfirmationDrawer
                drawerProps={{
                    isVisible: isConfirmDrawerVisible,
                    closeDrawer: () => {
                        setIsConfirmDrawerVisible(false);
                    },
                }}
                submitForm={formik.submitForm}
            />
            <div className="bg-gray flex flex-col px-[15px] min-[410px]:px-[25px] py-[30px] sm:px-[146px] sm:py-[60px]">
                <span className="text-[20px] sm:text-[32px] font-semibold text-black">
                    {language.FORM_TEXT.create_director}
                </span>
                <div className="flex py-[30px] sm:py-[60px] w-full">
                    <div className="flex flex-col gap-10 w-full">
                        <div className="flex justify-between w-full gap-[10px] sm:gap-10">
                            <UploadImage
                                link={formik.values.avatar}
                                setLink={(newLink) => {
                                    formik.setFieldValue("avatar", newLink);
                                }}
                            />
                            <div className="flex flex-col gap-[10px] sm:gap-5 min-w-[162px] min-[425px]:max-w-[162px] sm:min-w-[466px] sm:max-w-[466px]">
                                <div className="flex flex-col gap-5 w-full">
                                    <h2 className="text-[10px] sm:text-xl font-semibold text-black">
                                        {language.FORM_TEXT.generalInfo}
                                    </h2>
                                    <div className="flex justify-between items-center">
                                        <h2 className="text-[8px] sm:text-base text-grayDark_text">
                                            {language.FORM_TEXT.firstName}
                                        </h2>
                                        <FormikInput
                                            className="!text-[6px] sm:!text-base"
                                            formik={formik}
                                            value={formik.values.firstName}
                                            name="firstName"
                                        />
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <h2 className="text-[8px] sm:text-base text-grayDark_text">
                                            {language.FORM_TEXT.lastName}
                                        </h2>
                                        <FormikInput
                                            className="!text-[6px] sm:!text-base"
                                            formik={formik}
                                            value={formik.values.lastName}
                                            name="lastName"
                                        />
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <h2 className="text-[8px] sm:text-base text-grayDark_text">
                                            {language.FORM_TEXT.middleName}
                                        </h2>
                                        <FormikInput
                                            className="!text-[6px] sm:!text-base"
                                            formik={formik}
                                            value={formik.values.thirdName}
                                            name="thirdName"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="border border-gray_border h-max rounded-[5px] p-[5px] w-full sm:p-[10px] flex flex-col gap-[10px] sm:gap-5 pb-20 sm:pb-40">
                                <h2 className="text-[10px] sm:text-xl font-semibold text-black">
                                    {language.FORM_TEXT.media}
                                </h2>

                                <div className="flex flex-col gap-[10px] sm:gap-5">
                                    <div className="flex flex-col gap-[5px] sm:gap-[10px]">
                                        <div className="flex items-center justify-between">
                                            <h2 className="text-black text-[8px] sm:text-base">
                                                {language.FORM_TEXT.photos}
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
                                                              {
                                                                  length:
                                                                      4 -
                                                                      imageURLs?.length,
                                                              },
                                                              (_, i) => (
                                                                  <div
                                                                      key={`placeholder-${i}`}
                                                                      className="relative bg-gray_border rounded-[3px] w-[21px] sm:w-[57px] h-[21px] sm:h-[57px]"
                                                                  ></div>
                                                              )
                                                          )
                                                      )
                                                : Array.from(
                                                      { length: 4 },
                                                      (_, index) => (
                                                          <div
                                                              key={index}
                                                              className="relative bg-gray_border rounded-[3px] w-[21px] sm:w-[57px] h-[21px] sm:h-[57px]"
                                                          ></div>
                                                      )
                                                  )}
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-[10px] sm:gap-5 w-full">
                                        <h2 className="text-[10px] sm:text-xl font-semibold text-black">
                                            {language.FORM_TEXT.socialNetworks}
                                        </h2>
                                        {socials.map((social, index) => (
                                            <div
                                                key={index}
                                                className={`flex flex-col gap-[10px] sm:gap-5 w-full ${
                                                    index > 0 &&
                                                    "border-t-[1px] border-gray_border pt-5"
                                                }`}
                                            >
                                                <div className="flex flex-col gap-[5px] sm:gap-[10px]">
                                                    <h2 className="text-grayDark_text text-[7px] sm:text-sm leading-[130%]">
                                                        {
                                                            language.FORM_TEXT
                                                                .socialNetworkName
                                                        }
                                                    </h2>
                                                    <div className="flex">
                                                        <SelectInput
                                                            className="min-w-[90px] max-h-[14px] sm:max-h-none sm:min-w-[248px] text-[7px] sm:text-sm"
                                                            value={social.name}
                                                            options={
                                                                socialMediaOptions
                                                            }
                                                            onSelect={(
                                                                value
                                                            ) => {
                                                                handleSelectChange(
                                                                    index,
                                                                    "name",
                                                                    value
                                                                );
                                                            }}
                                                            onChange={(
                                                                value
                                                            ) => {
                                                                handleSelectChange(
                                                                    index,
                                                                    "name",
                                                                    value
                                                                );
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-[10px]">
                                                    <h2 className="text-grayDark_text text-[7px] sm:text-sm leading-[130%]">
                                                        {
                                                            language.FORM_TEXT
                                                                .socialNetworkLink
                                                        }
                                                    </h2>
                                                    <div className="flex">
                                                        <input
                                                            className={`w-[90px] sm:!w-[248px] h-[14px] sm:h-[24px] px-[4px] sm:px-[10px] py-[3px] sm:py-[4px] !indent-0 text-[6px] sm:text-xs border border-gray_border !rounded-[2px] outline-none text-grayDark_text`}
                                                            value={social.url}
                                                            type="text"
                                                            onChange={(e) =>
                                                                handleInputChange(
                                                                    index,
                                                                    e
                                                                )
                                                            }
                                                            name="url"
                                                        />
                                                    </div>
                                                </div>

                                                {index > 0 && (
                                                    <div className="flex justify-end">
                                                        <button
                                                            type="button"
                                                            className="border border-gray_border text-[6px] sm:text-xs bg-[#f32013] text-white rounded-[3px] px-1 sm:px-2 py-[2px] sm:py-1"
                                                            onClick={() =>
                                                                removeSocial(
                                                                    index
                                                                )
                                                            }
                                                        >
                                                            {
                                                                language
                                                                    .FORM_TEXT
                                                                    .remove
                                                            }
                                                        </button>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                        <div className="flex justify-end ">
                                            <button
                                                type="button"
                                                className="text-[6px] sm:text-xs text-button_color"
                                                onClick={addSocial}
                                            >
                                                {language.FORM_TEXT.addMore}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end text-center">
                            <div
                                onClick={(e) => {
                                    setIsConfirmDrawerVisible(true);
                                }}
                                className="bg-button_color text-[8px] flex justify-center items-center sm:text-base text-white font-bold rounded-[5px] w-[80px] sm:w-[160px] h-[20px] sm:h-[40px] text-center"
                            >
                                Сохранить
                                {/* {mutation.isPending && <Loading />} */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
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
