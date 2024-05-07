import { MultiSelectInput } from "@/components/shared/multi-select/MultiSelectInput";
import { FC } from "react";
import {
    dances,
    drivingLicense,
    foreignLanguages,
    formatOptions,
    musicalInstruments,
    singing,
    sports,
} from "../../const/data";
import { FORM_TEXT } from "../../strings/string";
import { FormProps } from "../../types";

export const Skills: FC<FormProps> = ({ formik }) => {
    const handleSelectChange = (name: string, value: string) => {
        formik.setFieldValue(name, value);
    };
    return (
        <div className="flex flex-col gap-5 w-full">
            <h2 className="text-xl font-semibold text-black">
                {FORM_TEXT.skills}
            </h2>
            <div className="flex justify-between items-center">
                <h2 className="text-grayDark_text">{FORM_TEXT.sport}</h2>
                <MultiSelectInput
                    mode="multiple"
                    maxTagCount="responsive"
                    className="!min-w-[237px] max-w-[237px]"
                    value={formik.values.sports}
                    options={formatOptions(sports)}
                    onChange={(value) => handleSelectChange(`sports`, value)}
                />
            </div>
            <div className="flex justify-between items-center">
                <h2 className="text-grayDark_text">{FORM_TEXT.dance}</h2>
                <MultiSelectInput
                    maxTagCount="responsive"
                    mode="multiple"
                    className="min-w-[237px]"
                    value={formik.values.dancings}
                    options={formatOptions(dances)}
                    onChange={(value) => handleSelectChange(`dancings`, value)}
                />
            </div>
            <div className="flex justify-between items-center">
                <h2 className="text-grayDark_text">
                    {FORM_TEXT.musicalInstruments}
                </h2>
                <MultiSelectInput
                    mode="multiple"
                    maxTagCount="responsive"
                    className="min-w-[237px]"
                    value={formik.values.musicalInstruments}
                    options={formatOptions(musicalInstruments)}
                    onChange={(value) =>
                        handleSelectChange(`musicalInstruments`, value)
                    }
                />
            </div>
            <div className="flex justify-between items-center">
                <h2 className="text-grayDark_text">{FORM_TEXT.singing}</h2>
                <MultiSelectInput
                    mode="multiple"
                    maxTagCount="responsive"
                    className="min-w-[237px]"
                    value={formik.values.singing}
                    options={formatOptions(singing)}
                    onChange={(value) => handleSelectChange(`singing`, value)}
                />
            </div>
            <div className="flex justify-between items-center">
                <h2 className="text-grayDark_text">
                    {FORM_TEXT.foreignLanguages}
                </h2>
                <MultiSelectInput
                    mode="multiple"
                    maxTagCount="responsive"
                    className="min-w-[237px]"
                    value={formik.values.foreignLanguages}
                    options={formatOptions(foreignLanguages)}
                    onChange={(value) =>
                        handleSelectChange(`foreignLanguages`, value)
                    }
                />
            </div>
            <div className="flex justify-between items-center">
                <h2 className="text-grayDark_text">
                    {FORM_TEXT.drivingLicenses}
                </h2>
                <MultiSelectInput
                    mode="multiple"
                    maxTagCount="responsive"
                    className="min-w-[237px]"
                    value={formik.values.rights}
                    options={formatOptions(drivingLicense)}
                    onChange={(value) => handleSelectChange(`rights`, value)}
                />
            </div>
        </div>
    );
};
