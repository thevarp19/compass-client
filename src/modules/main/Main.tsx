import { Actor } from "@/types/actor";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { ActorCard } from "../actor/components/actorCard/ActorCard";
import { MAIN } from "./string";

export const Main: FC = () => {
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
        <main>
            <section>
                <MainBanner />
            </section>
            <section>
                <ActorsCarousel title={MAIN.popular} actors={popularActors} />
            </section>
            <section>
                <Questionnaire />
            </section>
            <section>{/* <CreateProfilePart /> */}</section>
            <section>
                <FAQ />
            </section>
        </main>
    );
};
const MainBanner = () => {
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

export const ActorsCarousel: FC<{ actors: Actor[]; title: string }> = ({
    actors,
    title,
}) => {
    return (
        <div className="bg-primary py-10 sm:py-20 px-[25px] sm:px-[146px] flex flex-col gap-[40px] sm:gap-[50px]">
            <div className="flex justify-between">
                <h2 className="text-[15px] sm:text-[32px] leading-[130%] text-white">
                    {title}
                </h2>
                <div className="flex gap-5">
                    <Image
                        src={"/icons/left.svg"}
                        width={40}
                        height={40}
                        alt="left"
                        className="w-[20px] h-[20px] sm:w-[40px] sm:h-[40px] "
                        style={{ objectFit: "cover" }}
                    />
                    <Image
                        src={"/icons/right.svg"}
                        width={40}
                        height={40}
                        alt="actor"
                        className="w-[20px] h-[20px] sm:w-[40px] sm:h-[40px] "
                        style={{ objectFit: "cover" }}
                    />
                </div>
            </div>
            <div className="flex gap-[20px] sm:gap-[37px] overflow-x-scroll min-w-[290px] sm:min-w-auto">
                {actors.map((actor, index) => (
                    <ActorCard key={index} actor={actor} />
                ))}
            </div>
        </div>
    );
};
const Questionnaire = () => {
    return (
        <div className="bg-secondary flex gap-5 sm:gap-[140px] justify-center py-10 sm:py-20 px-[25px] sm:px-[146px]">
            <div className="flex flex-col justify-between gap-10 sm:gap-[80px] max-w-[190px] sm:max-w-[543px]">
                <div className="flex flex-col gap-10 font-semibold">
                    <div className="text-white text-[15px] sm:text-4xl leading-[130%]">
                        {MAIN.for_actor}
                    </div>

                    <div className="flex justify-between w-full">
                        <div className="flex flex-col gap-[5px] w-full">
                            <h2 className="text-white text-[12px] sm:text-2xl leading-[130%]">
                                Промо
                            </h2>
                            <h2 className="text-gray_text text-[6px] sm:text-base leading-[130%]">
                                Размещение в главном сервисе киноиндустрии
                            </h2>
                        </div>
                        <div className="flex flex-col gap-[5px] w-full">
                            <h2 className="text-white text-[12px] sm:text-2xl leading-[130%]">
                                3000+
                            </h2>
                            <h2 className="text-gray_text text-[6px] sm:text-base leading-[130%]">
                                Поисковых запросов в базе ежемесечно
                            </h2>
                        </div>
                    </div>
                    <div className="flex justify-between w-full">
                        <div className="flex flex-col gap-[5px] w-full">
                            <h2 className="text-white text-[12px] sm:text-2xl leading-[130%]">
                                200+
                            </h2>
                            <h2 className="text-gray_text text-[6px] sm:text-base leading-[130%]">
                                Проектов работает в Compass ежедневно
                            </h2>
                        </div>
                        <div className="flex flex-col gap-[5px] w-full">
                            <h2 className="text-white text-[12px] sm:text-2xl leading-[130%]">
                                5000+
                            </h2>
                            <h2 className="text-gray_text text-[6px] sm:text-base leading-[130%]">
                                Проектов были сняты
                            </h2>
                        </div>
                    </div>
                </div>
                <div>
                    <button
                        className={`bg-button_color text-[8px] sm:text-base text-white font-bold w-[80px] h-[20px] sm:w-[240px] sm:h-[50px] rounded-[3px]`}
                    >
                        {MAIN.registration}
                    </button>
                </div>
            </div>

            <div className="flex">
                <Image
                    src="/images/Illustration2.png"
                    width={170}
                    height={183}
                    className="w-[170px] h-[183px] sm:w-[400px] sm:h-[394px]"
                    alt="Illustration1"
                    style={{ objectFit: "contain" }}
                />
            </div>
        </div>
    );
};
const CreateProfilePart = () => {
    return (
        <div className="bg-secondary flex gap-[140px] justify-between py-10 sm:py-20 px-[25px] sm:px-[146px]">
            <div className="flex">
                <Image
                    src="/images/Illustration3.png"
                    width={400}
                    height={400}
                    className="w-[400px] h-[400px]"
                    alt="Illustration1"
                />
            </div>
            <div className="flex flex-col justify-between max-w-[511px]">
                <div className="flex flex-col gap-5 font-semibold">
                    <div className="text-white text-4xl leading-[130%]">
                        {MAIN.for_casting}
                    </div>

                    <div className="flex flex-col gap-[10px]">
                        <h2 className="text-white text-2xl leading-[130%]">
                            {MAIN.actor_list}
                        </h2>
                        <h2 className="text-gray_text leading-[130%]">
                            {MAIN.use_search}
                        </h2>
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <h2 className="text-white text-2xl leading-[130%]">
                            {MAIN.actual_info}
                        </h2>
                        <h2 className="text-gray_text leading-[130%]">
                            {MAIN.refresh_info}
                        </h2>
                    </div>
                </div>
                <div className="flex justify-end">
                    <Link href="profile">
                        <button
                            className={`bg-button_color text-base text-white font-bold w-[240px] h-[50px] rounded-lg`}
                        >
                            {MAIN.create_profile}
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

const FAQ = () => {
    return (
        <div className="bg-primary flex flex-col gap-10 sm:gap-20 py-10 sm:py-20 px-[25px] sm:px-[146px]">
            <div className="flex flex-col gap-10">
                <h2 className="text-white text-[15px] sm:text-[32px] font-medium leading-[130%]">
                    {MAIN.faq}
                </h2>
                <div className="flex gap-[10px] sm:gap-[50px]">
                    <div className="bg-button_color w-[120px] h-[120px] sm:w-[350px] sm:h-[350px] rounded-[10px] p-[7px] sm:p-5 flex flex-col gap-[10px] sm:gap-[30px] overflow-clip">
                        <h2 className="text-white text-[8px] sm:text-2xl leading-[130%] font-medium">
                            {MAIN.who_see_contact}
                        </h2>
                        <h2 className="text-gray text-[6px] sm:text-base leading-[130%] font-medium">
                            {MAIN.contact_info}
                        </h2>
                    </div>
                    <div className="bg-button_color w-[120px] h-[120px] sm:w-[350px] sm:h-[350px] rounded-[10px] p-[7px] sm:p-5 flex flex-col gap-[10px] sm:gap-[30px] overflow-clip">
                        <h2 className="text-white text-[8px] sm:text-2xl leading-[130%] font-medium">
                            {MAIN.who_see_contact}
                        </h2>
                        <h2 className="text-gray text-[6px] sm:text-base leading-[130%] font-medium">
                            {MAIN.contact_info}
                        </h2>
                    </div>
                    <div className="bg-button_color w-[120px] h-[120px] sm:w-[350px] sm:h-[350px] rounded-[10px] p-[7px] sm:p-5 flex flex-col gap-[10px] sm:gap-[30px] overflow-clip">
                        <h2 className="text-white text-[8px] sm:text-2xl leading-[130%] font-medium">
                            {MAIN.who_see_contact}
                        </h2>
                        <h2 className="text-gray text-[6px] sm:text-base leading-[130%] font-medium">
                            {MAIN.contact_info}
                        </h2>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-[10px] sm:gap-[30px] items-center">
                <h2 className="text-white text-[15px] sm:text-[32px] font-medium leading-[130%]">
                    {MAIN.any_questions}
                </h2>
                <button
                    className={`bg-button_color text-[8px] sm:text-base text-white font-bold w-[90px] sm:w-[240px] h-[20px] sm:h-[50px] rounded-[3px]`}
                >
                    {MAIN.ask_question}
                </button>
            </div>
        </div>
    );
};
