"use client"
import { DotPattern } from "@/components/magicui/dot-pattern";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { SimpleCard_V5 } from "@/components/ui/cardv5";
import { LinkPreview } from "@/components/ui/link-preview";
import { RainbowButton } from "@/components/ui/rainbow-button";
import RippleButton from "@/components/ui/ripple-button";
import { cn } from "@/lib/utils";
import {
    Link
} from "@nextui-org/react";
import { ArrowRight, Pickaxe } from "lucide-react";
import Image from "next/image";

export default function ProjectsAll() {

    return (
        <div>
            <div className="px-8 md:px-20 2xl:px-52 py-5">
                <h2 className="flex bg-purple-600/20 text-purple-600 px-4 py-2 rounded-full w-fit">
                    <Pickaxe className="mr-2" />
                    Projects
                </h2>
            </div>

            <div className="relative flex flex-col gap-10 items-center px-8 md:px-20 2xl:px-52 pb-20 bg-background" id="projects">
                <DotPattern
                    className={cn(
                        "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
                    )}
                />

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-start">
                    <Link
                        href=""
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
                                className="w-full h-auto aspect-video group-hover:scale-105 transition-all"
                                alt="Academiku Prototype"
                            />

                        </div>

                        <div className="flex gap-2 text-xs text-zinc-200 items-center">
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
                        <h3 className="text-2xl">
                            Academiku: Where Learning Meets Simplicity
                        </h3>
                        <p className="body-light text-sm">
                            Academiku is an innovative educational app designed to enhance learning experiences with a host of exciting features. It bridges the gap between educators and students, fostering seamless interaction and active participation.
                        </p>

                        <div className="flex justify-between w-full text-purple-600 mt-4">
                            <p className="link-hover-animation group-hover:link-hovered-animation w-fit text-sm">
                                Read more
                                <ArrowRight
                                    className='ml-1 inline-block transition-all duration-300 group-hover:ml-2'
                                />
                            </p>
                        </div>
                    </Link>

                    <Link
                        href=""
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
                                className="w-full h-auto aspect-video group-hover:scale-105 transition-all"
                                alt="Jiwakita Prototype"
                            />

                        </div>

                        <div className="flex gap-2 text-xs text-zinc-200 items-center">
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
                        <h3 className="text-2xl">
                            Jiwakita: Fulfill Your Mental Needs
                        </h3>
                        <p className="body-light text-sm">
                            Jiwakita is a mental health app equipped with all-encompassing features tailored to meet users' mental wellness needs. With its versatile functionalities and holistic approach, Jiwakita offers accessible solutions for everyone to enhance their mental well-being.
                        </p>

                        <div className="flex justify-between w-full text-purple-600 mt-4">
                            <p className="link-hover-animation group-hover:link-hovered-animation w-fit text-sm">
                                Read more
                                <ArrowRight
                                    className='ml-1 inline-block transition-all duration-300 group-hover:ml-2'
                                />
                            </p>
                        </div>
                    </Link>

                    <Link
                        href=""
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
                                className="w-full h-auto aspect-video group-hover:scale-105 transition-all"
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
                        <h3 className="text-2xl">
                            Clipvision: Easy Video Access
                        </h3>
                        <p className="body-light text-sm">
                            Upgrading my final task for my Mobile Programming Course—PWA in my university, I utilize a few tools and libraries to develop easier access to youtube videos using RapidAPI.
                        </p>

                        <div className="flex justify-between w-full text-purple-600 mt-4">
                            <p className="link-hover-animation group-hover:link-hovered-animation w-fit text-sm">
                                Read more
                                <ArrowRight
                                    className='ml-1 inline-block transition-all duration-300 group-hover:ml-2'
                                />
                            </p>
                        </div>
                    </Link>

                    <Link
                        href=""
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
                                    🌱 Community Service Program
                                </AnimatedShinyText>
                            </div>
                            <Image
                                src="https://zielbucket.s3.ap-southeast-2.amazonaws.com/public/images/kerjokidul.png"
                                width={1000}
                                height={1000}
                                className="w-full h-auto aspect-video group-hover:scale-105 transition-all"
                                alt="Kerjo Kidul"
                            />

                        </div>

                        <div className="flex gap-2 text-xs text-zinc-200 items-center">
                            <p className="bg-zinc-800 px-3 py-2 body-light rounded-full">
                                Web Project
                            </p>
                            <p className="bg-zinc-800 px-3 py-2 body-light rounded-full">
                                Hygraph
                            </p>
                            <p className="bg-zinc-800 px-3 py-2 body-light rounded-full">
                                GraphQL
                            </p>
                        </div>
                        <h3 className="text-2xl">
                            Kerjo Kidul: Showcasing the Soul of Kerjo Kidul
                        </h3>
                        <p className="body-light text-sm">
                            Kerjo Kidul is a charming village nestled in the Ngadirojo sub-district, Wonogiri Regency, Central Java, Indonesia. This website serves as a hub for village news, events, and information, showcasing the vibrant culture and community spirit of Kerjo Kidul. Built with Next.js, GraphQL, and Tailwind CSS.
                        </p>

                        <div className="flex justify-between w-full text-purple-600 mt-4">
                            <p className="link-hover-animation group-hover:link-hovered-animation w-fit text-sm">
                                Read more
                                <ArrowRight
                                    className='ml-1 inline-block transition-all duration-300 group-hover:ml-2'
                                />
                            </p>
                        </div>
                    </Link>
                </div>

                <div className="mt-10">
                    <div className="flex justify-center">
                        <div
                            className={cn(
                                "inline-flex items-center group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                            )}
                        >
                            <AnimatedShinyText
                                className="px-4 py-1 text-xs sm:text-sm transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400"
                            >
                                🌱 Community Service Program
                            </AnimatedShinyText>
                        </div>
                    </div>

                    <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-10 body-light text-lg mt-10">
                        <div >
                            <div className="flex flex-col flex-wrap">
                                Kerjo Kidul Village Website
                            </div>
                            <div className="body-bold text-2xl lg:text-5xl mt-2">
                                Showcasing the Soul of Kerjo Kidul
                            </div>
                            <div className="flex flex-wrap gap-2 mt-5 body-light text-sm">
                                <div className="bg-zinc-800 text-zinc-200 rounded-full items-center justify-center flex px-3 py-1.5">
                                    Website
                                </div>
                                <div className="bg-zinc-800 text-zinc-200 rounded-full items-center justify-center flex px-3 py-1.5">
                                    Full-Stack Application
                                </div>
                                <div className="bg-zinc-800 text-zinc-200 rounded-full items-center justify-center flex px-3 py-1.5">
                                    Community Connection
                                </div>
                                <div className="bg-zinc-800 text-zinc-200 rounded-full items-center justify-center flex px-3 py-1.5">
                                    Local Business
                                </div>
                            </div>
                            <div className="mt-5 text-sm sm:text-lg text-justify">
                                Kerjo Kidul is a charming village nestled in the Ngadirojo sub-district, Wonogiri Regency, Central Java, Indonesia. This website serves as a hub for village news, events, and information, showcasing the vibrant culture and community spirit of Kerjo Kidul. Built with Next.js, GraphQL, and Tailwind CSS.
                            </div>
                            <div className="flex flex-row items-center justify-center xl:justify-start gap-3 mt-5">
                                <RainbowButton>
                                    <LinkPreview url="https://www.kerjokidul.id/" className="text-sm lg:text-lg text-white dark:text-black">
                                        Live Preview
                                    </LinkPreview>{" "}
                                </RainbowButton>
                                <RippleButton rippleColor="#ADD8E6">
                                    <Link
                                        href="https://github.com/hanifnrh/kerjokidul"
                                        target="_blank"
                                        className="text-sm lg:text-lg"
                                        rel="canonical"
                                    >
                                        Github
                                    </Link>
                                </RippleButton>
                            </div>
                        </div>
                        <div >
                            <SimpleCard_V5>
                                <Image src="https://zielbucket.s3.ap-southeast-2.amazonaws.com/public/images/kerjokidul.png" width={1000} height={1000} className="w-full h-auto" alt="Kerjo Kidul Web" />
                            </SimpleCard_V5>
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <div className="flex justify-center">
                        <div
                            className={cn(
                                "inline-flex items-center group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                            )}
                        >
                            <AnimatedShinyText
                                className="px-4 py-1 text-xs sm:text-sm transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400"
                            >
                                ⚙️ Course Final Project
                            </AnimatedShinyText>
                        </div>
                    </div>

                    <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-10 body-light text-lg mt-10">
                        <div className="order-1 xl:order-2" >
                            <div className="flex flex-col flex-wrap">
                                Clipvision
                            </div>
                            <div className="body-bold text-2xl lg:text-5xl mt-2">
                                Easy Video Access
                            </div>
                            <div className="flex flex-wrap gap-2 mt-5 body-light text-sm">
                                <div className="bg-zinc-800 text-zinc-200 rounded-full items-center justify-center flex px-3 py-1.5">
                                    Website
                                </div>
                                <div className="bg-zinc-800 text-zinc-200 rounded-full items-center justify-center flex px-3 py-1.5">
                                    RapidAPI
                                </div>
                                <div className="bg-zinc-800 text-zinc-200 rounded-full items-center justify-center flex px-3 py-1.5">
                                    Youtube Clone
                                </div>
                            </div>
                            <div className="mt-5 text-sm sm:text-lg text-justify">
                                Upgrading my final task for my Mobile Programming Course—PWA in my university, I utilize a few tools and libraries to develop easier access to youtube videos using RapidAPI.
                            </div>
                            <div className="flex flex-row items-center justify-center xl:justify-start gap-3 mt-5">
                                <RainbowButton>
                                    <LinkPreview url="https://clipvision.vercel.app/" className="text-sm lg:text-lg text-white dark:text-black">
                                        Live Preview
                                    </LinkPreview>{" "}
                                </RainbowButton>
                                <RippleButton rippleColor="#ADD8E6">
                                    <Link
                                        href="https://github.com/hanifnrh/clip-vision"
                                        target="_blank"
                                        className="text-sm lg:text-lg"
                                        rel="canonical"
                                    >
                                        Github
                                    </Link>
                                </RippleButton>
                            </div>
                        </div>
                        <div className="order-2 xl:order-1" >
                            <SimpleCard_V5>
                                <Image src="https://zielbucket.s3.ap-southeast-2.amazonaws.com/public/images/clipvision.png" width={1000} height={1000} className="w-full h-auto" alt="Clipvision Web" />
                            </SimpleCard_V5>
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <div className="flex justify-center">
                        <div
                            className={cn(
                                "inline-flex items-center group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                            )}
                        >
                            <AnimatedShinyText
                                className="px-4 py-1 text-xs sm:text-sm transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400"
                            >
                                💻 Internship
                            </AnimatedShinyText>
                        </div>
                    </div>

                    <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-10 body-light text-lg mt-10">
                        <div >
                            <div className="flex flex-col flex-wrap">
                                PT Gama Abyakta Sejahtera
                            </div>
                            <div className="body-bold text-2xl lg:text-5xl mt-2">
                                Ecofix: Engineering Service Company
                            </div>
                            <div className="flex flex-wrap gap-2 mt-5 body-light text-sm">
                                <div className="bg-zinc-800 text-zinc-200 rounded-full items-center justify-center flex px-3 py-1.5">
                                    Website
                                </div>
                                <div className="bg-zinc-800 text-zinc-200 rounded-full items-center justify-center flex px-3 py-1.5">
                                    Front-End Website
                                </div>
                                <div className="bg-zinc-800 text-zinc-200 rounded-full items-center justify-center flex px-3 py-1.5">
                                    Engineering Service
                                </div>
                                <div className="bg-zinc-800 text-zinc-200 rounded-full items-center justify-center flex px-3 py-1.5">
                                    Company Website
                                </div>
                            </div>
                            <div className="mt-5 text-sm sm:text-lg text-justify">
                                As web developer intern, I developed and maintain the website. Ecofix is a engineering service company that provides plumbing service, grease trap, and AC Service. I implement best practices, improve the performance, accessibility, and SEO.
                            </div>
                            <div className="flex flex-row items-center justify-center xl:justify-start gap-3 mt-5">
                                <RainbowButton>
                                    <LinkPreview url="https://www.ecofix.id/" className="text-sm lg:text-lg text-white dark:text-black">
                                        Live Preview
                                    </LinkPreview>{" "}
                                </RainbowButton>
                                <RippleButton rippleColor="#ADD8E6">
                                    <Link
                                        href="https://github.com/gassolution/gas-web"
                                        target="_blank"
                                        className="text-sm lg:text-lg"
                                        rel="canonical"
                                    >
                                        Github
                                    </Link>
                                </RippleButton>
                            </div>
                        </div>
                        <div >
                            <SimpleCard_V5>
                                <Image src="https://zielbucket.s3.ap-southeast-2.amazonaws.com/public/images/ecofix.png" width={1000} height={1000} className="w-full h-auto" alt="Ecofix Page" />
                            </SimpleCard_V5>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}