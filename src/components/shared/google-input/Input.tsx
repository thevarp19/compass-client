import Image from "next/image";
import google from "../../../../public/assets/google.svg";
const GoogleInput = () => {
    return (
        <div className="relative left-5">
            <Image
                src={google}
                width={18}
                height={18}
                className="absolute left-4 top-3"
                alt="google"
            ></Image>
            <div className="w-[300px] h-[40px] indent-10 border border-gray-200 rounded-3xl outline-none text-black"></div>
            <span className="absolute text-black  left-14 top-2">
                Войти с помощью Google
            </span>
        </div>
    );
};

export default GoogleInput;
