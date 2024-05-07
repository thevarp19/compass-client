import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    bgColor?: string;
}

const Button: React.FC<ButtonProps> = ({ text, bgColor, ...props }) => {
    return (
        <button
            className={`bg-button_color text-[8px] sm:text-base text-white font-bold w-[250px] sm:w-[346px] h-[30px] sm:h-[40px] rounded-lg ${bgColor}`}
            {...props}
        >
            {text}
        </button>
    );
};

export default Button;
