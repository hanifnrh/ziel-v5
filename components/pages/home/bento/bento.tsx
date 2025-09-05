"use client"

import ScopeOfWork from "@/components/pages/home/bento/components/scopeofwork";
import { motion } from "framer-motion";
import Principles from "./components/principles";
import Spotify from "./components/spotify";
import TechStack from "./components/tech-stack";

export default function Bento() {

    return (

        <div className="w-full gap-2 grid grid-cols-1 pb-20 px-4 md:px-20 xl:px-28 text-neutral-200">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true, amount: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-2"
            >

                <TechStack />
                <div className="sm:hidden lg:block">
                    <ScopeOfWork />
                </div>
            </motion.div>

            <div className="hidden sm:grid lg:hidden grid-cols-2 gap-2">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <Principles />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true, amount: 0.5 }}
                >

                    <ScopeOfWork />
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true, amount: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-2"
            >
                <div className="sm:hidden lg:block">
                    <Principles />
                </div>
                <div className="group">
                    <Spotify />
                </div>
            </motion.div>
        </div >

    )
}