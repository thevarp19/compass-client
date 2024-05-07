import { FORM_TEXT } from "@/modules/create-profile/strings/string";
import { FC } from "react";
import { AllInfoProps } from "../AllInfo";
import { MovieAndAwards } from "../MovieAndAwards";
import { ImageAndVideo } from "./photo/ImageAndVideo";

export const MediaInfo: FC<AllInfoProps> = ({ actor, isEdit }) => {
    return (
        <div className="border border-gray_border h-max max-w-[268px] rounded-[5px] p-[10px] flex flex-col gap-5 pb-40">
            <h2 className="text-xl font-semibold text-black">
                {FORM_TEXT.media}
            </h2>
            <ImageAndVideo actor={actor} isEdit={isEdit} />
            <MovieAndAwards actor={actor} />
            {/* <Award actor={actor} /> */}
        </div>
    );
};
