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
import { FORM_TEXT } from "../../strings/string";
import { FormProps } from "../../types";

export const External: FC<FormProps> = ({ formik }) => {
    const handleSelectChange = (name: string, value: string) => {
        formik.setFieldValue(name, value);
    };
    return (
        <div className="flex flex-col gap-5 w-full">
            <h2 className="text-xl font-semibold text-black">
                {FORM_TEXT.externalData}
            </h2>
            <div className="flex justify-between items-center">
                <h2 className="text-grayDark_text">{FORM_TEXT.height}</h2>
                <FormikInput
                    type="number"
                    formik={formik}
                    value={formik.values.height}
                    name="height"
                />
            </div>
            <div className="flex justify-between items-center">
                <h2 className="text-grayDark_text">{FORM_TEXT.weight}</h2>
                <FormikInput
                    type="number"
                    value={formik.values.weight}
                    formik={formik}
                    name="weight"
                />
            </div>
            <div className="flex justify-between items-center">
                <h2 className="text-grayDark_text">{FORM_TEXT.clothingSize}</h2>
                <FormikInput
                    formik={formik}
                    value={formik.values.clothingSize}
                    name="clothingSize"
                />
            </div>
            <div className="flex justify-between items-center">
                <h2 className="text-grayDark_text">{FORM_TEXT.shoeSize}</h2>
                <FormikInput
                    formik={formik}
                    value={formik.values.shoeSize}
                    name="shoeSize"
                />
            </div>
            <div className="flex justify-between items-center">
                <h2 className="text-grayDark_text">{FORM_TEXT.hairLength}</h2>
                <SelectInput
                    className="min-w-[237px]"
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
                <h2 className="text-grayDark_text">{FORM_TEXT.hairColor}</h2>
                <SelectInput
                    className="min-w-[237px]"
                    value={formik.values.hairColor}
                    options={formatOptions(hairColors)}
                    onSelect={(value) => handleSelectChange(`hairColor`, value)}
                    onChange={(value) => handleSelectChange(`hairColor`, value)}
                />
            </div>
            <div className="flex justify-between items-center">
                <h2 className="text-grayDark_text">{FORM_TEXT.eyeColor}</h2>
                <SelectInput
                    className="min-w-[237px]"
                    value={formik.values.eyeColor}
                    options={formatOptions(eyeColors)}
                    onSelect={(value) => handleSelectChange(`eyeColor`, value)}
                    onChange={(value) => handleSelectChange(`eyeColor`, value)}
                />
            </div>
            <div className="flex justify-between items-center">
                <h2 className="text-grayDark_text">{FORM_TEXT.bodyPosition}</h2>
                <SelectInput
                    className="min-w-[237px]"
                    value={formik.values.bodyType}
                    options={formatOptions(bodyTypes)}
                    onSelect={(value) => handleSelectChange(`bodyType`, value)}
                    onChange={(value) => handleSelectChange(`bodyType`, value)}
                />
            </div>
            <div className="flex justify-between items-center">
                <h2 className="text-grayDark_text">
                    {FORM_TEXT.appearanceType}
                </h2>
                <SelectInput
                    className="min-w-[237px]"
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
                <h2 className="text-grayDark_text">{FORM_TEXT.features}</h2>
                <SelectInput
                    className="min-w-[237px]"
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
