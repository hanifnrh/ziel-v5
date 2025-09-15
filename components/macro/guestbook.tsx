import { createAdminClient } from "@/utils/supabase/server";
import Image from "next/image";
import { MessageCard } from "../ui/message-card";

const GuestbookCard = async ({
    content,
    user_id,
    createdAt,
    index,
}: {
    content: string;
    user_id: string;
    createdAt: string;
    index?: number;
}) => {
    const supabase = await createAdminClient();

    // Ambil data user berdasarkan user_id
    const { data: user, error } = await supabase.auth.admin.getUserById(user_id);

    // Log error jika ada masalah mengambil data pengguna
    if (error) {
        console.error("Error fetching user:", error);
    }

    const formatTimestamp = (timestamp: string) => {
        const currentDate = new Date();
        const createdAtDate = new Date(timestamp);

        const timeDiff = currentDate.getTime() - createdAtDate.getTime();
        const hoursDiff = Math.floor(timeDiff / (1000 * 60 * 60));
        const daysDiff = Math.floor(hoursDiff / 24);

        if (daysDiff > 1) {
            return `${daysDiff} days ago`;
        } else if (daysDiff === 1) {
            return "yesterday";
        } else if (hoursDiff > 0) {
            return `${hoursDiff} hours ago`;
        } else {
            return "less than an hour ago";
        }
    };

    // Generate random gradient classes based on index or random selection
    const getRandomGradient = (idx?: number) => {
        const gradients = [
            "bg-gradient-to-b from-blue-100 to-neutral-100 border border-blue-300",
            "bg-gradient-to-b from-indigo-100 to-neutral-100 border border-indigo-300",
            "bg-gradient-to-b from-rose-100 to-neutral-100 border border-rose-300",
            "bg-gradient-to-b from-amber-100 to-neutral-100 border border-amber-300",
            "bg-gradient-to-b from-violet-100 to-neutral-100 border border-violet-300",
            "bg-gradient-to-b from-purple-100 to-neutral-100 border border-purple-300",
            "bg-gradient-to-b from-red-100 to-neutral-100 border border-red-300",
        ];

        // Use index if provided, otherwise generate random index
        const randomIndex = idx !== undefined ? idx % gradients.length : Math.floor(Math.random() * gradients.length);
        return gradients[randomIndex];
    };

    const user_avatar = user?.user?.user_metadata?.avatar_url || "/default-avatar.png";
    const full_name = user?.user?.user_metadata?.full_name || "Anonymous";

    return (
        <div className="group relative z-10 gap-y-2">
            <MessageCard>
                <div className="flex items-center justify-start gap-1 py-3">
                    <div className="bg-red-500 w-3 h-3 rounded-full"></div>
                    <div className="bg-yellow-500 w-3 h-3 rounded-full"></div>
                    <div className="bg-green-500 w-3 h-3 rounded-full"></div>
                </div>
                <div className={`flex flex-col gap-2 ${getRandomGradient(index)} rounded-lg p-3`}>
                    <div className="flex items-center gap-4 py-2">
                        <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-secondary">
                            <Image
                                src={user_avatar}
                                alt={full_name}
                                fill
                                className="object-cover rounded-full border-1 border-neutral-300"
                            />
                        </div>
                        <div className="flex flex-col">
                            <p className="text-lg text-neutral-900 body md:text-xl">{full_name}</p>
                            <p className="text-base md:text-lg text-neutral-500 body-light">{formatTimestamp(createdAt)}</p>
                        </div>
                    </div>
                    <code className="h-auto text-neutral-800 text-base sm:text-lg body-light py-2">{content}</code>
                </div>
            </MessageCard>
        </div>
    );
};

const Guestbook = async () => {
    const supabase = await createAdminClient();
    const { data: guestbook, error } = await supabase.from("guestbook").select("*");

    if (error) {
        console.error("Error fetching guestbook:", error);
    }

    return (
        <div className="grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 h-fit gap-4 mt-8 sm:mt-10">
            {/* Content */}
            {guestbook &&
                guestbook
                    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
                    .map((item, index) => (
                        <GuestbookCard
                            content={item.content}
                            user_id={item.user_id as string}
                            key={index}
                            createdAt={item.created_at as string}
                            index={index}
                        />
                    ))}
        </div>
    );
};

export default Guestbook;