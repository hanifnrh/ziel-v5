// Components
import ContentForm from "@/components/form/content-form";
import Guestbook from "@/components/macro/guestbook";
import { Button } from "@/components/ui/button";

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
        <section className="py-28 z-10 p-8 pb-20 gap-16 px-4 md:px-10 xl:px-14">
            <div
                id="guestbook"
                className="flex w-full grow flex-col gap-y-4"
            >
                <div className="flex h-full w-full flex-col justify-center items-start">
                    <div className="md:pad-x relative flex h-auto flex-col">
                        <div className="relative h-full w-full grow grid grid-cols-1 items-center justify-center gap-6 sm:py-4 md:gap-8 md:py-6 lg:py-12">
                            {/* Login */}
                            <div className="relative z-10 flex h-fit flex-col">
                                <div className="flex gap-2 items-center">
                                    <div className="flex items-center justify-center p-4 rounded-xl bg-indigo-600/20 text-indigo-600">
                                        <BookOpenText size={30} />
                                    </div>
                                    <h3 className="flex text-6xl body tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-indigo-800 via-indigo-700 to-indigo-400">
                                        Guestbook
                                    </h3>
                                </div>
                                <p className="w-full mb-4 mt-2 body-light tracking-tighter text-lg sm:text-2xl text-neutral-500">
                                    Leave a message of your impression of this website, or you can say anything!
                                </p>
                                {user && user.user ? (
                                    <>
                                        <form onSubmit={signOut} className="mt-1 py-2">

                                            {/* Submit button */}
                                            <Button className="px-0 py-2 justify-start">
                                                <div style={{ transform: "none" }}>
                                                    <div className="group relative inline-block cursor-pointer rounded-xl bg-neutral-900 p-px leading-6 text-white no-underline shadow-md shadow-neutral-800">
                                                        <span className="absolute inset-0 overflow-hidden rounded-xl">
                                                            <span className="absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(199,1,220,0.6)_0%,rgba(199,1,220,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                                                {" "}
                                                            </span>{" "}
                                                        </span>
                                                        <div className="body-light relative z-10 flex items-center space-x-2 rounded-xl text-lg sm:text-xl bg-neutral-950/50 px-6 py-3 ring-1 ring-white/10">
                                                            <span>Sign Out</span>
                                                            <LogOut />
                                                        </div>
                                                        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-fuchsia-400/0 via-neutral-400/90 to-fuchsia-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
                                                    </div>
                                                </div>
                                            </Button>

                                        </form>
                                        <ContentForm user={user.user} />
                                    </>
                                ) : (
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <form onSubmit={githubSignIn} className="group py-2">
                                            <Button className="px-0 py-2">
                                                <div style={{ transform: "none" }}>
                                                    <div className="relative inline-block cursor-pointer rounded-xl bg-neutral-900 p-px leading-6 text-white no-underline shadow-md shadow-neutral-800">
                                                        <span className="absolute inset-0 overflow-hidden rounded-xl">
                                                            <span className="absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(79,70,229,0.6)_0%,rgba(79,70,229,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                                                {" "}
                                                            </span>{" "}
                                                        </span>
                                                        <div className="body-light relative z-10 flex items-center space-x-2 rounded-xl text-lg sm:text-xl bg-neutral-950/50 px-6 py-3 ring-1 ring-white/10">
                                                            <span>Sign in with GitHub</span>
                                                            <Github />
                                                        </div>
                                                        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-indigo-600/0 via-neutral-400/90 to-fuchsia-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
                                                    </div>
                                                </div>
                                            </Button>
                                        </form>
                                        <form onSubmit={googleSignIn} className="group py-2">
                                            {/* Submit button */}
                                            <Button className="px-0 py-2">
                                                <div style={{ transform: "none" }}>
                                                    <div className="relative inline-block cursor-pointer rounded-xl bg-neutral-900 p-px leading-6 text-white no-underline shadow-md shadow-neutral-800">
                                                        <span className="absolute inset-0 overflow-hidden rounded-xl">
                                                            <span className="absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(225,29,72,0.6)_0%,rgba(225,29,72,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                                                {" "}
                                                            </span>{" "}
                                                        </span>
                                                        <div className="body-light relative z-10 flex items-center space-x-2 rounded-xl text-lg sm:text-xl bg-neutral-950/50 px-6 py-3 ring-1 ring-white/10">
                                                            <span>Sign in with Google</span>
                                                            <FcGoogle />
                                                        </div>
                                                        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-rose-600/0 via-neutral-400/90 to-fuchsia-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
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
                </div>
            </div>
        </section>
    );
};
export default Page;