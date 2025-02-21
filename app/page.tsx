"use client"
import Bento from "@/components/section/bento";
import BlogPreview from "@/components/section/blogpreview";
import Hero from "@/components/section/hero";
import MyApproach from "@/components/section/my-approach";
import ProjectsPreview from "@/components/section/projects-preview";
import ContactForm from "@/components/ui/contact-form";
import { useMenu } from "@/components/ui/menuprovider";

export default function Home() {

  const { openMenu } = useMenu();

  return (
    <>
      <main className="bg-neutral-950">
        <Hero />

        <Bento />

        <MyApproach />

        <ProjectsPreview/>

        <BlogPreview/>

        <ContactForm/>

      </main>
    </>
  );
}