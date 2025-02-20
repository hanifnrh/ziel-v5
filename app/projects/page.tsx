"use client";
import { ArrowRight, Pickaxe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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
                            projects(orderBy: publishDate_DESC) {
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
        <div>
            <Image
                className="absolute top-0 z-0 -translate-y-1/2"
                src={"https://farmui.vercel.app/bg-back.png"}
                width={1000}
                height={1000}
                alt="Hero Background"
            />
            <div className="pt-16 lg:py-28 z-10">
                <div className="px-8 md:px-20 2xl:px-52 py-5">
                    <h2 className="flex bg-purple-600/20 text-purple-600 px-4 py-2 rounded-full w-fit">
                        <Pickaxe className="mr-2" />
                        Projects
                    </h2>
                </div>

                <div className="relative px-8 md:px-20 2xl:px-52 pb-10 flex flex-col gap-4 sm:gap-0 sm:flex-row justify-between">
                    <div className="w-full flex flex-col gap-4">
                        <h3 className="flex text-4xl sm:text-3xl lg:text-5xl body tracking-tighter text-transparent bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]">
                            Design-Driven Development
                        </h3>
                        <p className="text-zinc-500 body-light text-md lg:text-lg">
                            These projects highlight my journey of merging aesthetics with functionality. Started as a visual enthusiast, I went through many challenges to build functional yet visually pleasing projects.
                        </p>
                    </div>
                </div>

                {/* Project Cards */}
                <div className="relative flex flex-col items-center px-8 md:px-20 2xl:px-52 pb-20 bg-background" id="projects">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 sm:gap-8 items-start">
                        {projects.map((project) => (
                            <Link
                                key={project.slug}
                                href={`/projects/${project.slug}`}
                                className="group body w-full flex flex-col gap-4 justify-center items-start text-zinc-200"
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
                                <div className="flex flex-wrap gap-2 text-xs text-zinc-200 items-center">
                                    {project.tag.map((tag, index) => (
                                        <p key={index} className="bg-zinc-200/10 px-3 py-2 text-xs rounded-sm">
                                            {tag}
                                        </p>
                                    ))}
                                </div>

                                <h3 className="text-xl sm:text-2xl">
                                    {project.title}
                                </h3>
                                <p className="body-light text-sm text-zinc-500">
                                    {project.description}
                                </p>

                                <div className="flex justify-between w-full text-purple-600 mt-2 sm:mt-4 ">
                                    <p className="link-hover-animation group-hover:link-hovered-animation w-fit text-sm">
                                        View details
                                        <ArrowRight
                                            className='ml-1 inline-block transition-all duration-300 group-hover:ml-2'
                                        />
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
