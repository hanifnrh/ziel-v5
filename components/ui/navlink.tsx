import Link from "next/link";

const NavLink = () => {
    const links = [
        { href: "/about", label: "About" },
        { href: "/projects", label: "Projects" },
        { href: "/designs", label: "Designs" },
        { href: "/blog", label: "Blog" },
        { href: "/guestbook", label: "Guestbook" },
    ];


    return (
        <div
            className="body flex flex-col md:flex-row gap-x-5 gap-y-3 items-center"
        >
            {links.map(({ href, label }) => (
                <Link key={href} href={href} rel="canonical" className="group">
                    <p
                        data-value={label}
                        className="cursor-pointer text-neutral-800 dark:text-neutral-200 hover:text-violet-600 transition-all dark:hover:text-neutral-400 link-hover-animation group-hover:link-hovered-animation"
                    >
                        {label}
                    </p>
                </Link>
            ))}
        </div>
    );
};

export default NavLink;