"use client";
import { Loading } from "@/components/shared/loading/Loading";
import { useLanguage } from "@/context/LanguageProvider";
import { ActorDetail } from "@/modules/actor/components/actorDetail/ActorDetail";
import { useGetProfile } from "@/modules/actor/queries";
import { DirectorDetail } from "@/modules/create-director/ui/DirectorDetail";
import { SelectProfileType } from "@/modules/selectProfileType/SelectProfileType";
import { useAppSelector } from "@/redux/utils";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProfileType() {
    const { auth } = useAppSelector((state) => state.user);
    const router = useRouter();
    const { getHref } = useLanguage();
    // const { isAuth } = useAuthContext();
    // const [isLoading, setIsLoading] = useState<boolean>(false);
    const [profileType, setProfileType] = useState<string | undefined>(
        undefined
    );

    const { data: profile, isPending } = useGetProfile();

    useEffect(() => {
        if (!auth.isLoggedIn) {
            router.push(getHref("/auth/login"));
        }
        if (profile) {
            setProfileType(profile?.abstract_user_data.type);
        }
    }, [auth.isLoggedIn, profile]);

    if (isPending) {
        return <Loading className="h-screen" />;
    }

    return (
        <div>
            {profileType !== "none" ? (
                profileType === "actor" ? (
                    <ActorDetail details={profile} isEdit />
                ) : (
                    <DirectorDetail details={profile} />
                )
            ) : (
                <SelectProfileType />
            )}
        </div>
    );
}
