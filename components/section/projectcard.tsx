import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
    title: string;
    description: string;
    slug: string;
    featuredImage: string;
    tags: string[];
}

const ProjectCard = ({ title, description, slug, featuredImage, tags }: ProjectCardProps) => {
    return (
        <Link
            href={`/${slug}`}
            className="group body w-full flex flex-col gap-4 justify-center items-start text-zinc-200"
        >
            <div className="overflow-hidden rounded-xl">
                <Image
                    src={featuredImage}
                    width={1000}
                    height={1000}
                    className="w-full h-auto object-cover aspect-video group-hover:scale-105 transition-all"
                    alt={title}
                />
            </div>

            <div className="flex flex-wrap gap-2 text-xs text-zinc-200 items-center">
                {tags.map((tag, index) => (
                    <p key={index} className="bg-zinc-800 px-3 py-2 body-light rounded-full">
                        {tag}
                    </p>
                ))}
            </div>

            <h3 className="text-xl sm:text-2xl">{title}</h3>
            <p className="body-light text-sm text-zinc-500">{description}</p>
        </Link>
    );
};

export default ProjectCard;
