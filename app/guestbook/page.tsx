// Components
import ContentForm from "@/components/form/content-form";
import Guestbook from "@/components/macro/guestbook";
import { ButtonGithub } from "@/components/ui/button-github";
import { ButtonGoogle } from "@/components/ui/button-google.tsx";
import { ButtonSignOut } from "@/components/ui/button-signout";

// Utils
import { githubSignIn, googleSignIn, signOut } from "@/utils/function/fn";
import { createClient } from "@/utils/supabase/server";

// Icons

const Page = async () => {
    const supabase = await createClient();
    const { data: user, error } = await supabase.auth.getUser();

    return (
        <section className="py-28 z-10 p-8 pb-20 gap-16 px-4 md:px-10 xl:px-14">
            <div
                id="guestbook"
                className="flex w-full grow flex-col gap-y-4"
            >
                <div className="flex h-full w-full flex-col justify-center items-center">
                    <div className="md:pad-x relative flex h-auto flex-col">
                        <div className="relative h-full w-full grow grid grid-cols-1 items-center justify-center gap-6 sm:py-4 md:gap-8 md:py-6 lg:py-12">
                            {/* Login */}
                            <div className="relative z-10 flex h-fit flex-col justify-center items-center">
                                <div className="flex gap-2 items-center">
                                    <h3 className="flex text-4xl lg:text-7xl body tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-indigo-800 via-indigo-700 to-indigo-400">
                                        Guestbook
                                    </h3>
                                </div>
                                <p className="w-full mb-4 mt-2 body-light tracking-tighter text-lg sm:text-2xl text-center text-neutral-800">
                                    Leave a message of your impression of this website, or you can say anything!
                                </p>
                                {user && user.user ? (
                                    <>
                                        <form onSubmit={signOut} className="mt-1 py-2">
                                            <ButtonSignOut />
                                        </form>
                                        <ContentForm user={user.user} />
                                    </>
                                ) : (
                                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                                        <form onSubmit={githubSignIn} className="group py-2">
                                            <ButtonGithub />
                                        </form>
                                        <form onSubmit={googleSignIn} className="group py-2">
                                            <ButtonGoogle />
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