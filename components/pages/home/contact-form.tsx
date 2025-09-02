"use client";


import { toast } from "@/components/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { PencilLine, Send } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { DotPattern } from "../../ui/dot-pattern";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

// form data validation using zod
const profileFormSchema = z.object({
    name: z
        .string()
        .min(2, {
            message: "Name must be at least 2 characters.",
        })
        .max(30, {
            message: "Name must not be longer than 30 characters.",
        }),

    email: z
        .string({
            required_error: "Please select an email to display.",
        })
        .email(),

    message: z.string().max(160).min(4),

    urls: z
        .array(
            z.object({
                value: z.string().url({ message: "Please enter a valid URL." }),
            })
        )
        .optional(),
});

// types for form values
type ProfileFormValues = z.infer<typeof profileFormSchema>;

// This can come from your database or API. Default values for the form fields.
const defaultValues: Partial<ProfileFormValues> = {
    name: "",
    email: "",
    message: "",
};

// handle file upload


// ---------------------------------------------------------

const ContactForm = () => {
    // Function for when to check if the form is valid
    const form = useForm<ProfileFormValues>({
        resolver: zodResolver(profileFormSchema),
        defaultValues,
        mode: "onChange",
    });

    // testing use state
    const [loading, setLoading] = useState(false);

    // function to submit the form
    const submitForm = async (data: ProfileFormValues) => {
        toast({
            title: "Hold on!",
        });

        setLoading(true);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Error sending email");
            }

            const responseData = await response.json();
            // Handle response data as needed

            // Add toast here
            toast({
                variant: "default",
                title: "Message sent!",
                description: "We'll get back to you soon.",
            });

            // set loading to false
            setLoading(false);

            // reset the form
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Message not sent!",
                description: "We'll fix the problem ASAP.",
            });
            // Handle error as needed
        }
    };

    function setFile(arg0: File): void {
        throw new Error("Function not implemented.");
    }

    return (
        <div id="contact">
            <Form {...form}>
                {/* What to do on submit/ the Form comp wraps the original form */}
                <div className="p-8 pb-20 px-8 md:px-20 2xl:px-52 w-full">
                    <div className="grid grid-cols-1 gap-3 max-w-7xl mx-auto">
                        <div
                            className={cn(
                                "group relative p-8 rounded-xl overflow-hidden transition-all duration-300",
                                "border border-neutral-300 dark:border-white/10 dark:bg-black/10 bg-neutral-100",
                                "hover:-translate-y-0.5 will-change-transform",
                                "col-span-1",
                                "md:col-span-2",
                            )}
                        >
                            <DotPattern
                                className={cn(
                                    "[mask-image:radial-gradient(500px_circle_at_center,#262626,transparent)] opacity-60",
                                    "dark:[mask-image:radial-gradient(300px_circle_at_center,white,transparent)] opacity-60",
                                )}
                            />

                            <div className="relative flex flex-col space-y-3">
                                <div className="space-y-2">
                                    <div className="body flex justify-start items-center gap-4 text-neutral-800 dark:text-neutral-100 tracking-tight text-2xl">
                                        <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-purple-600/20 text-purple-600 group-hover:bg-gradient-to-br transition-all duration-300">
                                            <PencilLine />
                                        </div>
                                        <h3>
                                            Contact Me
                                        </h3>
                                    </div>
                                    <p className="body-light text-md text-neutral-700 dark:text-neutral-300 leading-snug">
                                        Contact me here, this form will automatically send your messages to my email or directly message me to
                                        <Link
                                            href="mailto:dailyziel@gmail.com"
                                            rel="canonical"
                                            target="_blank"
                                            className="text-purple-600 underline ml-2">
                                            dailyziel@gmail.com
                                        </Link>
                                    </p>
                                </div>
                            </div>

                            <div
                                className={`absolute inset-0 -z-10 rounded-xl p-px dark:bg-gradient-to-br from-transparent to-transparent via-purple-700/10 opacity-100 transition-opacity duration-300`}
                            />
                            <form onSubmit={form.handleSubmit(submitForm)} className="space-y-5 pt-6 text-xs sm:text-base text-neutral-500 body-light">
                                {/* Single form field/ Name/ Formfield is self closing */}
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            {/* Give a lable for the form field */}
                                            <FormLabel className="text-neutral-800 dark:text-neutral-200">Name</FormLabel>

                                            {/* Input field */}
                                            <FormControl>
                                                <Input
                                                    type="text"
                                                    placeholder="Type your name here"
                                                    autoComplete="true"
                                                    className="border border-neutral-200 dark:border-neutral-100bg-neutral-200 dark:bg-neutral-950/30 text-neutral-700 dark:text-neutral-200"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-neutral-800 dark:text-neutral-200">Email</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="email"
                                                    placeholder="Type your email here"
                                                    autoComplete="true"
                                                    className="border border-neutral-200 dark:border-neutral-100bg-neutral-200 dark:bg-neutral-950/30 text-neutral-700 dark:text-neutral-200"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-neutral-800 dark:text-neutral-200">Message</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="Type your message here"
                                                    className="resize-none border border-neutral-200 dark:border-neutral-100bg-neutral-200 dark:bg-neutral-950/30 text-neutral-700 dark:text-neutral-200"
                                                    {...field}
                                                    autoComplete="true"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <div className="w-full h-full flex justify-center items-center">
                                    {/* Submit button */}
                                    <Button type="submit" disabled={loading} className="px-0 py-10">
                                        <div style={{ transform: "none" }}>
                                            <div className="group relative inline-block cursor-pointer rounded-xl bg-neutral-900 p-px leading-6 text-white no-underline shadow-2xl shadow-neutral-900">
                                                <span className="absolute inset-0 overflow-hidden rounded-xl">
                                                    <span className="absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(199,1,220,0.6)_0%,rgba(199,1,220,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                                        {" "}
                                                    </span>{" "}
                                                </span>
                                                <div className="body-light relative z-10 flex items-center space-x-2 rounded-xl bg-neutral-950/50 px-6 py-3 ring-1 ring-white/10">
                                                    <span>Submit</span>
                                                    <Send />
                                                </div>
                                                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-fuchsia-400/0 via-neutral-400/90 to-fuchsia-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
                                            </div>
                                        </div>
                                    </Button>
                                </div>

                            </form>
                        </div>
                    </div>

                </div>
            </Form >
        </div>
    );
};

export default ContactForm;