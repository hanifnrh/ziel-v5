"use client";
import Image from "next/image";

interface ExperienceItem {
    date: string;
    role: string;
    company: string;
    location: string;
    description: string;
    image: string;
}

const experiences: ExperienceItem[] = [
    {
        date: "October 2025-Present",
        role: "UI/UX Designer Intern",
        company: "CIMB Niaga",
        location: "Jakarta, Indonesia",
        description:
            "Designed internal applications based on the established design system, collaborating in an agile environment with developers, a delivery manager, technical lead, and product owner.",
        image: "/about/experience/cimb.png",
    },
    {
        date: "December 2024–February 2025",
        role: "Web Developer Intern",
        company: "PT Gama Abyakta Sejahtera",
        location: "Jakarta, Indonesia",
        description:
            "Built SEO-optimized websites, developed internal tools for social media analysis, and collaborated on internal applications. Improved SEO performance and user experience through research, design, and best practices.",
        image: "/about/experience/ptgas.png",
    },
    {
        date: "July 2023–August 2023",
        role: "UI/UX Designer Intern",
        company: "Telkom Test House",
        location: "Bandung, Indonesia",
        description:
            "Designed web and mobile UI for the Telkom Test House Whistleblowing System, focusing on user experience. Conducted data analysis for service quality and collaborated on improving organizational standards.",
        image: "/about/experience/tth.png",
    },

];

export default function Experience() {
    return (
        <div className="relative flex flex-col px-4 md:px-10 xl:px-14 pb-10">
            <div className="relative overflow-hidden flex flex-col items-start bg-indigo-700 p-4 sm:p-6 rounded-2xl">
                {/* Header */}
                <div className="grid grid-cols-4 py-8 sm:px-6 gap-4">
                    <div className="sm:col-span-1 hidden sm:block" />
                    <div className="col-span-4 sm:col-span-3 flex flex-col gap-2">
                        <p className="text-base uppercase body text-indigo-200">
                            EXPERIENCE & ORGANIZATION
                        </p>
                        <h3 className="flex text-2xl sm:text-3xl font-normal lg:text-5xl body tracking-tighter text-neutral-100">
                            Evolving with every challenges and encounter with people in the field, I gather valuable experiences that shape my professional journey.
                        </h3>
                    </div>
                </div>

                {/* Experience List */}
                <div className="w-full grid grid-cols-1 gap-6 p-4 sm:p-6 bg-indigo-600 rounded-xl">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className={`pb-6 gap-4 text-base ${index !== experiences.length - 1
                                ? "border-b border-indigo-400"
                                : ""
                                } grid lg:grid-cols-2 xl:grid-cols-1`}
                        >
                            <div className="grid grid-cols-1 xl:grid-cols-4">
                                <h3 className="body text-indigo-200 text-base sm:text-lg col-span-1">{exp.date}</h3>

                                <div className="col-span-1">
                                    <p className="body-bold text-neutral-100 text-3xl sm:text-4xl">{exp.role}</p>
                                    <p className="body-light text-indigo-200 text-lg sm:text-xl">
                                        {exp.company} <br />
                                        {exp.location}
                                    </p>
                                </div>

                                <p className="body tracking-tighter text-neutral-100 text-lg sm:text-xl col-span-1">
                                    {exp.description}
                                </p>

                                <Image
                                    src={exp.image}
                                    alt={`${exp.role} thumbnail`}
                                    width={500}
                                    height={500}
                                    className="aspect-[3/2] w-full h-auto rounded-md lg:hidden xl:block col-span-1"
                                />
                            </div>
                            <Image
                                src={exp.image}
                                alt={`${exp.role} thumbnail`}
                                width={500}
                                height={500}
                                className="aspect-[3/2] w-full h-auto hidden lg:block xl:hidden rounded-md col-span-1"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}