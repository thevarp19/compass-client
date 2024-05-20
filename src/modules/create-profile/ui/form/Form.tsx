import { Drawer, DrawerProps } from "@/components/shared/drawer/Drawer";
import { useLanguage } from "@/context/LanguageProvider";
import Image from "next/image";
import { FC, useState } from "react";
import { UploadImage } from "../../../../components/shared/upload-image/UploadImage";
import { Media } from "../media/Media";
import { Award } from "./Award";
import { Comment } from "./Comment";
import { Education } from "./Education";
import { External } from "./External";
import { ExtraInformation } from "./ExtraInformation";
import { GeneralInformation } from "./GeneralInformation";
import { Movie } from "./Movie";
import { Serial } from "./Serials";
import { Skills } from "./Skills";
import { Theatres } from "./Theater";
export const Form = ({ formik }: { formik: any }) => {
    const [isConfirmDrawerVisible, setIsConfirmDrawerVisible] =
        useState<boolean>(false);
    const [isFailureDrawerVisible, setIsFailureDrawerVisible] =
        useState<boolean>(false);
    const [isSuccessDrawerVisible, setIsSuccessDrawerVisible] =
        useState<boolean>(false);

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
            <FormSuccessDrawer
                drawerProps={{
                    isVisible: isSuccessDrawerVisible,
                    closeDrawer: () => {
                        setIsSuccessDrawerVisible(false);
                    },
                }}
            />
            <FormFailureDrawer
                drawerProps={{
                    isVisible: isFailureDrawerVisible,
                    closeDrawer: () => {
                        setIsFailureDrawerVisible(false);
                    },
                }}
            />
            <div className="flex py-[30px] sm:py-[60px]">
                <div className="flex flex-col gap-10">
                    <div className="flex gap-[5px] min-[425px]:gap-[10px] sm:gap-10">
                        <UploadImage
                            link={formik.values.abstract_user_data.avatar}
                            setLink={(newLink) => {
                                formik.setFieldValue(
                                    "abstract_user_data.avatar",
                                    newLink
                                );
                            }}
                        />
                        <div className="flex flex-col gap-[10px] sm:gap-5 max-[425px]:min-w-[162px] max-w-[142px] min-[425px]:max-w-[162px] sm:min-w-[466px] sm:max-w-[466px]">
                            <GeneralInformation formik={formik} />
                            <External formik={formik} />
                            <Skills formik={formik} />
                            <Education formik={formik} />
                            <Theatres formik={formik} />
                            <Movie formik={formik} />
                            <Serial formik={formik} />
                            <Award formik={formik} />
                            <ExtraInformation formik={formik} />
                            <Comment formik={formik} />
                        </div>
                        <Media formik={formik} />
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
        </>
    );
};

interface FormDrawerProps {
    drawerProps: DrawerProps;
}
interface FormConfirmDrawerProps {
    drawerProps: DrawerProps;
}
export const FormConfirmationDrawer: FC<
    FormConfirmDrawerProps & { submitForm: () => void }
> = ({ drawerProps: { isVisible, closeDrawer }, submitForm }) => {
    const { language } = useLanguage();
    return (
        <Drawer isVisible={isVisible} closeDrawer={closeDrawer}>
            <div className="flex flex-col gap-14 sm:gap-20">
                <div className="relative pt-3 sm:pt-5 flex justify-center">
                    <h2 className="text-[16px] sm:text-[20px] font-semibold text-black">
                        {language.FORM_TEXT.confirm_title}
                    </h2>
                    <Image
                        src={"/icons/cross-X.svg"}
                        width={20}
                        height={20}
                        alt={"cross"}
                        onClick={closeDrawer}
                        className="absolute top-3 right-3 sm:top-5 sm:right-5 w-[20px] h-[20px] sm:w-[26px] sm:h-[26px] cursor-pointer"
                        style={{
                            objectFit: "cover",
                            objectPosition: "center",
                        }}
                    />
                </div>
                <div className="flex flex-col items-center gap-14 sm:gap-20">
                    <h2 className="text-[12px] sm:text-[15px]">
                        {language.FORM_TEXT.data_correct}
                    </h2>
                    <div className="flex gap-3 sm:gap-17">
                        <button
                            className="bg-button_color w-[100px] h-[20px] sm:w-[160px] sm:h-[40px] flex justify-center items-center cursor-pointer font-semibold text-white rounded-[3px] sm:rounded-[5px] text-[8px] sm:text-base"
                            onClick={() => {
                                submitForm();
                                closeDrawer();
                            }}
                        >
                            {language.FORM_TEXT.accept}
                        </button>
                        <div
                            onClick={closeDrawer}
                            className="bg-gray w-[100px] h-[20px] sm:w-[160px] sm:h-[40px] flex justify-center items-center cursor-pointer font-semibold text-black rounded-[3px] sm:rounded-[5px] text-[8px] sm:text-base"
                        >
                            {language.FORM_TEXT.cancel}
                        </div>
                    </div>
                </div>
            </div>
        </Drawer>
    );
};

