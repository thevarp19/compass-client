import { Actor } from "@/types/actor";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { ACTORCARD } from "../actorCard/string";
import { ACTORLIST } from "./string";
interface ActorListProps {
    actors: Actor[];
}
export const ActorList: FC<ActorListProps> = ({ actors }) => {
    return (
        <div className="flex flex-col gap-5 min-w-[830px] w-full">
            {actors.map((actor, key) => (
                <Link key={key} href={`/actors/${actor.id}`}>
                    <div className="flex">
                        <div
                            className={`bg-gray shadow-lg flex flex-col rounded-s-[10px] min-w-[150px] max-w-[150px] max-h-[280px] w-max ${
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
                                    className="w-[150px] h-[200px] rounded-t-[8px] rounded-b-none rounded-tr-none "
                                    style={{
                                        objectFit: "cover",
                                        objectPosition: "center",
                                    }}
                                />
                                {actor.isCompassActor && (
                                    <div className="absolute bottom-0 right-0 bg-[#6E9CF2] w-[67px] h-[16px] px-[5px] text-xs text-white ">
                                        Compass
                                    </div>
                                )}
                            </div>
                            <div
                                className={`flex flex-col justify-center items-center gap-[10px] text-center  ${
                                    actor.isCompassActor
                                        ? "border-t-2 border-[#6E9CF2] min-h-[76px]"
                                        : "min-h-[80px]"
                                }`}
                            >
                                <h2 className="text-[14px] leading-[130%] max-w-28 text-black font-medium">
                                    {actor?.firstName} {actor?.lastName}{" "}
                                </h2>
                                <h2 className="text-[12px] leading-[130%] text-gray_text">
                                    {actor?.age} {ACTORCARD.years_old}
                                </h2>
                            </div>
                        </div>
                        <div className="w-full border-y-[1px] border-e-[1px] border-gray_border rounded-e-[8px] flex flex-col gap-5 py-5 pl-5">
                            <div className="flex flex-col gap-[10px]">
                                <h2 className="text-sm font-medium leading-[130%] text-black">
                                    {ACTORLIST.education}
                                </h2>
                                <h2 className="text-xs leading-[130%] text-grayDark_text">
                                    {actor?.educations[0].university}
                                </h2>
                            </div>
                            <div className="flex flex-col gap-[10px]">
                                <h2 className="text-sm font-medium leading-[130%] text-black">
                                    {ACTORLIST.education}
                                </h2>
                                {actor?.movies?.map((movie, key) => (
                                    <h2
                                        key={key}
                                        className="text-xs leading-[130%] text-grayDark_text"
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
