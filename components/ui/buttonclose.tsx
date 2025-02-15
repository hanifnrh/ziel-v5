"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ButtonCloseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function ButtonClose({
    className,
    ...props
}: ButtonCloseProps) {
    return (
        <Button
            className={cn(
                "min-w-40 relative group",
                "bg-red-950/50",
                "text-red-600",
                "border-zinc-600",
                "hover:bg-red-950",
                className
            )}
            {...props}
        >
            <div
                className={cn(
                    "w-full flex items-center justify-center gap-2",
                    "transition-transform duration-200 group-hover:scale-105"
                )}
            >
                <span>Close</span>
            </div>
        </Button>
    );
}
