import { FcGoogle } from "react-icons/fc";

export function ButtonGoogle() {
    return (
        <button className="flex iitems-center justify-center group relative overflow-hidden bg-blue-600 p-4 rounded-xl cursor-pointer">
            <span className="mr-28 body-light transition-opacity duration-500 group-hover:opacity-0 text-lg sm:text-xl text-white">
                Sign in with Google
            </span>
            <i className="absolute right-1 top-1 bottom-1 rounded-md z-10 grid w-1/4 place-items-center transition-all duration-500 bg-white group-hover:w-[calc(100%-0.5rem)] group-active:scale-95 text-blue-700">
                <FcGoogle size={24} aria-hidden="true" />
            </i>
        </button>
    );
}