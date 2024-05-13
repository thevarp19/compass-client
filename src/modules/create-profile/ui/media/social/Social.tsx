import { SelectInput } from "@/components/shared/select-input/SelectInput";
import { useLanguage } from "@/context/LanguageProvider";
import { socialMediaOptions } from "@/modules/create-profile/const/data";
import { FormProps } from "@/modules/create-profile/types";
import { ChangeEvent, FC, useEffect, useState } from "react";

export const Social: FC<FormProps> = ({ formik }) => {
    const { language } = useLanguage();

    const [socials, setSocials] = useState(
        formik.values.abstract_user_data.userSocialMedias
    );
    useEffect(() => {
        setSocials(formik.values.abstract_user_data.userSocialMedias || []);
    }, [formik.values.abstract_user_data.userSocialMedias]);

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
                {language.FORM_TEXT.socialNetworks}
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
                            {language.FORM_TEXT.socialNetworkName}
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
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <h2 className="text-grayDark_text text-[7px] sm:text-sm leading-[130%]">
                            {language.FORM_TEXT.socialNetworkLink}
                        </h2>
                        <div className="flex">
                            <input
                                className={`w-[90px] sm:!w-[248px] h-[14px] sm:h-[24px] px-[4px] sm:px-[10px] py-[3px] sm:py-[4px] !indent-0 text-[6px] sm:text-xs border border-gray_border !rounded-[2px] outline-none text-grayDark_text`}
                                value={social.url}
                                type="text"
                                onChange={(e) => handleInputChange(index, e)}
                                name="url"
                            />
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
            {/* <FieldArray name="abstract_user_data.userSocialMedias">
                {({ remove, push }) => (
                    <div className="flex flex-col gap-[10px] sm:gap-5 ">
                        {formik.values.abstract_user_data.userSocialMedias?.map(
                            (social, index) => (
                                <div
                                    className={`flex flex-col gap-[10px] sm:gap-5 w-full ${
                                        index > 0 &&
                                        "border-t-[1px] border-gray_border pt-5"
                                    }`}
                                    key={index}
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
                                                options={socialMediaOptions}
                                                onSelect={(value) =>
                                                    handleSelectChange(
                                                        `abstract_user_data.userSocialMedias[${index}].name`,
                                                        value
                                                    )
                                                }
                                                onChange={(value) =>
                                                    handleSelectChange(
                                                        `abstract_user_data.userSocialMedias[${index}].name`,
                                                        value
                                                    )
                                                }
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
                                                className={`w-[90px] sm:!w-[237px] h-[14px] sm:h-[24px] px-[4px] sm:px-[10px] py-[3px] sm:py-[4px] !indent-0 text-[6px] sm:text-xs border border-gray_border !rounded-[2px] outline-none text-grayDark_text`}
                                                value={social.url}
                                                type="text"
                                                onChange={handleInputChange}
                                                name={`abstract_user_data.userSocialMedias[${index}].url`}
                                            />
                                        </div>
                                    </div>

                                    {index > 0 && (
                                        <div className="flex justify-end">
                                            <button
                                                type="button"
                                                className="border border-gray_border text-[6px] sm:text-xs bg-[#f32013] text-white rounded-[3px] px-1 sm:px-2 py-[2px] sm:py-1"
                                                onClick={() => remove(index)}
                                            >
                                                {language.FORM_TEXT.remove}
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )
                        )}

                        <div className="flex justify-end ">
                            <button
                                type="button"
                                className="text-[6px] sm:text-xs text-button_color"
                                onClick={() =>
                                    push({
                                        name: "",
                                        url: "",
                                    })
                                }
                            >
                                {language.FORM_TEXT.addMore}
                            </button>
                        </div>
                    </div>
                )}
            </FieldArray> */}
        </div>
    );
};
