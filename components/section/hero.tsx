import { GradientButton } from "@/components/ui/gradient-button";
import SphereAnimation from "@/components/ui/sphere-animation";
import {
    Link
} from "@nextui-org/react";
import { Github, Lightbulb, Sparkles } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { useMenu } from "../ui/menuprovider";

export default function Hero() {
    const { openMenu } = useMenu();
    return (
        <div>
            <Image
                className="absolute top-0 z-0 -translate-y-1/2"
                src={"https://farmui.vercel.app/bg-back.png"}
                width={1000}
                height={1000}
                alt="Hero Background"
            />
            <section className="pt-16 lg:py-28 z-10">
                <div className="h-fit text-gray-600 gap-x-12 grid grid-cols-1 lg:grid-cols-2 items-start justify-between p-8 pb-0 sm:pb-20 gap-16 px-8 md:px-20 2xl:px-52">
                    <div className="flex-none space-y-5 sm:max-w-lg md:px-0 lg:max-w-xl">
                        <h1 className="text-sm text-gray-400 group mr-auto px-5 py-2 bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent  border-[2px] border-white/5 rounded-3xl w-fit flex items-center">
                            Creative Designer & Developer
                            <Lightbulb className="inline w-4 h-4 ml-2  duration-300" />
                        </h1>
                        <h2 className="body text-4xl sm:text-3xl font-normal tracking-tighter lg:text-5xl text-transparent bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]">
                            Hello, I&apos;m Ziel. I can turn your ideas into seamless user experiences.
                        </h2>
                        <p className="body-light text-zinc-500 text-md lg:text-lg">
                            Through putting creativity into code and logic into design, I work to deliver the best experiences to users.
                        </p>
                        <div className="flex gap-2">
                            <Button
                                onClick={openMenu}
                            >
                                <GradientButton> <Sparkles className="mr-2" />Get in Touch</GradientButton>
                            </Button>
                            <Link
                                href="https://github.com/hanifnrh"
                                rel="canonical"
                                target="_blank"
                            >
                                <GradientButton variant="variant"> <Github className="mr-2" />Github</GradientButton>
                            </Link>
                        </div>
                    </div>

                    <div className="relative z-10 h-full w-full">
                        <div className="my-auto">
                            <SphereAnimation />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}