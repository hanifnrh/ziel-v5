import { Hand } from "lucide-react";
import Link from "next/link";
import { useState } from "react";


export default function NavButton() {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <Link
            href="mailto:dailyziel@gmail.com"
            rel="canonical"
            target="_blank"
        >
            <button
                className="group relative rounded-full bg-neutral-400 p-1 text-white transition-transform hover:scale-110 active:scale-105"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                <div className="relative flex items-center justify-center gap-2 rounded-full bg-neutral-900 px-4 py-2 text-white">
                    <Hand className="size-6 -translate-y-0.5" />

                    <span className="body">Get in touch</span>
                </div>
            </button>
        </Link>
    );
}
