import React, { FC } from "react";
interface TextAreaProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
const TextArea: FC<TextAreaProps> = ({ value, onChange }) => {
    return (
        <div>
            <textarea
                className="w-full text-black h-[150px] shadow-md border border-gray_color"
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default TextArea;
