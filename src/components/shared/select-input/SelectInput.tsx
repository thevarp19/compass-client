import { AutoComplete, AutoCompleteProps, ConfigProvider } from "antd";
import { DefaultOptionType } from "antd/es/select";
import { FC } from "react";

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
    return (
        <ConfigProvider
            theme={{
                token: {
                    borderRadius: 3,
                    controlHeight: 24,
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
