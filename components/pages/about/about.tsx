"use client";
import { ButtonResume } from "@/components/ui/button-resume";
import Link from "next/link";
import { GiPolarStar } from "react-icons/gi";

export default function AboutSection() {
    return (
        <section className="lg:gap-14 z-10 px-4 md:px-10 xl:px-14 pb-20 sm:h-screen">
            <div className="flex flex-col items-center justify-center gap-10 w-full h-full order-1 sm:order-2 rounded-xl text-yellow-500 text-2xl lg:text-5xl">
                <GiPolarStar className="animate-[spin_3s_linear_infinite] size-24 sm:size-32" />
                <p className="body tracking-tighter text-center bg-gradient-to-b from-neutral-900 via-neutral-700 to-neutral-600/70 bg-clip-text text-transparent">
                    I’m Hanif, I go by Ziel, a practicing design engineer based in Bekasi, Indonesia. I am a graduate in Computer Engineering from Universitas Diponegoro. I focus on crafting engaging and user-friendly digital experiences through thoughtful UI/UX design and development.
                </p>
                <Link
                    href="https://drive.google.com/file/d/1w_kqmytXswIN0wU8jFHjCMVe-FesHy8x/view?usp=sharing"
                    target="_blank"
                    rel="canonical"
                >
                    <ButtonResume />
                </Link>
            </div>
        </section>
    )
}