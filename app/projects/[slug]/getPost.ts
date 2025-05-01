const HYGRAPH_ENDPOINT = process.env.NEXT_PUBLIC_HYGRAPH_URL!;

export default function getPost(slug: string) {
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
        cache: "no-store",
    });

    const json = await response.json();
    return json?.data?.project || null;
}
