"use client"
import Bento from "@/components/section/bento";
import Blog from "@/components/section/blog";
import Hero from "@/components/section/hero";
import MyApproach from "@/components/section/my-approach";
import Projects from "@/components/section/projects";
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

        <Projects />

        <Blog/>

        <ContactForm/>

      </main>
    </>
  );
}