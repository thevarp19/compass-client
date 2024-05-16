import { RequestDirectorType } from "@/modules/create-director/types";

export const createDirectorValues: RequestDirectorType = {
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
