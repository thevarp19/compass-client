import { useAuthContext } from "@/context/AuthContext";
import { useLanguage } from "@/context/LanguageProvider";
import { createActorValues } from "@/utils/formik/createActor";
import { createDirectorValues } from "@/utils/formik/createDirector";
import { cleanData } from "@/utils/shared.util";
import { message } from "antd";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { GetActorDetailResponse } from "../actor/types";
import { GetDirectorType } from "../create-director/types";
import { createActorMutation, createDirectorMutation } from "./mutations";

export const useCreateProfile = () => {
    const validateValues = (values: any) => {
        const errors = [];
        const fieldErrors: { [key: string]: string } = {};

        // General Information Validation
        if (!values.abstract_user_data.firstName) {
            fieldErrors.firstName = "First name is required";
            errors.push("Пожалуйста, введите ваше имя");
        }
        if (!values.abstract_user_data.lastName) {
            fieldErrors.lastName = "Last name is required";
            errors.push("Пожалуйста, введите вашу фамилию");
        }
        // if (!values.abstract_user_data.thirdName) {
        //     fieldErrors.thirdName = "Middle name is required";
        //     errors.push("Пожалуйста, введите ваше отчество");
        // }
        if (!values.gender) {
            fieldErrors.gender = "Gender is required";
            errors.push("Пожалуйста, выберите ваш пол");
        }
        if (!values.birthday) {
            fieldErrors.birthday = "Birthdate is required";
            errors.push("Пожалуйста, введите вашу дату рождения");
        }
        if (!values.nationationality) {
            fieldErrors.nationationality = "Nationality is required";
            errors.push("Пожалуйста, выберите вашу национальность");
        }
        if (!values.citizenship) {
            fieldErrors.citizenship = "Citizenship is required";
            errors.push("Пожалуйста, выберите ваше гражданство");
        }
        if (!values.cityAccommodation) {
            fieldErrors.cityAccommodation = "City of residence is required";
            errors.push("Пожалуйста, выберите ваш город проживания");
        }
        // if (!values.agency) {
        //     fieldErrors.agency = "Agency is required";
        //     errors.push("Пожалуйста, введите вашу организацию");
        // }
        if (
            !values.abstract_user_data.userPhotos ||
            values.abstract_user_data.userPhotos.length < 3
        ) {
            fieldErrors.userPhotos = "Please upload at least 3 photos";
            errors.push("Пожалуйста, загрузите как минимум 3 фотографии");
        }

        // External Data Validation
        if (!values.height) {
            fieldErrors.height = "Height is required";
            errors.push("Пожалуйста, введите ваш рост");
        }
        if (!values.weight) {
            fieldErrors.weight = "Weight is required";
            errors.push("Пожалуйста, введите ваш вес");
        }
        if (!values.clothingSize) {
            fieldErrors.clothingSize = "Clothing size is required";
            errors.push("Пожалуйста, введите ваш размер одежды");
        }
        if (!values.shoeSize) {
            fieldErrors.shoeSize = "Shoe size is required";
            errors.push("Пожалуйста, введите ваш размер обуви");
        }
        if (!values.hairLength) {
            fieldErrors.hairLength = "Hair length is required";
            errors.push("Пожалуйста, выберите длину ваших волос");
        }
        if (!values.hairColor) {
            fieldErrors.hairColor = "Hair color is required";
            errors.push("Пожалуйста, выберите цвет ваших волос");
        }
        if (!values.eyeColor) {
            fieldErrors.eyeColor = "Eye color is required";
            errors.push("Пожалуйста, выберите цвет ваших глаз");
        }
        if (!values.bodyType) {
            fieldErrors.bodyType = "Body type is required";
            errors.push("Пожалуйста, выберите тип вашего телосложения");
        }
        if (!values.typeOfAppearance) {
            fieldErrors.typeOfAppearance = "Appearance type is required";
            errors.push("Пожалуйста, выберите тип вашей внешности");
        }
        // if (!values.peculiarities) {
        //     fieldErrors.peculiarities = "Features are required";
        //     errors.push("Пожалуйста, выберите особенности вашей внешности");
        // }

        // Social Media Validation
        if (
            !values.abstract_user_data.userSocialMedias ||
            values.abstract_user_data.userSocialMedias.length === 0
        ) {
            fieldErrors.userSocialMedias =
                "Please add at least one social media link";
            errors.push(
                "Пожалуйста, добавьте хотя бы одну ссылку на социальную сеть"
            );
        } else {
            values.abstract_user_data.userSocialMedias.forEach(
                (social: { name: any; url: any }, index: number) => {
                    if (!social.name) {
                        fieldErrors[`socialName_${index}`] =
                            "Social media name is required";
                        errors.push(
                            `Пожалуйста, выберите название социальной сети для записи ${
                                index + 1
                            }`
                        );
                    }
                    if (!social.url) {
                        fieldErrors[`socialUrl_${index}`] =
                            "Social media URL is required";
                        errors.push(
                            `Пожалуйста, введите ссылку на социальную сеть для записи ${
                                index + 1
                            }`
                        );
                    }
                }
            );
        }

        if (!values.userContacts || values.userContacts.length === 0) {
            fieldErrors.userContacts = "Please add at least one contact";
            errors.push("Пожалуйста, добавьте хотя бы один контакт");
        } else {
            values.userContacts.forEach(
                (contact: { name: any; number: any }, index: number) => {
                    if (!contact.name) {
                        fieldErrors[`contactName_${index}`] =
                            "Contact name is required";
                        errors.push(
                            `Пожалуйста, введите имя для контакта ${index + 1}`
                        );
                    }
                    if (!contact.number) {
                        fieldErrors[`contactNumber_${index}`] =
                            "Contact number is required";
                        errors.push(
                            `Пожалуйста, введите номер телефона для контакта ${
                                index + 1
                            }`
                        );
                    }
                }
            );
        }

        return { errors, fieldErrors };
    };

    const displayLastErrorMessage = (errors: any) => {
        if (errors.length > 0) {
            message.error(errors[0], 3);
        }
    };

    const mutation = createActorMutation();
    const router = useRouter();
    const { getHref } = useLanguage();
    const formik = useFormik({
        initialValues: createActorValues,
        // validationSchema,
        onSubmit: async (values, { setSubmitting }) => {
            const { errors, fieldErrors } = validateValues(values);

            if (errors.length > 0) {
                displayLastErrorMessage(errors);
                setSubmitting(false);
                return;
            }
            const cleanedValues = cleanData(values);
            try {
                await mutation.mutateAsync(cleanedValues);
                router.push(getHref("/profile"));
            } catch (error: any) {
                console.error("Error creating profile:", error);
            } finally {
                setSubmitting(false);
            }
        },
    });
    return { formik, mutation, isDirty: formik.dirty };
};

