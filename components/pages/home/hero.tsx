"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from 'react';
import { GiPolarStar } from "react-icons/gi";

export default function Hero() {
    const videoRef = useRef<HTMLVideoElement>(null)

    return (
        <div>
            <section className="flex flex-col justify-center gap-6 lg:gap-14 h-screen z-10 px-4 md:px-10 xl:px-14">
                <div className="relative h-fit text-neutral-600 gap-x-6 grid grid-cols-1 sm:grid-cols-6 items-center justify-between gap-4 sm:gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="absolute left-0 sm:left-[30px] -bottom-10 "
                    >
                        <GiPolarStar className="animate-[spin_3s_linear_infinite] size-20 sm:size-28 text-violet-600" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="absolute -bottom-10 right-[460px] -top-14 "
                    >
                        <GiPolarStar className="animate-[spin_3s_linear_infinite] size-24 sm:size-28 text-amber-400" />

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="w-full flex flex-col items-start justify-center gap-2 sm:gap-8 md:px-0 sm:col-span-4 order-2 sm:order-1">
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
                        <div className="flex items-start gap-2 sm:gap-8">
                            <Image
                                src="/images/ideas.png"
                                alt="ideas"
                                width={100}
                                height={100}
                                className="h-8 lg:h-full w-auto inline-block align-middle mx-2"
                            />
                            <div className="flex flex-col gap-4">
                                <h2 className="body-bold sm:body text-4xl lg:text-7xl text-left tracking-tighter inline-flex gap-2 sm:gap-6">
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