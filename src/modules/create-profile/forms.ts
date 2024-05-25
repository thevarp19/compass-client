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
        const errors: { [key: string]: string } = {};
        if (!values.abstract_user_data.firstName) {
            errors["abstract_user_data.firstName"] = "Заполните поле";
        }
        if (!values.abstract_user_data.lastName) {
            errors["abstract_user_data.lastName"] = "Заполните поле";
        }
        if (!values.gender) {
            errors["gender"] = "Выберите пол";
        }
        if (!values.birthday) {
            errors["birthday"] = "Заполните поле";
        }
        if (!values.nationationality) {
            errors["nationationality"] = "Заполните поле";
        }
        if (!values.citizenship) {
            errors["citizenship"] = "Заполните поле";
        }
        if (!values.cityAccommodation) {
            errors["cityAccommodation"] = "Заполните поле";
        }

        // External Data Validation
        if (!values.height) {
            errors["height"] = "Заполните поле";
        }
        if (!values.weight) {
            errors["weight"] = "Заполните поле";
        }
        if (!values.clothingSize) {
            errors["clothingSize"] = "Заполните поле";
        }
        if (!values.shoeSize) {
            errors["shoeSize"] = "Заполните поле";
        }
        if (!values.hairLength) {
            errors["hairLength"] = "Заполните поле";
        }
        if (!values.hairColor) {
            errors["hairColor"] = "Заполните поле";
        }
        if (!values.eyeColor) {
            errors["eyeColor"] = "Заполните поле";
        }
        if (!values.bodyType) {
            errors["bodyType"] = "Заполните поле";
        }
        if (!values.typeOfAppearance) {
            errors["typeOfAppearance"] = "Заполните поле";
        }

        // Social Media Validation
        if (
            !values.abstract_user_data.userSocialMedias ||
            values.abstract_user_data.userSocialMedias.length === 0
        ) {
            errors["abstract_user_data.userSocialMedias"] = "Заполните поле";
        } else {
            values.abstract_user_data.userSocialMedias.forEach(
                (social: { name: any; url: any }, index: number) => {
                    if (!social.name) {
                        errors[
                            `abstract_user_data.userSocialMedias[${index}].name`
                        ] = "Заполните поле";
                    }
                    if (!social.url) {
                        errors[
                            `abstract_user_data.userSocialMedias[${index}].url`
                        ] = "Заполните поле";
                    }
                }
            );
        }

        if (!values.userContacts || values.userContacts.length === 0) {
            errors["userContacts"] = "Заполните поле";
        } else {
            values.userContacts.forEach(
                (contact: { name: any; number: any }, index: number) => {
                    if (!contact.name) {
                        errors[`userContacts[${index}].name`] =
                            "Заполните поле";
                    }
                    if (!contact.number) {
                        errors[`userContacts[${index}].number`] =
                            "Заполните поле";
                    }
                }
            );
        }

        return errors;
    };

    const mutation = createActorMutation();
    const router = useRouter();
    const { getHref } = useLanguage();
    const formik = useFormik({
        initialValues: createActorValues,
        validate: validateValues,
        onSubmit: async (values, { setSubmitting }) => {
            if (!values.abstract_user_data.avatar) {
                message.error("Загрузите аватар!");
                setSubmitting(false);
                return;
            }
            if (
                !values.abstract_user_data.userPhotos ||
                values.abstract_user_data.userPhotos.length < 3
            ) {
                message.error("Пожалуйста, загрузите как минимум 3 фотографии");
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
