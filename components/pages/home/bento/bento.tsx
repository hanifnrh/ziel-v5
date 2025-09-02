"use client"

import Location from "./components/location";
import Projects from "./components/projects";
import Spotify from "./components/spotify";
import TechStack from "./components/tech-stack";
import TypingSpeed from "./components/typing-speed";

export default function Bento() {

    return (
        <div className="w-full grid grid-cols-1 xl:grid-cols-[3fr_1fr] gap-2 pb-20 px-8 md:px-20 2xl:px-52 text-neutral-200">

            <div className="w-full gap-2 grid grid-cols-1">
                <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-2">
                    <TechStack />
                    <TypingSpeed />
                </div>

                <div className="hidden sm:grid lg:hidden grid-cols-2 gap-2">
                    <Location />
                    <TypingSpeed />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-2">
                    <div className="sm:hidden lg:block">
                        <Location />
                    </div>
                    <div className="group">
                        <Spotify />
                    </div>
                </div>
            </div>

            <Projects />

        </div>
    )
}