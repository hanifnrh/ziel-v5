import { MetadataRoute } from "next";

export const baseUrl = "https://www.ziel.works";

async function fetchBlogSlugs() {
    const response = await fetch(process.env.NEXT_PUBLIC_HYGRAPH_URL!, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_TOKEN}`,
        },
        body: JSON.stringify({
            query: `
        query {
          blogs {
            slug
          }
          projects {
            slug
          }
        }
      `,
        }),
    });

    const data = await response.json();
    return {
        blogSlugs: data?.data?.blogs || [],
        projectSlugs: data?.data?.projects || [],
    };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const { blogSlugs, projectSlugs } = await fetchBlogSlugs();

    const staticRoutes = [
        { url: `${baseUrl}/`, lastModified: new Date() },
        { url: `${baseUrl}/about`, lastModified: new Date() },
        { url: `${baseUrl}/guestbook`, lastModified: new Date() },
        { url: `${baseUrl}/blog`, lastModified: new Date() },
        { url: `${baseUrl}/projects`, lastModified: new Date() },
    ];

    const dynamicBlogRoutes = blogSlugs.map((post: { slug: string }) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(),
    }));

    const dynamicProjectRoutes = projectSlugs.map((project: { slug: string }) => ({
        url: `${baseUrl}/projects/${project.slug}`,
        lastModified: new Date(),
    }));

    return [...staticRoutes, ...dynamicBlogRoutes, ...dynamicProjectRoutes];
}
