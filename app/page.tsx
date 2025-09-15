"use client"
import Bento from "@/components/pages/home/bento/bento";
import BlogPreview from "@/components/pages/home/blogpreview";
import Description from "@/components/pages/home/description";
import Hero from "@/components/pages/home/hero";
import ProjectsPreview from "@/components/pages/home/projects-preview";
import Slider from "@/components/ui/slider-images";

export default function Home() {

  const sliderImages = [
    "/about/slider/1.png",
    "/about/slider/2.png",
    "/about/slider/3.png",
    "/about/slider/4.png",
    "/about/slider/5.png",
    "/about/slider/6.png",
    "/about/slider/7.png",
    "/about/slider/8.png",
  ];


  return (
    <>
      <main className="flex flex-col overflow-x-hidden">

        <Hero />

        <Bento />

        <Description/>

        <ProjectsPreview />

        <BlogPreview />

        <Slider images={sliderImages} />
      </main>
    </>
  );
}