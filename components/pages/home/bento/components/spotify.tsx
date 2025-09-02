"use client";
import { BentoCard } from "@/components/ui/bento-card";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineSpotify } from "react-icons/ai";
import { FaSpotify } from "react-icons/fa";

interface Track {
    name: string;
    artist: string;
    albumImageUrl: string;
    spotifyUrl: string;
}

function Spotify() {

    const [track, setTrack] = useState<Track | null>(null);

    useEffect(() => {
        fetch("/api/spotify/recently-played")
            .then((res) => res.json())
            .then((data) => {
                if (!data.error) {
                    setTrack(data);
                }
            });
    }, []);

    if (!track) return null;

    return (
        <BentoCard>
            <div className="flex justify-between items-center ">
                <h2 className="text-sm text-violet-600 dark:text-neutral-400 group mr-auto px-5 py-2 bg-gradient-to-tr from-violet-300/5 via-violet-400/5 to-transparent border-[2px] border-violet-600/5 rounded-3xl w-fit flex items-center">
                    <AiOutlineSpotify className="inline w-4 h-4 mr-2 duration-300 transition-all" />
                    Spotify Last Played
                </h2>
                <div className="text-neutral-800 dark:text-neutral-200 text-3xl group-hover:text-green-600">
                    <FaSpotify />
                </div>
            </div>

            <div className="flex flex-row gap-4 mt-5 items-center">
                <Image
                    src={track.albumImageUrl}
                    width={1000}
                    height={1000}
                    alt="Spotify Last Played"
                    className="sm:h-32 h-24 w-auto rounded-xl"
                />
                <div className="flex flex-col">
                    <h3 className="body text-xl line-clamp-1 text-neutral-700 dark:text-neutral-200">{track.name}</h3>
                    <p className="body-light text-base line-clamp-1 text-neutral-600">{track.artist}</p>
                    <Link
                        href={track.spotifyUrl}
                        rel="canonical"
                        target="_blank"
                        className="body-light text-base w-fit text-green-600 border-b border-green-600 flex"
                    >
                        Play on Spotify
                        <MoveRight className="ml-2" />
                    </Link>
                </div>
            </div>

        </BentoCard>
    )
}

export default Spotify
