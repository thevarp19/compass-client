import { GetActorDetailResponse } from "@/modules/actor/types";

export const createActorValues: GetActorDetailResponse = {
    abstract_user_data: {
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
    },

    gender: "",
    birthday: "",
    citizenship: "",
    cityAccommodation: "",
    agency: "",
    clothingSize: "",
    weight: undefined,
    height: undefined,
    shoeSize: "",
    hairLength: "",
    hairColor: "",
    eyeColor: "",
    bodyType: "",
    typeOfAppearance: "",
    peculiarities: "",
    additionalInformation: "",
    comments: "",
    sports: [],
    foreignLanguages: [],
    rights: [],
    dancings: [],
    musicalInstruments: [],
    singing: [],

    userVideos: [
        {
            url: "",
        },
    ],
    userContacts: [
        {
            name: "",
            number: "",
        },
    ],

    awards: [
        {
            name: "",
            position: "",
            year: undefined,
        },
    ],
    movies: [
        {
            name: "",
            role: "",
            releasedYear: undefined,
        },
    ],

    educations: [
        {
            university: "",
            faculty: "",
            startYear: undefined,
            graduationYear: undefined,
        },
    ],
    theaters: [
        {
            name: "",
            performances: "",
            startYear: undefined,
            graduationYear: undefined,
        },
    ],
    serials: [
        {
            name: "",
            role: "",
            releasedYear: undefined,
        },
    ],
    nationality: "",
};
