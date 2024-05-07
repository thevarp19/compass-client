import type { SelectProps } from "antd";
import { ConfigProvider, Select } from "antd";
import { DefaultOptionType } from "antd/es/select";
import { FC } from "react";

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
    return (
        <ConfigProvider
            theme={{
                token: {
                    borderRadius: 3,
                    controlHeight: 24,
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
