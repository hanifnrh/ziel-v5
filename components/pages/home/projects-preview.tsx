"use client";
import { Marquee } from "@/components/ui/marquee";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Project {
    title: string;
    description: string;
    tag: string[] | string;
    slug: string;
    cardColor: string;
    publishDate: string;
    featuredImage: {
        url: string;
    };
    logo: {
        url: string;
    };
}

const HYGRAPH_ENDPOINT = process.env.NEXT_PUBLIC_HYGRAPH_URL!;

export default function ProjectsAll() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [hoveredProject, setHoveredProject] = useState<string | null>(null);

    useEffect(() => {
        async function fetchProjects() {
            const response = await fetch(HYGRAPH_ENDPOINT, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_TOKEN}`,
                },
                body: JSON.stringify({
                    query: `
                        query GetProjects {
                            projects(where: { featured: true }, orderBy: publishDate_DESC) {
                                title
                                description
                                slug
                                tag
                                publishDate
                                cardColor
                                featuredImage {
                                    url
                                }
                                logo {
                                    url
                                }
                            }
                        }
                    `,
                }),
            });

            const json = await response.json();
            setProjects(json?.data?.projects ?? []);
        }

        fetchProjects();
    }, []);

    // Define your color map
    const colorMap: Record<string, string> = {
        blue: "bg-blue-500 text-blue-500",
        sky: "bg-sky-500 text-sky-500",
        emerald: "bg-emerald-500 text-emerald-500",
        green: "bg-green-500 text-green-500",
        violet: "bg-violet-500 text-violet-500",
        purple: "bg-purple-500 text-purple-500",
        red: "bg-red-500 text-red-500",
        rose: "bg-rose-500 text-rose-500",
        yellow: "bg-yellow-500 text-yellow-500",
    };

    return (
        <div className="z-10 relative h-screen px-4 md:px-10 xl:px-14 flex flex-col justify-center items-start w-full">
            <div className="w-full relative flex flex-col gap-4 sm:gap-0 sm:flex-row justify-between items-center">
                <motion.div
                    className="flex gap-4 items-stretch justify-center"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >

                    {/* Main Text */}
                    <h3 className="body-bold flex-1 flex items-center text-4xl sm:text-5xl lg:text-7xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-violet-800 via-violet-700 to-violet-500">
                        PRO
                    </h3>
                </motion.div>

                  <motion.div
                    className="flex gap-4 items-stretch justify-center"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >

                    {/* Main Text */}
                    <h3 className="body-bold flex-1 flex items-center text-4xl sm:text-5xl lg:text-7xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-violet-800 via-violet-700 to-violet-500">
                        JECTS
                    </h3>
                </motion.div>
            </div>

            {/* Project Cards */}
            <motion.div
                className="relative flex flex-col items-center" id="projects"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start w-full">
                    {projects.map((project) => (
                        <Link
                            rel="canonical"
                            key={project.slug}
                            href={`/projects/${project.slug}`}
                            className={`relative group body w-full h-fit flex flex-col gap-4 justify-end items-center ${colorMap[project.cardColor]} p-4 rounded-xl overflow-hidden`}
                            onMouseEnter={() => setHoveredProject(project.slug)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            <div
                                className={`w-full transition-all h-full rounded-lg flex flex-col gap-4`}
                            >
                                <div className="overflow-hidden rounded-lg relative">
                                    <Image
                                        src={project.featuredImage.url}
                                        width={1000}
                                        height={1000}
                                        className={`block w-full h-auto object-cover aspect-video transition-all duration-300 ${hoveredProject === project.slug
                                            ? "scale-105 blur-sm"
                                            : "scale-100 blur-0"
                                            }`}
                                        alt={project.title}
                                    />

                                    {/* Video Overlay */}
                                    <AnimatePresence>
                                        {hoveredProject === project.slug && project.logo?.url && (
                                            <motion.div
                                                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.8 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <motion.video
                                                    src={project.logo.url}
                                                    autoPlay
                                                    muted
                                                    loop
                                                    playsInline
                                                    className="w-2/3 h-auto object-cover aspect-video rounded-lg"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                <div className={`h-fit flex items-center justify-between text-2xl sm:text-3xl text-neutral-100 uppercase bg-none`}>
                                    <div className="flex items-center gap-2">
                                        <h3 className="body-bold">
                                            {project.title}
                                        </h3>
                                        <ArrowUpRight />
                                    </div>
                                    <p className="text-neutral-100 text-base">
                                        PROJECT
                                    </p>
                                </div>

                                <div className="relative">
                                    <Marquee className="[--duration:5s]">
                                        {(Array.isArray(project.tag)
                                            ? project.tag
                                            : typeof project.tag === "string"
                                                ? project.tag.split(",")
                                                : []
                                        ).map((tag: string, index: number) => (
                                            <p key={index} className="bg-white/20 text-neutral-100 px-3 py-2 text-xs rounded-sm">
                                                {tag.trim()}
                                            </p>
                                        ))}
                                    </Marquee>
                                    <div className={`pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r ${colorMap[project.cardColor].replace('bg', 'from')} to-transparent`}></div>

                                    {/* Right fade gradient */}
                                    <div className={`pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l ${colorMap[project.cardColor].replace('bg', 'from')}  to-transparent`}></div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </motion.div>

            <motion.div
                className="w-full text-violet-100 flex justify-center items-center py-6"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <Link
                    href="/projects"
                    rel="canonical"
                    className="group"
                >
                    <div className="body mt-6 sm:mt-0 order-2 sm:order-1 link-hover-animation text-violet-800 p-4 rounded-xl group-hover:link-hovered-animation w-fit text-2xl">
                        See more
                        <ArrowRight className="ml-1 inline-block transition-all duration-300 group-hover:ml-2" />
                    </div>
                </Link>
            </motion.div>
        </div>
    );
}