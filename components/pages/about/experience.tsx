"use client"
import { cn } from "@/lib/utils";
import { BriefcaseBusiness } from "lucide-react";
import { AnimatedGridPattern } from "../../ui/animated-grid-pattern";

const images = [
    "/svg/figma.svg",
    "/svg/laravel.svg",
    "/svg/nextjs.svg",
    "/svg/react.svg",
    "/svg/tailwind.svg",
    "/svg/vercel.svg",
    "/svg/figma.svg",
    "/svg/laravel.svg",
    "/svg/nextjs.svg",
    "/svg/react.svg",
    "/svg/tailwind.svg",
    "/svg/vercel.svg",
    "/svg/figma.svg",
    "/svg/laravel.svg",
    "/svg/nextjs.svg",
    "/svg/react.svg",
    "/svg/tailwind.svg",
    "/svg/vercel.svg",
    "/svg/figma.svg",
    "/svg/laravel.svg",
    "/svg/nextjs.svg",
    "/svg/react.svg",
    "/svg/tailwind.svg",
    "/svg/vercel.svg",
];

export default function Experience() {

    return (
        <div className="relative flex flex-col px-8 md:px-20 2xl:px-52 pb-10 bg-background">
            <AnimatedGridPattern
                numSquares={30}
                maxOpacity={0.1}
                duration={3}
                repeatDelay={1}
                className={cn(
                    "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
                    "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
                )}
            />
            <div className="py-5">
                <h2 className="flex bg-purple-600/20 text-purple-600 px-4 py-2 rounded-full w-fit">
                    <BriefcaseBusiness className="mr-2" />
                    Experience
                </h2>
            </div>
            <div className="relative overflow-hidden flex flex-col gap-8 items-start">
                <h3 className="flex text-4xl sm:text-3xl font-normal lg:text-5xl body tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-200 dark:bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]">
                    Organization & Experience
                </h3>
                <div className="w-full grid grid-cols-1 gap-14 py-10">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-10 text-base">
                        <h3 className="body text-neutral-200 text-lg">
                            July 2023–August 2023
                        </h3>
                        <div>
                            <p className="body text-neutral-200">
                                UI/UX Designer Intern
                            </p>
                            <p className="body-light text-neutral-500">
                                Telkom Test House <br />
                                Bandung, Indonesia
                            </p>
                        </div>
                        <p className="body-light text-neutral-200">
                            Designed web and mobile UI for the Telkom Test House Whistleblowing System, focusing on user experience. Conducted data analysis for service quality and collaborated on improving organizational standards.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-10 text-base">
                        <h3 className="body text-neutral-200 text-lg">
                            September 2023–July 2024
                        </h3>
                        <div>
                            <p className="body text-neutral-200">
                                Core Team Design Division
                            </p>
                            <p className="body-light text-neutral-500">
                                Google Developer Students Club Diponegoro University <br />
                                Semarang, Indonesia
                            </p>
                        </div>
                        <p className="body-light text-neutral-200">
                            Developed branding materials and design strategies to enhance engagement and event participation while ensuring a cohesive visual identity.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-10 text-base">
                        <h3 className="body text-neutral-200 text-lg">
                            December 2024–February 2025
                        </h3>
                        <div>
                            <p className="body text-neutral-200">
                                Web Developer Intern
                            </p>
                            <p className="body-light text-neutral-500">
                                PT Gama Abyakta Sejahtera <br />
                                Jakarta, Indonesia
                            </p>
                        </div>
                        <p className="body-light text-neutral-200">
                            Built SEO-optimized websites, developed internal tools for social media analysis, and collaborated on internal applications. Improved SEO performance and user experience through research, design, and best practices.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}