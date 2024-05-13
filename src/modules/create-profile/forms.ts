import { useAuthContext } from "@/context/AuthContext";
import { useLanguage } from "@/context/LanguageProvider";
import { createActorValues } from "@/utils/formik/createActor";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { GetActorDetailResponse } from "../actor/types";
import { createActorMutation } from "./mutations";

export const useCreateProfile = () => {
    const mutation = createActorMutation();
    const router = useRouter();
    const { getHref } = useLanguage();
    const formik = useFormik({
        initialValues: createActorValues,
        onSubmit: async (values, { setSubmitting }) => {
            console.log("values", values);
            try {
                await mutation.mutateAsync(values);
                router.push(getHref("/profile"));
            } catch (error) {
                console.error("Error creating profile:");
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
                console.error("Error creating profile:");
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
