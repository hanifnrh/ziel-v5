// Components
import ContentForm from "@/components/form/content-form";
import Guestbook from "@/components/macro/guestbook";
import BlurIn from "@/components/ui/blur-in";
import { Button } from "@/components/ui/button";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Image from "next/image";

// Utils
import { githubSignIn, googleSignIn, signOut } from "@/utils/function/fn";
import { createClient } from "@/utils/supabase/server";

// Icons
import { BookOpenText, Github, LogOut } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

const Page = async () => {
    const supabase = await createClient();
    const { data: user, error } = await supabase.auth.getUser();

    return (
        <div className="bg-neutral-950">
            <Image
                className="absolute top-0 z-0 -translate-y-1/2"
                src={"https://farmui.vercel.app/bg-back.png"}
                width={1000}
                height={1000}
                alt="back bg"
            />
            <section className="py-28 z-10 p-8 pb-20 gap-16 px-8 md:px-20 2xl:px-52">
                <TracingBeam>
                    <div
                        id="guestbook"
                        className="flex w-full grow flex-col gap-y-4"
                    >
                        <BlurIn className="flex h-full w-full flex-col justify-center items-start">
                            <div className="md:pad-x relative flex h-auto flex-col">
                                <div className="relative sm:pl-12 sm:pr-8 sm:px-0 h-full w-full grow grid grid-cols-1 items-center justify-center gap-6 sm:py-4 md:gap-8 md:py-6 lg:py-12">
                                    {/* Login */}
                                    <div className="relative z-10 flex h-fit flex-col">
                                        <div className="flex gap-2 items-center">
                                            <div className="flex items-center justify-center p-4 rounded-xl bg-purple-600/20 text-purple-600">
                                                <BookOpenText size={30} />
                                            </div>
                                            <h3 className="flex text-5xl body tracking-tighter text-transparent bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]">
                                                Guestbook
                                            </h3>
                                        </div>
                                        <p className="w-full mb-4 mt-2 body-light tracking-tighter text-md sm:text-lg text-zinc-500">
                                            Leave a message of your impression of this website, or you can say anything!
                                        </p>
                                        {user && user.user ? (
                                            <>
                                                <ContentForm user={user.user} />
                                                <form onSubmit={signOut} className="mt-1 py-2">

                                                    {/* Submit button */}
                                                    <Button className="px-0 py-2">
                                                        <div style={{ transform: "none" }}>
                                                            <div className="group relative inline-block cursor-pointer rounded-xl bg-zinc-900 p-px leading-6 text-white no-underline shadow-2xl shadow-zinc-900">
                                                                <span className="absolute inset-0 overflow-hidden rounded-xl">
                                                                    <span className="absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(199,1,220,0.6)_0%,rgba(199,1,220,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                                                        {" "}
                                                                    </span>{" "}
                                                                </span>
                                                                <div className="body-light relative z-10 flex items-center space-x-2 rounded-xl bg-gray-950/50 px-6 py-3 ring-1 ring-white/10">
                                                                    <span>Sign Out</span>
                                                                    <LogOut />
                                                                </div>
                                                                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-fuchsia-400/0 via-gray-400/90 to-fuchsia-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
                                                            </div>
                                                        </div>
                                                    </Button>

                                                </form>
                                            </>
                                        ) : (
                                            <div className="flex flex-col sm:flex-row gap-4">
                                                <form onSubmit={githubSignIn} className="group py-2">
                                                    <Button className="px-0 py-2">
                                                        <div style={{ transform: "none" }}>
                                                            <div className="relative inline-block cursor-pointer rounded-xl bg-zinc-900 p-px leading-6 text-white no-underline shadow-2xl shadow-zinc-900">
                                                                <span className="absolute inset-0 overflow-hidden rounded-xl">
                                                                    <span className="absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(79,70,229,0.6)_0%,rgba(79,70,229,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                                                        {" "}
                                                                    </span>{" "}
                                                                </span>
                                                                <div className="body-light relative z-10 flex items-center space-x-2 rounded-xl bg-gray-950/50 px-6 py-3 ring-1 ring-white/10">
                                                                    <span>Sign in with GitHub</span>
                                                                    <Github />
                                                                </div>
                                                                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-indigo-600/0 via-gray-400/90 to-fuchsia-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
                                                            </div>
                                                        </div>
                                                    </Button>
                                                </form>
                                                <form onSubmit={googleSignIn} className="group py-2">
                                                    {/* Submit button */}
                                                    <Button className="px-0 py-2">
                                                        <div style={{ transform: "none" }}>
                                                            <div className="relative inline-block cursor-pointer rounded-xl bg-zinc-900 p-px leading-6 text-white no-underline shadow-2xl shadow-zinc-900">
                                                                <span className="absolute inset-0 overflow-hidden rounded-xl">
                                                                    <span className="absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(225,29,72,0.6)_0%,rgba(225,29,72,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                                                        {" "}
                                                                    </span>{" "}
                                                                </span>
                                                                <div className="body-light relative z-10 flex items-center space-x-2 rounded-xl bg-gray-950/50 px-6 py-3 ring-1 ring-white/10">
                                                                    <span>Sign in with Google</span>
                                                                    <FcGoogle />
                                                                </div>
                                                                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-rose-600/0 via-gray-400/90 to-fuchsia-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
                                                            </div>
                                                        </div>
                                                    </Button>
                                                </form>
                                            </div>
                                        )}
                                    </div>

                                    <Guestbook />

                                </div>
                            </div>
                        </BlurIn>
                    </div>
                </TracingBeam>
            </section>
        </div>
    );
};
export default Page;