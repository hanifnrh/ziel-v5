"use client";

import { useCopyToClipboard } from "@/components/hooks/use-copy-to-clipboard";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { useToast } from "../hooks/use-toast";

interface CopyButtonProps {
    textToCopy: string;
    successDuration?: number;
}

export default function CopyButton({ textToCopy, successDuration = 1000 }: CopyButtonProps) {
    const { isCopied, copyToClipboard } = useCopyToClipboard({ timeout: successDuration });
    const { toast } = useToast();
    const [copied, setCopied] = useState(false);

    function handleCopy() {
        if (isCopied) return;
        copyToClipboard(textToCopy);
        setCopied(true);
        toast({
            title: "Copied to Clipboard",
            description: `"${textToCopy}" copied successfully.`,
        });
        setTimeout(() => setCopied(false), 3000);
    }

    return (
        <div style={{ transform: "none" }} onClick={handleCopy} className="w-full max-w-xs">
            <div className="w-full group relative inline-block cursor-pointer rounded-xl bg-zinc-900/10 p-px leading-6 text-white no-underline shadow-2xl shadow-zinc-900">
                <span className="absolute inset-0 overflow-hidden rounded-xl">
                    <span className="absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(199,1,220,0.6)_0%,rgba(199,1,220,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                        {" "}
                    </span>{" "}
                </span>
                <div className="body-light relative z-10 flex items-center justify-center space-x-2 rounded-xl bg-gray-950/50 px-6 py-3 ring-1 ring-white/10">
                    {copied ? (
                        <>
                            <Check className="w-4 h-4 text-emerald-400" />
                            <span>Copied!</span>
                        </>
                    ) : (
                        <>
                            <span>Copy my email</span>
                            <Copy className="w-4 h-4" />
                        </>
                    )}
                </div>
                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-fuchsia-400/0 via-gray-400/90 to-fuchsia-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
            </div>
        </div>
    );
}
