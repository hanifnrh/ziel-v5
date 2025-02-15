"use client"
import { DotPattern } from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import { Atom } from "lucide-react";
import { IconCloud } from "../magicui/icon-cloud";

const images = [
    "/svg/figma.svg",
    "/svg/laravel.svg",
    "/svg/nextjs.svg",
    "/svg/react.svg",
    "/svg/tailwind.svg",
    "/svg/vercel.svg",
    "/svg/figma.svg",
    "/svg/laravel.svg",
    "/svg/nextjs.svg",
    "/svg/react.svg",
    "/svg/tailwind.svg",
    "/svg/vercel.svg",
    "/svg/figma.svg",
    "/svg/laravel.svg",
    "/svg/nextjs.svg",
    "/svg/react.svg",
    "/svg/tailwind.svg",
    "/svg/vercel.svg",
    "/svg/figma.svg",
    "/svg/laravel.svg",
    "/svg/nextjs.svg",
    "/svg/react.svg",
    "/svg/tailwind.svg",
    "/svg/vercel.svg",
];

export default function Description() {

    return (
        <div className="relative flex flex-col px-8 md:px-20 2xl:px-52 pb-10">
            <DotPattern
                className={cn(
                    "[mask-image:radial-gradient(200px_circle_at_center,white,transparent)] opacity-10",
                )}
            />
            <div className="py-5">
                <h2 className="flex bg-purple-600/20 text-purple-600 px-4 py-2 rounded-full w-fit">
                    <Atom className="mr-2" />
                    Description
                </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 items-center">
                <div className="order-2 sm:order-1 relative flex max-w-lg items-center justify-center overflow-hidden bg-background">
                    <IconCloud images={images} />
                </div>

                <div className="order-1 sm:order-2 w-full flex flex-col gap-4">
                    <h3 className="flex text-4xl sm:text-3xl font-normal lg:text-5xl body tracking-tighter text-transparent bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]">
                        Functionality & Aesthetics
                    </h3>
                    <p className="text-zinc-500 body-light text-sm lg:text-lg">
                        Started out in UI design with Figma, UX research, and prototyping visual design. Next up I escalate skills in frontend development with React Js and Next.js for creating dynamic and responsive web applications. Not only limited in frontend, I also have experience in building backend and full stack application using Django, Laravel, GraphQL, MySQL, and Supabase.
                    </p>
                </div>

            </div>
        </div>
    )
}