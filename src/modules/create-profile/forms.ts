// import { createActorValues } from "@/utils/formik/createActor";
// import { useFormik } from "formik";
// import { createActorMutation } from "./mutations";

// export const useProfile = () => {
//     const mutation = createActorMutation();

//     const formik = useFormik({
//         initialValues: createActorValues,
//         onSubmit: handleSubmit,
//         validateOnChange: false,
//     });
//     async function handleSubmit() {
//         await mutation.mutateAsync(formik.values);
//     }

//     return { formik, mutation };
// };
