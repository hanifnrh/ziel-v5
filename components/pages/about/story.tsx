import { Atom } from "lucide-react";
import Image from "next/image";
import { Timeline } from "../../ui/timeline";

const data = [
    {
        title: "Art background",
        content: (
            <div data-aos="fade-up">
                <p className="body-light text-neutral-500 text-sm lg:text-lg mb-8 text-justify">
                    Growing up with a deep passion for art, I found immense joy in creating beautiful things on my sketchbook, letting my imagination shape each stroke and line. I was inspired by legendary artists like Van Gogh and Michelangelo, alongside modern illustrators like Kim Junghyun, Ha Ilkwon. I guess I have fondness in how beautiful the sophisticated anatomy of human being and this whole shape of universe.
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <Image
                        src="/images/satosugu.png"
                        alt="Satosugu"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:shadow-none"
                    />
                    <Image
                        src="/images/breeze.png"
                        alt="Breeze"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:shadow-none"
                    />
                    <Image
                        src="/images/howl.png"
                        alt="Howl"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:shadow-none"
                    />
                    <Image
                        src="/images/neilperry.png"
                        alt="Neil Perry"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:shadow-none"
                    />
                </div>
            </div>
        ),
    },
    {
        title: "UI/UX Journey",
        content: (
            <div data-aos="fade-up">
                <p className="body-light text-neutral-500 text-sm lg:text-lg mb-8 text-justify">
                    Somehow I love science as much as I love art, as Mr. Keating in Dead Poets Society says &quot;..medicine, law, business, engineering, these are noble pursuits and necessary to sustain life. But poetry, beauty, romance, love, these are what we stay alive for.&quot; I&apos;ve been drawn with science since I was a little kid watching animal planet and reading books about dinosaurs. Later, I chose science major in highschool which led me into choosing Computer Engineering for my bachelor degree. Being in STEM was a hard turnaround, from freely brushing around my canvas to technically code a fully functional program. But I managed to survive with a lot of struggle understanding the logic of programming language. Along the way, I also develop UI design skill leveraging my art background to create beautiful design yet with good functionality. I practice a lot using Figma as my main tools. I joined a few competitions to seek more experiences.
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <Image
                        src="/images/academiku.png"
                        alt="Academiku"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:shadow-none"
                    />
                    <Image
                        src="/images/jiwakita.png"
                        alt="Jiwakita"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:shadow-none"
                    />
                    <Image
                        src="/images/clothing.png"
                        alt="Ziel Clothing"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:shadow-none"
                    />
                    <Image
                        src="/images/dailyziel.png"
                        alt="Dailyziel 1.0"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:shadow-none"
                    />
                </div>
            </div>
        ),
    },
    {
        title: "Full Stack Development",
        content: (
            <div data-aos="fade-up">
                <p className="body-light text-neutral-500 text-sm lg:text-lg mb-8 text-justify">
                    Implementing everything I&apos;ve learned from university, I&apos;ve completed several mini projects as part of my course tasks to practice coding with different languages, frameworks, and tools. Currently, I&apos;m quite familiar with Next.js, Laravel, MySQL, phpMyAdmin, Django, PostgreSQL, TypeScript, Git, and many more as languages and tools. Not only from assignments, I&apos;ve also practiced building my own portfolio website many times.
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <Image
                        src="/images/clipvision.png"
                        alt="Clipvision"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:shadow-none"
                    />
                    <Image
                        src="/images/sigmadasbor.png"
                        alt="Sigma Dashboard"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:shadow-none"
                    />
                </div>
            </div>
        ),
    },
];

export default function Story() {
    return (
        <section className="relative pb-20 gap-16 px-8 md:px-20 2xl:px-52">

            <div className="py-5">
                <h2 className="flex bg-purple-600/20 text-purple-600 px-4 py-2 rounded-full w-fit">
                    <Atom className="mr-2" />
                    Story
                </h2>
            </div>
            <div className="h-fit text-neutral-600 gap-x-12 flex-col items-start justify-between">
                <Timeline data={data} />
            </div>
        </section >
    )
}