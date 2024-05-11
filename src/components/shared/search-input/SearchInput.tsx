import Image from "next/image";
import { ChangeEvent, FC, InputHTMLAttributes } from "react";

export interface ISearchInput extends InputHTMLAttributes<HTMLInputElement> {
    onSearchChange?: (value: string) => void;
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
        <div className="flex justify-between items-center pr-2 sm:pr-5 px-2 sm:px-5 py-2 sm:py-0 max-w-[185px] sm:max-w-none sm:w-[468px] sm:[h-38px] w-full h-[18px] sm:h-[38px] bg-white border border-gray_border rounded-[5px] sm:rounded-lg shadow-sm">
            <input
                className={`flex-grow sm:p-[8px] text-[7px] sm:text-sm text-gray-700 bg-transparent border-none rounded focus:outline-none ${className}`}
                type="search"
                onChange={handleInputChange}
                {...props}
            />
            <Image
                src="/icons/search.svg"
                alt="Search icon"
                className="cursor-pointer w-[7px] h-[7px] sm:w-[15px] sm:h-[15px]"
                width={7}
                height={7}
            />
        </div>
    );
};
