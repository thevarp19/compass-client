import { AutoCompleteProps, ConfigProvider } from "antd";
import Select, { DefaultOptionType } from "antd/es/select";
import { FC, useEffect, useState } from "react";

interface SelectInputProps extends AutoCompleteProps {
    placeholder?: string;
    options: DefaultOptionType[];
    helpText?: string;
}

export const SelectInput: FC<SelectInputProps> = ({
    onChange,
    placeholder,
    value,
    options,
    helpText,
    ...props
}) => {
    const [fontSize, setFontSize] = useState(6);
    const [controlHeight, setControlHeight] = useState(24);

    useEffect(() => {
        const handleResize = () => {
            setFontSize(window.innerWidth < 640 ? 6 : 14);
            setControlHeight(window.innerWidth < 640 ? 18 : 24);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <ConfigProvider
            theme={{
                token: {
                    borderRadius: 3,
                    controlHeight: controlHeight,
                    fontSize: fontSize,
                },
            }}
        >
            <div className="flex items-center relative">
                <Select
                    allowClear
                    filterOption={(inputValue, option) =>
                        option?.value
                            ?.toString()
                            .toUpperCase()
                            .indexOf(inputValue.toUpperCase()) !== -1
                    }
                    size=""
                    onChange={onChange}
                    value={value}
                    placeholder={placeholder || "Поиск"}
                    options={options}
                    {...(props as any)}
                />
                {helpText && (
                    <span
                        className={
                            "absolute -bottom-[10px] sm:-bottom-[14px] tracking-normal leading-3 text-[4px] sm:text-[10px] text-red whitespace-nowrap overflow-hidden max-w-max"
                        }
                    >
                        {helpText}
                    </span>
                )}
            </div>
        </ConfigProvider>
    );
};
