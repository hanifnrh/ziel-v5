"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const sections = [
    {
        title: "Discover",
        text: "Uncover insights through research and exploration. We identify the core needs that shape purposeful design.",
        image: "/home/1.png",
    },
    {
        title: "Design",
        text: "Turn ideas into beautiful, functional realities. We combine creativity with usability to design exceptional experiences.",
        image: "/home/2.png",
    },
    {
        title: "Deliver",
        text: "Bring concepts to life with precision. We deliver high-quality, scalable results that meet your goals and expectations.",
        image: "/home/3.png",
    },
];

export default function Deliverables() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    return (
        <section
            ref={containerRef}
            className="relative w-full min-h-[300vh] bg-neutral-100 dark:bg-neutral-950"
        >
            <div className="sticky top-0 grid grid-cols-1 md:grid-cols-2 h-screen items-center px-6 md:px-16">
                {/* LEFT TEXT */}
                <div className="relative flex flex-col justify-center space-y-12">
                    {sections.map((section, i) => (
                        <motion.div
                            key={i}
                            className="absolute"
                            style={{
                                opacity: useTransform(
                                    scrollYProgress,
                                    [i / 3 - 0.1, i / 3, (i + 1) / 3, (i + 1) / 3 + 0.1],
                                    [0, 1, 1, 0]
                                ),
                            }}
                        >
                            <h2 className="text-4xl md:text-5xl font-semibold mb-3 text-neutral-900 dark:text-neutral-100">
                                {section.title}
                            </h2>
                            <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 max-w-md leading-relaxed">
                                {section.text}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* RIGHT IMAGE */}
                <div className="relative flex justify-center items-center h-full">
                    {sections.map((section, i) => (
                        <motion.div
                            key={i}
                            className="absolute"
                            style={{
                                opacity: useTransform(
                                    scrollYProgress,
                                    [i / 3 - 0.1, i / 3, (i + 1) / 3, (i + 1) / 3 + 0.1],
                                    [0, 1, 1, 0]
                                ),
                                scale: useTransform(scrollYProgress, [
                                    i / 3 - 0.1,
                                    i / 3,
                                    (i + 1) / 3,
                                ], [0.9, 1, 0.95]),
                            }}
                        >
                            <div className="relative w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-xl overflow-hidden shadow-lg">
                                <Image
                                    src={section.image}
                                    alt={section.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
