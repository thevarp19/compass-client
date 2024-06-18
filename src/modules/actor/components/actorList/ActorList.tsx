import { useLanguage } from "@/context/LanguageProvider";
import { Actor } from "@/types/actor";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface ActorListProps {
    actors: Actor[];
}
export const ActorList: FC<ActorListProps> = ({ actors }) => {
    const { language, getHref } = useLanguage();
    return (
        <div className="flex flex-col gap-5 sm:min-w-[830px] w-full">
            {actors.map((actor, key) => (
                <Link key={key} href={getHref(`/actors/${actor.id}`)}>
                    <div className="flex">
                        <div
                            className={`bg-gray shadow-lg flex flex-col rounded-[5px] rounded-s-[5px] rounded-b-none rounded-tr-none  min-w-[60px] sm:min-w-[150px] max-w-[150px] max-h-[280px] w-max ${
                                actor.isCompassActor
                                    ? "border border-[#6E9CF2]"
                                    : ""
                            }`}
                        >
                            <div className="relative">
                                <Image
                                    src={actor?.avatar ?? ""}
                                    width={150}
                                    height={200}
                                    alt={actor?.firstName}
                                    className="w-[60px] h-[75px] sm:w-[150px] sm:h-[200px] rounded-t-[4px] rounded-b-none rounded-tr-none "
                                    style={{
                                        objectFit: "cover",
                                        objectPosition: "center",
                                    }}
                                />
                                {actor.isCompassActor && (
                                    <div className="absolute bottom-0 right-0 bg-[#6E9CF2] w-[35px] sm:w-[67px] h-[8px] sm:h-[16px] px-[5px] text-[6px] sm:text-xs text-white">
                                        Compass
                                    </div>
                                )}
                            </div>
                            <div
                                className={`flex flex-col justify-center items-center gap-[10px] text-center h-full ${
                                    actor.isCompassActor
                                        ? "border-t border-[#6E9CF2] min-h-[31px] sm:min-h-[76px]"
                                        : "min-h-[35px] sm:min-h-[80px] border-x-[1px] border-b-[1px] border-t sm:border-t-0 border-gray_border rounded-x-[5px] rounded-b-[5px] sm:rounded-x-[5px] sm:rounded-b-[5px]"
                                }`}
                            >
                                <h2 className="text-[7px] sm:text-[14px] leading-[130%] max-w-28 text-black font-medium">
                                    {actor?.firstName} {actor?.lastName}{" "}
                                </h2>
                                <h2 className="text-[5px] sm:text-[12px] leading-[130%] text-gray_text">
                                    {actor?.age} {language.ACTORCARD.years_old}
                                </h2>
                            </div>
                        </div>
                        <div className="w-full border-y-[1px] border-e-[1px] border-gray_border rounded-e-[5px] flex flex-col gap-5 py-5 pl-5">
                            <div className="flex flex-col gap-[10px]">
                                <h2 className="text-[7px] sm:text-sm font-medium leading-[130%] text-black">
                                    {language.ACTORLIST.education}
                                </h2>
                                <h2 className="text-[6px] sm:text-xs leading-[130%] text-grayDark_text">
                                    {actor?.educations[0]?.university}{" "}
                                    {actor?.educations[0]?.faculty}
                                </h2>
                            </div>
                            <div className="flex flex-col gap-[10px]">
                                <h2 className="text-[7px] sm:text-sm  font-medium leading-[130%] text-black">
                                    {language.ACTORLIST.best_movies}
                                </h2>
                                {actor?.movies?.map((movie, key) => (
                                    <h2
                                        key={key}
                                        className="text-[6px] sm:text-xs leading-[130%] text-grayDark_text"
                                    >
                                        {movie.name}
                                    </h2>
                                ))}
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};
