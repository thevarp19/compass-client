"use client";
import { Loading } from "@/components/shared/loading/Loading";
import { useLanguage } from "@/context/LanguageProvider";
import { MediaView } from "@/modules/actor/components/actorDetail/ui/media/MediaView";
import { useGetActorDetail } from "@/modules/actor/queries";

export default function ActorMedia({ params }: any) {
    const actorId = params?.id;

    const { data: actor, isPending } = useGetActorDetail(actorId);
    const { language } = useLanguage();

    return (
        <>
            {isPending ? (
                <Loading className="h-screen" />
            ) : (
                <div className="bg-gray flex flex-col px-[146px] py-[60px] gap-10 pb-96">
                    <span className="text-[32px] font-semibold text-black">
                        {language.FORM_TEXT.media}
                    </span>
                    <MediaView actor={actor} />
                </div>
            )}
        </>
    );
}
