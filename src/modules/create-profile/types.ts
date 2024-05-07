import { FormikProps } from "formik";
import { GetActorDetailResponse } from "../actor/types";

// export interface ActorValues {
//     abstract_user_data: {
//         lastName: string;
//         firstName: string;
//         thirdName: string;
//         avatar: string;
//         userPhotos: { url: string }[];
//         userSocialMedias: { name: string; url: string }[];
//     };
//     userVideos: { url: string }[];
//     gender: string;
//     age: number;
//     birthday: string;
//     citizenship: string;
//     specialization: string;
//     cityAccommodation: string;
//     legalStatus: string;
//     agency: string;
//     clothingSize: string;
//     weight: number;
//     height: number;
//     shoeSize: string;
//     hairLength: string;
//     hairColor: string;
//     eyeColor: string;
//     bodyType: string;
//     typeOfAppearance: string;
//     peculiarities: string;
//     additionalInformation: string;
//     comments: string;
//     sports: string[];
//     foreignLanguages: string[];
//     rights: string[];
//     dancings: string[];
//     musicalInstruments: string[];
//     singing: string[];

//     userContacts: { name: string; number: string }[];

//     awards: { name: string; position: string; year: number }[];
//     movies: { name: string; role: string; releasedYear: number }[];
//     educations: {
//         // id?: number;
//         university: string;
//         faculty: string;
//         startYear: number;
//         graduationYear: number;
//     }[];
//     theaters: {
//         name: string;
//         performances: string;
//         startYear: number;
//         graduationYear: number;
//     }[];
// }
export interface FormProps {
    formik: FormikProps<GetActorDetailResponse>;
}
