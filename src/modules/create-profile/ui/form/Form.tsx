import { Drawer, DrawerProps } from "@/components/shared/drawer/Drawer";
import { useFormikContext } from "@/context/FormikContext";
import Image from "next/image";
import { FC, useState } from "react";
import { UploadImage } from "../../../../components/shared/upload-image/UploadImage";
import { FORM_TEXT } from "../../strings/string";
import { Media } from "../media/Media";
import { Award } from "./Award";
import { Comment } from "./Comment";
import { Education } from "./Education";
import { External } from "./External";
import { ExtraInformation } from "./ExtraInformation";
import { GeneralInformation } from "./GeneralInformation";
import { Movie } from "./Movie";
import { Skills } from "./Skills";
import { Theatres } from "./Theater";

export const Form = () => {
    const [isConfirmDrawerVisible, setIsConfirmDrawerVisible] =
        useState<boolean>(false);
    const [isFailureDrawerVisible, setIsFailureDrawerVisible] =
        useState<boolean>(false);
    const [isSuccessDrawerVisible, setIsSuccessDrawerVisible] =
        useState<boolean>(false);
    const formik = useFormikContext();

    return (
        <>
            <FormConfirmationDrawer
                drawerProps={{
                    isVisible: isConfirmDrawerVisible,
                    closeDrawer: () => {
                        setIsConfirmDrawerVisible(false);
                    },
                }}
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
            <div className="flex py-[60px]">
                <form
                    onSubmit={formik.handleSubmit}
                    className="flex flex-col gap-10"
                >
                    <div className="flex gap-[10px] sm:gap-10">
                        <UploadImage
                            link={formik.values.abstract_user_data.avatar}
                            setLink={(newLink) => {
                                formik.setFieldValue(
                                    "abstract_user_data.avatar",
                                    newLink
                                );
                            }}
                        />
                        <div className="flex flex-col gap-5 min-w-[466px] max-w-[466px]">
                            <GeneralInformation formik={formik} />
                            <External formik={formik} />
                            <Skills formik={formik} />
                            <Education formik={formik} />
                            <Theatres formik={formik} />
                            <Movie formik={formik} />
                            <Award formik={formik} />
                            <ExtraInformation formik={formik} />
                            <Comment formik={formik} />
                        </div>
                        <Media formik={formik} />
                    </div>
                    <div className="flex justify-end text-center">
                        <button
                            type="submit"
                            // onClick={(e) => {
                            //     e.preventDefault();
                            //     setIsConfirmDrawerVisible(true);
                            // }}
                            className="bg-button_color text-base text-white font-bold rounded-[5px] w-[160px] h-[40px] text-center"
                        >
                            Сохранить
                            {/* {mutation.isPending && <Loading />} */}
                        </button>
                    </div>
                </form>
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
export const FormConfirmationDrawer: FC<FormConfirmDrawerProps> = ({
    drawerProps: { isVisible, closeDrawer },
}) => {
    return (
        <Drawer isVisible={isVisible} closeDrawer={closeDrawer}>
            <div className="flex flex-col gap-[88px]">
                <div className="relative pt-5 flex justify-center">
                    <h2 className="text-[20px] font-semibold text-black">
                        {FORM_TEXT.confirm_title}
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
                <div className="flex flex-col items-center gap-[76px]">
                    <h2 className="text-[15px]">{FORM_TEXT.data_correct}</h2>
                    <div className="flex gap-[17px]">
                        <button className="bg-button_color py-[10px] px-[22px] flex justify-center cursor-pointer font-semibold text-white rounded-[5px]">
                            {FORM_TEXT.accept}
                        </button>
                        <div
                            onClick={closeDrawer}
                            className="bg-gray py-[10px] px-[46px] flex justify-center cursor-pointer font-semibold text-black rounded-[5px]"
                        >
                            {FORM_TEXT.cancel}
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
    return (
        <Drawer isVisible={isVisible} closeDrawer={closeDrawer}>
            <div className="flex flex-col gap-[37px]">
                <div className="relative pt-5 flex justify-center">
                    <h2 className="text-[20px] font-semibold text-black">
                        {FORM_TEXT.success}
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
                            {FORM_TEXT.ok}
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
    return (
        <Drawer isVisible={isVisible} closeDrawer={closeDrawer}>
            <div className="flex flex-col gap-[37px]">
                <div className="relative pt-5 flex justify-center">
                    <h2 className="text-[20px] font-semibold text-black">
                        {FORM_TEXT.failure}
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
                            {FORM_TEXT.ok}
                        </div>
                    </div>
                </div>
            </div>
        </Drawer>
    );
};
