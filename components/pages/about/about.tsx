"use client";
import SocialLinks from "@/components/ui/social-links";

export default function AboutSection() {
    return (
        <section className="lg:gap-14 z-10 px-8 md:px-20 xl:px-10 py-14">
            <div className="flex flex-col text-justify items-center justify-between gap-10 w-full h-full order-1 sm:order-2 bg-[url('/about/background.png')] bg-cover bg-center bg-no-repeat p-6 rounded-xl">
                <p className="body text-white text-2xl lg:text-3xl">
                    Hi there! I’m Hanif, I go by Ziel, a practicing design engineer based in Bekasi, Indonesia. I am a graduate in Computer Engineering from Universitas Diponegoro. I currently pursue career in UI design, UX research, and developer. In design, I’m driven by a passion for creating visually compelling, user-centric digital products. In programming, I focus on maximizing performance and functionality.
                </p>

                <SocialLinks />
            </div>
        </section>
    )
}