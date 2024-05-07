import { ActorEducation, ActorMovie } from "@/modules/actor/types";

export interface Actor {
    id: number;
    isCompassActor: boolean;
    firstName: string;
    lastName: string;
    thirdName: string;
    avatar: null | string;
    age: number;
    educations: ActorEducation[];
    movies: ActorMovie[];
}
