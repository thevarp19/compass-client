import { MultiSelectInput } from "@/components/shared/multi-select/MultiSelectInput";
import { useLanguage } from "@/context/LanguageProvider";
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
import { FormProps } from "../../types";

export const Skills: FC<FormProps> = ({ formik }) => {
    const handleSelectChange = (name: string, value: string) => {
        formik.setFieldValue(name, value);
    };
    const { language } = useLanguage();
    return (
        <div className="flex flex-col gap-[10px] sm:gap-5 w-full">
            <h2 className="text-[10px] sm:text-xl font-semibold text-black">
                {language.FORM_TEXT.skills}
            </h2>
            <div className="flex justify-between items-center">
                <h2 className="text-[8px] sm:text-base text-grayDark_text">
                    {language.FORM_TEXT.sport}
                </h2>
                <MultiSelectInput
                    mode="multiple"
                    maxTagCount="responsive"
                    className="!min-w-[92px] sm:!min-w-[237px] max-w-[237px]"
                    value={formik.values.sports}
                    options={formatOptions(sports)}
                    onChange={(value) => handleSelectChange(`sports`, value)}
                />
            </div>
            <div className="flex justify-between items-center">
                <h2 className="text-[8px] sm:text-base text-grayDark_text">
                    {language.FORM_TEXT.dance}
                </h2>
                <MultiSelectInput
                    maxTagCount="responsive"
                    mode="multiple"
                    className="min-w-[92px] sm:min-w-[237px]"
                    value={formik.values.dancings}
                    options={formatOptions(dances)}
                    onChange={(value) => handleSelectChange(`dancings`, value)}
                />
            </div>
            <div className="flex justify-between items-center">
                <h2 className="text-[8px] sm:text-base text-grayDark_text">
                    {language.FORM_TEXT.musicalInstruments}
                </h2>
                <MultiSelectInput
                    mode="multiple"
                    maxTagCount="responsive"
                    className="min-w-[92px] sm:min-w-[237px]"
                    value={formik.values.musicalInstruments}
                    options={formatOptions(musicalInstruments)}
                    onChange={(value) =>
                        handleSelectChange(`musicalInstruments`, value)
                    }
                />
            </div>
            <div className="flex justify-between items-center">
                <h2 className="text-[8px] sm:text-base text-grayDark_text">
                    {language.FORM_TEXT.singing}
                </h2>
                <MultiSelectInput
                    mode="multiple"
                    maxTagCount="responsive"
                    className="min-w-[92px] sm:min-w-[237px]"
                    value={formik.values.singing}
                    options={formatOptions(singing)}
                    onChange={(value) => handleSelectChange(`singing`, value)}
                />
            </div>
            <div className="flex justify-between items-center">
                <h2 className="text-[8px] sm:text-base text-grayDark_text">
                    {language.FORM_TEXT.foreignLanguages}
                </h2>
                <MultiSelectInput
                    mode="multiple"
                    maxTagCount="responsive"
                    className="min-w-[92px] sm:min-w-[237px]"
                    value={formik.values.foreignLanguages}
                    options={formatOptions(foreignLanguages)}
                    onChange={(value) =>
                        handleSelectChange(`foreignLanguages`, value)
                    }
                />
            </div>
            <div className="flex justify-between items-center">
                <h2 className="text-[8px] sm:text-base text-grayDark_text">
                    {language.FORM_TEXT.drivingLicenses}
                </h2>
                <MultiSelectInput
                    mode="multiple"
                    maxTagCount="responsive"
                    className="min-w-[92px] sm:min-w-[237px]"
                    value={formik.values.rights}
                    options={formatOptions(drivingLicense)}
                    onChange={(value) => handleSelectChange(`rights`, value)}
                />
            </div>
        </div>
    );
};
