"use client";
import { useLanguage } from "@/context/LanguageProvider";
import { axios } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface Movie {
    id: number;
    name: string;
    role: string;
    releasedYear: number;
}

interface Education {
    id: number;
    university: string;
    faculty: string;
    startYear: number;
    graduationYear: number;
}

interface Actor {
    id: number;
    isCompassActor: boolean;
    firstName: string;
    lastName: string;
    thirdName: string;
    age: number;
    avatar: string;
    movies: Movie[];
    educations: Education[];
}

interface Project {
    id: number;
    name: string;
    image: string;
    startYear: number;
    endYear: number;
    actors: Actor[];
}

export const OurProjects: FC = () => {
    const { data: projects } = useQuery<Project[]>({
        queryKey: ["projects"],
        queryFn: async () => {
            const response = await axios.get<Project[]>("/projects");
            return response.data;
        },
    });
    const { language, getHref } = useLanguage();

    return (
        <div className="bg-gray flex flex-col gap-5 sm:gap-10 py-10 sm:py-20 px-[25px] sm:px-[146px] text-black">
            <h2 className="text-[15px] sm:text-[32px] font-medium leading-[130%]">
                {language.PROJECTS.our_projects}
            </h2>

            {projects?.map((project, index) => (
                <div key={index} className="flex flex-col gap-5">
                    <div className="flex flex-col gap-[10px]">
                        <h2 className="text-[12px] sm:text-[24px] font-medium leading-[130%]">
                            {`${project.startYear} - ${project.endYear} "${project.name}"`}
                        </h2>
                        <h2 className="text-[9px] sm:text-[18px] font-medium leading-[130%]">
                            {language.PROJECTS.main_actors}{" "}
                            <Link
                                href={getHref(
                                    `/actors/${project?.actors[0].id}`
                                )}
                            >
                                <span className="text-[#6E9CF2]">
                                    {project.actors[0]?.firstName}{" "}
                                    {project.actors[0]?.lastName}
                                </span>
                            </Link>
                        </h2>
                    </div>
                    <Image
                        src={project?.image || "/images/532banner.png"}
                        width={380}
                        height={190}
                        alt={project.name}
                        className="w-[380px] h-[190px] sm:w-[1148px] sm:h-[550px] rounded-[9px]"
                        style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                </div>
            ))}
        </div>
    );
};
