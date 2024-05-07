import Image from "next/image";
import { ChangeEvent, FC, InputHTMLAttributes } from "react";

export interface ISearchInput extends InputHTMLAttributes<HTMLInputElement> {
    onSearchChange?: (value: string) => void; // Add a callback function for handling changes
}

export const SearchInput: FC<ISearchInput> = ({
    className,
    onSearchChange,
    ...props
}) => {
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (onSearchChange) {
            onSearchChange(e.target.value);
        }
    };

    return (
        <div className="flex justify-between items-center pr-5 w-[468px] h-38px bg-white border-[1px] border-gray_border rounded-[5px] shadow-sm">
            <input
                className={`flex-grow p-[10px] text-sm text-button_color bg-transparent border-none rounded-[5px] focus:outline-none ${className}`}
                type="search"
                onChange={handleInputChange}
                {...props}
            />
            <Image
                src={"/icons/search.svg"}
                alt="Search icon"
                className="cursor-pointer w-[15px] h-[15px]"
                width={15}
                height={15}
            />
        </div>
    );
};
