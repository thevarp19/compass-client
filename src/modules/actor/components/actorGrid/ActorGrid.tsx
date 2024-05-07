// components/ActorGrid.tsx
import { Actor } from "@/types/actor";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ACTORCARD } from "../actorCard/string";

interface ActorGridProps {
    actors: Actor[];
}

const ActorGrid: React.FC<ActorGridProps> = ({ actors }) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 min-w-[830px] w-full">
            {actors.map((actor, key) => (
                <Link key={key} href={`/actors/${actor.id}`}>
                    <div
                        className={`bg-gray flex flex-col rounded-[10px] max-w-[150px] max-h-[280px] w-max ${
                            actor.isCompassActor
                                ? "border-2 border-[#6E9CF2]"
                                : ""
                        }`}
                    >
                        <div className="relative">
                            <Image
                                src={actor?.avatar ?? ""}
                                width={150}
                                height={200}
                                alt={actor?.firstName}
                                className="w-[150px] h-[200px] rounded-t-[8px] "
                                style={{
                                    objectFit: "cover",
                                    objectPosition: "center",
                                }}
                            />
                            {actor.isCompassActor && (
                                <div className="absolute bottom-0 right-0 bg-[#6E9CF2] w-[67px] h-[16px] px-[5px] text-xs text-white">
                                    Compass
                                </div>
                            )}
                        </div>
                        <div
                            className={`flex flex-col justify-center items-center min-h-[80px] gap-[10px] text-center  ${
                                actor.isCompassActor
                                    ? "border-0 rounded-none border-t-2 border-[#6E9CF2]"
                                    : "border-x-[1px] border-b-[1px] border-gray_border rounded-x-[8px] rounded-b-[8px]"
                            }`}
                        >
                            <h2 className="text-[14px] leading-[130%] max-w-28 text-black font-medium">
                                {actor?.firstName} {actor?.lastName}
                            </h2>
                            <h2 className="text-[12px] leading-[130%] text-gray_text">
                                {actor?.age} {ACTORCARD.years_old}
                            </h2>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default ActorGrid;
