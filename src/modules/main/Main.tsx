"use client";
import { Loading } from "@/components/shared/loading/Loading";
import { useLanguage } from "@/context/LanguageProvider";
import { Actor } from "@/types/actor";
import Image from "next/image";
import Link from "next/link";
import { FC, useRef } from "react";
import { ActorCard } from "../actor/components/actorCard/ActorCard";
import { useGetActors } from "../actor/queries";

export const Main: FC = () => {
    const { language } = useLanguage();

    const { data: actors, isPending } = useGetActors({
        search: "",
        sortBy: "",
        isCompassActor: undefined,
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
        nationality: [],
    });

    if (isPending) {
        return <Loading className="h-screen w-screen" />;
    }
    return (
        <main>
            <section>
                <MainBanner />
            </section>
            <section>
                <ActorsCarousel
                    title={language.MAIN.popular}
                    actors={actors || []}
                />
            </section>
            <section>
                <Questionnaire />
            </section>
            <section>
                <CreateProfilePart />
            </section>
            <section>
                <FAQ />
            </section>
        </main>
    );
};
const MainBanner = () => {
    const { language, getHref } = useLanguage();
    return (
        <div className="relative flex gap-[25px] sm:gap-[140px]  ">
            <div className="absolute -z-10 ">
                <Image
                    src="/images/mainBanner.jpeg"
                    width={1024}
                    height={960}
                    style={{ objectFit: "cover" }}
                    className="w-screen sm:h-[1060px] h-[300px]"
                    alt=""
                />
            </div>
            <div className="flex py-[40px] justify-center sm:py-[110px]  px-[25px] sm:px-[140px] w-full sm:gap-40">
                <div className="flex flex-col max-w-[175px] sm:max-w-[424px] justify-between gap-5 sm:gap-0 ">
                    <div className="flex flex-col ">
                        {" "}
                        <h2 className="text-white font-semibold text-[20px] sm:text-[42px] flex leading-normal flex-col">
                            {language.MAIN.selection}
                            <span className=" whitespace-nowrap">
                                {language.MAIN.best_actor}
                            </span>
                            {language.MAIN.from_all_world}
                        </h2>
                        <h2 className="text-white text-[8px] sm:text-base">
                            {language.MAIN.inter_platform}
                        </h2>
                    </div>
                    <div className="sm:mt-24">
                        <Link href={getHref("/actors")}>
                            <button
                                className={`bg-button_color text-[8px] sm:text-base text-white font-bold w-[80px] sm:w-[200px] h-[20px] sm:h-[50px] rounded-lg`}
                            >
                                {language.MAIN.find}
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="flex items-center">
                    <Image
                        src="/icons/mainLogo.png"
                        width={483}
                        height={85}
                        className="w-auto h-[40px] sm:w-[483px] sm:h-[85px] "
                        alt="logo"
                    />
                </div>
            </div>
        </div>
    );
};

