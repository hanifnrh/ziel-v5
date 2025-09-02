"use client";
import NavLink from "@/components/ui/navlink";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ResponsiveNavbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className="fixed top-2 z-50 w-full items transition-all duration-300 max-w-screen-2xl px-8 md:px-20 2xl:px-52"
        >
            {/* Navbar for large screens */}
            <nav className={`w-fit md:w-full flex-wrap items-center justify-center md:justify-between py-2 md:py-4 px-2 md:px-6 rounded-lg md:rounded-2xl flex mx-auto ${isScrolled
                ? 'bg-neutral-100/50 backdrop-blur-xl border border-neutral-200'
                : 'bg-transparent backdrop-blur-none'
                }`}>
                <Link
                    href="/"
                    rel="canonical"
                    className="flex items-center space-x-3 rtl:space-x-reverse p-0 md:py-2 md:px-3 md:bg-transparent md:p-0"
                >
                    <Image
                        src="/logo/zielviolet.png"
                        className="h-7 md:h-10 w-auto navbar-logo"
                        alt="Ziel Logo"
                        width={500}
                        height={500}
                        priority
                    />
                </Link>
                <div className={`w-full hidden md:block md:w-auto`} id="navbar-default">
                    <div className="items-center flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                        <NavLink />
                    </div>
                </div>
            </nav>
        </div>
    );
}