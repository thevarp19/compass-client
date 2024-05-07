import { GetActorDetailResponse } from "@/modules/actor/types";

export const createActorValues: GetActorDetailResponse = {
    abstract_user_data: {
        lastName: "",
        firstName: "",
        thirdName: "",
        type: "",
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
    age: 0,
    birthday: "",
    citizenship: "",
    specialization: "",
    cityAccommodation: "",
    legalStatus: "",
    agency: "",
    clothingSize: "",
    weight: 0,
    height: 0,
    shoeSize: "",
    hairLength: "",
    hairColor: "",
    eyeColor: "",
    bodyType: "",
    typeOfAppearance: "",
    peculiarities: "",
    additionalInformation: "",
    comments: "",
    sports: [""],
    foreignLanguages: [""],
    rights: [""],
    dancings: [""],
    musicalInstruments: [""],
    singing: [""],

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
            year: 0,
        },
    ],
    movies: [
        {
            name: "",
            role: "",
            releasedYear: 0,
        },
    ],

    educations: [
        {
            university: "",
            faculty: "",
            startYear: 0,
            graduationYear: 0,
        },
    ],
    theaters: [
        {
            name: "",
            performances: "",
            startYear: 0,
            graduationYear: 0,
        },
    ],
};
