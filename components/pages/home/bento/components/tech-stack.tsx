import { Marquee } from '@/components/ui/marquee';
import { Layers } from 'lucide-react';
import Image from 'next/image';


function TechStack() {

    const companies = [
        {
            name: "Next.js",
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1280px-Nextjs-logo.svg.png",
        },
        {
            name: "GitHub",
            url: "https://res.cloudinary.com/eldoraui/image/upload/v1734066341/GitHub_honend.svg",
        },
        {
            name: "Figma",
            url: "https://1000logos.net/wp-content/uploads/2024/09/Figma-Logo.png",
        },
        {
            name: "Tailwind",
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Tailwind_CSS_logo.svg/2560px-Tailwind_CSS_logo.svg.png",
        },
        {
            name: "React",
            url: "https://logos-world.net/wp-content/uploads/2023/08/React-Symbol.png",
        },
        {
            name: "Laravel",
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Logo.min.svg/2560px-Logo.min.svg.png",
        },
        {
            name: "Vercel",
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Vercel_logo_black.svg/640px-Vercel_logo_black.svg.png",
        },
    ];

    return (
        <div className='space-y-4 w-full h-full p-6 bg-gradient-to-b from-rose-50 to-white dark:from-rose-900 dark:to-black border border-rose-200 dark:border-rose-800 rounded-2xl shadow-xs dark:shadow-lg'>
            <div className="flex items-center bg-rose-200 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 px-3 py-3 rounded-full w-fit gap-2 animate-pulse">
                <Layers />
            </div>

            <section id="logos">
                <div className="mx-auto ">
                    <div className="relative mt-6">
                        <Marquee className="max-w-full [--duration:40s]">
                            {companies.map((company, idx) => (
                                <Image
                                    key={idx}
                                    width={112}
                                    height={40}
                                    src={company.url}
                                    className="h-10 w-28 object-contain dark:opacity-30 neutralscale brightness-0 dark:invert"
                                    alt={company.name}
                                />
                            ))}
                        </Marquee>
                        <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent"></div>
                        <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-transparent"></div>
                    </div>
                </div>
            </section>

            <h3 className='text-rose-600 text-xl body'>
                Tech stack I mainly use
            </h3>


        </div>
    )
}

export default TechStack
