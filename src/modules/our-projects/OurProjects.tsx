import Image from "next/image";
import { FC } from "react";

export const OurProjects: FC = () => {
    // const {data} = useQuery<GetProjects[]>({
    //             queryKey: [`projects`],
    //             queryFn: async () => {
    //                 const { data } = await axios.get("/user/profile");
    //                 return data;
    //             },
    //         });
    return (
        <div className="bg-gray flex flex-col gap-5 sm:gap-10 py-10 sm:py-20 px-[25px] sm:px-[146px] text-black">
            <h2 className="text-[15px] sm:text-[32px] font-medium leading-[130%]">
                Наши Проекты
            </h2>
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-[10px]">
                    <h2 className="text-[12px] sm:text-[24px] font-medium leading-[130%]">
                        2021-2022 “5:32” (Salem Social Media)
                    </h2>
                    <h2 className="text-[9px] sm:text-[18px] font-medium leading-[130%]">
                        В главных ролях:{" "}
                        <span className="text-[#6E9CF2]">
                            Абильмансур Сериков
                        </span>
                    </h2>
                </div>
                <Image
                    src={"/images/532banner.png"}
                    width={380}
                    height={190}
                    alt="5:32"
                    className="w-[380px] h-[190px] sm:w-[1148px] sm:h-[550px] rounded-[9px] "
                    style={{ objectFit: "cover", objectPosition: "center" }}
                />
            </div>
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-[10px]">
                    <h2 className="text-[12px] sm:text-[24px] font-medium leading-[130%]">
                        2021-2022 “5:32” (Salem Social Media)
                    </h2>
                    <h2 className="text-[9px] sm:text-[18px] font-medium leading-[130%]">
                        В главных ролях:{" "}
                        <span className="text-[#6E9CF2]">
                            Абильмансур Сериков
                        </span>
                    </h2>
                </div>
                <Image
                    src={"/images/532banner.png"}
                    width={380}
                    height={190}
                    alt="5:32"
                    className="w-[380px] h-[190px] sm:w-[1148px] sm:h-[550px] rounded-[9px] "
                    style={{ objectFit: "cover", objectPosition: "center" }}
                />
            </div>
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-[10px]">
                    <h2 className="text-[12px] sm:text-[24px] font-medium leading-[130%]">
                        2021-2022 “5:32” (Salem Social Media)
                    </h2>
                    <h2 className="text-[9px] sm:text-[18px] font-medium leading-[130%]">
                        В главных ролях:{" "}
                        <span className="text-[#6E9CF2]">
                            Абильмансур Сериков
                        </span>
                    </h2>
                </div>
                <Image
                    src={"/images/532banner.png"}
                    width={380}
                    height={190}
                    alt="5:32"
                    className="w-[380px] h-[190px] sm:w-[1148px] sm:h-[550px] rounded-[9px] "
                    style={{ objectFit: "cover", objectPosition: "center" }}
                />
            </div>
        </div>
    );
};
