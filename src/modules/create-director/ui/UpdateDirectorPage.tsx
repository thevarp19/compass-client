"use client";
import { FormikInput } from "@/components/shared/formik-input/FormikInput";
import { UploadImage } from "@/components/shared/upload-image/UploadImage";
import { useLanguage } from "@/context/LanguageProvider";
import { axios } from "@/lib/axios";
import { useGetDirector } from "@/modules/actor/queries";
import { useUpdateDirector } from "@/modules/create-profile/forms";
import { FormConfirmationDrawer } from "@/modules/create-profile/ui/form/Form";
import Image from "next/image";
import { useEffect, useState } from "react";

export const UpdateDirectorPage = () => {
    const { data: profile } = useGetDirector();
    const { formik } = useUpdateDirector(profile);
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
    // useWarnIfUnsavedChanges(isDirty);

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
                <div className="flex py-[30px] sm:py-[60px]">
                    <div className="flex flex-col gap-10">
                        <div className="flex gap-[5px] min-[425px]:gap-[10px] sm:gap-10">
                            <UploadImage
                                link={formik.values.avatar}
                                setLink={(newLink) => {
                                    formik.setFieldValue("avatar", newLink);
                                }}
                            />
                            <div className="flex flex-col gap-[10px] sm:gap-5 max-[425px]:min-w-[162px] max-w-[142px] min-[425px]:max-w-[162px] sm:min-w-[466px] sm:max-w-[466px]">
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
