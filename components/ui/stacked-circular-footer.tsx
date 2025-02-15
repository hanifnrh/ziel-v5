import { Dribbble, Github, Instagram, Linkedin } from "lucide-react";
import Image from 'next/image';
import Link from "next/link";

function StackedCircularFooter() {
  return (
    <footer className="bg-neutral-950 py-12 border-t border-neutral-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <div className="mb-8 bg-primary/10">
            <Image
              src="/ziel-logo-z-black.png"
              width={1000}
              height={1000}
              className="h-auto w-24"
              alt="Picture of the author">
            </Image>
          </div>
          <nav className="mb-8 body-light text-zinc-200 flex flex-wrap justify-center gap-6">
            <a href="#" className="hover:bg-purple-600/20 hover:text-purple-600 transition-all px-3 py-2 rounded-lg">Home</a>
            <a href="#" className="hover:bg-purple-600/20 hover:text-purple-600 transition-all px-3 py-2 rounded-lg">About</a>
            <a href="#" className="hover:bg-purple-600/20 hover:text-purple-600 transition-all px-3 py-2 rounded-lg">Guestbook</a>
          </nav>
          <div className="mb-8 flex space-x-4 text-zinc-200">
            <Link
              href=""
              rel="canonical"
              target="_blank"
              className="rounded-full p-3 border border-zinc-200 transition-all hover:bg-zinc-700"
            >
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href=""
              rel="canonical"
              target="_blank"
              className="rounded-full p-3 border border-zinc-200 transition-all hover:bg-zinc-700"
            >
              <Dribbble className="h-4 w-4" />
              <span className="sr-only">Dribbble</span>
            </Link>
            <Link
              href=""
              rel="canonical"
              target="_blank"
              className="rounded-full p-3 border border-zinc-200 transition-all hover:bg-zinc-700"
            >
              <Instagram className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href=""
              rel="canonical"
              target="_blank"
              className="rounded-full p-3 border border-zinc-200 transition-all hover:bg-zinc-700"
            >
              <Github className="h-4 w-4" />
              <span className="sr-only">Github</span>
            </Link>
          </div>
          <div className="text-center">
            <p className="body-light text-sm text-zinc-200">
              © 2025 Ziel. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { StackedCircularFooter };

