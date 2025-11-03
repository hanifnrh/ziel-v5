"use client"

import ScopeOfWork from "@/components/pages/home/bento/components/scopeofwork";
import { motion } from "framer-motion";
import FocusAreas from "./components/focusareas";
import Principles from "./components/principles";
import Tools from "./components/tools";

export default function Bento() {

    return (

        <div className="w-full gap-2 grid grid-cols-1 pb-20 px-4 md:px-10 xl:px-14 text-neutral-200">
            <div className="hidden sm:grid lg:hidden grid-cols-2 gap-2">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: false, amount: 0.5 }}
                >
                    <Principles />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: false, amount: 0.5 }}
                >

                    <ScopeOfWork />
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: false, amount: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-4 gap-2"
            >
                <div className="sm:hidden lg:block h-full">
                    <Principles />
                </div>
                <div className="sm:hidden lg:block">
                    <ScopeOfWork />
                </div>   
                <div className="sm:hidden lg:block">
                    <FocusAreas />
                </div>
                <div className="">
                    <Tools />
                </div>
            </motion.div>
        </div >

    )
}