"use client"

import { RichText } from '@graphcms/rich-text-react-renderer';
import { RichTextContent } from '@graphcms/rich-text-types';
import { Dot, MoveLeft } from 'lucide-react';
import Head from 'next/head';
import Image from "next/image";
import Link from 'next/link';
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
interface Post {
    title: string;
    description: string;
    content: any; // Ubah ke any biar bisa masuk ke RichText
    publishDate: string;
    featuredImage: {
        url: string;
    };
    tag: string;
}

const HYGRAPH_ENDPOINT = process.env.NEXT_PUBLIC_HYGRAPH_URL!;

export default function ProjectDetail() {
    const { slug } = useParams();
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);

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
            setPost(json?.data?.project || null);
            setLoading(false);
        }

        if (slug) {
            fetchPost();
        }
    }, [slug]);

    if (loading) return <p className="text-center text-zinc-500">Loading...</p>;
    if (!post) return <p className="text-center text-zinc-500">Post not found.</p>;
    console.log(JSON.stringify(post.content, null, 2));

    return (
        <>
            <Head>
                <title>{post?.title || "Projects"} | Ziel</title>
                <meta name="description" content={post?.description || "View my latest projects."} />
                <meta name="robots" content="index, follow" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="article" />
                <meta property="og:title" content={post?.title || "Projects"} />
                <meta property="og:description" content={post?.description || "View my latest projects."} />
                <meta property="og:image" content={post?.featuredImage?.url || "https://zielbucket.s3.ap-southeast-2.amazonaws.com/public/images/thumbnail.png"} />
                <meta property="og:url" content={`https://dailyziel.com/blog/${slug}`} />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={post?.title || "Blog"} />
                <meta name="twitter:description" content={post?.description || "Read our latest blog post."} />
                <meta name="twitter:image" content={post?.featuredImage?.url || "https://zielbucket.s3.ap-southeast-2.amazonaws.com/public/images/thumbnail.png"} />
            </Head>
            <section className="mt-12 lg:mt-0 pt-12 lg:py-28 z-10">
                <div className="flex flex-col px-8 md:px-20 2xl:px-52 pb-10 gap-4 lg:gap-8">
                    <Image
                        className="absolute top-0 z-0 -translate-y-1/2"
                        src={"https://farmui.vercel.app/bg-back.png"}
                        width={1000}
                        height={1000}
                        alt="back bg"
                    />
                    <Link
                        href="/projects"
                        rel='canonical'
                        className='flex gap-2 text-zinc-300 body-light text-base link-hover-animation hover:link-hovered-animation transition-all w-fit'
                    >
                        <MoveLeft className="ml-1 inline-block transition-all duration-300 group-hover:ml-2" />
                        Back to all projects
                    </Link>
                    <div className="">
                        <Image
                            src={post.featuredImage.url}
                            width={1000}
                            height={600}
                            className="w-full aspect-[5/2] sm:aspect-[5/1] object-cover rounded-sm"
                            alt={post.title}
                        />
                    </div>

                    <div className='flex flex-col gap-2'>
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

                    <div className='flex flex-col gap-2 pt-4 border-t-1 border-zinc-500/20'>
                        {/* Render Rich Text */}
                        {post.content?.map((item: { json: RichTextContent }, index: number) => (
                            <RichText
                                key={index} // Tambahkan key unik
                                content={item.json}
                                renderers={{
                                    h2: ({ children }) => <h2 className="text-2xl sm:text-4xl body text-zinc-200 mt-10 border-b-1 border-zinc-200/20 py-2">{children}</h2>,
                                    h3: ({ children }) => <h3 className="text-lg sm:text-2xl body text-zinc-200 mt-6">{children}</h3>,
                                    h4: ({ children }) => <h4 className="text-base sm:text-xl body-light text-zinc-400 mt-6 !important">- {children}</h4>,
                                    ul: ({ children }) => <ul className="flex flex-col p-4 gap-3 bg-purple-600/20 border-l-4 border-purple-600">{children}</ul>,
                                    li: ({ children }) => <li className="flex text-base sm:text-lg text-purple-600"><Dot className='shrink-0' />{children}</li>,
                                    code: ({ children }) => (
                                        <code className="whitespace-pre-wrap block bg-zinc-600/20 p-4 rounded-lg overflow-x-auto text-sm sm:text-base font-mono text-zinc-200">
                                            {children}
                                        </code>
                                    ),
                                    p: ({ children }) => <p className="text-sm sm:text-base text-zinc-400">{children}</p>,
                                    img: ({ src, title }) => (
                                        <div className='w-full flex items-center justify-center'>
                                            <Image src={src || "Source"} alt={title || "Image"} width={1000} height={1000} className="w-2/3 sm:w-1/2 object-cover rounded-xl my-6" />
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
