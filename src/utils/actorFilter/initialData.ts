import { ActorFilters } from "@/modules/actor/types";

export const initialFilters: ActorFilters = {
    search: "",
    sortBy: "",
    gender: "",
    age_min: undefined, // Initialize as undefined, you can also use null if that's preferred
    age_max: undefined,
    weight_min: undefined,
    weight_max: undefined,
    height_min: undefined,
    height_max: undefined,
    userVideoCount_min: undefined,
    userVideoCount_max: undefined,
    userPhotoCount_min: undefined,
    userPhotoCount_max: undefined,
};
