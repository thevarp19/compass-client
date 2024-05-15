// "use client";
// // import { MyButton } from "@/components/ui/MyButton";
// // import { MyIcon } from "@/components/ui/MyIcon";
// // import { MyInput } from "@/components/ui/MyInput";
// // import { useLanguage } from "@/context/LanguageProvider";
// // import { useMessage } from "@/context/MessageContext";
// import { axios } from "@/lib/axios";
// import { useFormik } from "formik";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";
// // import * as Yup from "yup";

// const ConfirmResetPage: React.FC = () => {
//     // const { language, getHref } = useLanguage();
//     const router = useRouter();
//     // const { showMessage } = useMessage();
//     useEffect(() => {
//         const urlParams = new URLSearchParams(window.location.search);
//         const resetToken: string = urlParams.get("token") || "";
//         localStorage.setItem("resetToken", resetToken);
//     }, []);
//     // const passwordValidationSchema = Yup.object().shape({
//     //     password: Yup.string()
//     //         .min(8, "Длина пароля должна быть не менее 8!")
//     //         .max(24, "Длина пароля должна быть не более 24!")
//     //         .required("Пожалуйста, введите свой пароль!"),
//     //     repeatPassword: Yup.string()
//     //         .required("Требуется повторить пароль")
//     //         .test(
//     //             "password-match",
//     //             "Пароли должны совпадать",
//     //             function (value) {
//     //                 return value === this.parent.password;
//     //             }
//     //         ),
//     // });
//     const handlePasswordCreation = async (password: string) => {
//         try {
//             const token = localStorage.getItem("resetToken");
//             const response = await axios.post(
//                 `/users/password/reset/${token}`,
//                 {
//                     password,
//                 }
//             );
//             localStorage.removeItem("resetToken");
//             router.push(getHref("/auth"));
//             showMessage(response.data.message, "success");
//         } catch (error: any) {
//             showMessage(
//                 error.response.data.message[0]
//                     ? error.response.data.message[0]
//                     : "Error occurred during password creation",
//                 "error"
//             );
//         } finally {
//             formik.setSubmitting(false);
//         }
//     };
//     const formik = useFormik({
//         initialValues: { password: "", repeatPassword: "" },
//         validationSchema: passwordValidationSchema,
//         onSubmit: (values) => handlePasswordCreation(values.password),
//     });
//     const getHelpText = (key: "password" | "repeatPassword"): any => {
//         return formik?.touched[key] && formik.errors[key];
//     };

//     return (
//         <div className="flex justify-center items-center">
//             <div className="w-[26.75rem] flex flex-col justify-center items-center gap-10">
//                 <div className="flex flex-col w-full">
//                     <div className="flex flex-col w-full gap-5">
//                         <Link href={getHref("/auth")}>
//                             <button className="flex gap-[10px] items-center text-orange">
//                                 <MyIcon
//                                     src="left"
//                                     alt="back"
//                                     width={6}
//                                     height={12}
//                                 />
//                                 {language.confirmationCodeForm.go_back}
//                             </button>
//                         </Link>
//                         <h2 className="font-tilda_semibold text-xl">
//                             {language.createPasswordPage.createPassword}
//                         </h2>
//                         <MyInput
//                             name="password"
//                             placeholder={
//                                 language.createPasswordPage.passwordPlaceholder
//                             }
//                             value={formik.values.password}
//                             helpText={getHelpText("password")}
//                             onChange={formik.handleChange}
//                             type="password"
//                         />
//                         <MyInput
//                             name="repeatPassword"
//                             placeholder={
//                                 language.createPasswordPage
//                                     .confirmPasswordPlaceholder
//                             }
//                             value={formik.values.repeatPassword}
//                             helpText={getHelpText("repeatPassword")}
//                             onChange={formik.handleChange}
//                             type="password"
//                         />

//                         <MyButton
//                             onClick={() => {
//                                 formik.handleSubmit();
//                             }}
//                             loading={formik.isSubmitting}
//                             className="bg-orange text-white"
//                         >
//                             {language.createPasswordPage.signUp}
//                         </MyButton>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ConfirmResetPage;
