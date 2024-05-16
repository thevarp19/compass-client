export interface GetDirectorType {
    abstract_user_data: {
        lastName: string;
        firstName: string;
        thirdName: string;
        avatar: string;
        userPhotos: { id?: number; url: string }[];
        userSocialMedias: { id?: number; name: string; url: string }[];
    };
}
export interface RequestDirectorType {
    lastName: string;
    firstName: string;
    thirdName: string;
    avatar: string;
    userPhotos: { id?: number; url: string }[];
    userSocialMedias: { id?: number; name: string; url: string }[];
}
