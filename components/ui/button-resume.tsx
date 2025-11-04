import { ArrowDownToLine } from "lucide-react";

export function ButtonResume() {
    return (
        <div className="flex iitems-center justify-center group relative overflow-hidden bg-amber-500 p-4 rounded-xl">
            <span className="mr-28 body-light transition-opacity duration-500 group-hover:opacity-0 text-xl sm:text-3xl text-white">
                Download Resume
            </span>
            <i className="absolute right-1 top-1 bottom-1 rounded-md z-10 grid w-1/4 place-items-center transition-all duration-500 bg-amber-600 group-hover:w-[calc(100%-0.5rem)] group-active:scale-95 text-white">
                <ArrowDownToLine size={30} strokeWidth={2} aria-hidden="true" />
            </i>
        </div>
    );
}