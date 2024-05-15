export interface DirectorType {
    lastName: string;
    firstName: string;
    thirdName: string;
    avatar: string;
    userPhotos: { id?: number; url: string }[];
    userSocialMedias: { id?: number; name: string; url: string }[];
}
