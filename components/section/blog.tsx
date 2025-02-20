"use client"
import {
    Link
} from "@nextui-org/react";
import { ArrowRight, BookOpenText } from "lucide-react";
import Image from "next/image";
import { SpotlightButton } from "../ui/spotlight-button";

export default function Blog() {

    return (
        <div>

            <div className="px-8 md:px-20 2xl:px-52 py-5">
                <h2 className="flex bg-purple-600/20 text-purple-600 px-4 py-2 rounded-full w-fit">
                    <BookOpenText className="mr-2" />
                    Blog
                </h2>
            </div>

            <div className="px-8 md:px-20 2xl:px-52 pb-10 flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between">
                <div className="sm:w-2/3 xl:w-1/2 flex flex-col gap-4">
                    <h3 className="flex text-4xl sm:text-3xl lg:text-5xl body tracking-tighter text-transparent bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]">
                        Thoughts, Ideas & Explorations
                    </h3>
                    <p className="text-zinc-500 body-light text-md lg:text-lg">
                        A space to share insights, experiences, and reflections—on design, development, and everything in between.
                    </p>
                </div>
                <Link
                    href="/under-construction"
                    rel="canonical"
                    className="sm:w-1/3 xl:w-1/2 text-zinc-200 flex justify-start items-start sm:justify-end">
                    <SpotlightButton />
                </Link>
            </div>

            <div className="w-full relative flex flex-col items-start px-8 md:px-20 2xl:px-52 pb-20 bg-background" id="projects">
                <div className="grid grid-cols-1 gap-8 items-start">
                    <Link
                        href="/under-construction"
                        rel="canonical"
                        target="_blank"
                        className="group body grid grid-cols-1 sm:grid-cols-[1fr_5fr] gap-4 lg:gap-6 xl:gap-8 justify-center items-start text-zinc-200"
                    >
                        <div className="aspect-3/2 overflow-hidden rounded-xl w-full sm:w-60">
                            <Image
                                src="https://images.unsplash.com/photo-1620202401475-7d6d38a40080?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                width={1000}
                                height={1000}
                                className="w-full h-auto group-hover:scale-105 transition-all"
                                alt="Thumbnail"
                            />
                        </div>
                        <div className="w-full h-full flex flex-col gap-4 justify-between">
                            <div className="flex flex-col gap-2">
                                <div className="body-light gap-2 text-xs sm:text-sm text-zinc-200">
                                    February 14th, 2025
                                </div>
                                <h3 className="text-xl lg:text-3xl">
                                    Section Under Construction
                                </h3>
                                <p className="body-light text-sm sm:text-md text-zinc-500">
                                    This section is on its way, please come back again later 🚧
                                </p>
                            </div>
                            <div className="flex justify-between w-full">
                                <p className="link-hover-animation text-purple-500 group-hover:link-hovered-animation w-fit text-sm ">
                                    Read more
                                    <ArrowRight
                                        className='ml-1 inline-block transition-all duration-300 group-hover:ml-2'
                                    />
                                </p>
                                <div className="flex body-light text-zinc-500 gap-2">
                                    <p className="bg-zinc-200/10 px-3 py-2 text-xs rounded-sm">
                                        tag
                                    </p>

                                    <p className="bg-zinc-200/10 px-3 py-2 text-xs rounded-sm">
                                        tag
                                    </p>
                                </div>
                            </div>
                        </div>

                    </Link>
                </div>
            </div>
        </div>
    )
}