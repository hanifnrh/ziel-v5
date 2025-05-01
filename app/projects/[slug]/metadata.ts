import getPost from "./getPost";

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const post = await getPost(params.slug);

    return {
        title: post?.title || "Projects",
        description: post?.description || "View my latest projects.",
        openGraph: {
            type: "article",
            url: `https://ziel.works/projects/${params.slug}`,
            title: post?.title || "Projects",
            description: post?.description || "View my latest projects.",
            images: [
                {
                    url: post?.featuredImage?.url || "/thumbnail.png",
                    width: 1200,
                    height: 630,
                    alt: post?.title,
                },
            ],
        },
        twitter: {
            cardType: "summary_large_image",
        },
    };
}
