import { FieldArray } from "formik";
import { ChangeEvent, FC } from "react";
import { FORM_TEXT } from "../../strings/string";
import { FormProps } from "../../types";

export const Award: FC<FormProps> = ({ formik }) => {
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value, type } = e.target;
        if (name.includes("year") && type === "number") {
            const numberValue = value === "" ? "" : Number(value);
            formik.setFieldValue(name, numberValue);
        } else {
            formik.setFieldValue(name, value);
        }
    };
    return (
        <div className="flex flex-col gap-5 w-full">
            <h2 className="text-xl font-semibold text-black">
                {FORM_TEXT.awards}
            </h2>
            <FieldArray name="awards">
                {({ remove, push }) => (
                    <div className="flex flex-col gap-5">
                        {formik.values.awards.map((awards, index) => (
                            <div
                                className={`flex flex-col gap-5 w-full ${
                                    index > 0 &&
                                    "border-t-[1px] border-gray_border pt-5"
                                }`}
                                key={index}
                            >
                                <div className="flex justify-between items-center">
                                    <h2 className="text-grayDark_text">
                                        {FORM_TEXT.awardName}
                                    </h2>
                                    <input
                                        className={`!w-[237px] h-[24px] px-[10px] py-[4px] !indent-0 text-xs border border-gray_border !rounded-[2px] outline-none text-grayDark_text`}
                                        value={awards.name}
                                        type="text"
                                        onChange={handleInputChange}
                                        name={`awards[${index}].name`}
                                    />
                                </div>
                                <div className="flex justify-between items-center">
                                    <h2 className="text-grayDark_text">
                                        {FORM_TEXT.position}
                                    </h2>
                                    <input
                                        className={`!w-[237px] h-[24px] px-[10px] py-[4px] !indent-0 text-xs border border-gray_border !rounded-[2px] outline-none text-grayDark_text`}
                                        value={awards.position}
                                        type="text"
                                        onChange={handleInputChange}
                                        name={`awards[${index}].position`}
                                    />
                                </div>
                                <div className="flex justify-between items-center">
                                    <h2 className="text-grayDark_text">
                                        {FORM_TEXT.year}
                                    </h2>
                                    <div className="flex gap-[6px] justify-end items-center">
                                        <input
                                            className="w-[48px] h-[24px] border border-gray_border text-[12px] text-center rounded-[3px] outline-none text-grayDark_text"
                                            type="number"
                                            value={
                                                awards.year === 0
                                                    ? ""
                                                    : awards.year
                                            }
                                            onChange={handleInputChange}
                                            name={`awards[${index}].year`}
                                            placeholder="YYYY"
                                            maxLength={4}
                                        />
                                    </div>
                                </div>
                                {index > 0 && (
                                    <div className="flex justify-end">
                                        <button
                                            type="button"
                                            className="border border-gray_border text-xs bg-[#f32013] text-white rounded-[3px] px-2 py-1"
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
                                        position: "",
                                        year: "",
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
