"use client";

import { cn } from "@/lib/utils";
import { ArrowRight, Gem, Repeat2 } from "lucide-react";
import { useState } from "react";

export interface PrinciplesProps {
    title?: string;
    description?: string;
    features?: string[];
}

export default function Principles({
    title = "Principles",
    features = ["Performance matters, fast and lightweight", "Iterate and improve", "Clarity over complexity", "It's not user, it's human"],
}: PrinciplesProps) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="body relative w-full h-56 lg:h-full group [perspective:2000px]"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
        >
            <div
                className={cn(
                    "relative w-full h-full",
                    "[transform-style:preserve-3d]",
                    "transition-all duration-700",
                    isFlipped
                        ? "[transform:rotateY(180deg)]"
                        : "[transform:rotateY(0deg)]"
                )}
            >
                {/* Front */}
                <div
                    className={cn(
                        "absolute inset-0 w-full h-full",
                        "[backface-visibility:hidden] [transform:rotateY(0deg)]",
                        "overflow-hidden rounded-2xl",
                        "bg-neutral-50 dark:bg-neutral-900",
                        "border border-blue-200 dark:border-blue-800/50",
                        "shadow-xs dark:shadow-lg",
                        "transition-all duration-700",
                        "group-hover:shadow-lg dark:group-hover:shadow-xl",
                        isFlipped ? "opacity-0" : "opacity-100"
                    )}
                >
                    <div className="relative w-full flex h-full overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-neutral-900 dark:to-black">
                        <div className="absolute inset-0 flex items-start justify-center top-1/2 -translate-y-1/2">
                            <div className="relative w-[200px] h-[120px] flex items-center justify-center">
                                {[...Array(10)].map((_, i) => (
                                    <div
                                        key={i}
                                        className={cn(
                                            "absolute w-0 h-0",
                                            "border-l-[20px] border-r-[20px] border-b-[35px]",
                                            "border-l-transparent border-r-transparent border-b-blue-500",
                                            "animate-[floatShape_3s_linear_infinite]",
                                            "opacity-0"
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
                                <h3 className="body-bold text-xl font-semibold text-blue-600 dark:text-white leading-snug tracking-tighter">
                                    {title}
                                </h3>
                            </div>
                            <div className="relative group/icon">
                                <div
                                    className={cn(
                                        "absolute inset-[-8px] rounded-lg transition-opacity duration-300",
                                        "bg-gradient-to-br from-blue-500/20 via-blue-500/10 to-transparent"
                                    )}
                                />
                                <Repeat2 className="relative z-10 w-4 h-4 text-blue-500 transition-transform duration-300 group-hover/icon:scale-110 group-hover/icon:-rotate-12" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute top-0 left-0 right-0 p-5">
                    <div className="flex items-center bg-blue-200 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-3 py-3 rounded-full w-fit gap-2 animate-pulse">
                        <Gem />
                    </div>
                </div>

                {/* Back */}
                <div
                    className={cn(
                        "absolute inset-0 w-full h-full",
                        "[backface-visibility:hidden] [transform:rotateY(180deg)]",
                        "p-6 rounded-2xl",
                        "bg-gradient-to-b from-blue-50 to-white dark:from-neutral-900 dark:to-black",
                        "border border-blue-200 dark:border-blue-800",
                        "shadow-xs dark:shadow-lg",
                        "flex flex-col",
                        "transition-all duration-700",
                        "group-hover:shadow-lg dark:group-hover:shadow-xl",
                        !isFlipped ? "opacity-0" : "opacity-100"
                    )}
                >
                    <div className="flex flex-col gap-4">
                        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                            {title}
                        </h3>

                        <div className="space-y-2">
                            {features.map((feature, index) => (
                                <div
                                    key={feature}
                                    className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300"
                                    style={{
                                        transform: isFlipped ? "translateX(0)" : "translateX(-10px)",
                                        opacity: isFlipped ? 1 : 0,
                                        transitionDelay: `${index * 100 + 200}ms`,
                                        transition: "all 0.5s ease-out",
                                    }}
                                >
                                    <ArrowRight className="w-3 h-3 text-blue-500" />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes floatShape {
          0% {
            transform: scale(1.5) translateY(20px);
            opacity: 0;
          }
          50% {
            transform: scale(1) translateY(-10px);
            opacity: 1;
          }
          100% {
            transform: scale(0.5) translateY(30px);
            opacity: 0;
          }
        }
      `}</style>
        </div>
    );
}
