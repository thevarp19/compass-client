// import { useGetProfile } from "@/modules/actor/queries";
// import { createActorMutation } from "@/modules/create-profile/mutations";
// import { createActorValues } from "@/utils/formik/createActor";
// import { FormikProvider, useFormik } from "formik";
// import { useRouter } from "next/navigation";
// import { createContext, useContext, useEffect } from "react";
// import { useAuthContext } from "./AuthContext";
// import { useLanguage } from "./LanguageProvider";

// const FormikContext = createContext<any>(null);

// export const useFormikContext = () => {
//     const context = useContext(FormikContext);
//     if (!context) {
//         throw new Error(
//             "useFormikContext must be used within a FormikProvider"
//         );
//     }
//     return context;
// };

// export const FormikProfileProvider = ({
//     children,
// }: {
//     children: React.ReactNode;
// }) => {
//     const mutation = createActorMutation();
//     const router = useRouter();
//     const { isHasProfile } = useAuthContext();
//     const { data: profile } = useGetProfile();
//     const { getHref } = useLanguage();
//     const formik = useFormik({
//         initialValues: createActorValues,
//         onSubmit: async (values, { setSubmitting }) => {
//             console.log("values", values);
//             try {
//                 await mutation.mutateAsync(values);
//                 router.push(getHref("/profile"));
//             } catch (error) {
//                 console.error("Error creating profile:", error);
//             } finally {
//                 setSubmitting(false);
//             }
//         },
//     });

//     useEffect(() => {
//         if (isHasProfile && profile) {
//             formik.setValues(profile);
//         }
//     }, [profile, isHasProfile]);

//     return (
//         <FormikContext.Provider value={formik}>
//             <FormikProvider value={formik}>{children}</FormikProvider>
//         </FormikContext.Provider>
//     );
// };
