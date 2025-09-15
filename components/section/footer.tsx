"use client";

import { Dribbble, FileUser, Github, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Analytics", href: "https://cloud.umami.is/share/RX4yihtMS3ZY5OdK/www.ziel.works" },
  { label: "About", href: "/about" },
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/1YVITGrnvwSLOR7WKBRs4cAaRevdYVNvf/view?usp=sharing",
  },
  { label: "Guestbook", href: "/guestbook" },
  { label: "Blog", href: "/blog" },
];

const contacts = [
  { label: "Email", href: "mailto:dailyziel@gmail.com" },
  { label: "Instagram", href: "https://www.instagram.com/ziel.dev/" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nurrahmat-hanif-635055218",
  },
];

const socials = [
  { icon: FileUser, href: "" },
  { icon: Github, href: "" },
  { icon: Instagram, href: "https://www.instagram.com/ziel.works/" },
  { icon: Dribbble, href: "https://dribbble.com/dailyziel" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/nurrahmat-hanif-635055218",
  },
];

const FooterLink = ({ href, label }: { href: string; label: string }) => (
  <li>
    <a
      href={href}
      target="_blank"
      className="flex items-center gap-1 body text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200"
    >
      {label}
    </a>
  </li>
);

const SocialIcon = ({
  href,
  Icon,
}: {
  href: string;
  Icon: React.ComponentType<{ className?: string }>;
}) => (
  <Link href={href} target="_blank" rel="canonical" className="scale-75">
    <div className="bg-neutral-200 hover:bg-neutral-800/10 transition-all text-neutral-700 hover:text-neutral-800 dark:hover:text-neutral-200/80 p-3 rounded-lg flex items-center justify-center">
      <Icon className="size-5" />
    </div>
  </Link>
);

export default function Footer() {
  return (
    <footer className="flex w-full flex-col gap-8 relative mt-auto">
      <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
        <div className="flex justify-center pt-20 pb-20 px-4 md:px-10 xl:px-14 w-full dark:bg-neutral-950">
          <div className="flex items-stretch py-10 justify-between w-full text-sm tracking-wide gap-16 max-[960px]:flex-col-reverse">

            {/* Left */}
            <div className="space-y-6">
              <Link href="/" rel="canonical" className="space-y-4">
                <Image
                  src="/logo/zielfullviolet.png"
                  width={1000}
                  height={1000}
                  alt="Ziel Logo"
                  className="w-24 h-auto"
                  priority
                />
                <p className="text-[13px] body max-w-sm text-neutral-700 dark:text-neutral-500">
                  Creative design engineer with experience in UI/UX design and
                  frontend web development with focus on building visually
                  compelling and user-centric digital products.
                </p>
              </Link>
              {/* Social Icons */}
              <div className="space-y-2">
                <div className="flex gap-2 p-2 pl-0 w-full sm:w-fit justify-around sm:justify-center">
                  {socials.map((s, i) => (
                    <SocialIcon key={i} href={s.href} Icon={s.icon} />
                  ))}
                </div>
                <p className="text-xs text-neutral-700 dark:text-neutral-500 body-light">
                  &copy; {new Date().getFullYear()} Ziel. All rights reserved.
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col justify-between max-xs:gap-16 max-[960px]:flex-col-reverse max-[960px]:gap-12">
              <div className="grid grid-cols-2 gap-y-16 sm:gap-24 max-[960px]:max-w-[480px]">
                <div className="space-y-4">
                  <p className="text-neutral-800 dark:text-neutral-200">Links</p>
                  <ul className="flex flex-col gap-3">
                    {links.map((link) => (
                      <FooterLink key={link.href} {...link} />
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <p className="text-neutral-800 dark:text-neutral-200">
                    Contacts
                  </p>
                  <ul className="flex flex-col gap-3">
                    {contacts.map((contact) => (
                      <FooterLink key={contact.href} {...contact} />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="-z-10 h-48 w-3/5 opacity-25 blur-[160px] absolute left-1/2 top-0 -translate-x-1/2 xs:top-24"></div>

      {/* Separator */}
      <div className="h-[1px] w-full bg-gradient-to-r from-neutral-800/25 via-neutral-800/75 to-neutral-800/25"></div>
    </footer>
  );
}
