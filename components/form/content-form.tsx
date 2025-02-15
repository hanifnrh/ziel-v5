"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
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
            className="mt-2 flex w-full flex-col"
            onSubmit={handleSubmit}
            id="content-form"
        >
            <p className="mb-2 text-balance body-light text-sm text-zinc-500">
                Signed in as <span className="text-zinc-200">{user.email}</span>
            </p>
            <div className="flex items-center gap-x-2">
                <Input placeholder="" name="content" id="content" type="text" />
                <Button
                    disabled={loading}
                    type="submit"
                    className={`w-36 anim aspect-square border px-2 py-2 text-purple-600 bg-purple-600/20`}
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
