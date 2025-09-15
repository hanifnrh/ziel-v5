import { GradientButton } from "@/components/ui/gradient-button";
import {
    Link
} from "@nextui-org/react";
import { House } from "lucide-react";

export default function NotFound() {
    return (
        <main>

            <section className="h-screen flex items-center z-10">
                <div className="w-full h-fit text-neutral-600 gap-x-12 flex items-center justify-center p-8 pb-0 sm:py-20 gap-16 px-4 md:px-10 xl:px-14">
                    <div className="flex flex-col w-full justify-center items-center space-y-5 sm:max-w-lg md:px-0 lg:max-w-xl">
                        <h1 className="text-4xl sm:text-3xl lg:text-5xl">
                            ⛔
                        </h1>
                        <h2 className="body text-center text-3xl sm:text-4xl lg:text-7xl font-normal tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-indigo-600 via-indigo-500 to indigo-400">
                            404 Page Not Found
                        </h2>
                        <p className="body text-center text-neutral-800 text-md lg:text-lg">
                            Oh maybe you&apos;re lost? The page you&apos;re looking for doesn&apos;t exist.
                        </p>
                        <div className="flex gap-2">
                            <Link
                                href="/"
                                rel="canonical"
                            >
                                <GradientButton> <House className="mr-2" />Go to Home</GradientButton>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}