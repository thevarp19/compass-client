import { useLanguage } from "@/context/LanguageProvider";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const LanguageSelector = ({ ...props }) => {
    const { languageKey } = useLanguage();
    const pathname = usePathname();
    const removeLanguageFromHref = (href: string): string => {
        return href.substring(4);
    };
    return (
        <div className="relative">
            <Menu>
                <MenuButton className="flex justify-center items-center border-[1px] rounded-[7px] w-[20px] h-[20px] sm:w-[40px] sm:h-[40px]">
                    <Image
                        src={`/images/${languageKey}.png`}
                        width={14}
                        style={{ objectFit: "contain" }}
                        height={9}
                        alt="flag"
                        className="sm:w-[32px] sm:h-[21px]"
                    />
                </MenuButton>
                <MenuItems
                    className={`absolute mt-[6px] h-[40px] w-[20px] sm:w-[40px]`}
                >
                    <MenuItem>
                        <Link
                            href={`/kz/${removeLanguageFromHref(pathname)}`}
                            className={`relavite w-[20px] h-[20px] rounded-t-[7px] sm:w-[40px] sm:h-[40px] flex items-center justify-center ${
                                languageKey === "kz"
                                    ? "bg-button_color"
                                    : "bg-gray_border border border-button_color"
                            }`}
                        >
                            <Image
                                src="/images/kz.png"
                                width={14}
                                style={{ objectFit: "contain" }}
                                height={9}
                                alt="Kazakh flag"
                                className="w-[14px] h-[9px] sm:w-[32px] sm:h-[21px]"
                            />
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link
                            href={`/ru/${removeLanguageFromHref(pathname)}`}
                            className={`relative w-[20px] h-[20px] sm:w-[40px] rounded-b-[7px] sm:h-[40px] flex items-center justify-center ${
                                languageKey === "ru"
                                    ? "bg-button_color"
                                    : "bg-gray_border border border-button_color"
                            }
                            `}
                        >
                            <Image
                                src="/images/ru.png"
                                width={14}
                                style={{ objectFit: "contain" }}
                                height={9}
                                alt="russian flag"
                                className="w-[14px] h-[9px] sm:w-[32px] sm:h-[21px]"
                            />
                        </Link>
                    </MenuItem>
                </MenuItems>
            </Menu>
        </div>
    );
};
