import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { FOOTER } from "./string";

export const Footer: FC = () => {
    return (
        <div className="bg-primary border-t-[0.25px] border-gray_text">
            <div className="flex justify-center pt-[25px] sm:pt-12 pb-[46px] sm:pb-[88px]">
                <div className="flex gap-[20px] sm:gap-[170px] items-center">
                    <div className="max-w-[84px] sm:max-w-[167px] flex flex-col gap-[15px] sm:gap-[50px]">
                        <h2 className="text-white text-[12px] sm:text-2xl font-semibold">
                            {FOOTER.name}
                        </h2>
                        <h3 className="text-gray_text text-[8px] sm:text-base">
                            {FOOTER.description}
                        </h3>
                        <div className="flex gap-[10px] sm:gap-5">
                            <Image
                                src="/icons/telegram.svg"
                                width={30}
                                height={30}
                                className="w-[15px] h-[15px]"
                                alt="telegram"
                            />
                            <Image
                                src="/icons/instagram.svg"
                                width={30}
                                height={30}
                                className="w-[15px] h-[15px] sm:w-[30px] sm:h-[30px]"
                                alt="instagram"
                            />
                            <Image
                                src="/icons/linkedin.svg"
                                width={30}
                                height={30}
                                className="w-[15px] h-[15px] sm:w-[30px] sm:h-[30px]"
                                alt="linkedin"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-[10px] sm:gap-5">
                        <h2 className="text-white text-[8px] sm:text-base">
                            {FOOTER.navigation}
                        </h2>
                        <Link
                            href="/actors"
                            className="text-gray_text text-[8px] sm:text-base"
                        >
                            {FOOTER.actors}
                        </Link>
                        <Link
                            href="/our-projects"
                            className="text-gray_text text-[8px] sm:text-base"
                        >
                            {FOOTER.our_project}
                        </Link>
                        <Link
                            href="/about-us"
                            className="text-gray_text text-[8px] sm:text-base"
                        >
                            {" "}
                            {FOOTER.about_us}
                        </Link>
                    </div>
                    <div className="flex flex-col gap-[10px] sm:gap-5">
                        <h2 className="text-white text-[8px] sm:text-base">
                            {FOOTER.for_casting_directors}
                        </h2>
                        <div className="flex flex-col gap-[15px]">
                            <h2 className="flex gap-[25px] text-gray_text text-[8px] sm:text-base">
                                <span>
                                    <Image
                                        src="/icons/phone.svg"
                                        width={20}
                                        height={20}
                                        alt="phone"
                                        className="w-[10px] h-[10px] sm:w-[20px] sm:h-[20px]"
                                    />
                                </span>
                                +8-(800)-555-3535
                            </h2>
                            <h2 className="flex gap-[25px] text-gray_text text-[8px] sm:text-base">
                                <span>
                                    <Image
                                        src="/icons/envelope.svg"
                                        width={20}
                                        height={20}
                                        alt="envelope"
                                        className="w-[10px] h-[10px] sm:w-[20px] sm:h-[20px]"
                                    />
                                </span>
                                info@compass.com
                            </h2>
                            <h2 className="flex gap-[25px] text-gray_text text-[8px] sm:text-base">
                                <span>
                                    <Image
                                        src="/icons/telegram.svg"
                                        width={20}
                                        height={20}
                                        alt="telegram"
                                        className="w-[10px] h-[10px] sm:w-[20px] sm:h-[20px]"
                                    />
                                </span>
                                @compasskz
                            </h2>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[10px] sm:gap-5">
                        <h2 className="text-white text-[8px] sm:text-base">
                            {FOOTER.for_parents}
                        </h2>
                        <h2 className="text-gray_text text-[8px] sm:text-base">
                            {FOOTER.name}
                        </h2>
                        <h2 className="text-gray_text text-[8px] sm:text-base">
                            {FOOTER.instagram}
                        </h2>
                        <h2 className="text-gray_text text-[8px] sm:text-base">
                            {FOOTER.telegram}
                        </h2>
                    </div>
                </div>
            </div>
            <div className="flex justify-center border-t-[0.25px] border-gray_text py-[20px] sm:py-8">
                <h2 className="text-[8px] sm:text-base leading-5 text-gray_text">
                    2024 Compass. Все Права Защищены.
                </h2>
            </div>
        </div>
    );
};
