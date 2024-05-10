import type { SelectProps } from "antd";
import { ConfigProvider, Select } from "antd";
import { DefaultOptionType } from "antd/es/select";
import { FC, useEffect, useState } from "react";

interface SelectInputProps extends SelectProps<any, DefaultOptionType> {
    placeholder?: string;
    options: DefaultOptionType[];
}

export const MultiSelectInput: FC<SelectInputProps> = ({
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
            <Select
                allowClear
                filterOption={(inputValue, option) =>
                    option?.value
                        ?.toString()
                        .toUpperCase()
                        .indexOf(inputValue.toUpperCase()) !== -1
                }
                mode="multiple"
                maxCount="responsive"
                onChange={onChange}
                value={value}
                placeholder={placeholder || "Поиск"}
                options={options}
                {...(props as any)}
            />
        </ConfigProvider>
    );
};
