"use client"
import AboutSection from "@/components/pages/about/about";
import Description from "@/components/pages/about/description";
import Experience from "@/components/pages/about/experience";
import Header from "@/components/pages/about/header";
import Story from "@/components/pages/about/story";
import MyApproach from "@/components/pages/home/my-approach";
import Slider from "@/components/ui/slider-images";
import Head from "next/head";

export default function About() {

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
            <Head>
                <title>About Ziel - Creative Developer</title>
            </Head>
            <main className="flex flex-col gap-14">

                <Header />

                <Slider images={sliderImages} />

                <AboutSection />

                <Description />

                <Experience />

                <MyApproach />

                <Story />

            </main>
        </>
    );
}