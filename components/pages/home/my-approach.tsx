import { MainMenusGradientCard } from "@/components/ui/animated-card";
import { BentoCard } from "@/components/ui/bento-grid";
import { Keyboard } from "@/components/ui/keyboard";
import { LogoCluster } from "@/components/ui/logocluster";
import { Map } from "@/components/ui/map";
import { motion } from "framer-motion";
import { Origami } from "lucide-react";

export default function MyApproach() {

    return (
        <div>
            <motion.div
                className="px-8 md:px-20 xl:px-28 py-5"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="flex bg-purple-600/20 text-purple-600 px-4 py-2 rounded-full w-fit">
                    <Origami className="mr-2" />
                    My Approach
                </h2>
            </motion.div>
            <div className="relative grid w-full grid-cols-1 gap-4 lg:gap-2 lg:grid-cols-3 pb-20 px-8 md:px-20 xl:px-28 text-neutral-200">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    <MainMenusGradientCard
                        className=""
                        description="Available on working remotely with flexible time schedule. Easy to reach and accessible."
                        title="Remote"
                    >
                        <BentoCard
                            graphic={<Map />}
                            className="max-lg:rounded-b-4xl lg:rounded-br-4xl lg:col-span-2"
                        />
                    </MainMenusGradientCard>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    <MainMenusGradientCard
                        className=""
                        description="Utilizing popular framework and great tools, ensuring the quality of the product."
                        title="Robust Tools"
                    >
                        <BentoCard
                            graphic={<LogoCluster />}
                            className="max-lg:rounded-b-4xl lg:rounded-br-4xl lg:col-span-2"
                        />
                    </MainMenusGradientCard>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    <MainMenusGradientCard
                        description="Modify or customize from any libraries, makes work run faster."
                        title="Various Libraries"
                    >
                        <BentoCard
                            graphic={
                                <div className="flex size-full pl-10 pt-10">
                                    <Keyboard highlighted={["LeftCommand", "C", "S"]} />
                                </div>
                            }
                            className="max-lg:rounded-b-4xl lg:rounded-br-4xl lg:col-span-2"
                        />
                    </MainMenusGradientCard>
                </motion.div>
            </div>
        </div>

    )
}