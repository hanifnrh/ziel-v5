"use client";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { gsap } from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

const sentence =
    "Practicing UI/UX Designer and Developer dedicated to craft exceptional digital experience.";

function Header() {
    const textRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (!textRef.current) return;

        const words = textRef.current.querySelectorAll("span");

        gsap.fromTo(
            words,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
                stagger: 0.15, // delay each word
            }
        );
    }, []);

    return (
        <div className="h-fit flex items-center justify-center px-8 md:px-20 xl:px-14 pt-32 pb-20">
            <div className="flex gap-12 items-center justify-center">
                <div className="relative h-auto w-full sm:w-2/3 overflow-hidden rounded-lg border border-violet-500 bg-background p-6 order-2 sm:order-1">
                    <FlickeringGrid
                        className="absolute inset-0 z-0 size-full"
                        squareSize={4}
                        gridGap={6}
                        color="#8E51FF"
                        maxOpacity={0.5}
                        flickerChance={0.1}
                        height={800}
                        width={800}
                    />
                    <div className="relative group">
                        <Image
                            src="/about/about.jpg"
                            height={1000}
                            width={1000}
                            className="z-20 w-full aspect-square object-cover rounded-lg neutralscale"
                            alt="thumbnail"
                        />
                    </div>
                </div>
                <h2
                    ref={textRef}
                    className="body-bold sm:body text-3xl lg:text-5xl xl:text-6xl text-left tracking-tighter text-violet-500 flex flex-wrap gap-2"
                >
                    {sentence.split(" ").map((word, index) => {
                        const isHighlight = word === "UI/UX" || word === "Developer";
                        return (
                            <span
                                key={index}
                                className={isHighlight ? "bg-violet-500 text-neutral-100 py-1 px-2 inline-block" : "inline-block"}
                            >
                                {word}
                            </span>
                        );
                    })}
                </h2>
            </div>
        </div>
    );
}

export default Header;
