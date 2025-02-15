"use client";
import EncodedText from "@/components/ui/encoded";
import {
    Button,
    Link
} from "@nextui-org/react";
import { GeistMono } from "geist/font/mono";
import dynamic from "next/dynamic";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

// Dynamically import the Clock component with ssr: false
const Clock = dynamic(() => import("@/components/ui/clock"), { ssr: false });

export default function ResponsiveNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const currentPath = usePathname();

    return (
        <div
            className={`${GeistMono.className} fixed top-0 z-50 w-full bg-transparent backdrop-blur-lg max-w-screen-2xl`}
        >
            {/* Navbar for large screens */}
            <nav className="flex-wrap items-center justify-between py-8 sm:py-4 flex px-8 md:px-20 2xl:px-52">
                <div className="left-nav hidden md:flex items-center space-x-4">
                    <Button className="body-light hidden md:block">
                        <Clock locale="en-CA" />
                    </Button>
                </div>
                <Link
                    href="/"
                    rel="canonical"
                    className={`absolute py-4 left-1/2 transform -translate-x-1/2 ${currentPath === "/"
                        ? "flex items-center space-x-3 rtl:space-x-reverse p-0 sm:py-2 sm:px-3 md:bg-transparent md:p-0"
                        : "block py-2 px-3 text-gray-900 rounded md:bg-transparent md:p-0 "
                        }`}
                >
                    <Image
                        src="/ziel-logo-z-black.png"
                        className="h-14 w-auto navbar-logo"
                        alt="Ziel Logo"
                        width={500}
                        height={500}
                    />
                </Link>
                <div className={`w-full hidden md:block md:w-auto`} id="navbar-default">
                    <div className="items-center flex font-bold flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                        <EncodedText />
                    </div>
                </div>
            </nav>
        </div>
    );
}
