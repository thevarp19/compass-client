import Image from "next/image";
import { FC } from "react";

export const OurProjects: FC = () => {
    return (
        <div className="bg-gray flex flex-col gap-10 px-[146px] py-[60px] text-black">
            <h2 className="text-[32px] font-medium leading-[130%]">
                Наши Проекты
            </h2>
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-[10px]">
                    <h2 className="text-[24px] font-medium leading-[130%]">
                        2021-2022 “5:32” (Salem Social Media)
                    </h2>
                    <h2 className="text-[18px] font-medium leading-[130%]">
                        В главных ролях:{" "}
                        <span className="text-[#6E9CF2]">
                            Абильмансур Сериков
                        </span>
                    </h2>
                </div>
                <Image
                    src={"/images/532banner.png"}
                    width={1148}
                    height={550}
                    alt="5:32"
                    className="w-[1148px] h-[550px] rounded-[9px] "
                    style={{ objectFit: "cover", objectPosition: "center" }}
                />
            </div>
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-[10px]">
                    <h2 className="text-[24px] font-medium leading-[130%]">
                        2021-2022 “5:32” (Salem Social Media)
                    </h2>
                    <h2 className="text-[18px] font-medium leading-[130%]">
                        В главных ролях:{" "}
                        <span className="text-[#6E9CF2]">
                            Абильмансур Сериков
                        </span>
                    </h2>
                </div>
                <Image
                    src={"/images/532banner.png"}
                    width={1148}
                    height={550}
                    alt="5:32"
                    className="w-[1148px] h-[550px] rounded-[9px] "
                    style={{ objectFit: "cover", objectPosition: "center" }}
                />
            </div>
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-[10px]">
                    <h2 className="text-[24px] font-medium leading-[130%]">
                        2021-2022 “5:32” (Salem Social Media)
                    </h2>
                    <h2 className="text-[18px] font-medium leading-[130%]">
                        В главных ролях:{" "}
                        <span className="text-[#6E9CF2]">
                            Абильмансур Сериков
                        </span>
                    </h2>
                </div>
                <Image
                    src={"/images/532banner.png"}
                    width={1148}
                    height={550}
                    alt="5:32"
                    className="w-[1148px] h-[550px] rounded-[9px] "
                    style={{ objectFit: "cover", objectPosition: "center" }}
                />
            </div>
        </div>
    );
};
