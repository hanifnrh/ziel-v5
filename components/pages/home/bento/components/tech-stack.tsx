import { Marquee } from '@/components/ui/marquee';
import { Layers } from 'lucide-react';
import Image from 'next/image';


function TechStack() {
  const companies = [
        {
            name: "Next.js",
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
        {
            name: "GitHub",
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        },
        {
            name: "Figma",
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        },
        {
            name: "Tailwind",
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        },
        {
            name: "React",
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
            name: "Laravel",
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
        },
        {
            name: "Vercel",
            url: "https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png",
        },
        {
            name: "TypeScript",
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
            name: "JavaScript",
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
    ];

    return (
        <div className='flex flex-col justify-between gap-10 w-full h-full p-6 bg-gradient-to-b from-rose-50 to-white dark:from-rose-900 dark:to-black border-2 border-rose-200 dark:border-rose-800 rounded-2xl shadow-xs dark:shadow-lg'>
            <div className="flex items-center bg-rose-200 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 px-3 py-3 rounded-full w-fit gap-2 animate-pulse">
                <Layers />
            </div>

            <section id="logos">
                <div className="mx-auto ">
                    <div className="relative">
                        <Marquee className="w-full [--duration:40s]">
                            {companies.map((company, idx) => (
                                <Image
                                    key={idx}
                                    width={112}
                                    height={40}
                                    src={company.url}
                                    className="h-10 w-28 object-contain"
                                    alt={company.name}
                                />
                            ))}
                        </Marquee>
                        <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent"></div>
                        <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-transparent"></div>
                    </div>
                </div>
            </section>

            <h3 className='text-rose-600 text-xl xl:text-3xl body'>
                Tech stack I mainly use
            </h3>


        </div>
    )
}

export default TechStack
