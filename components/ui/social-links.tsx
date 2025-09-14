import Link from "next/link";
import React from "react";
import { LuDribbble, LuGithub, LuInstagram, LuLinkedin } from "react-icons/lu";

const socialLinks = [
    {
        name: "LinkedIn",
        icon: LuLinkedin,
        href: "https://linkedin.com/nurrahmathanif/",
    },
    {
        name: "Github",
        icon: LuGithub,
        href: "https://github.com/hanifnrh",
    },
    {
        name: "Dribbble",
        icon: LuDribbble,
        href: "https://dribbble.com/ziel_works",
    },
    {
        name: "Instagram",
        icon: LuInstagram,
        href: "https://instagram.com/ziel.works",
    },
];

const SocialLinks: React.FC = () => {
    return (
        <div className="w-full rounded-lg">
            <div className="w-full grid grid-cols-2 sm:grid-cols-4">
                {socialLinks.map((link) => (
                    <Card
                        key={link.name}
                        title={link.name}
                        href={link.href}
                        Icon={link.icon}
                    />
                ))}
            </div>
        </div>
    );
};

type CardProps = {
    title: string;
    href: string;
    Icon: React.ElementType;
};

const Card: React.FC<CardProps> = ({ title, href, Icon }) => {
    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 items-center justify-center w-full px-6 lg:px-12 py-8 relative overflow-hidden group border-blue-600 border-b border-t"
        >
            {/* Background gradient overlay */}
            <div
                className="absolute inset-0 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300 bg-blue-600"
            />

            {/* Main small icon */}
            <Icon
                className="text-base sm:text-lg text-blue-600 group-hover:text-white transition-colors relative z-10 duration-300"
            />

            {/* Title */}
            <h3 className="body text-lg sm:text-xl text-blue-600 group-hover:text-white relative z-10 duration-300">
                {title}
            </h3>
        </Link>
    );
};

export default SocialLinks;
