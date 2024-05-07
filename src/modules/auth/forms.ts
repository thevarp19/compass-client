import { useFormik } from "formik";
import { loginMutation, registerMutation } from "./mutations";
import { LoginRequest, LoginResponse } from "./types";

export const useLogin = (success: (loginData: LoginResponse) => void) => {
    const mutation = loginMutation(success);

    const formik = useFormik<LoginRequest>({
        initialValues: {
            email: "",
            password: "",
        },
        // validationSchema: loginSchema,
        validateOnChange: true,
        onSubmit: handleSubmit,
    });

    async function handleSubmit() {
        console.log(formik.values);
        await mutation.mutateAsync(formik.values);
    }

    return { formik, mutation };
};

export const useRegister = () => {
    const mutation = registerMutation();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            confirmationPassword: "",
        },
        // validationSchema: sellerRegisterSchema,
        validateOnChange: true,
        onSubmit: handleSubmit,
    });

    async function handleSubmit() {
        await mutation.mutateAsync(formik.values);
    }

    return { formik, mutation };
};
