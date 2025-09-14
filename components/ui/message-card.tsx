"use client";
import { useMouse } from "@/components/hooks/useMouse";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

export const MessageCard = ({
    withArrow = false,
    circleSize = 400,
    className,
    children,
    borderColor,
}: {
    withArrow?: boolean;
    circleSize?: number;
    children?: ReactNode;
    className?: string;
    borderColor?: string;
}) => {
    const [mouse, parentRef] = useMouse();
    const [randomColor, setRandomColor] = useState("border-violet-400");

    useEffect(() => {
        // Generate random color if not provided
        if (!borderColor) {
            const colors = [
                "border-red-400",
                "border-orange-400",
                "border-yellow-400",
                "border-green-400",
                "border-blue-400",
                "border-indigo-400",
                "border-purple-400",
                "border-pink-400",
                "border-rose-400",
                "border-amber-400",
                "border-lime-400",
                "border-emerald-400",
                "border-teal-400",
                "border-cyan-400",
                "border-sky-400",
                "border-violet-400",
                "border-fuchsia-400",
            ];
            const randomIndex = Math.floor(Math.random() * colors.length);
            setRandomColor(colors[randomIndex]);
        }
    }, [borderColor]);

    return (
        <div
            className="h-full group relative transform-gpu overflow-hidden rounded-md bg-white/10 p-2 transition-transform hover:scale-[1.01] active:scale-90"
            ref={parentRef}
        >
            <div className={`absolute inset-px rounded-[19px] bg-neutral-100 border ${borderColor || randomColor}`} />
            {children && (
                <div
                    className={cn(
                        "grid relative p-2",
                        className,
                    )}
                >
                    {children}
                </div>
            )}
        </div>
    );
};