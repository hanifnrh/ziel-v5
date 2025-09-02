"use client";
import { GradientButton } from "@/components/ui/gradient-button";
import {
    Link
} from "@nextui-org/react";
import { Github, Lightbulb, Sparkles } from "lucide-react";
import { useRef } from 'react';
import { useMenu } from "../../ui/menuprovider";

export default function Hero() {
    const { openMenu } = useMenu();
    const videoRef = useRef<HTMLVideoElement>(null)

    return (
        <div>
            <section className="py-20 lg:py-28 z-10 md:mt-8">
                <div className="h-fit text-neutral-600 gap-x-6 grid grid-cols-1 sm:grid-cols-6 items-center justify-between gap-4 sm:gap-16 px-4 md:px-20 2xl:px-52">
                    <div className="w-full flex flex-col items-center sm:items-start justify-center gap-4 md:px-0 sm:col-span-4 order-2 sm:order-1">
                        <h1 className="hidden sm:flex text-sm text-violet-500 dark:text-neutral-400 group sm:mr-auto px-5 py-2 bg-violet-100 dark:bg-gradient-to-tr from-neutral-300/5 via-neutral-400/5 to-transparent dark:border-[2px] dark:border-white/5 rounded-3xl w-fit items-center">
                            Creative Designer & Developer
                            <Lightbulb className="inline w-4 h-4 ml-2  duration-300" />
                        </h1>
                        <h2 className="body text-4xl sm:text-3xl text-center sm:text-left font-normal tracking-tighter lg:text-5xl bg-gradient-to-b from-violet-700 via-violet-00 to-violet-500/70 bg-clip-text text-transparent">
                            Engineer by trade, creative by nature.
                        </h2>

                        <p className="body-light text-neutral-700 dark:text-neutral-500 text-center sm:text-justify text-md lg:text-lg">
                            Digital should feel fun and engaging. I craft immersive experiences that blend creativity with technology, ensuring functionality meets aesthetics.
                        </p>
                        <div className="flex gap-2">

                            <GradientButton onClick={openMenu}> <Sparkles className="mr-2" />Get in Touch</GradientButton>

                            <Link
                                href="https://github.com/hanifnrh"
                                rel="canonical"
                                target="_blank"
                            >
                                <GradientButton variant="variant"> <Github className="mr-2" />Github</GradientButton>
                            </Link>
                        </div>
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