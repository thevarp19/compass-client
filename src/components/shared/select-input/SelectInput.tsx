import { AutoComplete, AutoCompleteProps, ConfigProvider } from "antd";
import { DefaultOptionType } from "antd/es/select";
import { FC, useEffect, useState } from "react";

interface SelectInputProps extends AutoCompleteProps {
    placeholder?: string;
    options: DefaultOptionType[];
}

export const SelectInput: FC<SelectInputProps> = ({
    onChange,
    placeholder,
    value,
    options,
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
            <AutoComplete
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
        </ConfigProvider>
    );
};
