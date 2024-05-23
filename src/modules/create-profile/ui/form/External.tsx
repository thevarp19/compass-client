import { FormikInput } from "@/components/shared/formik-input/FormikInput";
import { SelectInput } from "@/components/shared/select-input/SelectInput";
import { FC } from "react";
import {
    appearanceTypes,
    bodyTypes,
    eyeColors,
    features,
    formatOptions,
    hairColors,
    hairLengths,
} from "../../const/data";

import { useLanguage } from "@/context/LanguageProvider";
import { FormProps } from "../../types";

export const External: FC<FormProps> = ({ formik }) => {
    const { language } = useLanguage();
    const handleSelectChange = (name: string, value: string) => {
        formik.setFieldValue(name, value);
    };
    return (
        <div className="flex flex-col gap-5 w-full">
            <h2 className="text-[10px] sm:text-xl font-semibold text-black">
                {language.FORM_TEXT.externalData}{" "}
                <span className="text-[10px] sm:text-xl text-[#FF0000]">*</span>
            </h2>
            <div className="flex justify-between items-center">
                <h2 className="text-[8px] sm:text-base text-grayDark_text">
                    {language.FORM_TEXT.height}{" "}
                    <span className="text-[8px] sm:text-base text-[#FF0000] ">
                        *
                    </span>
                </h2>
                <FormikInput
                    className="!text-[6px] sm:!text-base"
                    type="number"
                    formik={formik}
                    value={formik.values.height}
                    name="height"
                />
            </div>
            <div className="flex justify-between items-center">
                <h2 className="text-[8px] sm:text-base text-grayDark_text">
                    {language.FORM_TEXT.weight}{" "}
                    <span className="text-[8px] sm:text-base text-[#FF0000] ">
                        *
                    </span>
                </h2>
                <FormikInput
                    className="!text-[6px] sm:!text-base"
                    type="number"
                    value={formik.values.weight}
                    formik={formik}
                    name="weight"
                />
            </div>
            <div className="flex justify-between items-center">
                <h2 className="text-[8px] sm:text-base text-grayDark_text">
                    {language.FORM_TEXT.clothingSize}{" "}
                    <span className="text-[8px] sm:text-base text-[#FF0000] ">
                        *
                    </span>
                </h2>
                <FormikInput
                    className="!text-[6px] sm:!text-base"
                    formik={formik}
                    value={formik.values.clothingSize}
                    name="clothingSize"
                />
            </div>
            <div className="flex justify-between items-center">
                <h2 className="text-[8px] sm:text-base text-grayDark_text">
                    {language.FORM_TEXT.shoeSize}{" "}
                    <span className="text-[8px] sm:text-base text-[#FF0000] ">
                        *
                    </span>
                </h2>
                <FormikInput
                    className="!text-[6px] sm:!text-base"
                    formik={formik}
                    value={formik.values.shoeSize}
                    name="shoeSize"
                />
            </div>
            <div className="flex justify-between items-center">
                <h2 className="text-[8px] sm:text-base text-grayDark_text">
                    {language.FORM_TEXT.hairLength}{" "}
                    <span className="text-[8px] sm:text-base text-[#FF0000] ">
                        *
                    </span>
                </h2>
                <SelectInput
                    className="min-w-[92px]  sm:min-w-[237px]"
                    value={formik.values.hairLength}
                    options={formatOptions(hairLengths)}
                    onSelect={(value) =>
                        handleSelectChange(`hairLength`, value)
                    }
                    onChange={(value) =>
                        handleSelectChange(`hairLength`, value)
                    }
                />
            </div>
            <div className="flex justify-between items-center">
                <h2 className="text-[8px] sm:text-base text-grayDark_text">
                    {language.FORM_TEXT.hairColor}{" "}
                    <span className="text-[8px] sm:text-base text-[#FF0000] ">
                        *
                    </span>
                </h2>
                <SelectInput
                    className="min-w-[92px]  sm:min-w-[237px]"
                    value={formik.values.hairColor}
                    options={formatOptions(hairColors)}
                    onSelect={(value) => handleSelectChange(`hairColor`, value)}
                    onChange={(value) => handleSelectChange(`hairColor`, value)}
                />
            </div>
            <div className="flex justify-between items-center">
                <h2 className="text-[8px] sm:text-base text-grayDark_text">
                    {language.FORM_TEXT.eyeColor}{" "}
                    <span className="text-[8px] sm:text-base text-[#FF0000] ">
                        *
                    </span>
                </h2>
                <SelectInput
                    className="min-w-[92px]  sm:min-w-[237px]"
                    value={formik.values.eyeColor}
                    options={formatOptions(eyeColors)}
                    onSelect={(value) => handleSelectChange(`eyeColor`, value)}
                    onChange={(value) => handleSelectChange(`eyeColor`, value)}
                />
            </div>
            <div className="flex justify-between items-center">
                <h2 className="text-[8px] sm:text-base text-grayDark_text">
                    {language.FORM_TEXT.bodyPosition}{" "}
                    <span className="text-[8px] sm:text-base text-[#FF0000] ">
                        *
                    </span>
                </h2>
                <SelectInput
                    className="min-w-[92px]  sm:min-w-[237px]"
                    value={formik.values.bodyType}
                    options={formatOptions(bodyTypes)}
                    onSelect={(value) => handleSelectChange(`bodyType`, value)}
                    onChange={(value) => handleSelectChange(`bodyType`, value)}
                />
            </div>
            <div className="flex justify-between items-center">
                <h2 className="text-[8px] sm:text-base text-grayDark_text">
                    {language.FORM_TEXT.appearanceType}{" "}
                    <span className="text-[8px] sm:text-base text-[#FF0000] ">
                        *
                    </span>
                </h2>
                <SelectInput
                    className="min-w-[92px]  sm:min-w-[237px]"
                    value={formik.values.typeOfAppearance}
                    options={formatOptions(appearanceTypes)}
                    onSelect={(value) =>
                        handleSelectChange(`typeOfAppearance`, value)
                    }
                    onChange={(value) =>
                        handleSelectChange(`typeOfAppearance`, value)
                    }
                />
            </div>
            <div className="flex justify-between items-center">
                <h2 className="text-[8px] sm:text-base text-grayDark_text">
                    {language.FORM_TEXT.features}{" "}
                </h2>
                <SelectInput
                    className="min-w-[92px]  sm:min-w-[237px]"
                    value={formik.values.peculiarities}
                    options={formatOptions(features)}
                    onSelect={(value) =>
                        handleSelectChange(`peculiarities`, value)
                    }
                    onChange={(value) =>
                        handleSelectChange(`peculiarities`, value)
                    }
                />
            </div>
        </div>
    );
};
