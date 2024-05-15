import { DirectorType } from "@/modules/create-director/types";

export const createDirectorValues: DirectorType = {
    lastName: "",
    firstName: "",
    thirdName: "",
    avatar: "",
    userPhotos: [
        {
            url: "",
        },
    ],
    userSocialMedias: [
        {
            name: "",
            url: "",
        },
    ],
};
