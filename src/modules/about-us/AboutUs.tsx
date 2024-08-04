import { useLanguage } from "@/context/LanguageProvider";
import { Spin } from "antd";
import Image from "next/image";
import { FC } from "react";
import { useGetActors } from "../actor/queries";
import { ActorsCarousel } from "../main/Main";
import { OurProjects } from "../our-projects/OurProjects";

export const AboutUs: FC = () => {
    const { language } = useLanguage();
    const { data: actors, isPending } = useGetActors({
        search: "",
        sortBy: "",
        isCompassActor: true,
        gender: "",
        citizenship: [],
        // specialization: [],
        cityAccommodation: [],
        // legalStatus: [],
        agency: [],
        hairColor: [],
        sport: [],
        dancing: [],
        right: [],
        foreignLanguage: [],
        singing: [],
        musicalInstrument: [],
        hairLength: [],
        eyeColor: [],
        bodyType: [],
        peculiarities: [],
        typeOfAppearance: [],
        nationality: [],
    });

    return (
        <div>
            {/* <section>
                <MainBanner />
            </section> */}
            <section>
                <Manifest />
            </section>
            <section>
                {isPending ? (
                    <div>
                        <Spin />
                    </div>
                ) : (
                    <ActorsCarousel
                        title={language.ABOUTUS.compass_actor}
                        actors={actors || []}
                    />
                )}
            </section>

            <section>
                <OurProjects />
            </section>
        </div>
    );
};

const MainBanner2 = () => {
    const { language } = useLanguage();
    return (
        <div className="bg-secondary flex gap-[25px] sm:gap-[140px] justify-center px-[25px] sm:px-[140px] py-[40px] sm:py-[110px]">
            <div className="flex flex-col max-w-[175px] sm:max-w-[424px] justify-between">
                <div className="flex flex-col">
                    {" "}
                    <h2 className="text-white font-semibold text-[20px] sm:text-[48px] flex leading-normal flex-col">
                        {language.MAIN.selection}
                        <span className="underline whitespace-nowrap text-[#6E9CF2]">
                            {language.MAIN.best_actor}
                        </span>
                        {language.MAIN.from_all_world}
                    </h2>
                    <h2 className="text-white text-[8px] sm:text-base">
                        {language.MAIN.inter_platform}
                    </h2>
                </div>
                <div>
                    <button
                        className={`bg-button_color text-[8px] sm:text-base text-white font-bold w-[80px] sm:w-[200px] h-[20px] sm:h-[50px] rounded-lg`}
                    >
                        {language.MAIN.find}
                    </button>
                </div>
            </div>
            <div className="flex ">
                <Image
                    src="/images/Illustration1.png"
                    width={180}
                    height={157}
                    className="w-[180px] h-[157px] sm:w-[590px] sm:h-[463px]"
                    alt="Illustration1"
                />
            </div>
        </div>
    );
};
const MainBanner = () => {
    const { language } = useLanguage();
    return (
        <div className="bg-secondary flex flex-col justify-center items-center min-h-[554px]">
            <div className="flex flex-col text-white text-[24px] sm:px-48 sm:text-[52px] font-semibold text-center">
                <h2>{language.ABOUTUS.title}</h2>
            </div>
        </div>
    );
};
const Manifest = () => {
    const { language } = useLanguage();
    return (
        <div className="bg-secondary flex flex-col justify-center items-center min-h-[354px] sm:min-h-[454px]">
            <div className="flex gap-[144px] text-white sm:px-48 px-12">
                <div className="flex flex-col gap-[10px] sm:w-[550px]">
                    <h2 className="underline sm:text-[40px] text-xl font-medium leading-[130%] ">
                        {language.MANIFEST.SECTION_1.title}
                    </h2>
                    <h2 className="text-gray_text text-base sm:text-lg leading-[130%] text-center">
                        {language.MANIFEST.SECTION_1.description}
                    </h2>
                </div>
            </div>
        </div>
    );
};

// const OurProjects = () => {
//     const { data: projects, isPending } = useQuery<Project[]>({
//         queryKey: ["projects"],
//         queryFn: async () => {
//             const response = await axios.get<Project[]>("/projects");
//             return response.data;
//         },
//     });
//     if (isPending) return <Loading className="h-[50vh]" />;
//     const { language, getHref } = useLanguage();
//     return (
//         <div className="bg-secondary flex flex-col gap-10 justify-between py-10 sm:py-20 px-[25px] sm:px-[146px]">
//             <div className="flex justify-between">
//                 <h2 className="text-white text-[15px] sm:text-[32px] font-medium leading-[130%]">
//                     {language.PROJECTS.our_projects}
//                 </h2>
//                 <Link
//                     href={getHref("our-projects")}
//                     className="text-[#6E9CF2] text-[10px] sm:text-[18px] font-medium leading-[130%] cursor-pointer"
//                 >
//                     {language.PROJECTS.show_all}
//                 </Link>
//             </div>

//             {projects?.slice(0, 3).map((project) => (
//                 <div key={project.id} className="relative">
//                     <Image
//                         src={project.image || "/images/532banner.png"}
//                         width={380}
//                         height={190}
//                         alt="actor"
//                         className="w-[380px] h-[190px] sm:w-[1148px] sm:h-[500px] rounded-[9px]"
//                         style={{ objectFit: "cover", objectPosition: "center" }}
//                     />
//                     <div className="absolute flex flex-col justify-center bottom-0 left-0 h-[50px] sm:h-[134px] z-10 rounded-b-[9px] bg-gradient-to-r-gray">
//                         <h2 className="text-white text-base sm:text-5xl font-medium leading-[130%] ps-5">
//                             {`${project.startYear} - ${project.endYear} "${project.name}"`}
//                         </h2>
//                         <div className="ps-5">
//                             {project.actors.map((actor) => (
//                                 <h2
//                                     key={actor.id}
//                                     className="text-white text-[10px] sm:text-4xl font-medium leading-[130%]"
//                                 >
//                                     <Link href={getHref(`/actors/${actor.id}`)}>
//                                         <span className="text-[#6E9CF2]">
//                                             {actor.firstName} {actor.lastName}
//                                         </span>
//                                     </Link>
//                                 </h2>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };
