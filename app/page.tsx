"use client"
import Bento from "@/components/pages/home/bento/bento";
import BlogPreview from "@/components/pages/home/blogpreview";
import Hero from "@/components/pages/home/hero";
import MyApproach from "@/components/pages/home/my-approach";
import ProjectsPreview from "@/components/pages/home/projects-preview";

export default function Home() {

  return (
    <>
      <main className="">
        <Hero />

        <Bento />

        <ProjectsPreview />

        <MyApproach />

        <BlogPreview />

        {/* <ContactForm/> */}

      </main>
    </>
  );
}