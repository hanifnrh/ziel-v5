"use client"
import { DotPattern } from "@/components/magicui/dot-pattern";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { cn } from "@/lib/utils";
import {
    Link
} from "@nextui-org/react";
import { ArrowRight, Pickaxe } from "lucide-react";
import Image from "next/image";
import { SpotlightButton } from "../ui/spotlight-button";

export default function Projects() {

    return (
        <div>

            <div className="px-8 md:px-20 2xl:px-52 py-5">
                <h2 className="flex bg-purple-600/20 text-purple-600 px-4 py-2 rounded-full w-fit">
                    <Pickaxe className="mr-2" />
                    Projects
                </h2>
            </div>

            <div className="relative px-8 md:px-20 2xl:px-52 pb-10 flex flex-col gap-4 sm:gap-0 sm:flex-row justify-between">
                <div className="sm:w-2/3 xl:w-1/2 flex flex-col gap-4">
                    <DotPattern
                        className={cn(
                            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)] opacity-40",
                        )}
                    />
                    <h3 className="flex text-4xl sm:text-3xl lg:text-5xl body tracking-tighter text-transparent bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]">
                        Design-Driven Development
                    </h3>
                    <p className="text-zinc-500 body-light text-md lg:text-lg">
                        These projects highlight my journey of merging aesthetics with functionality. Started as a visual enthusiast, I went through many challenges to build functional yet visually pleasing project.
                    </p>
                </div>
                <Link
                    href="/under-construction"
                    rel="canonical"
                    className="sm:w-1/3 xl:w-1/2 text-zinc-200 flex justify-start items-start sm:justify-end">
                    <SpotlightButton />
                </Link>
            </div>

            <div className="relative flex flex-col items-center px-8 md:px-20 2xl:px-52 pb-20 bg-background" id="projects">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 sm:gap-8 items-start">
                    <Link
                        href="/under-construction"
                        rel="canonical"
                        target="_blank"
                        className="group body w-full flex flex-col gap-4 justify-center items-start text-zinc-200"
                    >
                        <div className="overflow-hidden rounded-xl">
                            <div
                                className={cn(
                                    "absolute top-3 left-3 z-20 inline-flex items-center group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200"
                                )}
                            >
                                <AnimatedShinyText
                                    className="body-light px-4 py-1 text-xs transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400"
                                >
                                    🏆 3rd Place TECHCOMFEST UI/UX 2024
                                </AnimatedShinyText>
                            </div>
                            <Image
                                src="https://zielbucket.s3.ap-southeast-2.amazonaws.com/public/images/academiku.png"
                                width={1000}
                                height={1000}
                                className="w-full h-auto object-cover aspect-video group-hover:scale-105 transition-all"
                                alt="Academiku Prototype"
                            />

                        </div>

                        <div className="flex flex-wrap gap-2 text-xs text-zinc-200 items-center">
                            <p className="bg-zinc-800 px-3 py-2 body-light rounded-full">
                                UI/UX Prototype
                            </p>
                            <p className="bg-zinc-800 px-3 py-2 body-light rounded-full">
                                Educational
                            </p>
                            <p className="bg-zinc-800 px-3 py-2 body-light rounded-full">
                                Interactive Learning
                            </p>
                        </div>
                        <h3 className="text-xl sm:text-2xl">
                            Academiku: Where Learning Meets Simplicity
                        </h3>
                        <p className="body-light text-sm text-zinc-500">
                            Academiku is an innovative educational app designed to enhance learning experiences with a host of exciting features. It bridges the gap between educators and students, fostering seamless interaction and active participation.
                        </p>

                        <div className="flex justify-between w-full text-purple-600 mt-2 sm:mt-4 ">
                            <p className="link-hover-animation group-hover:link-hovered-animation w-fit text-sm">
                                View details
                                <ArrowRight
                                    className='ml-1 inline-block transition-all duration-300 group-hover:ml-2'
                                />
                            </p>
                        </div>
                    </Link>

                    <Link
                        href="/under-construction"
                        rel="canonical"
                        target="_blank"
                        className="group body w-full flex flex-col gap-4 justify-center items-start text-zinc-200"
                    >
                        <div className="overflow-hidden rounded-xl">
                            <div
                                className={cn(
                                    "absolute top-3 left-3 z-20 inline-flex items-center group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200"
                                )}
                            >
                                <AnimatedShinyText
                                    className="body-light px-4 py-1 text-xs transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400"
                                >
                                    🏆 3rd Place ANFORCOM UI/UX 2023
                                </AnimatedShinyText>
                            </div>
                            <Image
                                src="https://zielbucket.s3.ap-southeast-2.amazonaws.com/public/images/jiwakita.png"
                                width={1000}
                                height={1000}
                                className="w-full h-auto object-cover aspect-video group-hover:scale-105 transition-all"
                                alt="Jiwakita Prototype"
                            />

                        </div>

                        <div className="flex flex-wrap gap-2 text-xs text-zinc-200 items-center">
                            <p className="bg-zinc-800 px-3 py-2 body-light rounded-full">
                                UI/UX Prototype
                            </p>
                            <p className="bg-zinc-800 px-3 py-2 body-light rounded-full">
                                Healthcare
                            </p>
                            <p className="bg-zinc-800 px-3 py-2 body-light rounded-full">
                                Emotional Resilience
                            </p>
                        </div>
                        <h3 className="text-xl sm:text-2xl">
                            Jiwakita: Fulfill Your Mental Needs
                        </h3>
                        <p className="body-light text-sm text-zinc-500">
                            Jiwakita is a mental health app equipped with all-encompassing features tailored to meet users' mental wellness needs. With its versatile functionalities and holistic approach, Jiwakita offers accessible solutions for everyone to enhance their mental well-being.
                        </p>

                        <div className="flex justify-between w-full text-purple-600 mt-2 sm:mt-4 ">
                            <p className="link-hover-animation group-hover:link-hovered-animation w-fit text-sm">
                                View details
                                <ArrowRight
                                    className='ml-1 inline-block transition-all duration-300 group-hover:ml-2'
                                />
                            </p>
                        </div>
                    </Link>

                    <Link
                        href="/under-construction"
                        rel="canonical"
                        target="_blank"
                        className="group body w-full flex flex-col gap-4 justify-center items-start text-zinc-200"
                    >
                        <div className="overflow-hidden rounded-xl">
                            <div
                                className={cn(
                                    "absolute top-3 left-3 z-20 inline-flex items-center group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200"
                                )}
                            >
                                <AnimatedShinyText
                                    className="body-light px-4 py-1 text-xs transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400"
                                >
                                    ⚙️ Course Final Project
                                </AnimatedShinyText>
                            </div>
                            <Image
                                src="https://zielbucket.s3.ap-southeast-2.amazonaws.com/public/images/clipvision.png"
                                width={1000}
                                height={1000}
                                className="w-full h-auto object-cover aspect-video group-hover:scale-105 transition-all"
                                alt="Clipvision"
                            />

                        </div>

                        <div className="flex gap-2 text-xs text-zinc-200 items-center">
                            <p className="bg-zinc-800 px-3 py-2 body-light rounded-full">
                                Web Project
                            </p>
                            <p className="bg-zinc-800 px-3 py-2 body-light rounded-full">
                                RapidAPI
                            </p>
                            <p className="bg-zinc-800 px-3 py-2 body-light rounded-full">
                                Youtube Clone
                            </p>
                        </div>
                        <h3 className="text-xl sm:text-2xl">
                            Clipvision: Easy Video Access
                        </h3>
                        <p className="body-light text-sm text-zinc-500">
                            Upgrading my final task for my Mobile Programming Course—PWA in my university, I utilize a few tools and libraries to develop easier access to youtube videos using RapidAPI.
                        </p>

                        <div className="flex justify-between w-full text-purple-600 mt-2 sm:mt-4 ">
                            <p className="link-hover-animation group-hover:link-hovered-animation w-fit text-sm">
                                View details
                                <ArrowRight
                                    className='ml-1 inline-block transition-all duration-300 group-hover:ml-2'
                                />
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}