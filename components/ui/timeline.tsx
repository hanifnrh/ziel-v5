"use client";
import { cn } from "@/lib/utils";
import {
    motion,
    useScroll,
    useTransform
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { DotPattern } from "./dot-pattern";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="body w-full"
      ref={containerRef}
    >
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)] opacity-40",
        )}
      />
      <div className="w-full mx-auto">
        <h2 className="text-4xl sm:text-3xl lg:text-5xl mb-2 lg:mb-4 body tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-400 dark:bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]">
          Where others see numbers, I paint stories.
        </h2>
        <p className="text-neutral-500 body-light text-sm lg:text-lg max-w-4xl">
          I grow up in a rural area of Bekasi, West Java, Indonesia. Kind of not-so-artsy place to grow up in. But however, I survive with my little sketchbook. How does this have anything to do with programming? Well here is a brief story about my life and also my studies.
        </p>
      </div>

      <div ref={ref} className="relative w-full mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 lg:pt-40 lg:gap-10"
          >
            <div className="sticky flex flex-col lg:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm lg:w-full">
              <div className="h-10 absolute left-3 lg:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden lg:block text-xl lg:pl-20 lg:text-4xl body tracking-tighter text-neutral-500 dark:text-neutral-500 ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 lg:pl-4 w-full">
              <h3 className="lg:hidden block text-2xl mb-4 text-left body tracking-tighter text-neutral-200">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute lg:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 z-50 w-[2px] bg-gradient-to-t from-purple-500 via-indigo-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
