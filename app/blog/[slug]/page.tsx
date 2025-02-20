"use client"

import { RichText } from '@graphcms/rich-text-react-renderer';
import { RichTextContent } from '@graphcms/rich-text-types';
import { Dot, MoveLeft } from 'lucide-react';
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

export default function BlogDetail() {
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
                        query GetBlogBySlug($slug: String!) {
                            blog(where: { slug: $slug }) {
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
            setPost(json?.data?.blog || null);
            setLoading(false);
        }

        if (slug) {
            fetchPost();
        }
    }, [slug]);

    if (loading) return <p className="text-center text-zinc-500">Loading...</p>;
    if (!post) return <p className="text-center text-zinc-500">Post not found.</p>;

    return (
        <section className="pt-12 lg:py-28 z-10">
            <div className="px-8 md:px-20 2xl:px-52 pb-10 space-y-8">
                <Link
                    href="/blog"
                    rel='canonical'
                    className='flex gap-2 text-zinc-300 body-light text-base link-hover-animation group-hover:link-hovered-animation transition-all w-fit'
                >
                    <MoveLeft className="ml-1 inline-block transition-all duration-300 group-hover:ml-2" />
                    Back to all blogs
                </Link>
                <div className="my-6">
                    <Image
                        src={post.featuredImage.url}
                        width={1000}
                        height={600}
                        className="w-full aspect-[5/1] object-cover rounded-xl"
                        alt={post.title}
                    />
                </div>

                <div className='space-y-2'>
                    <p className="font-mono text-zinc-500">{formatDate(post.publishDate)}</p>
                    <h1 className="text-4xl text-zinc-200 body">{post.title}</h1>
                    <p className="body-light text-base text-zinc-400">{post.description}</p>
                </div>

                <div className="mt-6 flex font-mono text-zinc-500 gap-2">
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
                            key={index} // Tambahkan key unik
                            content={item.json}
                            renderers={{
                                h2: ({ children }) => <h2 className="text-4xl body text-zinc-200 mt-6">{children}</h2>,
                                h3: ({ children }) => <h3 className="text-2xl body-bold-italic text-zinc-200 mt-6">{children}</h3>,
                                h4: ({ children }) => <h4 className="text-xl body-light text-zinc-400 mt-6 !important">- {children}</h4>,
                                ul: ({ children }) => <ul className="text-zinc-400 flex flex-col p-4 border-1 border-zinc-500/30 rounded-xl">{children}</ul>,
                                li: ({ children }) => <li className="flex text-base text-zinc-400 "><Dot />{children}</li>,
                                p: ({ children }) => <p className="text-base text-zinc-400">{children}</p>,
                                img: ({ src, title }) => (
                                    <div className='w-full flex items-center justify-center'>
                                        <img src={src} alt={title || "Image"} className="w-1/2 object-cover rounded-xl my-6" />
                                    </div>
                                )
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
