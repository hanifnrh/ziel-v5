"use client";

import useWindowSize from "@/components/hooks/useWindowSize";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { stories } from "./data";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export default function Story() {
  const { width } = useWindowSize();
  const isMobile = width < 768; // Standard md breakpoint in Tailwind

  useGSAP(() => {
    // Early return if on mobile to disable animations
    if (isMobile) return;

    const cards = gsap.utils.toArray(".card");

    ScrollTrigger.create({
      trigger: cards[0] as Element,
      start: "top 30%",
      endTrigger: cards[cards.length - 1] as Element,
      end: "top 30%",
      pin: "#stories-title",
      pinSpacing: false,
      // markers: true,
    });

    gsap.to("#stories-title", {
      y: `-${(cards.length - 1) * 28}vh`,
      ease: "none",
      scrollTrigger: {
        trigger: cards[0] as Element,
        start: "top 30%",
        endTrigger: "#footer",
        end: "top 65%",
        scrub: true,
        // markers: true,
      },
    });

    cards.forEach((card, index) => {
      // const isLastCard = index === cards.length - 1;
      const cardInner = (card as Element).querySelector(".card-inner");

      ScrollTrigger.create({
        trigger: card as Element,
        start: "top 30%",
        endTrigger: cards[cards.length - 1] as Element,
        end: "bottom 60%",
        pin: true,
        pinSpacing: false,
        // markers: true,
      });

      gsap.to(cardInner, {
        y: `-${(cards.length - index) * 22}vh`,
        scale: 0.8 + index * 0.05,
        rotationZ: (Math.random() - 0.5) * 5, // Random rotationZ between -2.5 and 2.5 degrees
        rotationX: (Math.random() - 0.5) * 5, // Random rotationX between -2.5 and 2.5 degrees
        ease: "none",
        scrollTrigger: {
          trigger: card as Element,
          start: "top 30%",
          endTrigger: cards[cards.length - 1] as Element,
          end: "bottom 60%",
          scrub: true,
          // markers: true,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isMobile]); // Add isMobile as a dependency to re-run when screen size changes

  return (
    <section className="px-4 md:px-10 xl:px-14 py-8 overflow-hidden">
      <h2 className="body-bold text-center w-full text-4xl sm:text-7xl text-[#7f1010]">
        STORIES
      </h2>
      <div className="cards flex flex-col lg:gap-2 mb-16 lg:mb-56">
        {stories.map((stories, index) => (
          <StoryCard key={index} {...stories} index={index} />
        ))}
      </div>
    </section>
  );
}

type StoryCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  index: number;
};

function StoryCard({
  title,
  description,
  imageUrl,
  index,
}: StoryCardProps) {
  return (
    <div className="card relative pb-4" id={`card-${index}`}>
      <div className="card-inner relative will-change-transform w-full h-full p-6 lg:p-8 rounded-xl lg:rounded-2xl">
        <div className="flex flex-row justify-between mb-4 lg:mb-12">
          <h3 className="text-3xl sm:text-5xl lg:text-7xl body tracking-tight leading-none">
            {title}
          </h3>

          <p className="text-xl sm:text-3xl lg:text-5xl mt-2 lg:mt-0 body tracking-wider lg:tracking-normal leading-none">
            (0{index + 1})
          </p>
        </div>

        <div className="flex flex-col-reverse lg:flex-row items-start justify-between w-full">
          <div className="flex flex-col gap-6 lg:gap-8 w-full lg:w-7/12">
            <p className="text-xl sm:text-2xl lg:text-3xl body leading-tight">
              {description}
            </p>
          </div>

          <div className="relative w-full lg:w-4/12 h-[250px] sm:h-[350px] lg:h-[clamp(350px,25vw,600px)] rounded-lg lg:rounded-2xl overflow-hidden mb-4 lg:mb-0">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover object-center pointer-events-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}