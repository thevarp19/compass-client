export interface ActorEducation {
    id: number;
    university: string;
    faculty: string;
    startYear: number;
    graduationYear: number;
}

export interface ActorMovie {
    id: number;
    name: string;
    role: string;
    releasedYear: number;
}
export interface AbstractUserData {
    lastName: string;
    type?: string;
    firstName: string;
    thirdName: string;
    avatar: string;
    userPhotos: { id?: number; url: string }[];
    userSocialMedias: { id?: number; name: string; url: string }[];
}
export interface GetActorResponse {
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
export interface GetActorDetailResponse {
    abstract_user_data: AbstractUserData;
    userVideos: { id?: number; url: string }[];
    gender: string;
    age?: number | undefined;
    birthday: string;
    citizenship: string;
    // specialization: string;
    cityAccommodation: string;
    // legalStatus: string;
    agency: string;
    clothingSize: string;
    weight: number | undefined;
    height: number | undefined;
    shoeSize: string;
    hairLength: string;
    hairColor: string;
    eyeColor: string;
    bodyType: string;
    typeOfAppearance: string;
    peculiarities: string;
    additionalInformation: string;
    comments: string;
    sports: string[];
    foreignLanguages: string[];
    rights: string[];
    dancings: string[];
    musicalInstruments: string[];
    singing: string[];

    userContacts: { id?: number; name: string; number: string }[];

    awards: {
        id?: number;
        name: string;
        position: string;
        year: number | undefined;
    }[];
    movies: {
        id?: number;
        name: string;
        role: string;
        releasedYear: number | undefined;
    }[];
    educations: {
        id?: number;
        university: string;
        faculty: string;
        startYear: number | undefined;
        graduationYear: number | undefined;
    }[];
    theaters: {
        id?: number;
        name: string;
        performances: string;
        startYear: number | undefined;
        graduationYear: number | undefined;
    }[];
}
export interface ActorFilters {
    search: string;
    sortBy: string;
    isCompassActor: boolean | undefined;
    gender: string;
    citizenship: string[];
    // specialization: string[];
    cityAccommodation: string[];
    // legalStatus: string[];
    agency: string[];
    hairColor: string[];
    sport: string[];
    dancing: string[];
    right: string[];
    foreignLanguage: string[];
    singing: string[];
    musicalInstrument: string[];
    hairLength: string[];
    eyeColor: string[];
    bodyType: string[];
    peculiarities: string[];
    typeOfAppearance: string[];
    age_min?: number;
    age_max?: number;
    weight_min?: number;
    weight_max?: number;
    height_min?: number;
    height_max?: number;
    userVideoCount_min?: number;
    userVideoCount_max?: number;
    userPhotoCount_min?: number;
    userPhotoCount_max?: number;
}
