"use client";

import ButtonCopy from "@/components/ui/buttoncopy";
import { Package } from "lucide-react";
import Link from "next/link";
import React, { useEffect } from "react";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./dialog";
import { useMenu } from "./menuprovider";

const Menu: React.FC = () => {
    const { isDialogOpen, closeMenu, openMenu } = useMenu();
    const emailToCopy = "dailyziel@gmail.com";

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.ctrlKey && event.key === "q") {
                openMenu();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [openMenu]);

    return (
        <Dialog open={isDialogOpen} onOpenChange={closeMenu}>
            <DialogContent className="body bg-neutral-950/80 backdrop-blur-xs sm:max-w-md flex flex-col items-center justify-center">
                <div
                    className={`absolute inset-0 -z-10 rounded-xl p-px bg-gradient-to-br from-transparent  to-transparent via-purple-700/10 opacity-40 transition-opacity duration-300`}
                />
                <DialogHeader>
                    <DialogTitle className="text-center text-zinc-200">Menu</DialogTitle>
                    <DialogDescription className="text-center body-light text-zinc-200">Get in touch with me</DialogDescription>
                </DialogHeader>
                <div className="w-full flex flex-col items-center justify-center gap-y-2">
                    <div className="flex justify-center w-52">
                        {/* Use the Btn06 button */}
                        <ButtonCopy
                            textToCopy={emailToCopy}
                            successDuration={3000}
                        />
                    </div>

                    <div className="flex items-center justify-center w-52">
                        <Link href="/#contact" className="w-full" rel="canonical" >
                            <DialogClose asChild>
                                <div style={{ transform: "none" }}>
                                    <div className="w-full group relative inline-block cursor-pointer rounded-xl bg-zinc-900/10 p-px leading-6 text-white no-underline shadow-2xl shadow-zinc-900">
                                        <span className="absolute inset-0 overflow-hidden rounded-xl">
                                            <span className="absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(129,140,248,0.6)_0%,rgba(129,140,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                                {" "}
                                            </span>{" "}
                                        </span>
                                        <div className="body-light relative z-10 flex items-center space-x-2 rounded-xl bg-gray-950/50 px-6 py-3 ring-1 ring-white/10">
                                            <span>Book my service</span>
                                            <Package className="w-4 h-4" />
                                        </div>
                                        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-indigo-400/0 via-gray-400/90 to-fuchsia-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
                                    </div>
                                </div>
                            </DialogClose>
                        </Link>
                    </div>
                </div>

                <DialogFooter className="flex flex-col justify-center items-center w-52">
                    <DialogClose asChild>
                        <div style={{ transform: "none" }} className="w-full">
                            <div className="w-full group relative inline-block cursor-pointer rounded-xl bg-red-900/10 p-px leading-6 text-white no-underline shadow-2xl shadow-zinc-900">
                                <span className="absolute inset-0 overflow-hidden rounded-xl">
                                    <span className="absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(248,113,113,0.6)_0%,rgba(248,113,113,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                        {" "}
                                    </span>{" "}
                                </span>
                                <div className="justify-center body-light text-red-900 relative z-10 flex items-center space-x-2 rounded-xl bg-gray-950/50 px-6 py-3 ring-1 ring-white/10">
                                    <span>Close</span>
                                </div>
                                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-red-400/0 via-gray-400/90 to-fuchsia-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
                            </div>
                        </div>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default Menu;
