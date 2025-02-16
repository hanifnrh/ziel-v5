import { Dribbble, FileUser, Github, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { RetroGrid } from "../magicui/retro-grid";

const Footer = () => {
  return (
    <footer className="body-light relative mt-auto w-full">
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
        <div className="flex justify-center bg-zinc-950 pt-20 p-8 pb-20 px-8 md:px-20 2xl:px-52 w-full">
          <div className="flex items-stretch py-10 justify-between text-sm tracking-wide w-full min-[1200px]:w-[1200px] gap-16 max-[960px]:flex-col-reverse">

            {/* Left Section */}
            <div className="space-y-16">
              <Link
                href="/"
                rel="canonical"
                className="space-y-4"
              >
                <Image
                  src="https://zielbucket.s3.ap-southeast-2.amazonaws.com/public/images/ziel-logo-white.png"
                  width={1000}
                  height={1000}
                  alt="Ziel Logo"
                  className="w-24 h-auto"
                />
                <p className="text-[13px] max-w-sm text-zinc-500">
                  Creative design engineer with experience in UI/UX design and frontend web development
                  with focus on building visually compelling and user-centric digital products.
                </p>
              </Link>
              <div className="space-y-6">
                <div className="flex gap-2 p-2 border-2 justify-around sm:justify-center border-dashed border-zinc-200/20 rounded-xl w-full sm:w-fit">
                  <Link
                    href=""
                    rel="canonical"
                    target="_blank"
                    className="scale-75"
                  >
                    <div className="bg-zinc-200/20 hover:bg-zinc-200/10 transition-all text-zinc-200 hover:text-zinc-200/80 p-3 rounded-lg flex items-center justify-center">
                      <FileUser />
                    </div>
                  </Link>
                  <Link
                    href=""
                    rel="canonical"
                    target="_blank"
                    className="scale-75"
                  >
                    <div className=" bg-zinc-200/20 hover:bg-zinc-200/10 transition-all text-zinc-200 hover:text-zinc-200/80 p-3 rounded-lg flex items-center justify-center">
                      <Github />
                    </div>
                  </Link>
                  <Link
                    href="https://www.instagram.com/ziel.dev/"
                    rel="canonical"
                    target="_blank"
                    className="scale-75"
                  >
                    <div className=" bg-zinc-200/20 hover:bg-zinc-200/10 transition-all text-zinc-200 hover:text-zinc-200/80 p-3 rounded-lg flex items-center justify-center">
                      <Instagram />
                    </div>
                  </Link>
                  <Link
                    href="https://dribbble.com/dailyziel"
                    rel="canonical"
                    target="_blank"
                    className="scale-75"
                  >
                    <div className=" bg-zinc-200/20 hover:bg-zinc-200/10 transition-all text-zinc-200 hover:text-zinc-200/80 p-3 rounded-lg flex items-center justify-center">
                      <Dribbble />
                    </div>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/nurrahmat-hanif-635055218 "
                    rel="canonical"
                    target="_blank"
                    className="scale-75"
                  >
                    <div className=" bg-zinc-200/20 hover:bg-zinc-200/10 transition-all text-zinc-200 hover:text-zinc-200/80 p-3 rounded-lg flex items-center justify-center">
                      <Linkedin />
                    </div>
                  </Link>
                </div>
                <p className="text-xs text-zinc-500">&copy; {new Date().getFullYear()} Ziel. All rights reserved.</p>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex flex-col justify-between max-xs:gap-16 max-[960px]:flex-col-reverse max-[960px]:gap-12 text-zinc-200">
              <div className="grid grid-cols-2 gap-y-16 max-[960px]:max-w-[480px] max-xs:grid-cols-2 sm:gap-24">
                <div className="space-y-4">
                  <p className="text-zinc-200">Links</p>
                  <ul className="flex flex-col gap-3 text-zinc-400">
                    <li>
                      <a href="/about" target="_blank" className="flex items-center gap-1 font-normal hover:text-zinc-200">

                        <div className="size-3">
                          About
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="https://drive.google.com/file/d/1YVITGrnvwSLOR7WKBRs4cAaRevdYVNvf/view?usp=sharing" target="_blank" className="flex items-center gap-1 font-normal hover:text-zinc-200">

                        <div className="size-3">
                          CV
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/guestbook" target="_blank" className="flex items-center gap-1 font-normal hover:text-zinc-200">

                        <div className="size-3">
                          Guestbook
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/blog" target="_blank" className="flex items-center gap-1 font-normal hover:text-zinc-200">
                        <div className="size-3">
                          Blog
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <p className="text-zinc-200">Contacts</p>
                  <ul className="flex flex-col gap-3 text-zinc-400">
                    <li>
                      <a href="mailto:dailyziel@gmail.com" target="_blank" className="flex items-center gap-1 font-normal hover:text-zinc-200">
                        <div className="size-3">Email</div>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/ziel.dev/" target="_blank" className="flex items-center gap-1 font-normal hover:text-zinc-200">
                        <div className="size-3">Instagram</div>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/nurrahmat-hanif-635055218 " target="_blank" className="flex items-center gap-1 font-normal hover:text-zinc-200">
                        <div className="size-3">LinkedIn</div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <RetroGrid />
      </div>
      <div className="-z-10 h-48 w-3/5 opacity-25 blur-[160px] absolute left-1/2 top-0 -translate-x-1/2 xs:top-24"></div>

      {/* Separator */}
      <div className="h-[1px] w-full bg-gradient-to-r from-zinc-800/25 via-zinc-800/75 to-zinc-800/25"></div>

    </footer>
  );
};

export default Footer;


