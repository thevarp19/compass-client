import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    bgColor?: string;
}

const Button: React.FC<ButtonProps> = ({ text, bgColor, ...props }) => {
    return (
        <button
            className={`bg-button_color text-base text-white font-bold w-[346px] h-[40px] rounded-lg ${bgColor}`}
            {...props}
        >
            {text}
        </button>
    );
};

export default Button;
