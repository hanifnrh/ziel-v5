"use client"
import AboutSection from "@/components/pages/about/about";
import Description from "@/components/pages/about/description";
import Story from "@/components/pages/about/story";
import MyApproach from "@/components/pages/home/my-approach";
import Experience from "@/components/section/experience";
import Head from "next/head";

export default function About() {

    return (
        <>
            <Head>
                <title>About Ziel - Creative Developer</title>
            </Head>
            <main className="bg-neutral-950">

                <AboutSection />

                <Description />

                <Experience />

                <MyApproach />

                <Story />

            </main>
        </>
    );
}