export const useUpdateProfile = (
    initialValues: GetActorDetailResponse | undefined
) => {
    const mutation = createActorMutation();
    const router = useRouter();
    const { isHasProfile } = useAuthContext();
    const { getHref } = useLanguage();
    const formik = useFormik({
        initialValues: createActorValues,
        onSubmit: async (values, { setSubmitting }) => {
            console.log("values", values);
            try {
                await mutation.mutateAsync(values);
                router.push(getHref("/profile"));
            } catch (error) {
                console.error("Error updating profile:", error);
            } finally {
                setSubmitting(false);
            }
        },
    });

    useEffect(() => {
        if (isHasProfile && initialValues) {
            formik.resetForm({
                values: initialValues,
            });
        }
    }, [initialValues]);

    return { formik, mutation };
};

export const useCreateDirector = () => {
    const mutation = createDirectorMutation();
    const router = useRouter();
    const { getHref } = useLanguage();
    const formik = useFormik({
        initialValues: createDirectorValues,
        onSubmit: async (values, { setSubmitting }) => {
            console.log("values", values);
            try {
                await mutation.mutateAsync(values);
                router.push(getHref("/profile"));
            } catch (error) {
                console.error("Error creating director:");
            } finally {
                setSubmitting(false);
            }
        },
        validateOnChange: false,
    });
    return { formik, mutation, isDirty: formik.dirty };
};
export const useUpdateDirector = (
    initialValues: GetDirectorType | undefined
) => {
    const mutation = createDirectorMutation();
    const router = useRouter();
    const { isHasProfile } = useAuthContext();
    const { getHref } = useLanguage();
    const formik = useFormik({
        initialValues: createDirectorValues,
        onSubmit: async (values, { setSubmitting }) => {
            console.log("values", values);
            try {
                await mutation.mutateAsync(values);
                router.push(getHref("/profile"));
            } catch (error) {
                console.error("Error updating profile:", error);
            } finally {
                setSubmitting(false);
            }
        },
        validateOnChange: false,
    });
    useEffect(() => {
        if (isHasProfile && initialValues) {
            formik.resetForm({
                values: initialValues.abstract_user_data,
            });
        }
    }, [initialValues]);
    return { formik, mutation };
};
