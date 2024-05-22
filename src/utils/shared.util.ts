import { clsx, type ClassValue } from "clsx";
import { FormikProps } from "formik";
import { twMerge } from "tailwind-merge";

export function cn(...args: ClassValue[]) {
    return twMerge(clsx(args));
}

export function getFormikHelpText(
    formik: FormikProps<any>,
    name: string
): string | undefined {
    if (formik.touched[name] && formik.errors[name]) {
        return formik.errors[name] as string;
    }
    return undefined;
}
export const cleanData = (data: any): any => {
    if (Array.isArray(data)) {
        return data
            .map((item) => cleanData(item))
            .filter((item) => Object.keys(item).length > 0);
    } else if (typeof data === "object" && data !== null) {
        return Object.keys(data).reduce((acc: any, key) => {
            const cleanedValue = cleanData(data[key]);
            if (
                (typeof cleanedValue === "object" &&
                    Object.keys(cleanedValue).length > 0) ||
                (typeof cleanedValue !== "object" &&
                    cleanedValue !== undefined &&
                    cleanedValue !== "")
            ) {
                acc[key] = cleanedValue;
            }
            return acc;
        }, {});
    }
    return data;
};
