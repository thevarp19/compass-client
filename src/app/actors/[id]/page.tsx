"use client";
import { Loading } from "@/components/shared/loading/Loading";
import { ActorDetail } from "@/modules/actor/components/actorDetail/ActorDetail";
import { useGetActorDetail } from "@/modules/actor/queries";
import { useEffect } from "react";

export default function ActorsDetail({ params }: any) {
    const actorId = params?.id;
    useEffect(() => {
        localStorage.setItem("actorId", actorId);
    }, [actorId]);
    const { data: actor, isPending } = useGetActorDetail(actorId);

    if (isPending) {
        return <Loading className="h-screen" />;
    }

    return <ActorDetail details={actor} />;
}