export const ActorsCarousel: FC<{ actors: Actor[]; title: string }> = ({
    actors,
    title,
}) => {
    const { getHref } = useLanguage();
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -200,
                behavior: "smooth",
            });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 200,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="bg-primary py-10 sm:py-20 px-[25px] sm:px-[146px] flex flex-col gap-[20px] sm:gap-[50px]">
            <div className="flex justify-between">
                <h2 className="text-[15px] sm:text-[32px] leading-[130%] text-white">
                    {title}
                </h2>
                <div className="flex gap-5">
                    <button onClick={scrollLeft}>
                        <Image
                            src={"/icons/left.svg"}
                            width={40}
                            height={40}
                            alt="left"
                            className="w-[20px] h-[20px] sm:w-[40px] sm:h-[40px]"
                            style={{ objectFit: "cover" }}
                        />
                    </button>
                    <button onClick={scrollRight}>
                        <Image
                            src={"/icons/right.svg"}
                            width={40}
                            height={40}
                            alt="right"
                            className="w-[20px] h-[20px] sm:w-[40px] sm:h-[40px]"
                            style={{ objectFit: "cover" }}
                        />
                    </button>
                </div>
            </div>
            <div
                ref={scrollContainerRef}
                className="flex gap-[20px] sm:gap-[37px] overflow-x-scroll min-w-[290px] sm:min-w-auto min-h-[100px] sm:min-h-[250px]"
            >
                {actors.map((actor, index) => (
                    <Link
                        className="mb-1 sm:mb-2"
                        key={index}
                        href={getHref(`/actors/${actor.id}`)}
                    >
                        <ActorCard actor={actor} />
                    </Link>
                ))}
            </div>
        </div>
    );
};
const Questionnaire = () => {
    const { language, getHref } = useLanguage();
    return (
        <div className="bg-secondary flex sm:flex-row flex-col gap-5 sm:gap-[140px] sm:items-start items-center justify-center py-10 sm:py-20 px-[25px] sm:px-[146px]">
            <div className="flex flex-col justify-between gap-10 sm:gap-[80px] sm:max-w-[543px]">
                <div className="flex flex-col gap-10 font-semibold">
                    <div className="text-white text-xl sm:text-4xl leading-[130%]">
                        {language.MAIN.for_actor}
                    </div>

                    <div className="flex justify-between w-full">
                        <div className="flex flex-col gap-[5px] w-full">
                            <h2 className="text-white text-base sm:text-2xl leading-[130%]">
                                {" "}
                                {language.PROMO_SECTION.promo}
                            </h2>
                            <h2 className="text-gray_text text-[12px] sm:text-base leading-[130%] max-w-[250px] sm:max-w-[450px]">
                                {language.PROMO_SECTION.promoDescription}
                            </h2>{" "}
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <Link href={getHref("/auth/registration")}>
                        <button
                            className={`bg-button_color text-[10px] sm:text-base text-white font-bold w-[120px] h-[25px] sm:w-[240px] sm:h-[50px] rounded-[3px]`}
                        >
                            {language.MAIN.registration}
                        </button>
                    </Link>
                </div>
            </div>

            <div className="flex">
                <Image
                    src="/images/films-photo.png"
                    width={170}
                    height={183}
                    className="w-[200px] h-[183px] sm:w-[400px] sm:h-[394px]"
                    alt="film"
                    style={{ objectFit: "contain" }}
                />
            </div>
        </div>
    );
};
const CreateProfilePart = () => {
    const { language, getHref } = useLanguage();
    return (
        <div className="bg-secondary flex sm:flex-row flex-col-reverse gap-10 sm:gap-[140px] justify-between py-10 sm:py-20 px-[25px] sm:px-[146px]">
            <div className="flex justify-center">
                <Image
                    src="/images/people.png"
                    width={400}
                    height={400}
                    className="w-[200px] h-[200px] sm:w-[450px] sm:h-[450px]"
                    alt="people"
                />
            </div>
            <div className="flex flex-col justify-between max-w-[511px] sm:gap-0 gap-10">
                <div className="flex flex-col gap-5 font-semibold">
                    <div className="text-white text-4xl leading-[130%]">
                        {language.MAIN.for_casting}
                    </div>

                    <div className="flex flex-col gap-[10px]">
                        <h2 className="text-white text-2xl leading-[130%]">
                            {language.MAIN.actor_list}
                        </h2>
                        <h2 className="text-gray_text leading-[130%]">
                            {language.MAIN.use_search}
                        </h2>
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <h2 className="text-white text-2xl leading-[130%]">
                            {language.MAIN.actual_info}
                        </h2>
                        <h2 className="text-gray_text leading-[130%]">
                            {language.MAIN.refresh_info}
                        </h2>
                    </div>
                </div>
                <div className="flex justify-center sm:justify-end">
                    <Link href={getHref("profile")}>
                        <button
                            className={`bg-button_color text-base text-white font-bold w-[240px] h-[50px] rounded-lg`}
                        >
                            {language.MAIN.create_profile}
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

const FAQ = () => {
    const { language } = useLanguage();
    return (
        <div className="bg-primary flex flex-col gap-10 sm:gap-20 py-10 sm:py-20 px-[25px] sm:px-[146px]">
            <div className="flex flex-col gap-10">
                <h2 className="text-white text-[15px] sm:text-[32px] font-medium leading-[130%]">
                    {language.MAIN.faq}
                </h2>
                <div className="flex gap-[10px] sm:gap-[50px]">
                    <div className="bg-button_color w-[120px] h-[120px] sm:w-[350px] sm:h-[350px] rounded-[10px] p-[7px] sm:p-5 flex flex-col gap-[10px] sm:gap-[30px] overflow-clip">
                        <h2 className="text-white text-[8px] sm:text-2xl leading-[130%] font-medium">
                            {language.INFO_SECTION.section1.title}
                        </h2>
                        <h2 className="text-gray text-[6px] sm:text-base leading-[130%] font-medium">
                            {language.INFO_SECTION.section1.description}
                        </h2>
                    </div>
                    <div className="bg-button_color w-[120px] h-[120px] sm:w-[350px] sm:h-[350px] rounded-[10px] p-[7px] sm:p-5 flex flex-col gap-[10px] sm:gap-[30px] overflow-clip">
                        <h2 className="text-white text-[6px] sm:text-2xl leading-[130%] font-medium">
                            {language.INFO_SECTION.section2.title}
                        </h2>
                        <h2 className="text-gray text-[6px] sm:text-base leading-[130%] font-medium">
                            {language.INFO_SECTION.section2.description}
                        </h2>
                    </div>
                    <div className="bg-button_color w-[120px] h-[120px] sm:w-[350px] sm:h-[350px] rounded-[10px] p-[7px] sm:p-5 flex flex-col gap-[10px] sm:gap-[30px] overflow-clip">
                        <h2 className="text-white text-[8px] sm:text-2xl leading-[130%] font-medium">
                            {language.INFO_SECTION.section3.title}
                        </h2>
                        <h2 className="text-gray text-[6px] sm:text-base leading-[130%] font-medium">
                            {language.INFO_SECTION.section3.description}
                        </h2>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-[10px] sm:gap-[30px] items-center">
                <h2 className="text-white text-[15px] sm:text-[32px] font-medium leading-[130%]">
                    {language.MAIN.any_questions}
                </h2>
                <Link href="https://wa.me/+77013468959">
                    <button
                        className={`bg-button_color text-[8px] sm:text-base text-white font-bold w-[90px] sm:w-[240px] h-[20px] sm:h-[50px] rounded-[3px]`}
                    >
                        {language.MAIN.ask_question}
                    </button>
                </Link>
            </div>
        </div>
    );
};
