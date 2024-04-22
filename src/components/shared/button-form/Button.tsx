import React from "react";

interface ButtonProps {
    text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
    return (
        <button className="bg-button_color text-base text-white font-bold w-[346px] h-[40px] rounded-lg">
            {text}
        </button>
    );
};

export default Button;
