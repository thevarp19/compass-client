import { useLanguage } from "@/context/LanguageProvider";
import { Spin } from "antd";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { useGetActors } from "../actor/queries";
import { ActorsCarousel } from "../main/Main";

export const AboutUs: FC = () => {
    const { language } = useLanguage();
    const { data: actors, isPending } = useGetActors({
        search: "",
        sortBy: "",
        isCompassActor: true,
        gender: "",
        citizenship: [],
        // specialization: [],
        cityAccommodation: [],
        // legalStatus: [],
        agency: [],
        hairColor: [],
        sport: [],
        dancing: [],
        right: [],
        foreignLanguage: [],
        singing: [],
        musicalInstrument: [],
        hairLength: [],
        eyeColor: [],
        bodyType: [],
        peculiarities: [],
        typeOfAppearance: [],
        nationationality: [],
    });

    return (
        <div>
            <section>
                <MainBanner />
            </section>
            <section>
                {isPending ? (
                    <div>
                        <Spin />
                    </div>
                ) : (
                    <ActorsCarousel
                        title={language.ABOUTUS.compass_actor}
                        actors={actors || []}
                    />
                )}
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
    const { language } = useLanguage();
    return (
        <div className="bg-secondary flex gap-[25px] sm:gap-[140px] justify-center px-[25px] sm:px-[140px] py-[40px] sm:py-[110px]">
            <div className="flex flex-col max-w-[175px] sm:max-w-[424px] justify-between">
                <div className="flex flex-col">
                    {" "}
                    <h2 className="text-white font-semibold text-[20px] sm:text-[48px] flex leading-normal flex-col">
                        {language.MAIN.selection}
                        <span className="underline whitespace-nowrap text-[#6E9CF2]">
                            {language.MAIN.best_actor}
                        </span>
                        {language.MAIN.from_all_world}
                    </h2>
                    <h2 className="text-white text-[8px] sm:text-base">
                        {language.MAIN.inter_platform}
                    </h2>
                </div>
                <div>
                    <button
                        className={`bg-button_color text-[8px] sm:text-base text-white font-bold w-[80px] sm:w-[200px] h-[20px] sm:h-[50px] rounded-lg`}
                    >
                        {language.MAIN.find}
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
    const { language } = useLanguage();
    return (
        <div className="bg-secondary flex flex-col justify-center items-center min-h-[554px]">
            <div className="flex flex-col text-white text-[24px] sm:px-48 sm:text-[52px] font-semibold text-center">
                <h2>{language.ABOUTUS.title}</h2>
            </div>
        </div>
    );
};
const Manifest = () => {
    const { language } = useLanguage();
    return (
        <div className="hidden bg-secondary sm:flex flex-col gap-10 justify-between px-[146px] py-[80px]">
            <div className="flex gap-[144px] text-white">
                <div className="flex flex-col max-w-[502px] min-h-[283px] gap-[10px] ">
                    <h2 className="underline text-[32px] font-medium leading-[130%]">
                        Что такое Compass?
                    </h2>
                    <h2 className="text-gray_text leading-[130%]">
                        Compass - это международная кастинг-платформа и
                        киноагентство, базирующееся в Алматы, Казахстан.
                        Компания занимается подбором лучших актёров со всего
                        мира и помогает им найти роли в киноиндустрии.
                    </h2>
                </div>
                <div className="flex flex-col max-w-[502px] min-h-[283px] gap-[10px]">
                    <h2 className="underline text-[32px] font-medium leading-[130%]">
                        Какие услуги предоставляет Compass?
                    </h2>
                    <h2 className="text-gray_text leading-[130%]">
                        Compass предоставляет услуги по поиску и подбору актёров
                        для различных кинопроектов. Это включает в себя
                        организацию кастингов, создание актёрских портфолио, а
                        также предоставление консультаций и профессиональной
                        поддержки для актёров.
                    </h2>
                </div>
            </div>
            <div className="flex gap-[144px] text-white">
                <div className="flex flex-col max-w-[502px] min-h-[325px] gap-[10px]">
                    <h2 className="underline text-[32px] font-medium leading-[130%]">
                        Как можно стать клиентом агентства Compass?
                    </h2>
                    <h2 className="text-gray_text leading-[130%]">
                        Чтобы стать клиентом агентства Compass, необходимо
                        зарегистрироваться на их официальном сайте. Процесс
                        включает заполнение анкеты с необходимой информацией и
                        отправку заявки через онлайн-форму. После отправки
                        заявки, команда Compass рассмотрит вашу кандидатуру и
                        свяжется с вами для дальнейших шагов.
                    </h2>
                </div>
                <div className="flex flex-col max-w-[502px] min-h-[325px] gap-[10px]">
                    <h2 className="underline text-[32px] font-medium leading-[130%]">
                        Какие проекты поддерживает агентство Compass?
                    </h2>
                    <h2 className="text-gray_text leading-[130%]">
                        Агентство Compass работает с широким спектром проектов,
                        включая фильмы, телесериалы, рекламные ролики и
                        театральные постановки. Компания сотрудничает как с
                        местными, так и с международными продюсерами и
                        режиссёрами, предоставляя актёров для различных жанров и
                        форматов.
                    </h2>
                </div>
            </div>
        </div>
    );
};

const OurProjects = () => {
    const { language, getHref } = useLanguage();
    return (
        <div className="bg-secondary flex flex-col gap-10 justify-between py-10 sm:py-20 px-[25px] sm:px-[146px]">
            <div className="flex justify-between">
                <h2 className="text-white text-[15px] sm:text-[32px] font-medium leading-[130%]">
                    {language.PROJECTS.our_projects}
                </h2>
                <Link
                    href={getHref("our-projects")}
                    className="text-[#6E9CF2] text-[10px] sm:text-[18px] font-medium leading-[130%] cursor-pointer"
                >
                    {language.PROJECTS.showAll}
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
