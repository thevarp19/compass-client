import { useLanguage } from "@/context/LanguageProvider";
import { Actor } from "@/types/actor";
import Image from "next/image";
import { FC } from "react";
interface ActorCardProps {
    actor: Actor;
    className?: string;
}
export const ActorCard: FC<ActorCardProps> = ({ actor, className }) => {
    const { language } = useLanguage();

    return (
        <div
            className={`bg-secondary shadow-lg flex flex-col rounded-[10px] max-w-[80px] sm:max-w-auto min-w-[80px] sm:min-w-max w-max ${className}`}
        >
            <Image
                src={actor?.avatar || ""}
                width={100}
                height={100}
                alt={actor?.firstName}
                className="w-[80px] h-[100px] sm:w-[200px] sm:h-[250px] rounded-t-[10px]"
                style={{ objectFit: "cover", objectPosition: "center" }}
            />
            <div className="flex flex-col justify-center items-center min-h-[50px] sm:min-h-[100px] gap-[5px] sm:gap-[10px] text-center">
                <h2 className="text-[9px] sm:text-[18px] leading-[130%] max-w-32 text-white">
                    {actor?.firstName} {actor.lastName}
                </h2>
                <h2 className="text-[6px] sm:text-[12px] leading-[130%] text-gray_text">
                    {actor?.age} {language.ACTORCARD.years_old}
                </h2>
            </div>
        </div>
    );
};
