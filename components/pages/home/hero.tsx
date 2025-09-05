"use client";
import { Lightbulb } from "lucide-react";
import Image from "next/image";
import { useRef } from 'react';

export default function Hero() {
    const videoRef = useRef<HTMLVideoElement>(null)

    return (
        <div>
            <section className="flex flex-col justify-center gap-6 lg:gap-14 pt-4 sm:pt-10 pb-20 lg:pt-14 lg:pb-28 z-10">
                <Image
                    src="/logo/zielviolet.png"
                    alt="Ziel Logo"
                    width={100}
                    height={100}
                    className="flex w-10 lg:w-14 h-auto align-middle mx-auto"
                />
                <div className="h-fit text-neutral-600 gap-x-6 grid grid-cols-1 sm:grid-cols-6 items-center justify-between gap-4 sm:gap-16 px-4 md:px-20 xl:px-28">
                    <div className="w-full flex flex-col items-center sm:items-start justify-center gap-4 md:px-0 sm:col-span-4 order-2 sm:order-1">
                        <h1 className="hidden sm:flex text-sm text-violet-700 dark:text-neutral-400 group sm:mr-auto px-5 py-2 bg-violet-100 dark:bg-gradient-to-tr from-neutral-300/5 via-neutral-400/5 to-transparent dark:border-[2px] dark:border-white/5 rounded-3xl w-fit items-center">
                            Creative Designer & Developer
                            <Lightbulb className="inline w-4 h-4 ml-2  duration-300" />
                        </h1>
                        <h2 className="body-bold sm:body text-3xl sm:text-4xl lg:text-7xl text-left tracking-tighter bg-gradient-to-b from-violet-700 via-violet-00 to-violet-500/70 bg-clip-text text-transparent">
                            Design Engineer who makes pixels{" "}
                            <Image
                                src="/images/pixels.png"
                                alt="pixels"
                                width={100}
                                height={100}
                                className="h-8 lg:h-full w-auto inline-block align-middle mx-2"
                            />{" "}
                            dance and ideas{" "}
                            <Image
                                src="/images/ideas.png"
                                alt="ideas"
                                width={100}
                                height={100}
                                className="h-8 lg:h-full w-auto inline-block align-middle mx-2"
                            />{" "}
                            come alive.
                        </h2>

                        <p className="body-light text-neutral-700 dark:text-neutral-500 text-left text-base lg:text-xl">
                            Digital should feel fun and engaging. I craft immersive experiences that blend creativity with technology, ensuring functionality meets aesthetics.
                        </p>

                    </div>
                    <div className="w-full h-full flex flex-col gap-4 sm:gap-8 items-center justify-center sm:justify-end sm:col-span-2 order-1 sm:order-2">
                        <h1 className="text-sm text-violet-500 dark:text-neutral-400 group sm:mr-auto px-5 py-2 bg-violet-100 dark:bg-gradient-to-tr from-neutral-300/5 via-neutral-400/5 to-transparent dark:border-[2px] dark:border-white/5 rounded-3xl w-fit flex sm:hidden items-center">
                            Creative Designer & Developer
                            <Lightbulb className="inline w-4 h-4 ml-2  duration-300" />
                        </h1>
                        <video
                            ref={videoRef}
                            className="w-full h-auto object-cover rounded-3xl aspect-video sm:aspect-square"
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="auto"
                        >
                            <source src="/videos/hero.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </section>
        </div>
    )
}