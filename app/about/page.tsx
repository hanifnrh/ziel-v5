"use client"
import AboutSection from "@/components/section/about";
import Description from "@/components/section/description";
import Experience from "@/components/section/experience";
import MyApproach from "@/components/section/my-approach";
import Story from "@/components/section/story";
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