import { FormikInput } from "@/components/shared/formik-input/FormikInput";
import { SelectInput } from "@/components/shared/select-input/SelectInput";
import { ChangeEvent, FC, useEffect, useState } from "react";
import {
    agencies,
    citizenships,
    formatOptions,
    kazakhstanCities,
    legalStatuses,
    specializations,
} from "../../const/data";
import { FORM_TEXT } from "../../strings/string";
import { FormProps } from "../../types";

type DateState = {
    day: string;
    month: string;
    year: string;
};

export const GeneralInformation: FC<FormProps> = ({ formik }) => {
    const [gender, setGender] = useState("");
    const [date, setDate] = useState<DateState>({
        day: "",
        month: "",
        year: "",
    });
    const handleOnClick = (value: string) => {
        setGender(value);
        formik.setFieldValue("gender", value);
    };
    useEffect(() => {
        const { birthday, gender } = formik.values;
        if (birthday) {
            const [year, month, day] = birthday.split("-");
            setDate({
                year: year,
                month: month,
                day: day,
            });
        }
        setGender(gender);
    }, [formik.values.birthday, formik.values.gender]);
    const handleInputBirthdayChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setDate((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    useEffect(() => {
        if (date.year.length === 4 && date.month && date.day) {
            const formattedDate = `${date.year}-${date.month.padStart(
                2,
                "0"
            )}-${date.day.padStart(2, "0")}`;
            formik.setFieldValue("birthday", formattedDate);
        }
    }, [date]);

    const handleSelectChange = (name: string, value: string) => {
        formik.setFieldValue(name, value);
    };

    return (
        <div className="flex flex-col gap-5 w-full">
            <h2 className="text-xl font-semibold text-black">
                {FORM_TEXT.generalInfo}
            </h2>
            <div className="flex justify-between items-center">
                <h2 className="text-grayDark_text">{FORM_TEXT.firstName}</h2>
                <FormikInput
                    formik={formik}
                    value={formik.values.abstract_user_data.firstName}
                    name="abstract_user_data.firstName"
                />
            </div>
            <div className="flex justify-between items-center">
                <h2 className="text-grayDark_text">{FORM_TEXT.lastName}</h2>
                <FormikInput
                    formik={formik}
                    value={formik.values.abstract_user_data.lastName}
                    name="abstract_user_data.lastName"
                />
            </div>
            <div className="flex justify-between items-center">
                <h2 className="text-grayDark_text">{FORM_TEXT.middleName}</h2>
                <FormikInput
                    formik={formik}
                    value={formik.values.abstract_user_data.thirdName}
                    name="abstract_user_data.thirdName"
                />
            </div>
            <div className="flex justify-between items-center">
                <h2 className="text-grayDark_text leading-[130%]">
                    {FORM_TEXT.gender}
                </h2>
                <div className="flex items-center min-w-[237px]">
                    <div
                        className={`border-[1px] rounded-s-[3px] py-1 text-xs font-light text-grayDark_text px-[10px] text-center border-${
                            gender === "male"
                                ? "button_color"
                                : "gray_text border-0 border-y-[1px] border-s-[1px] border-e-[0px]"
                        } ${gender === "" ? "border-e-[1px]" : ""}`}
                        onClick={() => {
                            handleOnClick("male");
                        }}
                    >
                        {FORM_TEXT.male}
                    </div>
                    <div
                        className={`border-y-[1px] border-r-[1px] rounded-e-[3px] py-1 text-xs font-light px-[10px] text-grayDark_text text-center border-${
                            gender === "female"
                                ? "button_color border-[1px] "
                                : "gray_text"
                        }`}
                        onClick={() => {
                            handleOnClick("female");
                        }}
                    >
                        {FORM_TEXT.female}
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <h2 className="text-grayDark_text leading-[130%]">
                    {FORM_TEXT.birthDate}
                </h2>
                <div className="flex gap-[6px] min-w-[237px]">
                    <input
                        className="w-[48px] h-[24px] border border-gray_border text-[12px] text-center rounded-[3px] outline-grayDark-text text-grayDark_text"
                        type="text"
                        name="day"
                        placeholder="ДД"
                        value={date.day}
                        maxLength={2}
                        onChange={handleInputBirthdayChange}
                    />
                    <input
                        className="w-[48px] h-[24px] border border-gray_border text-[12px] text-center rounded-[3px] outline-grayDark-text text-grayDark_text"
                        type="text"
                        name="month"
                        placeholder="ММ"
                        value={date.month}
                        maxLength={2}
                        onChange={handleInputBirthdayChange}
                    />
                    <input
                        className="w-[48px] h-[24px] border border-gray_border text-[12px] text-center rounded-[3px] outline-grayDark-text text-grayDark_text"
                        type="text"
                        name="year"
                        placeholder="ГГГГ"
                        maxLength={4}
                        value={date.year}
                        onChange={handleInputBirthdayChange}
                    />
                </div>
            </div>
            <div className="flex justify-between items-center">
                <h2 className="text-grayDark_text leading-[130%]">
                    {FORM_TEXT.nationality}
                </h2>
                <div className="flex ">
                    <SelectInput
                        className="min-w-[237px]"
                        value={formik.values.citizenship}
                        options={formatOptions(citizenships)}
                        onSelect={(value) =>
                            handleSelectChange(`citizenship`, value)
                        }
                        onChange={(value) =>
                            handleSelectChange(`citizenship`, value)
                        }
                    />
                </div>
            </div>
            <div className="flex justify-between items-center">
                <h2 className="text-grayDark_text leading-[130%]">
                    {FORM_TEXT.specialization}
                </h2>
                <div className="flex ">
                    <SelectInput
                        className="min-w-[237px]"
                        value={formik.values.specialization}
                        options={formatOptions(specializations)}
                        onSelect={(value) =>
                            handleSelectChange(`specialization`, value)
                        }
                        onChange={(value) =>
                            handleSelectChange(`specialization`, value)
                        }
                    />
                </div>
            </div>
            <div className="flex justify-between items-center">
                <h2 className="text-grayDark_text leading-[130%]">
                    {FORM_TEXT.cityOfResidence}
                </h2>
                <div className="flex ">
                    <SelectInput
                        className="min-w-[237px]"
                        value={formik.values.cityAccommodation}
                        options={formatOptions(kazakhstanCities)}
                        onSelect={(value) =>
                            handleSelectChange(`cityAccommodation`, value)
                        }
                        onChange={(value) =>
                            handleSelectChange(`cityAccommodation`, value)
                        }
                    />
                </div>
            </div>
            <div className="flex justify-between items-center">
                <h2 className="text-grayDark_text leading-[130%]">
                    {FORM_TEXT.legalStatus}
                </h2>
                <div className="flex ">
                    <SelectInput
                        className="min-w-[237px]"
                        value={formik.values.legalStatus}
                        options={formatOptions(legalStatuses)}
                        onSelect={(value) =>
                            handleSelectChange(`legalStatus`, value)
                        }
                        onChange={(value) =>
                            handleSelectChange(`legalStatus`, value)
                        }
                    />
                </div>
            </div>
            <div className="flex justify-between items-center">
                <h2 className="text-grayDark_text leading-[130%]">
                    {FORM_TEXT.agency}
                </h2>
                <div className="flex">
                    <SelectInput
                        className="min-w-[237px]"
                        value={formik.values.agency}
                        options={formatOptions(agencies)}
                        onSelect={(value) =>
                            handleSelectChange(`agency`, value)
                        }
                        onChange={(value) =>
                            handleSelectChange(`agency`, value)
                        }
                    />
                </div>
            </div>
        </div>
    );
};
