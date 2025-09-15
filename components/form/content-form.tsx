"use client";

import { useToast } from "@/components/hooks/useToast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { addContent } from "@/utils/action/add";
import { SymbolIcon } from "@radix-ui/react-icons";
import { User } from "@supabase/supabase-js";
import { Send } from "lucide-react";
import { useState } from "react";

const ContentForm = ({ user }: { user: User }) => {
    const [loading, setLoading] = useState<boolean>(false);
    const { toast } = useToast();
    console.log("User in ContentForm:", user);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const userId = user.id;  // Extract the user ID here

        const response = await addContent(formData, userId);  // Pass userId along with formData

        // Reset the form
        const formElement = document.getElementById("content-form") as HTMLFormElement;
        if (formElement) {
            formElement.reset();
        }

        // Handle response
        if (response?.error) {
            console.error(response.error);
            toast({
                title: "Failed to send message",
                description: response.error,
            });
        } else if (response.data) {
            toast({
                title: "Content sent!",
                description: response.data,
            });
        }

        setLoading(false);
    };

    return (
        <form
            className="mt-2 flex w-full max-w-3xl flex-col"
            onSubmit={handleSubmit}
            id="content-form"
        >
            <p className="mb-2 text-balance body text-md sm:text-lg text-neutral-800 ">
                Signed in as <span className="text-blue-600">{user.email}</span>
            </p>
            <div className="flex items-center gap-x-2">
                <Input placeholder="" name="content" id="content" type="text" className="border-blue-400 border text-neutral-900 body-light"/>
                <Button
                    disabled={loading}
                    type="submit"
                    className={`w-36 aspect-square px-2 py-2 text-neutral-100 bg-blue-600 hover:bg-blue-700 body`}
                >
                    Send
                    {loading ? (
                        <SymbolIcon className="h-4 w-4 animate-spin" />
                    ) : (
                        <Send className="h-4 w-4" />
                    )}
                </Button>
            </div>
        </form>
    );
};
export default ContentForm;
