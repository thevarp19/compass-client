import { Actor } from "@/types/actor";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { ActorsCarousel } from "../main/Main";
import { MAIN } from "../main/string";
import { ABOUTUS } from "./string";

export const AboutUs: FC = () => {
    const popularActors: Actor[] = [
        {
            id: 1,
            firstName: "Абильмансур Сериков",
            age: 32,
            avatar: "/images/mansur.png",
            isCompassActor: false,
            lastName: "",
            thirdName: "",
            educations: [],
            movies: [],
        },
        {
            id: 2,
            firstName: "Данияр Алшинов",
            age: 32,
            avatar: "/images/daniar.png",
            isCompassActor: false,
            lastName: "",
            thirdName: "",
            educations: [],
            movies: [],
        },
        {
            id: 3,
            firstName: "Берик Айтжанов",
            age: 32,
            avatar: "/images/berik.png",
            isCompassActor: false,
            lastName: "",
            thirdName: "",
            educations: [],
            movies: [],
        },
        {
            id: 4,
            firstName: "Куралай Анарбекова",
            age: 32,
            avatar: "/images/kuralay.png",
            isCompassActor: false,
            lastName: "",
            thirdName: "",
            educations: [],
            movies: [],
        },
        {
            id: 5,
            firstName: "Динара Бактыбаева",
            age: 32,
            avatar: "/images/dinara.png",
            isCompassActor: false,
            lastName: "",
            thirdName: "",
            educations: [],
            movies: [],
        },
    ];
    return (
        <div>
            <section>
                <MainBanner2 />
            </section>
            <section>
                <ActorsCarousel
                    title={ABOUTUS.compass_actor}
                    actors={popularActors}
                />
            </section>
            <section>
                <Manifest />
            </section>
            <section>
                <OurProjects />
            </section>
        </div>
    );
};

