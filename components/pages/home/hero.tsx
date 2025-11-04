"use client";
import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";
import Image from "next/image";
import { useRef } from 'react';
import { GiPolarStar } from "react-icons/gi";

export default function Hero() {
    const videoRef = useRef<HTMLVideoElement>(null)

    return (
        <div>
            <section className="flex flex-col justify-center gap-6 lg:gap-14 h-screen z-10 px-4 md:px-10 xl:px-14">
                <div className="relative h-fit text-neutral-600 gap-x-6 grid grid-cols-1 sm:grid-cols-6 items-center justify-between gap-4 sm:gap-16">
                    <GiPolarStar className="absolute animate-[spin_3s_linear_infinite] right-[460px] -top-14 size-24 sm:size-28 text-amber-400"/>
                    <GiPolarStar className="absolute animate-[spin_3s_linear_infinite] left-0 sm:left-[30px] -bottom-10 size-20 sm:size-28 text-violet-600"/>
                    
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="w-full flex flex-col items-start justify-center gap-4 md:px-0 sm:col-span-4 order-2 sm:order-1">
                        <h2 className="body-bold sm:body text-4xl lg:text-7xl text-left tracking-tighter bg-gradient-to-b from-neutral-900 via-neutral-700 to-neutral-600/70 bg-clip-text text-transparent flex items-center gap-4 sm:gap-8">
                            Purpose Driven
                            <Image
                                src="/images/pixels.png"
                                alt="pixels"
                                width={100}
                                height={100}
                                className="h-8 lg:h-full w-auto inline-block align-middle mx-2"
                            />
                        </h2>
                        <div className="flex items-start gap-4 sm:gap-8">
                            <Image
                                src="/images/ideas.png"
                                alt="ideas"
                                width={100}
                                height={100}
                                className="h-8 lg:h-full w-auto inline-block align-middle mx-2"
                            />
                            <div className="flex flex-col gap-4">
                                <h2 className="body-bold sm:body text-4xl lg:text-7xl text-left tracking-tighter inline-flex gap-4">
                                    <span className="bg-gradient-to-b from-neutral-900 via-neutral-700 to-neutral-600/70 bg-clip-text text-transparent">
                                        Product
                                    </span>
                                    <span className="bg-gradient-to-b from-violet-600 to-violet-500/70 bg-clip-text text-transparent">
                                        Designer
                                    </span>
                                </h2>
                                <p className="body-light text-neutral-700 dark:text-neutral-500 text-left text-lg lg:text-2xl">
                                    Design engineer who crafts immersive experiences that blend creativity with technology, ensuring functionality meets aesthetics.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="w-full h-full flex flex-col gap-4 sm:gap-8 items-center justify-center sm:justify-end sm:col-span-2 order-1 sm:order-2">
                        <h1 className="body text-sm text-violet-500 dark:text-neutral-400 group sm:mr-auto px-5 py-2 bg-violet-100 dark:bg-gradient-to-tr from-neutral-300/5 via-neutral-400/5 to-transparent dark:border-[2px] dark:border-white/5 rounded-3xl w-fit flex sm:hidden items-center">
                            Creative Designer & Developer
                            <Lightbulb className="inline w-4 h-4 ml-2  duration-300" />
                        </h1>
                        <video
                            ref={videoRef}
                            className="w-96 h-auto object-cover rounded-3xl aspect-video sm:aspect-square"
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="auto"
                        >
                            <source src="/videos/hero.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}