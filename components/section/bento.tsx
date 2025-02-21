"use client"
import { MainMenusGradientCard } from "@/components/ui/animated-card";
import { Marquee } from "@/components/ui/marquee";
import {
    Link
} from "@nextui-org/react";
import { ArrowUpRight, Atom, FolderGit2, Languages, MapPin, MoveRight, Target, Timer } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlineSpotify } from "react-icons/ai";
import { FaRegKeyboard, FaSpotify } from "react-icons/fa";
import { BentoCard } from "../ui/bento-card";

interface Track {
    name: string;
    artist: string;
    albumImageUrl: string;
    spotifyUrl: string;
}

export default function Bento() {
    const [track, setTrack] = useState<Track | null>(null);

    useEffect(() => {
        fetch("/api/spotify/recently-played")
            .then((res) => res.json())
            .then((data) => {
                if (!data.error) {
                    setTrack(data);
                }
            });
    }, []);

    if (!track) return null; // Hide component if no track found

    const companies = [
        {
            name: "Next.js",
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1280px-Nextjs-logo.svg.png",
        },
        {
            name: "GitHub",
            url: "https://res.cloudinary.com/eldoraui/image/upload/v1734066341/GitHub_honend.svg",
        },
        {
            name: "Figma",
            url: "https://1000logos.net/wp-content/uploads/2024/09/Figma-Logo.png",
        },
        {
            name: "Tailwind",
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Tailwind_CSS_logo.svg/2560px-Tailwind_CSS_logo.svg.png",
        },
        {
            name: "React",
            url: "https://logos-world.net/wp-content/uploads/2023/08/React-Symbol.png",
        },
        {
            name: "Laravel",
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Logo.min.svg/2560px-Logo.min.svg.png",
        },
        {
            name: "Vercel",
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Vercel_logo_black.svg/640px-Vercel_logo_black.svg.png",
        },
    ];
    return (
        <div className="w-full grid grid-cols-1 xl:grid-cols-[3fr_1fr] gap-2 pb-20 px-8 md:px-20 2xl:px-52 text-zinc-200">

            <div className="w-full gap-2 grid grid-cols-1">
                <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-2">
                    <div className="">
                        <MainMenusGradientCard
                            description="Design tools and code tools I mainly use. Focused on React or Javascript ecosystem, recently have been using Next.js"
                            title="Tech stack I mainly use"
                        >
                            <h2 className="text-sm text-gray-400 group mr-auto px-5 py-2 bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent  border-[2px] border-white/5 rounded-3xl w-fit flex items-center">
                                <Atom className="inline w-4 h-4 mr-2  duration-300" />
                                Tech Stack
                            </h2>

                            <section id="logos">
                                <div className="container mx-auto ">
                                    <div className="relative mt-6">
                                        <Marquee className="max-w-full [--duration:40s]">
                                            {companies.map((company, idx) => (
                                                <Image
                                                    key={idx}
                                                    width={112}
                                                    height={40}
                                                    src={company.url}
                                                    className="h-10 w-28 object-contain opacity-30 grayscale brightness-0 invert"
                                                    alt={company.name}
                                                />
                                            ))}
                                        </Marquee>
                                        <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent"></div>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-transparent"></div>
                                    </div>
                                </div>
                            </section>

                        </MainMenusGradientCard>
                    </div>
                    <div className="hidden lg:block">
                        <BentoCard>
                            <h2 className="text-sm text-gray-400 group mr-auto px-5 py-2 bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent  border-[2px] border-white/5 rounded-3xl w-fit flex items-center">
                                <FaRegKeyboard className="inline w-4 h-4 mr-2  duration-300" />
                                Typing Speed
                            </h2>

                            <div className="mt-5 flex justify-start items-end  body-bold text-zinc-200">
                                <h3 className="text-6xl xl:text-8xl">
                                    116
                                </h3>
                                <p className="text-lg">
                                    wpm
                                </p>
                            </div>

                            <div className="mt-5  flex sm:items-start gap-2 lg:gap-0 lg:justify-between body-light text-sm text-zinc-200">
                                <p className="inline-flex items-center justify-center">
                                    <Timer size={15} className="mr-1" />
                                    1 minute
                                </p>
                                <p className="inline-flex items-center justify-center">
                                    <Target size={15} className="mr-1" />
                                    99%
                                </p>
                                <p className="inline-flex items-center justify-center">
                                    <Languages size={15} className="mr-1" />
                                    ID
                                </p>
                            </div>

                        </BentoCard>
                    </div>
                </div>

                <div className="hidden sm:grid lg:hidden grid-cols-2 gap-2">
                    <div className="">
                        <BentoCard>
                            <h2 className="text-sm text-gray-400 group mr-auto px-5 py-2 bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent  border-[2px] border-white/5 rounded-3xl w-fit flex items-center">
                                <MapPin className="inline w-4 h-4 mr-2  duration-300" />
                                Location
                            </h2>
                            <div className="rounded-xl mt-5">
                                <div className="relative rounded-xl">
                                    <Image
                                        src="https://zielbucket.s3.ap-southeast-2.amazonaws.com/public/images/location.png"
                                        width={1000}
                                        height={1000}
                                        alt="Location in Bekasi, West Java"
                                        className="w-full z-20 rounded-xl object-cover aspect-video grayscale invert"
                                    />
                                    <div className="absolute inset-0 bg-purple-800 opacity-70 mix-blend-soft-light rounded-xl"></div>
                                </div>
                            </div>
                        </BentoCard>
                    </div>
                    <div className="">
                        <BentoCard>
                            <h2 className="text-sm text-gray-400 group mr-auto px-5 py-2 bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent  border-[2px] border-white/5 rounded-3xl w-fit flex items-center">
                                <FaRegKeyboard className="inline w-4 h-4 mr-2  duration-300" />
                                Typing Speed
                            </h2>

                            <div className="mt-5 flex justify-start items-end  body-bold text-zinc-200">
                                <h3 className="text-6xl xl:text-8xl">
                                    116
                                </h3>
                                <p className="text-lg">
                                    wpm
                                </p>
                            </div>

                            <div className="mt-5  flex sm:items-start gap-2 lg:gap-0 lg:justify-between body-light text-sm text-zinc-200">
                                <p className="inline-flex items-center justify-center">
                                    <Timer size={15} className="mr-1" />
                                    1 minute
                                </p>
                                <p className="inline-flex items-center justify-center">
                                    <Target size={15} className="mr-1" />
                                    99%
                                </p>
                                <p className="inline-flex items-center justify-center">
                                    <Languages size={15} className="mr-1" />
                                    ID
                                </p>
                            </div>

                        </BentoCard>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-2">
                    <div className="sm:hidden lg:block">
                        <BentoCard>
                            <h2 className="text-sm text-gray-400 group mr-auto px-5 py-2 bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent  border-[2px] border-white/5 rounded-3xl w-fit flex items-center">
                                <MapPin className="inline w-4 h-4 mr-2  duration-300" />
                                Location
                            </h2>
                            <div className=" mt-5">
                                <div className="relative">
                                    <Image
                                        src="https://zielbucket.s3.ap-southeast-2.amazonaws.com/public/images/location.png"
                                        width={1000}
                                        height={1000}
                                        alt="Location in Bekasi, West Java"
                                        className="w-full z-20 rounded-xl object-cover aspect-video grayscale invert"
                                    />
                                    <div className="absolute inset-0 bg-purple-800 opacity-70 mix-blend-soft-light"></div>
                                </div>
                            </div>
                        </BentoCard>
                    </div>
                    <div className="group">
                        <BentoCard>
                            <div className="flex justify-between items-center ">
                                <h2 className="text-sm  text-gray-400 group mr-auto px-5 py-2 bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent  border-[2px] border-white/5 rounded-3xl w-fit flex items-center">
                                    <AiOutlineSpotify className="inline w-4 h-4 mr-2  duration-300 transition-all" />
                                    Spotify Last Played
                                </h2>
                                <div className="text-zinc-200 text-3xl group-hover:text-green-600">
                                    <FaSpotify />
                                </div>
                            </div>

                            <div className="flex flex-row gap-4 mt-5 items-center">
                                <Image
                                    src={track.albumImageUrl}
                                    width={1000}
                                    height={1000}
                                    alt="Spotify Last Played"
                                    className="sm:h-32 h-24 w-auto rounded-xl"
                                />
                                <div className="flex flex-col">
                                    <h3 className="body text-xl line-clamp-1">{track.name}</h3>
                                    <p className="body-light text-base line-clamp-1">{track.artist}</p>
                                    <Link
                                        href={track.spotifyUrl}
                                        rel="canonical"
                                        target="_blank"
                                        className="body-light text-base w-fit text-green-600 border-b border-green-600"
                                    >
                                        Play on Spotify
                                        <MoveRight className="ml-2" />
                                    </Link>
                                </div>
                            </div>

                        </BentoCard>
                    </div>
                </div>
            </div>

            <div className="">
                <MainMenusGradientCard
                    description="Projects I have been working on and finished, both personal and work projects."
                    title="Projects"
                >
                    <h2 className="text-sm text-gray-400 group mr-auto px-5 py-2 bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent  border-[2px] border-white/5 rounded-3xl w-fit flex items-center">
                        <FolderGit2 className="inline w-4 h-4 mr-2 duration-300" />
                        Projects
                    </h2>
                    <ul className="body-light flex flex-col gap-4 my-5">
                        <li>
                            <Link
                                href="https://clipvision.vercel.app/"
                                rel="canonical"
                                target="_blank"
                                className="border-b py-2 w-full flex justify-between text-zinc-200"
                            >
                                Clipvision
                                <ArrowUpRight />
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://www.ecofix.id/"
                                rel="canonical"
                                target="_blank"
                                className="border-b py-2 w-full flex justify-between text-zinc-200"
                            >
                                Ecofix
                                <ArrowUpRight />
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://www.lancarin.com/"
                                rel="canonical"
                                target="_blank"
                                className="border-b py-2 w-full flex justify-between text-zinc-200"
                            >
                                Lancarin.com
                                <ArrowUpRight />
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://www.figma.com/proto/4dpPY9tTTpaERumMd80OqI/Academiku?page-id=0%3A1&node-id=90-837&viewport=505%2C2553%2C0.87&t=tt3fxops6J46CJzg-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=290%3A1758&show-proto-sidebar=1"
                                rel="canonical"
                                target="_blank"
                                className="border-b py-2 w-full flex justify-between text-zinc-200"
                            >
                                Academiku
                                <ArrowUpRight />
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://www.figma.com/proto/JOBOHqk9w13ZWEth8bbTTZ/jiwakita?page-id=170%3A2702&node-id=874-30730&starting-point-node-id=874%3A25000&t=doKBH4JOUhc4Ac5I-1"
                                rel="canonical"
                                target="_blank"
                                className="border-b py-2 w-full flex justify-between text-zinc-200"
                            >
                                Jiwakita
                                <ArrowUpRight />
                            </Link>
                        </li>
                    </ul>
                </MainMenusGradientCard>
            </div>

        </div>
    )
}