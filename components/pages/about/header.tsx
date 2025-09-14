"use client";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import SocialLinks from "@/components/ui/social-links";
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
        <div className="h-fit flex items-center justify-center px-4 md:px-10 xl:px-14 pt-32 pb-20">
            <div className="flex flex-col sm:flex-row gap-12 items-center justify-center">
                <div className="relative h-auto w-full sm:w-2/3 overflow-hidden rounded-lg border-blue-500 bg-background p-6 xl:p-12 order-2 sm:order-1">
                    <FlickeringGrid
                        className="absolute inset-0 z-0 size-full"
                        squareSize={8}
                        gridGap={6}
                        color="#2563eb "
                        maxOpacity={0.5}
                        flickerChance={0.7}
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
                <div className="flex flex-col justify-between gap-20 h-full ">
                    <h2
                        ref={textRef}
                        className="body-bold sm:body text-3xl lg:text-5xl xl:text-6xl text-left tracking-tighter text-blue-500 flex flex-wrap gap-2"
                    >
                        {sentence.split(" ").map((word, index) => {
                            const isHighlight = word === "UI/UX" || word === "Developer";
                            return (
                                <span
                                    key={index}
                                    className={isHighlight ? "bg-blue-500 text-neutral-100 py-1 px-2 inline-block" : "inline-block"}
                                >
                                    {word}
                                </span>
                            );
                        })}
                    </h2>
                    <SocialLinks />
                </div>
            </div>
        </div>
    );
}

export default Header;