export const FormSuccessDrawer: FC<FormDrawerProps> = ({
    drawerProps: { isVisible, closeDrawer },
}) => {
    const { language } = useLanguage();
    return (
        <Drawer isVisible={isVisible} closeDrawer={closeDrawer}>
            <div className="flex flex-col gap-[37px]">
                <div className="relative pt-5 flex justify-center">
                    <h2 className="text-[20px] font-semibold text-black">
                        {language.FORM_TEXT.success}
                    </h2>
                    <Image
                        src={"/icons/cross-X.svg"}
                        width={26}
                        height={26}
                        alt={"cross"}
                        onClick={closeDrawer}
                        className="absolute top-5 right-[18px] w-[26px] h-[26px] cursor-pointer"
                        style={{
                            objectFit: "cover",
                            objectPosition: "center",
                        }}
                    />
                </div>
                <div className="flex flex-col items-center gap-[43px]">
                    <Image
                        src={"/icons/success.svg"}
                        width={100}
                        height={100}
                        alt={"success"}
                        className="w-[100px] h-[100px]"
                        style={{
                            objectFit: "cover",
                            objectPosition: "center",
                        }}
                    />

                    <div className="flex gap-[17px]">
                        <div
                            onClick={closeDrawer}
                            className="bg-button_color px-[67.5px] py-[10px] flex justify-center cursor-pointer font-semibold text-white rounded-[5px]"
                        >
                            {language.FORM_TEXT.ok}
                        </div>
                    </div>
                </div>
            </div>
        </Drawer>
    );
};
export const FormFailureDrawer: FC<FormDrawerProps> = ({
    drawerProps: { isVisible, closeDrawer },
}) => {
    const { language } = useLanguage();
    return (
        <Drawer isVisible={isVisible} closeDrawer={closeDrawer}>
            <div className="flex flex-col gap-[37px]">
                <div className="relative pt-5 flex justify-center">
                    <h2 className="text-[20px] font-semibold text-black">
                        {language.FORM_TEXT.failure}
                    </h2>
                    <Image
                        src={"/icons/cross-X.svg"}
                        width={26}
                        height={26}
                        alt={"cross"}
                        onClick={closeDrawer}
                        className="absolute top-5 right-[18px] w-[26px] h-[26px] cursor-pointer"
                        style={{
                            objectFit: "cover",
                            objectPosition: "center",
                        }}
                    />
                </div>
                <div className="flex flex-col items-center gap-[43px]">
                    <Image
                        src={"/icons/failure.svg"}
                        width={100}
                        height={100}
                        alt={"success"}
                        className="w-[100px] h-[100px]"
                        style={{
                            objectFit: "cover",
                            objectPosition: "center",
                        }}
                    />

                    <div className="flex gap-[17px]">
                        <div
                            onClick={closeDrawer}
                            className="bg-button_color px-[67.5px] py-[10px] flex justify-center cursor-pointer font-semibold text-white rounded-[5px]"
                        >
                            {language.FORM_TEXT.ok}
                        </div>
                    </div>
                </div>
            </div>
        </Drawer>
    );
};
