import { Actor } from "@/types/actor";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { ActorsCarousel } from "../main/Main";
import { ABOUTUS } from "./string";

export const AboutUs: FC = () => {
    const popularActors: Actor[] = [
        {
            id: 1,
            name: "Абильмансур Сериков",
            age: "32",
            imageUrl: "/images/mansur.png",
        },
        {
            id: 2,
            name: "Данияр Алшинов",
            age: "36",
            imageUrl: "/images/daniar.png",
        },
        {
            id: 3,
            name: "Берик Айтжанов",
            age: "45",
            imageUrl: "/images/berik.png",
        },
        {
            id: 4,
            name: "Куралай Анарбекова",
            age: "34",
            imageUrl: "/images/kuralay.png",
        },
        {
            id: 5,
            name: "Динара Бактыбаева",
            age: "30",
            imageUrl: "/images/dinara.png",
        },
    ];
    return (
        <div>
            <section>
                <MainBanner />
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
        <div className="bg-secondary flex flex-col gap-10 justify-between px-[146px] py-[80px]">
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
        <div className="bg-secondary flex flex-col gap-10 justify-between px-[146px] py-[80px]">
            <div className="flex justify-between">
                <h2 className="text-white text-[32px] font-medium leading-[130%]">
                    Наши проекты
                </h2>
                <Link
                    href="our-projects"
                    className="text-[#6E9CF2] text-[18px] font-medium leading-[130%] cursor-pointer"
                >
                    Смотреть Всё
                </Link>
            </div>
            <div className="relative">
                <Image
                    src={"/images/532banner.png"}
                    width={1148}
                    height={500}
                    alt="actor"
                    className="w-[1148px] h-[500px] rounded-[9px] "
                    style={{ objectFit: "cover", objectPosition: "center" }}
                />
                <div className="absolute flex flex-col justify-center bottom-0 left-0 h-[134px] z-10 rounded-b-[9px] bg-gradient-to-r-gray">
                    <h2 className="text-white text-5xl font-medium leading-[130%] ps-5">
                        2021-2022 “5:32” (Salem Social Media)
                    </h2>
                    <h2 className="text-white text-4xl font-medium leading-[130%] ps-5">
                        В главных ролях: Абильмансур Сериков
                    </h2>
                </div>
            </div>
        </div>
    );
};
