import Image, { StaticImageData } from "next/image";
import React, { ChangeEvent } from "react";
import seePass from "../../../../public/assets/seePass.svg";

interface InputProps {
    placeholder: string;
    image: StaticImageData; // Type for images imported in Next.js
    type?: string;
    name: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
    placeholder,
    image,
    type,
    name,
    value,
    onChange,
}) => {
    return (
        <div className="flex items-center relative ">
            <Image
                src={image}
                alt="input icon"
                className="absolute left-3"
                width={20}
                height={20}
            />
            <input
                placeholder={placeholder}
                required
                onChange={onChange}
                type={type}
                name={name}
                value={value}
                className="w-[346px] h-[40px] indent-10 border border-[#D9D9D9] rounded-lg outline-none text-black"
            />
            <Image
                src={seePass}
                className={`cursor-pointer ${
                    type !== "password" ? "hidden" : "absolute right-14"
                }`}
                alt="toggle visibility"
                width={20}
                height={20}
            />
        </div>
    );
};

export default Input;
