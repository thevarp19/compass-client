"use client";
import { Loading } from "@/components/shared/loading/Loading";
import { MediaView } from "@/modules/actor/components/actorDetail/ui/media/MediaView";
import { useGetProfile } from "@/modules/actor/queries";
import { FORM_TEXT } from "@/modules/create-profile/strings/string";

export default function ProfileMedia() {
    const { data: profile, isPending } = useGetProfile();

    return (
        <>
            {isPending ? (
                <Loading className="h-screen" />
            ) : (
                <div className="bg-gray flex flex-col px-[25px] sm:px-[146px] py-[30px] sm:py-[60px] gap-[10px] sm:gap-10 pb-32 sm:pb-96">
                    <span className="text-[10px] sm:text-[32px] font-semibold text-black">
                        {FORM_TEXT.media}
                    </span>
                    <MediaView actor={profile} />
                </div>
            )}
        </>
    );
}
