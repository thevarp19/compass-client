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
    const auth = useAppSelector((state) => state.user.auth);
    const router = useRouter();
    const { getHref } = useLanguage();
    const { isHasProfile } = useAuthContext();
    const [clientLoaded, setClientLoaded] = useState(false);
    const { data: profile, isPending } = useGetProfile();

    useEffect(() => {
        setClientLoaded(true);
        if (clientLoaded && !auth.isLoggedIn) {
            router.push(getHref("/auth/login"));
        }
    }, [clientLoaded, auth.isLoggedIn, auth.isHasProfile]);

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
