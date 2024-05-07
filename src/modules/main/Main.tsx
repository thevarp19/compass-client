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
    return (
        <div className="bg-secondary flex gap-[140px] justify-center px-[140px] py-[110px]">
            <div className="flex flex-col max-w-[424px] justify-between">
                <div className="flex flex-col">
                    {" "}
                    <h2 className="text-white font-semibold text-[48px] flex leading-normal flex-col">
                        {MAIN.selection}
                        <span className="underline whitespace-nowrap text-[#6E9CF2]">
                            {MAIN.best_actor}
                        </span>
                        {MAIN.from_all_world}
                    </h2>
                    <h2 className="text-white">{MAIN.inter_platform}</h2>
                </div>
                <div>
                    <button
                        className={`bg-button_color text-base text-white font-bold w-[200px] h-[50px] rounded-lg`}
                    >
                        {MAIN.find}
                    </button>
                </div>
            </div>
            <div className="flex">
                <Image
                    src="/images/Illustration1.png"
                    width={590}
                    height={463}
                    className="w-[590px] h-[463px]"
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
        <div className="bg-primary py-20 px-[146px] flex flex-col gap-[50px]">
            <div className="flex justify-between">
                <h2 className="text-[32px] leading-[130%] text-white">
                    {title}
                </h2>
                <div className="flex gap-5">
                    <Image
                        src={"/icons/left.svg"}
                        width={40}
                        height={40}
                        alt="left"
                        className="w-[40px] h-[40px] "
                        style={{ objectFit: "cover" }}
                    />
                    <Image
                        src={"/icons/right.svg"}
                        width={40}
                        height={40}
                        alt="actor"
                        className="w-[40px] h-[40px] "
                        style={{ objectFit: "cover" }}
                    />
                </div>
            </div>
            <div className="flex gap-[37px]">
                {actors.map((actor, index) => (
                    <ActorCard key={index} actor={actor} />
                ))}
            </div>
        </div>
    );
};
const Questionnaire = () => {
    return (
        <div className="bg-secondary flex gap-[140px] justify-center px-[146px] py-[80px]">
            <div className="flex flex-col justify-between gap-[45px] max-w-[543px]">
                <div className="flex flex-col gap-5 font-semibold">
                    <div className="text-white text-4xl leading-[130%]">
                        {MAIN.for_actor}
                    </div>
                    <div className="text-white text-2xl leading-[130%]">
                        {MAIN.start_work}
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <h2 className="text-white text-2xl leading-[130%]">
                            {MAIN.registration}
                        </h2>
                        <h2 className="text-gray_text leading-[130%]">
                            {MAIN.press}
                        </h2>
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <h2 className="text-white text-2xl leading-[130%]">
                            {MAIN.questionnaire}
                        </h2>
                        <h2 className="text-gray_text leading-[130%]">
                            {MAIN.write_data}
                        </h2>
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <h2 className="text-white text-2xl leading-[130%]">
                            {MAIN.publication}
                        </h2>
                        <h2 className="text-gray_text leading-[130%]">
                            {MAIN.leave_form}
                        </h2>
                    </div>
                </div>
                <div>
                    <button
                        className={`bg-button_color text-base text-white font-bold w-[240px] h-[50px] rounded-lg`}
                    >
                        {MAIN.create_form}
                    </button>
                </div>
            </div>

            <div className="flex">
                <Image
                    src="/images/Illustration2.png"
                    width={400}
                    height={394}
                    className="w-[400px] h-[394px]"
                    alt="Illustration1"
                />
            </div>
        </div>
    );
};
const CreateProfilePart = () => {
    return (
        <div className="bg-secondary flex gap-[140px] justify-between px-[146px] py-[80px]">
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
        <div className="bg-primary flex flex-col gap-20 px-[146px] py-[80px]">
            <div className="flex flex-col gap-10">
                <h2 className="text-white text-[32px] font-medium leading-[130%]">
                    {MAIN.faq}
                </h2>
                <div className="flex gap-[50px]">
                    <div className="bg-button_color w-[350px] h-[350px] rounded-[10px] p-5 flex flex-col gap-[30px]">
                        <h2 className="text-white text-2xl leading-[130%] font-medium">
                            {MAIN.who_see_contact}
                        </h2>
                        <h2 className="text-gray leading-[130%] font-medium">
                            {MAIN.contact_info}
                        </h2>
                    </div>
                    <div className="bg-button_color w-[350px] h-[350px] rounded-[10px] p-5 flex flex-col gap-[30px]">
                        <h2 className="text-white text-2xl leading-[130%] font-medium">
                            {MAIN.who_see_contact}
                        </h2>
                        <h2 className="text-gray leading-[130%] font-medium">
                            {MAIN.contact_info}
                        </h2>
                    </div>
                    <div className="bg-button_color w-[350px] h-[350px] rounded-[10px] p-5 flex flex-col gap-[30px]">
                        <h2 className="text-white text-2xl leading-[130%] font-medium">
                            {MAIN.who_see_contact}
                        </h2>
                        <h2 className="text-gray leading-[130%] font-medium">
                            {MAIN.contact_info}
                        </h2>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-[30px] items-center">
                <h2 className="text-white text-[32px] font-medium leading-[130%]">
                    {MAIN.any_questions}
                </h2>
                <button
                    className={`bg-button_color text-base text-white font-bold w-[240px] h-[50px] rounded-lg`}
                >
                    {MAIN.ask_question}
                </button>
            </div>
        </div>
    );
};
