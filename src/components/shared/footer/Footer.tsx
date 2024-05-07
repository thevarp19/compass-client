import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { FOOTER } from "./string";

export const Footer: FC = () => {
    return (
        <div className="bg-primary border-t-[0.25px] border-gray_text">
            <div className="flex justify-center pt-12 pb-[88px]">
                <div className="flex gap-[170px] items-center">
                    <div className="max-w-[167px] flex flex-col gap-[50px]">
                        <h2 className="text-white text-2xl font-semibold">
                            {FOOTER.name}
                        </h2>
                        <h3 className="text-gray_text">{FOOTER.description}</h3>
                        <div className="flex gap-5">
                            <Image
                                src="/icons/telegram.svg"
                                width={30}
                                height={30}
                                alt="telegram"
                            />
                            <Image
                                src="/icons/instagram.svg"
                                width={30}
                                height={30}
                                alt="instagram"
                            />
                            <Image
                                src="/icons/linkedin.svg"
                                width={30}
                                height={30}
                                alt="linkedin"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h2 className="text-white">{FOOTER.navigation}</h2>
                        <Link href="/actors" className="text-gray_text">
                            {FOOTER.actors}
                        </Link>
                        <Link href="/our-projects" className="text-gray_text">
                            {FOOTER.our_project}
                        </Link>
                        <Link href="/about-us" className="text-gray_text">
                            {" "}
                            {FOOTER.about_us}
                        </Link>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h2 className="text-white">
                            {FOOTER.for_casting_directors}
                        </h2>
                        <div className="flex flex-col gap-[15px]">
                            <h2 className="flex gap-[25px] text-gray_text">
                                <span>
                                    <Image
                                        src="/icons/phone.svg"
                                        width={20}
                                        height={20}
                                        alt="phone"
                                    />
                                </span>
                                +8-(800)-555-3535
                            </h2>
                            <h2 className="flex gap-[25px] text-gray_text">
                                <span>
                                    <Image
                                        src="/icons/envelope.svg"
                                        width={20}
                                        height={20}
                                        alt="envelope"
                                    />
                                </span>
                                info@compass.com
                            </h2>
                            <h2 className="flex gap-[25px] text-gray_text">
                                <span>
                                    <Image
                                        src="/icons/telegram.svg"
                                        width={20}
                                        height={20}
                                        alt="telegram"
                                    />
                                </span>
                                @compasskz
                            </h2>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h2 className="text-white">{FOOTER.for_parents}</h2>
                        <h2 className="text-gray_text">{FOOTER.name}</h2>
                        <h2 className="text-gray_text">{FOOTER.instagram}</h2>
                        <h2 className="text-gray_text">{FOOTER.telegram}</h2>
                    </div>
                </div>
            </div>
            <div className="flex justify-center border-t-[0.25px] border-gray_text py-8">
                <h2 className="text-base leading-5 text-gray_text">
                    2024 Compass. Все Права Защищены.
                </h2>
            </div>
        </div>
    );
};
