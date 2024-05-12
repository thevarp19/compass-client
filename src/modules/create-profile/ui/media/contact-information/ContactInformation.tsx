import { useLanguage } from "@/context/LanguageProvider";

import { FormProps } from "@/modules/create-profile/types";
import { FieldArray } from "formik";
import { ChangeEvent, FC } from "react";

export const ContactInformation: FC<FormProps> = ({ formik }) => {
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        formik.setFieldValue(e.target.name, e.target.value);
    };
    const { language } = useLanguage();
    return (
        <div className="flex flex-col gap-[10px] sm:gap-5 w-full">
            <h2 className="text-[10px] sm:text-xl font-semibold text-black">
                {language.FORM_TEXT.contactInfo}
            </h2>
            <FieldArray name="userContacts">
                {({ remove, push }) => (
                    <div className="flex flex-col gap-[10px] sm:gap-5">
                        {formik.values.userContacts?.map((contact, index) => (
                            <div
                                className={`flex flex-col gap-[10px] sm:gap-5 w-full ${
                                    index > 0 &&
                                    "border-t-[1px] border-gray_border pt-5"
                                }`}
                                key={index}
                            >
                                <div className="flex flex-col gap-[5px] sm:gap-[10px]">
                                    <h2 className="text-[8px] sm:text-base text-grayDark_text">
                                        {language.FORM_TEXT.contactName}
                                    </h2>
                                    <input
                                        className={`w-[90px] sm:!w-[237px] h-[14px] sm:h-[24px] px-[4px] sm:px-[10px] py-[3px] sm:py-[4px] !indent-0 text-[6px] sm:text-xs border border-gray_border !rounded-[2px] outline-none text-grayDark_text`}
                                        value={contact.name}
                                        type="text"
                                        onChange={handleInputChange}
                                        name={`userContacts[${index}].name`}
                                        placeholder="Имя"
                                    />
                                </div>
                                <div className="flex flex-col gap-[10px]">
                                    <h2 className="text-[8px] sm:text-base text-grayDark_text">
                                        {language.FORM_TEXT.contactNumber}
                                    </h2>
                                    <input
                                        className={`w-[90px] sm:!w-[237px] h-[14px] sm:h-[24px] px-[4px] sm:px-[10px] py-[3px] sm:py-[4px] !indent-0 text-[6px] sm:text-xs border border-gray_border !rounded-[2px] outline-none text-grayDark_text`}
                                        value={contact.number}
                                        type="text"
                                        placeholder="Номер"
                                        onChange={handleInputChange}
                                        name={`userContacts[${index}].number`}
                                    />
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
                        ))}

                        <div className="flex justify-end ">
                            <button
                                type="button"
                                className="text-[6px] sm:text-xs text-button_color"
                                onClick={() =>
                                    push({
                                        name: "",
                                        number: "",
                                    })
                                }
                            >
                                {language.FORM_TEXT.addMore}
                            </button>
                        </div>
                    </div>
                )}
            </FieldArray>
        </div>
    );
};
