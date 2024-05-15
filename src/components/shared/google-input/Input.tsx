import { useLanguage } from "@/context/LanguageProvider";
import Image from "next/image";
const GoogleInput = () => {
    const { language, languageKey } = useLanguage();
    const googleAuth = () => {
        localStorage.setItem("oauthLanguage", languageKey);
        window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/google`;
    };
    return (
        <div
            onClick={googleAuth}
            className="cursor-pointer sm:h-[40px] h-[30px] gap-[8px] sm:gap-5 border border-gray_border rounded-3xl flex justify-center items-center text-black"
        >
            <Image
                src={"/icons/google.svg"}
                width={18}
                height={18}
                className="w-[13px] h-[13px] sm:w-[18] sm:h-[18px]"
                alt="google"
            ></Image>

            <span className="text-black text-[10px] sm:text-base">
                {language.LOGIN.google_auth}
            </span>
        </div>
    );
};

export default GoogleInput;
