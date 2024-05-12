"use client";
import kz from "@/lib/lang/kz";
import ru from "@/lib/lang/ru";
import {
    FC,
    PropsWithChildren,
    createContext,
    useContext,
    useEffect,
} from "react";
const map = {
    kz: kz,
    ru: ru,
};
export type LanguageKey = "kz" | "ru";
type LanguageContextType = {
    language: any;
    languageKey: LanguageKey;
    getHref: (href: string) => string;
    // handleSetLanguage: (newLanguageKey: LanguageKey) => void;
};

export const languageOptions: { value: LanguageKey; label: string }[] = [
    {
        value: "kz",
        label: "Қазақша",
    },
    {
        value: "ru",
        label: "Russian",
    },
];

export const LanguageContext = createContext<LanguageContextType>({
    language: ru,
    languageKey: "ru",
    getHref: () => "/ru",
});

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};
interface LanguageProviderProps extends PropsWithChildren {
    languageKey: LanguageKey;
}

export const LanguageProvider: FC<LanguageProviderProps> = ({
    children,
    languageKey,
}) => {
    const language = map[languageKey];
    const getHref = (href: string): string => {
        let tempHref = `${href}`;

        if (tempHref.startsWith("/")) {
            tempHref = tempHref.substring(1);
        }
        return `/${languageKey}/${tempHref}`;
    };
    useEffect(() => {
        localStorage.setItem("lang", languageKey);
    }, []);
    const provider: LanguageContextType = {
        language,
        languageKey,
        getHref,
    };

    return (
        <LanguageContext.Provider value={provider}>
            {children}
        </LanguageContext.Provider>
    );
};
