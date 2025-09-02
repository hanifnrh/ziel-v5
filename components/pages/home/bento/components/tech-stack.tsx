import { MainMenusGradientCard } from '@/components/ui/animated-card';
import { Marquee } from '@/components/ui/marquee';
import { Atom } from 'lucide-react';
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
        <MainMenusGradientCard
            description="Design tools and code tools I mainly use. Focused on React or Javascript ecosystem, recently have been using Next.js"
            title="Tech stack I mainly use"
        >
            <h2 className="text-sm text-violet-600 dark:text-neutral-400 group mr-auto px-5 py-2 bg-gradient-to-tr from-violet-300/5 via-violet-400/5 to-transparent  border-[2px] border-violet-600/5 rounded-3xl w-fit flex items-center">
                <Atom className="inline w-4 h-4 mr-2  duration-300" />
                Tech Stack
            </h2>

            <section id="logos">
                <div className="container mx-auto ">
                    <div className="relative mt-6">
                        <Marquee className="max-w-full [--duration:40s]">
                            {companies.map((company, idx) => (
                                <Image
                                    key={idx}
                                    width={112}
                                    height={40}
                                    src={company.url}
                                    className="h-10 w-28 object-contain opacity-30 neutralscale brightness-0 dark:invert"
                                    alt={company.name}
                                />
                            ))}
                        </Marquee>
                        <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent"></div>
                        <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-transparent"></div>
                    </div>
                </div>
            </section>

        </MainMenusGradientCard>
    )
}

export default TechStack
