"use client";
import { Loading } from "@/components/shared/loading/Loading";
import { useAuthContext } from "@/context/AuthContext";
import { useLanguage } from "@/context/LanguageProvider";
import { ActorDetail } from "@/modules/actor/components/actorDetail/ActorDetail";
import { useGetProfile } from "@/modules/actor/queries";
import { SelectProfileType } from "@/modules/selectProfileType/SelectProfileType";
import { useAppSelector } from "@/redux/utils";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProfileType() {
    const { auth } = useAppSelector((state) => state.user);
    const router = useRouter();
    const { getHref } = useLanguage();
    const { isAuth } = useAuthContext();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isHasProfile, setHasProfile] = useState<boolean | undefined>(
        undefined
    );

    const { data: profile, isPending } = useGetProfile();

    useEffect(() => {
        if (!auth.isLoggedIn) {
            router.push(getHref("/auth/login"));
        }
        if (profile) {
            setHasProfile(profile?.abstract_user_data.type !== "none");
        }
    }, [auth.isLoggedIn, profile]);

    if (isPending) {
        return <Loading className="h-screen" />;
    }

    return (
        <div>
            {isHasProfile ? (
                <ActorDetail details={profile} isEdit />
            ) : (
                <SelectProfileType />
            )}
        </div>
    );
}
