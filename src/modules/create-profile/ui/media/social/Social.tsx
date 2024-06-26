import { SelectInput } from "@/components/shared/select-input/SelectInput";
import { useLanguage } from "@/context/LanguageProvider";
import { socialMediaOptions } from "@/modules/create-profile/const/data";
import { FormProps } from "@/modules/create-profile/types";
import { FormikProps } from "formik";
import { get } from "lodash";
import { ChangeEvent, FC, useEffect, useState } from "react";

export const Social: FC<FormProps> = ({ formik }) => {
    const { language } = useLanguage();

    const [socials, setSocials] = useState(
        formik.values.abstract_user_data.userSocialMedias
    );
    useEffect(() => {
        setSocials(formik.values.abstract_user_data.userSocialMedias || []);
    }, [formik.values.abstract_user_data.userSocialMedias]);

    const getFormikHelpText = (formik: FormikProps<any>, name: string) => {
        const error = get(formik.errors, name);
        const touched = get(formik.touched, name);
        if (touched && error) {
            return error;
        }
        return "";
    };
    const handleSelectChange = (index: number, name: string, value: string) => {
        const newSocials = socials.map((social, idx) =>
            idx === index ? { ...social, name: value } : social
        );
        setSocials(newSocials);
        formik.setFieldValue("abstract_user_data.userSocialMedias", newSocials);
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
        formik.setFieldValue("abstract_user_data.userSocialMedias", newSocials);
    };

    const addSocial = () => {
        const newSocial = {
            name: "",
            url: "",
        };
        const newSocials = [...socials, newSocial];
        setSocials(newSocials);
        formik.setFieldValue("abstract_user_data.userSocialMedias", newSocials);
    };

    const removeSocial = (index: number) => {
        const newSocials = socials.filter((_, idx) => idx !== index);
        setSocials(newSocials);
        formik.setFieldValue("abstract_user_data.userSocialMedias", newSocials);
    };

    return (
        <div className="flex flex-col gap-[10px] sm:gap-5 w-full">
            <h2 className="text-[10px] sm:text-xl font-semibold text-black">
                {language.FORM_TEXT.socialNetworks}{" "}
                <span className="text-[10px] sm:text-xl text-[#FF0000] ">
                    *
                </span>
            </h2>
            {socials.map((social, index) => (
                <div
                    key={index}
                    className={`flex flex-col gap-[10px] sm:gap-5 w-full ${
                        index > 0 && "border-t-[1px] border-gray_border pt-5"
                    }`}
                >
                    <div className="flex flex-col gap-[5px] sm:gap-[10px]">
                        <h2 className="text-grayDark_text text-[7px] sm:text-sm leading-[130%]">
                            {language.FORM_TEXT.socialNetworkName}{" "}
                            <span className="text-[8px] sm:text-base text-[#FF0000] ">
                                *
                            </span>
                        </h2>
                        <div className="flex">
                            <SelectInput
                                className="min-w-[90px] max-h-[14px] sm:max-h-none sm:min-w-[248px] text-[7px] sm:text-sm"
                                value={social.name}
                                options={socialMediaOptions}
                                onSelect={(value) => {
                                    handleSelectChange(index, "name", value);
                                }}
                                onChange={(value) => {
                                    handleSelectChange(index, "name", value);
                                }}
                                helpText={
                                    getFormikHelpText(
                                        formik,
                                        `abstract_user_data.userSocialMedias[${index}].name`
                                    ) as string
                                }
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <h2 className="text-grayDark_text text-[7px] sm:text-sm leading-[130%]">
                            {language.FORM_TEXT.socialNetworkLink}{" "}
                            <span className="text-[8px] sm:text-base text-[#FF0000] ">
                                *
                            </span>
                        </h2>
                        <div className="flex items-center relative">
                            <input
                                className={`w-[90px] sm:!w-[248px] h-[14px] sm:h-[24px] px-[4px] sm:px-[10px] py-[3px] sm:py-[4px] !indent-0 text-[6px] sm:text-xs border border-gray_border !rounded-[2px] outline-none text-grayDark_text`}
                                value={social.url}
                                type="text"
                                onChange={(e) => handleInputChange(index, e)}
                                name="url"
                            />
                            {(getFormikHelpText(
                                formik,
                                `abstract_user_data.userSocialMedias[${index}].url`
                            ) as string) && (
                                <span
                                    className={
                                        "absolute -bottom-[10px] sm:-bottom-[14px] tracking-normal leading-3 text-[4px] sm:text-[10px] text-red whitespace-nowrap overflow-hidden max-w-max"
                                    }
                                >
                                    {
                                        getFormikHelpText(
                                            formik,
                                            `abstract_user_data.userSocialMedias[${index}].url`
                                        ) as string
                                    }
                                </span>
                            )}
                        </div>
                    </div>

                    {index > 0 && (
                        <div className="flex justify-end">
                            <button
                                type="button"
                                className="border border-gray_border text-[6px] sm:text-xs bg-[#f32013] text-white rounded-[3px] px-1 sm:px-2 py-[2px] sm:py-1"
                                onClick={() => removeSocial(index)}
                            >
                                {language.FORM_TEXT.remove}
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
    );
};
