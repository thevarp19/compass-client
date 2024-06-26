import { useLanguage } from "@/context/LanguageProvider";
import { FormProps } from "@/modules/create-profile/types";
import { FormikProps } from "formik";
import { get } from "lodash";
import { ChangeEvent, FC, useEffect, useState } from "react";

export const ContactInformation: FC<FormProps> = ({ formik }) => {
    const { language } = useLanguage();
    const [contacts, setContacts] = useState<
        Array<{ name: string; number: string }>
    >(formik.values.userContacts || []);

    useEffect(() => {
        setContacts(formik.values.userContacts || []);
    }, [formik.values.userContacts]);

    const handleInputChange = (
        index: number,
        e: ChangeEvent<HTMLInputElement>
    ) => {
        const newContact = contacts.map((contact, idx) =>
            idx === index
                ? { ...contact, [e.target.name]: e.target.value }
                : contact
        );
        setContacts(newContact);
        formik.setFieldValue("userContacts", newContact);
    };
    const getFormikHelpText = (formik: FormikProps<any>, name: string) => {
        const error = get(formik.errors, name);
        const touched = get(formik.touched, name);
        if (touched && error) {
            return error;
        }
        return "";
    };
    const addContact = () => {
        const newContact = {
            name: "",
            number: "",
        };
        const newContacts = [...contacts, newContact];
        setContacts(newContacts);
        formik.setFieldValue("userContacts", newContacts);
    };

    const removeContact = (index: number) => {
        const newContacts = contacts.filter((_, idx) => idx !== index);
        setContacts(newContacts);
        formik.setFieldValue("userContacts", newContacts);
    };

    return (
        <div className="flex flex-col gap-[10px] sm:gap-5 w-full">
            <h2 className="text-[10px] sm:text-xl font-semibold text-black">
                {language.FORM_TEXT.contactInfo}{" "}
                <span className="text-[10px] sm:text-xl text-[#FF0000] ">
                    *
                </span>
            </h2>
            {Array.isArray(contacts) &&
                contacts.map((contact, index) => (
                    <div
                        key={index}
                        className={`flex flex-col gap-[10px] sm:gap-5 w-full ${
                            index > 0 &&
                            "border-t-[1px] border-gray_border pt-5"
                        }`}
                    >
                        <div className="flex flex-col gap-[5px] sm:gap-[10px]">
                            <h2 className="text-[8px] sm:text-base text-grayDark_text">
                                {language.FORM_TEXT.contactName}{" "}
                                <span className="text-[8px] sm:text-base text-[#FF0000] ">
                                    *
                                </span>
                            </h2>
                            <div className="flex items-center relative">
                                <input
                                    className={`w-[90px] sm:!w-[237px] h-[14px] sm:h-[24px] px-[4px] sm:px-[10px] py-[3px] sm:py-[4px] !indent-0 text-[6px] sm:text-xs border border-gray_border !rounded-[2px] outline-none text-grayDark_text`}
                                    value={contact.name}
                                    type="text"
                                    onChange={(e) =>
                                        handleInputChange(index, e)
                                    }
                                    name="name"
                                    placeholder="Имя"
                                />
                                {(getFormikHelpText(
                                    formik,
                                    `userContacts[${index}].name`
                                ) as string) && (
                                    <span
                                        className={
                                            "absolute -bottom-[10px] sm:-bottom-[14px] tracking-normal leading-3 text-[4px] sm:text-[10px] text-red whitespace-nowrap overflow-hidden max-w-max"
                                        }
                                    >
                                        {
                                            getFormikHelpText(
                                                formik,
                                                `userContacts[${index}].name`
                                            ) as string
                                        }
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-col gap-[5px] sm:gap-[10px]">
                            <h2 className="text-[8px] sm:text-base text-grayDark_text">
                                {language.FORM_TEXT.contactNumber}{" "}
                                <span className="text-[8px] sm:text-base text-[#FF0000] ">
                                    *
                                </span>
                            </h2>
                            <div className="flex items-center relative">
                                <input
                                    className={`w-[90px] sm:!w-[237px] h-[14px] sm:h-[24px] px-[4px] sm:px-[10px] py-[3px] sm:py-[4px] !indent-0 text-[6px] sm:text-xs border border-gray_border !rounded-[2px] outline-none text-grayDark_text`}
                                    value={contact.number}
                                    type="text"
                                    placeholder="Номер"
                                    onChange={(e) =>
                                        handleInputChange(index, e)
                                    }
                                    name="number"
                                />
                                {(getFormikHelpText(
                                    formik,
                                    `userContacts[${index}].number`
                                ) as string) && (
                                    <span
                                        className={
                                            "absolute -bottom-[10px] sm:-bottom-[14px] tracking-normal leading-3 text-[4px] sm:text-[10px] text-red whitespace-nowrap overflow-hidden max-w-max"
                                        }
                                    >
                                        {
                                            getFormikHelpText(
                                                formik,
                                                `userContacts[${index}].number`
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
                                    onClick={() => removeContact(index)}
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
                    onClick={addContact}
                >
                    {language.FORM_TEXT.addMore}
                </button>
            </div>
        </div>
    );
};
