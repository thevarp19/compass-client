import { FORM_TEXT } from "@/modules/create-profile/strings/string";
import { FormProps } from "@/modules/create-profile/types";
import { FieldArray } from "formik";
import { ChangeEvent, FC } from "react";

export const ContactInformation: FC<FormProps> = ({ formik }) => {
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        formik.setFieldValue(e.target.name, e.target.value);
    };
    return (
        <div className="flex flex-col gap-5 w-full">
            <h2 className="text-xl font-semibold text-black">
                {FORM_TEXT.contactInfo}
            </h2>
            <FieldArray name="userContacts">
                {({ remove, push }) => (
                    <div className="flex flex-col gap-5">
                        {formik.values.userContacts.map((contact, index) => (
                            <div
                                className={`flex flex-col gap-5 w-full ${
                                    index > 0 &&
                                    "border-t-[1px] border-gray_border pt-5"
                                }`}
                                key={index}
                            >
                                <div className="flex flex-col gap-[10px]">
                                    <h2 className="text-grayDark_text">
                                        {FORM_TEXT.contactName}
                                    </h2>
                                    <input
                                        className={`!w-[237px] h-[24px] px-[10px] py-[4px] !indent-0 text-xs border border-gray_border !rounded-[2px] outline-none text-grayDark_text`}
                                        value={contact.name}
                                        type="text"
                                        onChange={handleInputChange}
                                        name={`userContacts[${index}].name`}
                                        placeholder="Имя"
                                    />
                                </div>
                                <div className="flex flex-col gap-[10px]">
                                    <h2 className="text-grayDark_text">
                                        {FORM_TEXT.contactNumber}
                                    </h2>
                                    <input
                                        className={`!w-[237px] h-[24px] px-[10px] py-[4px] !indent-0 text-xs border border-gray_border !rounded-[2px] outline-none text-grayDark_text`}
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
                                            className="border border-gray_border text-xs text-white bg-[#f32013] rounded-[3px] px-2 py-1"
                                            onClick={() => remove(index)}
                                        >
                                            {FORM_TEXT.remove}
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}

                        <div className="flex justify-end ">
                            <button
                                type="button"
                                className="text-xs text-button_color"
                                onClick={() =>
                                    push({
                                        name: "",
                                        number: "",
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
