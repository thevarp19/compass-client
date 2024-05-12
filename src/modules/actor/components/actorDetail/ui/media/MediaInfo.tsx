import { useLanguage } from "@/context/LanguageProvider";
import { FC } from "react";
import { AllInfoProps } from "../AllInfo";
import { MovieAndAwards } from "../MovieAndAwards";
import { ImageAndVideo } from "./photo/ImageAndVideo";

export const MediaInfo: FC<AllInfoProps> = ({ actor, isEdit }) => {
    const { language, getHref } = useLanguage();

    return (
        <div className="border border-gray_border h-max max-w-[100px] sm:max-w-[268px] rounded-[5px] p-[5px] sm:p-[10px] flex flex-col gap-[10px] sm:gap-5 pb-20 sm:pb-40">
            <h2 className="text-[10px] sm:text-xl font-semibold text-black">
                {language.FORM_TEXT.media}
            </h2>
            <ImageAndVideo actor={actor} isEdit={isEdit} />
            <MovieAndAwards actor={actor} />
            {/* <Award actor={actor} /> */}
        </div>
    );
};
