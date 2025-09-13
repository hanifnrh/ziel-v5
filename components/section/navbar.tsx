"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import NavButton from "../ui/nav-button";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed top-2 z-50 w-full transition-all duration-300 px-4 md:px-10 xl:px-14">
            <nav
                className={`relative flex items-center justify-between py-2 md:py-4 rounded-lg md:rounded-2xl mx-auto
                ${isScrolled
                        ? ""
                        : ""
                    }`}
            >
                {/* Left: Base info */}
                <div className="hidden sm:flex flex-col">
                    <h2 className="text-neutral-900 text-lg body">
                        Indonesia Based
                    </h2>
                    <p className="text-neutral-700 text-base body-light">
                        Working globally
                    </p>
                </div>

                {/* Center: Logo */}
                <Link
                    href="/"
                    rel="canonical"
                    className="flex sm:absolute sm:left-1/2 sm:-translate-x-1/2"
                >
                    <Image
                        src="/logo/zielviolet.png"
                        alt="Ziel Logo"
                        width={500}
                        height={500}
                        className="h-9 md:h-12 w-auto navbar-logo"
                        priority
                    />
                </Link>

                {/* Right: NavButton */}
                <div className="ml-auto">
                    <NavButton />
                </div>
            </nav>
        </div>
    );
}
