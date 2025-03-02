"use client";

import { Loader } from '@/components/ui/loader';
import { RichText } from '@graphcms/rich-text-react-renderer';
import { RichTextContent } from '@graphcms/rich-text-types';
import { Dot, MoveLeft, Paperclip } from 'lucide-react';
import { NextSeo } from 'next-seo';
import Image from "next/image";
import Link from 'next/link';
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Post {
    title: string;
    description: string;
    content: any;
    publishDate: string;
    featuredImage: { url: string };
    tag: string;
}

const HYGRAPH_ENDPOINT = process.env.NEXT_PUBLIC_HYGRAPH_URL!;

export default function ProjectDetail() {
    const params = useParams();
    const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

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
        async function fetchPost() {
            try {
                const response = await fetch(HYGRAPH_ENDPOINT, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_TOKEN}`
                    },
                    body: JSON.stringify({
                        query: `
                            query GetProjectBySlug($slug: String!) {
                                project(where: { slug: $slug }) {
                                    title
                                    description
                                    content { json }
                                    publishDate
                                    featuredImage { url }
                                    tag
                                }
                            }
                        `,
                        variables: { slug },
                    }),
                });

                const json = await response.json();
                console.log(json);
                if (json.errors) {
                    throw new Error("Failed to fetch post");
                }
                setPost(json?.data?.project || null);
            } catch (err) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        if (slug) {
            fetchPost();
        }
    }, [slug]);

    if (loading) return <Loader />;
    if (error || !post) return <p className="body text-center text-zinc-500">Post not found.</p>;

    return (
        <>
            <NextSeo
                title={post?.title || "Projects"}
                description={post?.description || "View my latest projects."}
                openGraph={{
                    type: "article",
                    url: `https://ziel.works/projects/${slug}`,
                    title: post?.title || "Projects",
                    description: post?.description || "View my latest projects.",
                    images: [
                        {
                            url: post?.featuredImage?.url || "https://zielbucket.s3.ap-southeast-2.amazonaws.com/public/images/thumbnail.png",
                            width: 1200,
                            height: 630,
                            alt: post?.title,
                        },
                    ],
                }}
                twitter={{
                    cardType: "summary_large_image",
                }}
            />

            <Image
                className="absolute top-0 z-0 -translate-y-1/2"
                src="/bg-back.png"
                width={1000}
                height={1000}
                alt="back bg"
            />

            <section className="mt-12 lg:mt-0 pt-12 lg:py-28 z-10">
                <div className="flex flex-col px-8 md:px-20 2xl:px-52 pb-10 gap-4 lg:gap-8">
                    <Link
                        href="/projects"
                        rel="canonical"
                        className="flex gap-2 text-zinc-300 body-light text-base link-hover-animation hover:link-hovered-animation transition-all w-fit"
                    >
                        <MoveLeft className="ml-1 inline-block transition-all duration-300 group-hover:ml-2" />
                        Back to all projects
                    </Link>

                    <div className="">
                        <Image
                            src={post?.featuredImage?.url || "https://zielbucket.s3.ap-southeast-2.amazonaws.com/public/images/thumbnail.png"}
                            width={1000}
                            height={600}
                            className="w-full aspect-[5/2] sm:aspect-[5/1] object-cover rounded-sm"
                            alt={post.title}
                            priority
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="body-light text-zinc-500">{formatDate(post.publishDate)}</p>
                        <h1 className="text-2xl sm:text-4xl text-zinc-200 body">{post.title}</h1>
                        <p className="body-light text-sm sm:text-base text-zinc-400">{post.description}</p>
                    </div>

                    <div className="mt-6 flex body-light text-zinc-500 gap-2">
                        {(Array.isArray(post.tag) ? post.tag : post.tag.split(",")).map((tag, index) => (
                            <span key={index} className="bg-zinc-200/10 px-3 py-2 text-xs rounded-sm">
                                {tag.trim()}
                            </span>
                        ))}
                    </div>

                    <div className='flex flex-col gap-2 pt-10 border-t-1 border-zinc-500/20'>
                        {/* Render Rich Text */}
                        {post.content?.map((item: { json: RichTextContent }, index: number) => (
                            <RichText
                                key={index}
                                content={item.json}
                                renderers={{
                                    h2: ({ children }) => <h2 className="inline-flex items-center text-2xl sm:text-4xl body-bold text-zinc-200 mt-6"><Paperclip className='mr-2' />{children}</h2>,
                                    h3: ({ children }) => <h3 className="text-lg sm:text-2xl body text-zinc-200 mt-6">{children}</h3>,
                                    h4: ({ children }) => <h4 className="text-base sm:text-xl body text-zinc-200 mt-6 !important">{children}</h4>,
                                    ul: ({ children }) => <ul className="flex flex-col p-4 gap-3 bg-purple-600/20 border-l-4 border-purple-600">{children}</ul>,
                                    li: ({ children }) => <li className="flex text-base sm:text-lg text-purple-600"><Dot className='shrink-0' />{children}</li>,
                                    p: ({ children }) => <p className="text-sm sm:text-base text-zinc-400">{children}</p>,
                                    code: ({ children }) => (
                                        <code className="whitespace-pre-wrap block bg-zinc-600/20 p-4 rounded-lg overflow-x-auto text-sm sm:text-base font-mono text-zinc-200">
                                            {children}
                                        </code>
                                    ),
                                    img: ({ src, title }) => (
                                        <div className='w-full flex items-center justify-center'>
                                            <Image src={src || "Source"} alt={title || "Image"} width={1000} height={1000} className="w-2/3 sm:w-1/2 object-cover rounded-xl my-6" priority />
                                        </div>
                                    )
                                }}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
