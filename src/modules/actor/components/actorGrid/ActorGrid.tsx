// components/ActorGrid.tsx
import { useLanguage } from "@/context/LanguageProvider";
import { Actor } from "@/types/actor";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ActorGridProps {
    actors: Actor[];
}

export const ActorGrid: React.FC<ActorGridProps> = ({ actors }) => {
    const { language, getHref } = useLanguage();
    return (
        <div className="grid grid-cols-3 min-[425px]:grid-cols-4 lg:grid-cols-4 min-[1250px]:grid-cols-5 sm:min-w-[830px] gap-[5px] sm:gap-5 w-max h-max">
            {actors.map((actor, key) => (
                <Link key={key} href={getHref(`/actors/${actor.id}`)}>
                    <div
                        className={`bg-gray flex flex-col rounded-[5px] sm:rounded-[10px] max-w-[60px] max-h-[110px] sm:max-w-[150px] sm:max-h-[280px] w-max ${
                            actor.isCompassActor
                                ? "border border-[#6E9CF2]"
                                : ""
                        }`}
                    >
                        <div className="relative">
                            <Image
                                src={actor?.avatar ?? ""}
                                width={60}
                                height={75}
                                alt={actor?.firstName}
                                className="w-[60px] h-[75px] sm:w-[150px] sm:h-[200px] rounded-t-[4px] sm:rounded-t-[9px] "
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
                            className={`flex flex-col justify-center items-center  min-h-[35px] sm:min-h-[80px] gap-[3px] sm:gap-[10px] text-center  ${
                                actor.isCompassActor
                                    ? "border-0 rounded-none border-t border-[#6E9CF2]"
                                    : "border-x-[1px] border-b-[1px] border-t sm:border-t-0 border-gray_border rounded-x-[5px] rounded-b-[5px] sm:rounded-x-[8px] sm:rounded-b-[8px]"
                            }`}
                        >
                            <h2 className="text-[7px] sm:text-[14px] leading-[130%] max-w-max sm:max-w-28 text-black font-medium">
                                {actor?.firstName} {actor?.lastName}
                            </h2>
                            <h2 className="text-[5px] sm:text-[12px] leading-[130%] text-gray_text">
                                {actor?.age} {language.ACTORCARD.years_old}
                            </h2>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};
