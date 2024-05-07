import { Actor } from "@/types/actor";
import Image from "next/image";
import { FC } from "react";
import { ACTORCARD } from "./string";
interface ActorCardProps {
    actor: Actor;
    className?: string;
}
export const ActorCard: FC<ActorCardProps> = ({ actor, className }) => {
    return (
        <div
            className={`bg-secondary shadow-lg flex flex-col rounded-[10px] w-max ${className}`}
        >
            <Image
                src={actor?.avatar || ""}
                width={200}
                height={250}
                alt={actor?.firstName}
                className="w-[200px] h-[250px] rounded-t-[10px] "
                style={{ objectFit: "cover", objectPosition: "center" }}
            />
            <div className="flex flex-col justify-center items-center min-h-[100px] gap-[10px] text-center">
                <h2 className="text-[18px] leading-[130%] max-w-32 text-white">
                    {actor?.firstName} {actor.lastName}
                </h2>
                <h2 className="text-[12px] leading-[130%] text-gray_text">
                    {actor?.age} {ACTORCARD.years_old}
                </h2>
            </div>
        </div>
    );
};