const MainBanner2 = () => {
    return (
        <div className="bg-secondary flex gap-[25px] sm:gap-[140px] justify-center px-[25px] sm:px-[140px] py-[40px] sm:py-[110px]">
            <div className="flex flex-col max-w-[175px] sm:max-w-[424px] justify-between">
                <div className="flex flex-col">
                    {" "}
                    <h2 className="text-white font-semibold text-[20px] sm:text-[48px] flex leading-normal flex-col">
                        {MAIN.selection}
                        <span className="underline whitespace-nowrap text-[#6E9CF2]">
                            {MAIN.best_actor}
                        </span>
                        {MAIN.from_all_world}
                    </h2>
                    <h2 className="text-white text-[8px] sm:text-base">
                        {MAIN.inter_platform}
                    </h2>
                </div>
                <div>
                    <button
                        className={`bg-button_color text-[8px] sm:text-base text-white font-bold w-[80px] sm:w-[200px] h-[20px] sm:h-[50px] rounded-lg`}
                    >
                        {MAIN.find}
                    </button>
                </div>
            </div>
            <div className="flex ">
                <Image
                    src="/images/Illustration1.png"
                    width={180}
                    height={157}
                    className="w-[180px] h-[157px] sm:w-[590px] sm:h-[463px]"
                    alt="Illustration1"
                />
            </div>
        </div>
    );
};
const MainBanner = () => {
    return (
        <div className="bg-secondary flex flex-col justify-center items-center min-h-[554px]">
            <div className="flex flex-col text-white text-[52px] font-semibold text-center">
                <h2>
                    {ABOUTUS.title}
                    <span className="text-[#6E9CF2] underline">
                        {ABOUTUS.compass}
                    </span>
                </h2>
                <div className="w-[516px] text-center">{ABOUTUS.some_text}</div>
            </div>
        </div>
    );
};
const Manifest = () => {
    return (
        <div className="hidden bg-secondary sm:flex flex-col gap-10 justify-between px-[146px] py-[80px]">
            <div className="flex gap-[144px] text-white">
                <div className="flex flex-col max-w-[502px] min-h-[283px] gap-[10px] ">
                    <h2 className="underline text-[32px] font-medium leading-[130%]">
                        What is Lorem Ipsum?
                    </h2>
                    <h2 className="text-gray_text leading-[130%]">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                    </h2>
                </div>
                <div className="flex flex-col max-w-[502px] min-h-[283px] gap-[10px]">
                    <h2 className="underline text-[32px] font-medium leading-[130%]">
                        Why do we use it?
                    </h2>
                    <h2 className="text-gray_text leading-[130%]">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look like readable English. Many
                        desktop publishing packages and web page editors now use
                        Lorem Ipsum as their default model text, and a search
                        for 'lorem ipsum' will uncover many web sites still in
                        their infancy. Various versions have evolved over the
                        years, sometimes by accident, sometimes on purpose
                        (injected humour and the like).
                    </h2>
                </div>
            </div>
            <div className="flex gap-[144px] text-white">
                <div className="flex flex-col max-w-[502px] min-h-[325px] gap-[10px]">
                    <h2 className="underline text-[32px] font-medium leading-[130%]">
                        Where does it come from?
                    </h2>
                    <h2 className="text-gray_text leading-[130%]">
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, making it over 2000 years old.
                        Richard McClintock, a Latin professor at Hampden-Sydney
                        College in Virginia, looked up one of the more obscure
                        Latin words, consectetur, from a Lorem Ipsum passage,
                        and going through the cites of the word in classical
                        literature, discovered the undoubtable source. Lorem
                        Ipsum comes from sections 1.10.32 and 1.10.33 of "de
                        Finibus Bonorum et Malorum" (The Extremes of Good and
                        Evil) by Cicero, written in 45 BC. This book is a
                        treatise on the theory of ethics, very popular during
                        the Renaissance. The first line of Lorem Ipsum, "Lorem
                        ipsum dolor sit amet..", comes from a line in section
                        1.10.32.
                    </h2>
                </div>
                <div className="flex flex-col max-w-[502px] min-h-[325px] gap-[10px]">
                    <h2 className="underline text-[32px] font-medium leading-[130%]">
                        Where can I get some?
                    </h2>
                    <h2 className="text-gray_text leading-[130%]">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures, to generate Lorem
                        Ipsum which looks reasonable. The generated Lorem Ipsum
                        is therefore always free from repetition, injected
                        humour, or non-characteristic words etc.
                    </h2>
                </div>
            </div>
        </div>
    );
};

const OurProjects = () => {
    return (
        <div className="bg-secondary flex flex-col gap-10 justify-between py-10 sm:py-20 px-[25px] sm:px-[146px]">
            <div className="flex justify-between">
                <h2 className="text-white text-[15px] sm:text-[32px] font-medium leading-[130%]">
                    Наши проекты
                </h2>
                <Link
                    href="our-projects"
                    className="text-[#6E9CF2] text-[10px] sm:text-[18px] font-medium leading-[130%] cursor-pointer"
                >
                    Смотреть Всё
                </Link>
            </div>
            <div className="relative">
                <Image
                    src={"/images/532banner.png"}
                    width={380}
                    height={190}
                    alt="actor"
                    className="w-[380px] h-[190px] sm:w-[1148px] sm:h-[500px] rounded-[9px] "
                    style={{ objectFit: "cover", objectPosition: "center" }}
                />
                <div className="absolute flex flex-col justify-center bottom-0 left-0 h-[50px] sm:h-[134px] z-10 rounded-b-[9px] bg-gradient-to-r-gray">
                    <h2 className="text-white text-base sm:text-5xl font-medium leading-[130%] ps-5">
                        2021-2022 “5:32” (Salem Social Media)
                    </h2>
                    <h2 className="text-white text-[10px] sm:text-4xl font-medium leading-[130%] ps-5">
                        В главных ролях: Абильмансур Сериков
                    </h2>
                </div>
            </div>
        </div>
    );
};
