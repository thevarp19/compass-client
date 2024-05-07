import Image from "next/image";
const GoogleInput = () => {
    return (
        <div className="sm:h-[40px] h-[30px] gap-[8px] sm:gap-5 border border-gray_border rounded-3xl flex justify-center items-center text-black">
            <Image
                src={"/icons/google.svg"}
                width={18}
                height={18}
                className="w-[13px] h-[13px] sm:w-[18] sm:h-[18px]"
                alt="google"
            ></Image>

            <span className="text-black text-[10px] sm:text-base">
                Войти с помощью Google
            </span>
        </div>
    );
};

export default GoogleInput;
