"use client";
import { ArrowRight, BookOpenText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SpotlightButton } from "../ui/spotlight-button";

interface Post {
    title: string;
    description: string;
    tag: string;
    slug: string;
    publishDate: string;
    featuredImage: {
        url: string;
    };
}

const HYGRAPH_ENDPOINT = process.env.NEXT_PUBLIC_HYGRAPH_URL!;

export default function Blog() {
    const [posts, setPosts] = useState<Post[]>([]);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const suffix = (day: number) => {
            if (day > 3 && day < 21) return "th";
            switch (day % 10) {
                case 1: return "st";
                case 2: return "nd";
                case 3: return "rd";
                default: return "th";
            }
        };

        return new Intl.DateTimeFormat("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
        }).format(date).replace(/\d+/, `${day}${suffix(day)}`);
    };

    useEffect(() => {
        async function fetchPosts() {
            const response = await fetch(HYGRAPH_ENDPOINT, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_TOKEN}`,
                },
                body: JSON.stringify({
                    query: `
                        query GetBlogs {
                            blogs(where: { featured: true }, orderBy: publishDate_DESC) {
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
            console.log("Response JSON:", json); // 🔍 Cek isi respons

            const postsData = json?.data?.blogs ?? []; // Sesuaikan dengan "blogs"
            setPosts(postsData);
        }


        fetchPosts();
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
            <section className="z-10">
                <div className="px-8 md:px-20 2xl:px-52 py-5">
                    <h2 className="flex bg-purple-600/20 text-purple-600 px-4 py-2 rounded-full w-fit">
                        <BookOpenText className="mr-2" />
                        Blog
                    </h2>
                </div>

                <div className="px-8 md:px-20 2xl:px-52 pb-10 flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between">
                    <div className="sm:w-2/3 xl:w-1/2 flex flex-col gap-4">
                        <h3 className="flex text-4xl sm:text-3xl lg:text-5xl body tracking-tighter text-transparent bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]">
                            Thoughts, Ideas & Explorations
                        </h3>
                        <p className="text-zinc-500 body-light text-md lg:text-lg">
                            A space to share insights, experiences, and reflections—on design, development, and everything in between.
                        </p>
                    </div>
                    <Link
                        href="/blog"
                        rel="canonical"
                        className="sm:w-1/3 xl:w-1/2 text-zinc-200 flex justify-start items-start sm:justify-end">
                        <SpotlightButton />
                    </Link>
                </div>

                <div className="w-full relative flex flex-col items-start px-8 md:px-20 2xl:px-52 pb-20 bg-background" id="projects">
                    <div className="w-full grid grid-cols-1 items-start mt-5">
                        {posts.length > 0 ? (
                            posts.map((post, index) => (
                                <Link
                                    rel="canonical"
                                    key={index}
                                    href={`/blog/${post.slug}`}
                                    className="w-full group border-zinc-500/20 border-t-1 py-10 body grid grid-cols-1 sm:grid-cols-[1fr_3fr] gap-4 lg:gap-6 xl:gap-8 justify-center items-start text-zinc-200"
                                >
                                    <div className="aspect-[5/3] overflow-hidden rounded-xl w-full">
                                        <Image
                                            src={post.featuredImage.url}
                                            width={1000}
                                            height={1000}
                                            className="w-full h-auto object-cover group-hover:scale-105 transition-all"
                                            alt={post.title}
                                        />
                                    </div>
                                    <div className="w-full h-full flex flex-col gap-4 justify-between">
                                        <div className="flex flex-col gap-2">
                                            <div className="body-light text-xs sm:text-sm text-zinc-200">
                                                {formatDate(post.publishDate)}
                                            </div>
                                            <h3 className="text-xl lg:text-3xl">{post.title}</h3>
                                            <p className="text-sm sm:text-md text-zinc-500 line-clamp-3">
                                                {post.description}
                                            </p>
                                        </div>
                                        <div className="flex flex-col sm:flex-row justify-between w-full">
                                            <p className="mt-6 sm:mt-0 order-2 sm:order-1 link-hover-animation text-purple-500 group-hover:link-hovered-animation w-fit text-sm">
                                                Read more
                                                <ArrowRight className="ml-1 inline-block transition-all duration-300 group-hover:ml-2" />
                                            </p>
                                            <div className="order-1 sm:order-2 flex body-light text-zinc-400 gap-2">
                                                {(Array.isArray(post.tag) ? post.tag : post.tag.split(",")).map((tag: string, index: number) => (
                                                    <p key={index} className="bg-zinc-200/10 px-3 py-2 text-xs rounded-sm">
                                                        {tag.trim()}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <p className="text-center text-zinc-500">No posts available.</p>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
