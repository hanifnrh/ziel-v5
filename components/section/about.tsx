"use client";
import {
    Link
} from "@nextui-org/react";
import { Dribbble, FileUser, Github, Instagram, Linkedin } from 'lucide-react';
import Image from "next/image";
import { FlickeringGrid } from "../magicui/flickering-grid";

export default function AboutSection() {
    return (
        <div>
            <Image
                className="absolute top-0 z-0 -translate-y-1/2"
                src={"https://farmui.vercel.app/bg-back.png"}
                width={1000}
                height={1000}
                alt="back bg"
            />
            <section className="pt-28 z-10">
                <div className="h-fit text-gray-600 gap-x-12 flex w-full flex-col sm:flex-row items-center justify-between pb-20 gap-16 px-8 md:px-20 2xl:px-52">
                    <div className="flex-none space-y-5 w-full sm:w-7/12 md:px-0">
                        <h2 className="body text-4xl sm:text-3xl lg:text-5xl font-normal tracking-tighter text-transparent bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]">
                            I&apos;m Ziel. UI Designer & Full Stack Developer.
                        </h2>
                        <p className="body-light text-zinc-500 text-sm lg:text-lg">
                            I&apos;m Nurrahmat Hanif, I go by Ziel. A passionate UI/UX designer and full-stack web developer dedicated to crafting exceptional digital experiences. With a love for design and a knack for building visually stunning and functional creations. Based in Jakarta & Semarang, Indonesia.
                        </p>
                        <div className="flex gap-2 lg:gap-4 p-2 lg:p-4 border-2 justify-around sm:justify-center border-dashed border-zinc-200/20 rounded-xl w-full sm:w-fit">
                            <Link
                                href=""
                                rel="canonical"
                                target="_blank"
                                className="scale-100 sm:scale-75 lg:scale-100"
                            >
                                <div className="bg-zinc-200/20 hover:bg-zinc-200/10 transition-all text-zinc-200 hover:text-zinc-200/80 p-3 rounded-lg flex items-center justify-center">
                                    <FileUser />
                                </div>
                            </Link>
                            <Link
                                href=""
                                rel="canonical"
                                target="_blank"
                                className="scale-100 sm:scale-75 lg:scale-100"
                            >
                                <div className=" bg-zinc-200/20 hover:bg-zinc-200/10 transition-all text-zinc-200 hover:text-zinc-200/80 p-3 rounded-lg flex items-center justify-center">
                                    <Github />
                                </div>
                            </Link>
                            <Link
                                href="https://www.instagram.com/ziel.dev/"
                                rel="canonical"
                                target="_blank"
                                className="scale-100 sm:scale-75 lg:scale-100"
                            >
                                <div className=" bg-zinc-200/20 hover:bg-zinc-200/10 transition-all text-zinc-200 hover:text-zinc-200/80 p-3 rounded-lg flex items-center justify-center">
                                    <Instagram />
                                </div>
                            </Link>
                            <Link
                                href="https://dribbble.com/dailyziel"
                                rel="canonical"
                                target="_blank"
                                className="scale-100 sm:scale-75 lg:scale-100"
                            >
                                <div className=" bg-zinc-200/20 hover:bg-zinc-200/10 transition-all text-zinc-200 hover:text-zinc-200/80 p-3 rounded-lg flex items-center justify-center">
                                    <Dribbble />
                                </div>
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/nurrahmat-hanif-635055218 "
                                rel="canonical"
                                target="_blank"
                                className="scale-100 sm:scale-75 lg:scale-100"
                            >
                                <div className=" bg-zinc-200/20 hover:bg-zinc-200/10 transition-all text-zinc-200 hover:text-zinc-200/80 p-3 rounded-lg flex items-center justify-center">
                                    <Linkedin />
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="relative h-full w-full overflow-hidden rounded-lg border bg-background p-6">
                        <FlickeringGrid
                            className="absolute inset-0 z-0 size-full"
                            squareSize={4}
                            gridGap={6}
                            color="#6B7280"
                            maxOpacity={0.5}
                            flickerChance={0.1}
                            height={800}
                            width={800}
                        />
                        <div className="relative group">
                            <Image
                                src="https://zielbucket.s3.ap-southeast-2.amazonaws.com/public/images/about.jpg"
                                height={1000}
                                width={1000}
                                className="z-20 w-full aspect-square object-cover rounded-lg brightness-50 grayscale"
                                alt="thumbnail"
                            />
                            {/* Fuzzy Noise & Purple Overlay */}
                            <div className="absolute inset-0 bg-purple-800 opacity-70 mix-blend-soft-light rounded-lg"></div>
                            <div className="absolute inset-0 bg-noise opacity-10 rounded-lg"></div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}