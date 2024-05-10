import { SelectInput } from "@/components/shared/select-input/SelectInput";
import { socialMediaOptions } from "@/modules/create-profile/const/data";
import { FORM_TEXT } from "@/modules/create-profile/strings/string";
import { FormProps } from "@/modules/create-profile/types";
import { FieldArray } from "formik";
import { ChangeEvent, FC } from "react";

export const Social: FC<FormProps> = ({ formik }) => {
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        formik.setFieldValue(e.target.name, e.target.value);
    };
    const handleSelectChange = (name: string, value: string) => {
        formik.setFieldValue(name, value);
    };
    return (
        <div className="flex flex-col gap-[10px] sm:gap-5 w-full">
            <h2 className="text-[10px] sm:text-xl font-semibold text-black">
                {FORM_TEXT.socialNetworks}
            </h2>
            <FieldArray name="abstract_user_data.userSocialMedias">
                {({ remove, push }) => (
                    <div className="flex flex-col gap-[10px] sm:gap-5 ">
                        {formik.values.abstract_user_data.userSocialMedias.map(
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
                                            {FORM_TEXT.socialNetworkName}
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
                                            {FORM_TEXT.socialNetworkLink}
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
                                                {FORM_TEXT.remove}
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
                                {FORM_TEXT.addMore}
                            </button>
                        </div>
                    </div>
                )}
            </FieldArray>
        </div>
    );
};
