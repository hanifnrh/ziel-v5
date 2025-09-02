"use client"
import Bento from "@/components/pages/home/bento/bento";
import BlogPreview from "@/components/pages/home/blogpreview";
import ContactForm from "@/components/pages/home/contact-form";
import Hero from "@/components/pages/home/hero";
import MyApproach from "@/components/pages/home/my-approach";
import ProjectsPreview from "@/components/pages/home/projects-preview";
import { useMenu } from "@/components/ui/menuprovider";

export default function Home() {

  const { openMenu } = useMenu();

  return (
    <>
      <main className="">
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