import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import Image from "next/image";

const images = [
    { src: "/home/1.png", hidden: false },
    { src: "/home/2.png", hidden: true },
    { src: "/home/3.png", hidden: false },
    { src: "/home/4.png", hidden: true },
    { src: "/home/5.png", hidden: false },
    { src: "/home/6.png", hidden: false },
    { src: "/home/4.png", hidden: false },
    { src: "/home/8.png", hidden: false },
];

function Description() {
    return (
        <div className="h-fit px-4 md:px-10 xl:px-14 w-full grid grid-cols-1 lg:grid-cols-6 gap-12 py-20">
            {/* Left Section */}
            <motion.div
                className="flex w-full items-center justify-center gap-4 lg:col-span-4"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                viewport={{ once: false, amount: 0.5 }}
            >
                <div className="w-7 h-full bg-blue-500" />
                <div className="flex-1 flex items-start flex-col">
                    <h3 className="text-left flex items-center text-3xl lg:text-4xl xl:text-5xl body tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-neutral-900 via-neutral-700 to-neutral-600 py-10">
                        I build projects strategically, ensuring each piece is both visually
                        appealing and purpose-driven. Because good design is enjoyable and comfortable.
                    </h3>
                    <div className="hidden sm:flex items-center justify-center group gap-4 text-blue-700 text-2xl">
                        <div className="body bg-gradient-to-b from-white via-white to-blue-50 border border-blue-300 rounded-md px-4 py-2">
                            Discover
                        </div>
                        <MoveRight size={40} />
                        <div className="body bg-gradient-to-b from-white via-white to-blue-50 border border-blue-300 rounded-md px-4 py-2">
                            Design
                        </div>
                        <MoveRight size={40} />
                        <div className="body bg-gradient-to-b from-white via-white to-blue-50 border border-blue-300 rounded-md px-4 py-2">
                            Deliver
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                viewport={{ once: false, amount: 0.5 }}
                className="flex sm:hidden items-center justify-center group gap-4 text-blue-700 text-lg">
                <div className="body bg-gradient-to-b from-white via-white to-blue-50 border border-blue-300 rounded-md px-4 py-2">
                    Discover
                </div>
                <MoveRight size={24} />
                <div className="body bg-gradient-to-b from-white via-white to-blue-50 border border-blue-300 rounded-md px-4 py-2">
                    Design
                </div>
                <MoveRight size={24} />
                <div className="body bg-gradient-to-b from-white via-white to-blue-50 border border-blue-300 rounded-md px-4 py-2">
                    Deliver
                </div>
            </motion.div>

            {/* Right Section */}
            <motion.div
                className="grid grid-cols-3 lg:col-span-2 h-full gap-4"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                viewport={{ once: false, amount: 0.5 }}
            >
                {images.map((img, i) => (
                    <Image
                        key={i}
                        src={img.src}
                        width={1000}
                        height={1000}
                        alt={`thumbnail-${i + 1}`}
                        className={`col-span-1 w-full h-full aspect-square object-cover rounded-lg ${img.hidden ? "opacity-0" : ""
                            }`}
                    />
                ))}
            </motion.div>
        </div>
    );
}

export default Description;
