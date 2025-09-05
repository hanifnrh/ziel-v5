"use client";
import { motion } from "framer-motion";
import { ArrowRight, Origami } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SpotlightButton } from "../../ui/spotlight-button";

interface Project {
    title: string;
    description: string;
    tag: string[];
    slug: string;
    publishDate: string;
    featuredImage: {
        url: string;
    };
}

const HYGRAPH_ENDPOINT = process.env.NEXT_PUBLIC_HYGRAPH_URL!;

export default function ProjectsAll() {
    const [projects, setProjects] = useState<Project[]>([]);

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
                                featuredImage {
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

    return (
            <div className="z-10 py-10">
                <motion.div className="px-8 md:px-20 xl:px-28 py-5"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="flex bg-blue-600/20 text-blue-600 px-4 py-2 rounded-full w-fit">
                        <Origami className="mr-2" />
                        Projects
                    </h2>
                </motion.div>

                <div className="relative px-8 md:px-20 xl:px-28 pb-10 flex flex-col gap-4 sm:gap-0 sm:flex-row justify-between">
                    <motion.div
                        className="sm:w-2/3 flex gap-4 items-stretch"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Vertical Label */}
                        <div className="h-full w-12 bg-blue-600"></div>

                        {/* Main Text */}
                        <h3 className="flex-1 flex items-center text-4xl sm:text-3xl lg:text-5xl body tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-blue-700 via-blue-600 to-blue-400 dark:bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]">
                            I build projects strategically, ensuring each piece is both visually appealing and purpose-driven.
                        </h3>
                    </motion.div>


                    <motion.div
                        className="sm:w-1/3 text-neutral-200 flex justify-start items-start sm:justify-end"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Link
                            href="/projects"
                            rel="canonical"
                        >
                            <SpotlightButton color="bg-blue-600"/>
                        </Link>
                    </motion.div>
                </div>

                {/* Project Cards */}
                <motion.div
                    className="relative flex flex-col items-center px-8 md:px-20 xl:px-28 pb-20 bg-background" id="projects"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 sm:gap-8 items-start">
                        {projects.map((project) => (
                            <Link
                                rel="canonical"
                                key={project.slug}
                                href={`/projects/${project.slug}`}
                                className="group body w-full flex flex-col gap-4 justify-center items-start text-neutral-200"
                            >
                                <div className="overflow-hidden rounded-xl">
                                    <Image
                                        src={project.featuredImage.url}
                                        width={1000}
                                        height={1000}
                                        className="w-full h-auto object-cover aspect-video group-hover:scale-105 transition-all"
                                        alt={project.title}
                                    />
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 text-xs body-light text-blue-700 dark:text-neutral-400 items-center">
                                    {project.tag.map((tag, index) => (
                                        <p key={index} className="bg-blue-100 dark:bg-neutral-200/10 px-3 py-2 text-xs rounded-sm">
                                            {tag}
                                        </p>
                                    ))}
                                </div>

                                <h3 className="text-xl sm:text-2xl text-neutral-800 dark:text-neutral-100">
                                    {project.title}
                                </h3>
                                <p className="body-light text-sm text-neutral-700 dark:text-neutral-500">
                                    {project.description}
                                </p>

                                <div className="flex justify-between w-full text-blue-600 mt-2 sm:mt-4 ">
                                    <p className="link-hover-animation-blue group-hover:link-hovered-animation-blue w-fit text-sm">
                                        View details
                                        <ArrowRight
                                            className='ml-1 inline-block transition-all duration-300 group-hover:ml-2'
                                        />
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </motion.div>
            </div>
    );
}
