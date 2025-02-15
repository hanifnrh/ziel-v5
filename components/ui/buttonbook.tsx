"use client";

import { cn } from "@/lib/utils";
import { Calendar } from "lucide-react";
import { Button } from "./button";

interface ButtonBookProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function ButtonBook({ className, ...props }: ButtonBookProps) {
    return (
        <Button
            className={cn(
                "group relative inline-block cursor-pointer rounded-xl bg-zinc-900 p-px leading-6 text-white no-underline shadow-2xl shadow-zinc-900",
                className
            )}
            {...props}
        >
            <span className="absolute inset-0 overflow-hidden rounded-xl">
                <span className="absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(199,1,220,0.6)_0%,rgba(199,1,220,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                </span>
            </span>
            <div className="body-light relative z-10 flex items-center space-x-2 rounded-xl bg-gray-950/50 px-6 py-3 ring-1 ring-white/10">
                <span>Book my service</span>
                <Calendar className="w-4 h-4" />
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-fuchsia-400/0 via-gray-400/90 to-fuchsia-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
        </Button>
    );
}
