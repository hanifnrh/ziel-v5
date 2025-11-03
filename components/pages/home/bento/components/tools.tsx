"use client";

/**
 * @author: @dorian_baffier
 * @description: Card Flip
 * @version: 1.0.0
 * @date: 2025-06-26
 * @license: MIT
 * @website: https://kokonutui.com
 * @github: https://github.com/kokonut-labs/kokonutui
 */

import { cn } from "@/lib/utils";
import { CircleDotDashed, Pickaxe, Repeat2 } from "lucide-react";
import { useState } from "react";

export interface ToolsProps {
    title?: string;
    description?: string;
    features?: string[];
}

export default function Tools({
    title = "Tools",
    features = ["Figma", "React", "Maze", "Tailwind CSS"],
}: ToolsProps) {
    const [isCardFlipped, setIsCardFlipped] = useState(false);

    return (
        <div
            className="body w-full h-56 lg:h-72 group [perspective:2000px]"
            onMouseEnter={() => setIsCardFlipped(true)}
            onMouseLeave={() => setIsCardFlipped(false)}
        >
            <div
                className={cn(
                    "relative w-full h-full",
                    "[transform-style:preserve-3d]",
                    "transition-all duration-700",
                    isCardFlipped
                        ? "[transform:rotateY(180deg)]"
                        : "[transform:rotateY(0deg)]"
                )}
            >
                <div
                    className={cn(
                        "absolute inset-0 w-full h-full",
                        "[backface-visibility:hidden] [transform:rotateY(0deg)]",
                        "overflow-hidden rounded-2xl",
                        "bg-purple-100 dark:bg-purple-900",
                        "border-2 border-purple-200 dark:border-purple-800/50",
                        "shadow-xs dark:shadow-lg",
                        "transition-all duration-700",
                        "group-hover:shadow-lg dark:group-hover:shadow-xl",
                        isCardFlipped ? "opacity-0" : "opacity-100"
                    )}
                >
                    <div className="relative w-full flex h-full overflow-hidden bg-gradient-to-b from-purple-50 to-white dark:from-neutral-900 dark:to-black">
                        <div className="absolute inset-0 flex items-start justify-center pt-8 xl:pt-14">
                            <div className="relative w-[200px] h-[100px] flex items-center justify-center">
                                {[...Array(10)].map((_, i) => (
                                    <div
                                        key={i}
                                        className={cn(
                                            "absolute w-[50px] h-[50px] xl:w-[80px] xl:h-[80px] top-1/2 -translate-y-1/2",
                                            "rounded-[140px]",
                                            "animate-[scale3_3s_linear_infinite]",
                                            "opacity-0",
                                            "shadow-[0_0_50px_rgba(168,85,247,0.5)]",
                                            "group-hover:animate-[3_2s_linear_infinite]"
                                        )}
                                        style={{
                                            animationDelay: `${i * 0.3}s`,
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-5">
                        <div className="flex items-center justify-between gap-3">
                            <div className="space-y-1.5">
                                <h3 className="text-xl xl:text-3xl text-purple-400 dark:text-white leading-snug tracking-tighter transition-all duration-500 ease-out-expo group-hover:translate-y-[-4px]">
                                    {title}
                                </h3>
                            </div>
                            <div className="relative group/icon">
                                <div
                                    className={cn(
                                        "absolute inset-[-8px] rounded-lg transition-opacity duration-300",
                                        "bg-gradient-to-br from-purple-500/20 via-purple-500/10 to-transparent"
                                    )}
                                />
                                <Repeat2 className="relative z-10 w-4 h-4 xl:w-8 xl:h-8 text-purple-500 transition-transform duration-300 group-hover/icon:scale-110 group-hover/icon:-rotate-12" />
                            </div>
                        </div>
                    </div>

                    <div className="absolute top-0 left-0 right-0 p-5">
                        <div className="flex items-center bg-purple-200 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 px-3 py-3 rounded-full w-fit gap-2 animate-pulse">
                            <Pickaxe />
                        </div>
                    </div>
                </div>

                {/* Back of card */}
                <div
                    className={cn(
                        "absolute inset-0 w-full h-full",
                        "[backface-visibility:hidden] [transform:rotateY(180deg)]",
                        "p-6 rounded-2xl",
                        "bg-gradient-to-b from-purple-50 to-white dark:from-neutral-900 dark:to-black",
                        "border-2 border-purple-200 dark:border-purple-800",
                        "shadow-xs dark:shadow-lg",
                        "flex flex-col justify-center",
                        "transition-all duration-700",
                        "group-hover:shadow-lg dark:group-hover:shadow-xl",
                        !isCardFlipped ? "opacity-0" : "opacity-100"
                    )}
                >
                    <div className="flex flex-col gap-8 items-start justify-start">
                        <h3 className="text-xl xl:text-2xl body text-purple-600 dark:text-white">
                            {title}
                        </h3>

                        <div className="space-y-4">
                            {features.map((feature, index) => (
                                <div
                                    key={feature}
                                    className="flex items-center gap-4 text-base xl:text-lg text-neutral-700 dark:text-neutral-300"
                                    style={{
                                        transform: isCardFlipped ? "translateX(0)" : "translateX(-10px)",
                                        opacity: isCardFlipped ? 1 : 0,
                                        transitionDelay: `${index * 100 + 200}ms`,
                                        transition: "all 0.5s ease-out",
                                    }}
                                >
                                    <CircleDotDashed className="w-3 h-3 xl:w-6 xl:h-6 text-purple-500" />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes scale3 {
                    0% {
                        transform: scale(2);
                        opacity: 0;
                        box-shadow: 0px 0px 50px rgba(168,85,247, 0.5);
                    }
                    50% {
                        transform: translate(0px, -5px) scale(1);
                        opacity: 1;
                        box-shadow: 0px 8px 20px rgba(168,85,247, 0.5);
                    }
                    100% {
                        transform: translate(0px, 5px) scale(0.1);
                        opacity: 0;
                        box-shadow: 0px 10px 20px rgba(168,85,247, 0);
                    }
                }
            `}</style>
        </div>
    );
}
