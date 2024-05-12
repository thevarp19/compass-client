import { useLanguage } from "@/context/LanguageProvider";
import { ChangeEvent, FC, useState } from "react";
import { FormProps } from "../../types";

export const Education: FC<FormProps> = ({ formik }) => {
    const { language } = useLanguage();

    const [educations, setEducations] = useState(formik.values.educations);

    const handleInputChange = (
        index: number,
        e: ChangeEvent<HTMLInputElement>
    ) => {
        const newEducations = educations.map((education, idx) =>
            idx === index
                ? { ...education, [e.target.name]: e.target.value }
                : education
        );
        setEducations(newEducations);
        formik.setFieldValue("educations", newEducations);
    };

    const addEducation = () => {
        const newEducation = {
            university: "",
            faculty: "",
            startYear: undefined,
            graduationYear: undefined,
        };
        const newEducations = [...educations, newEducation];
        setEducations(newEducations);
        formik.setFieldValue("educations", newEducations);
    };

    const removeEducation = (index: number) => {
        const newEducations = educations.filter((_, idx) => idx !== index);
        setEducations(newEducations);
        formik.setFieldValue("educations", newEducations);
    };

    return (
        <div className="flex flex-col gap-[10px] sm:gap-5 w-full">
            <h2 className="text-[10px] sm:text-xl font-semibold text-black">
                {language.FORM_TEXT.education}
            </h2>
            {educations.map((education, index) => (
                <div
                    key={index}
                    className={`flex flex-col gap-[10px] sm:gap-5 w-full ${
                        index > 0 && "border-t-[1px] border-gray_border pt-5"
                    }`}
                >
                    <div className="flex justify-between items-center">
                        <input
                            className="!w-full sm:!w-auto"
                            value={education.university}
                            onChange={(e) => handleInputChange(index, e)}
                            name="university"
                        />
                        <input
                            className="!w-full sm:!w-auto"
                            value={education.faculty}
                            onChange={(e) => handleInputChange(index, e)}
                            name="faculty"
                        />
                        <input
                            type="number"
                            value={education.startYear}
                            onChange={(e) => handleInputChange(index, e)}
                            name="startYear"
                        />
                        <input
                            type="number"
                            value={education.graduationYear}
                            onChange={(e) => handleInputChange(index, e)}
                            name="graduationYear"
                        />
                        {index > 0 && (
                            <button
                                type="button"
                                onClick={() => removeEducation(index)}
                            >
                                Remove
                            </button>
                        )}
                    </div>
                </div>
            ))}
            <button onClick={addEducation}>Add More</button>
        </div>
    );
};
