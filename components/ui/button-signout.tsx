import { LogOut } from "lucide-react";

export function ButtonSignOut() {
    return (
        <div className="flex iitems-center justify-center group relative overflow-hidden bg-indigo-600 p-4 rounded-xl cursor-pointer">
            <span className="mr-28 body-light transition-opacity duration-500 group-hover:opacity-0 text-lg sm:text-xl text-neutral-100">
                Sign Out
            </span>
            <i className="absolute right-1 top-1 bottom-1 rounded-md z-10 grid w-1/4 place-items-center transition-all duration-500 bg-neutral-100 group-hover:w-[calc(100%-0.5rem)] group-active:scale-95 text-indigo-700">
                <LogOut size={24} aria-hidden="true" />
            </i>
        </div>
    );
}