import { useAuthContext } from "@/context/AuthContext";
import { useLanguage } from "@/context/LanguageProvider";
import { createActorValues } from "@/utils/formik/createActor";
import { createDirectorValues } from "@/utils/formik/createDirector";
import { message } from "antd";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { GetActorDetailResponse } from "../actor/types";
import { GetDirectorType } from "../create-director/types";
import { createActorMutation, createDirectorMutation } from "./mutations";

export const useCreateProfile = () => {
    const mutation = createActorMutation();
    const router = useRouter();
    const { getHref } = useLanguage();
    const formik = useFormik({
        initialValues: createActorValues,
        onSubmit: async (values, { setSubmitting }) => {
            console.log("values", values);
            if (
                !values.abstract_user_data.userPhotos ||
                values.abstract_user_data.userPhotos.length < 3
            ) {
                message.error("Пожалуйста, загрузите как минимум 3 фотографии");
                setSubmitting(false);
                return;
            }
            try {
                await mutation.mutateAsync(values);
                router.push(getHref("/profile"));
            } catch (error: any) {
                console.error("Error creating profile:", error);
            } finally {
                setSubmitting(false);
            }
        },
        validateOnChange: false,
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
