"use client";
import { useMouse } from "@/components/hooks/useMouse";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { useState } from "react";

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

    return (
        <div
            className="h-full group relative transform-gpu overflow-hidden rounded-md bg-white/10 px-4 pb-4 transition-transform hover:scale-[1.01] active:scale-90"
            ref={parentRef}
        >
            <div className={`absolute inset-px rounded-xl bg-white border border-neutral-300`} />
            {children && (
                <div
                    className={cn(
                        "grid relative h-full",
                        className,
                    )}
                >
                    {children}
                </div>
            )}
        </div>
    );
};