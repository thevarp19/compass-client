"use client";

import { useAuthContext } from "@/context/AuthContext";
import { FormikProfileProvider } from "@/context/FormikContext";
import { FORM_TEXT } from "./strings/string";
import { Form } from "./ui/form/Form";

export const CreateProfilePage = () => {
    const { isHasProfile } = useAuthContext();
    return (
        <div className="bg-gray flex flex-col px-[15px] min-[410px]:px-[25px] py-[30px] sm:px-[146px] sm:py-[60px]">
            <span className="text-[20px] sm:text-[32px] font-semibold text-black">
                {isHasProfile
                    ? FORM_TEXT.edit_profile
                    : FORM_TEXT.create_profile}
            </span>
            <FormikProfileProvider>
                <Form />
            </FormikProfileProvider>
        </div>
    );
};
