import Image from "next/image";
import { FC, InputHTMLAttributes, useState } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    helpText?: string;
    image?: string;
}

export const Input: FC<InputProps> = ({ helpText, className, ...props }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };
    return (
        <div className="flex items-center relative">
            {props?.image && (
                <Image
                    src={props?.image}
                    alt="input icon"
                    className="absolute left-3 w-[13px] h-[13px] sm:w-[20px] sm:h-[20px]"
                    width={20}
                    height={20}
                />
            )}
            <input
                className={`w-full px-[10px] py-[7px] indent-10 border border-gray_border rounded-lg text-black ${className}`}
                {...props}
                type={
                    props.type != "password"
                        ? props.type
                        : showPassword
                        ? "text"
                        : "password"
                }
            />
            {props.type === "password" && (
                <Image
                    src={showPassword ? "/icons/eye-off.svg" : "/icons/eye.svg"}
                    className={`cursor-pointer w-[13px] h-[13px] sm:w-[20px] sm:h-[20px] ${
                        props.type !== "password"
                            ? "hidden"
                            : "absolute right-4"
                    }`}
                    alt="toggle visibility"
                    onClick={togglePasswordVisibility}
                    width={20}
                    height={20}
                />
            )}
            {helpText && (
                <span
                    className={
                        "absolute -bottom-[16px] left-[10px] tracking-normal leading-3 text-[8px] sm:text-[10px] text-red max-sm:text-[10px]"
                    }
                >
                    {helpText}
                </span>
            )}
        </div>
    );
};
