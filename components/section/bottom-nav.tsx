"use client";

import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const BottomNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { id: 1, name: 'Home', src: '/images/menu/home.png' },
        { id: 2, name: 'About', src: '/images/menu/about.png' },
        { id: 3, name: 'Projects', src: '/images/menu/project.png' },
        { id: 4, name: 'Designs', src: '/images/menu/design.png' },
        { id: 5, name: 'Guestbook', src: '/images/menu/guest.png' },
        { id: 6, name: 'Blog', src: '/images/menu/blog.png' },
    ];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="body flex w-[90%] sm:w-[500px] mx-auto fixed bottom-4 z-50 left-1/2 -translate-x-1/2">
            {/* Main container that expands */}
            <motion.div
                className="flex w-full items-center justify-start bg-violet-600 text-white shadow-lg rounded-2xl overflow-hidden"
                initial={{ height: 64 }}
                animate={{ height: isOpen ? "fit-content" : 64 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
                {/* Menu items container */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex w-full p-4 pb-0 mb-20"
                >
                    <ul className="grid grid-cols-2 w-full border-b border-neutral-200/40 pb-4 gap-x-6 justify-between items-start">
                        {menuItems.map((item) => (
                            <motion.li
                                key={item.id}
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: item.id * 0.05 }}
                            >
                                <Link
                                    href={item.name === 'Home' ? '/' : `/${item.name.toLowerCase()}`}
                                    rel="canonical"
                                    className='flex items-center p-2 gap-4 rounded-xl hover:bg-violet-700 cursor-pointer transition-colors'
                                >
                                    <Image
                                        src={item.src}
                                        alt="logo"
                                        width={30}
                                        height={30}
                                        className="p-1 bg-white rounded-md w-12"
                                    />
                                    <span className="uppercase">{item.name}</span>
                                </Link>
                            </motion.li>
                        ))}
                    </ul>

                </motion.div>

                {/* Bottom bar with title and hamburger - always visible */}
                <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center bg-violet-600 rounded-2xl">
                    <div className='flex items-center gap-4'>
                        <Image src={"/logo/zielviolet.png"} alt="logo" width={30} height={30} className="p-1 bg-white rounded-md w-12" />
                        <span className="text-xl">MENU</span>
                    </div>

                    {/* Hamburger Button with Lucide Icons */}
                    <button
                        onClick={toggleMenu}
                        className="w-12 h-12 flex items-center justify-center"
                        aria-label="Toggle menu"
                    >
                        <motion.div
                            initial={false}
                            animate={{ rotate: isOpen ? 90 : 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            {isOpen ? (
                                <X size={28} className="text-white" />
                            ) : (
                                <Menu size={28} className="text-white" />
                            )}
                        </motion.div>
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default BottomNav;