"use client";
import { AudioWaveform, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
interface Track {
    name: string;
    artist: string;
    albumImageUrl: string;
    spotifyUrl: string;
}

// Music visualization bar component
const MusicVisualizer = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [bars, setBars] = useState<number[]>([]);

    useEffect(() => {
        // Initialize bars with random heights
        const initialBars = Array.from({ length: 15 }, () =>
            Math.floor(Math.random() * 40) + 10
        );
        setBars(initialBars);

        // Animation interval
        const interval = setInterval(() => {
            setBars(prevBars =>
                prevBars.map(() => Math.floor(Math.random() * 40) + 10)
            );
        }, 120); // Update every 120ms

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            ref={containerRef}
            className="hidden md:flex items-end h-48 gap-0.5 ml-4"
        >
            {bars.map((height, index) => (
                <div
                    key={index}
                    className="w-3 bg-green-400 dark:bg-green-600 rounded-t transition-all duration-120 ease-in-out"
                    style={{ height: `${height}%` }}
                />
            ))}
        </div>
    );
};

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
        <div className='flex flex-col justify-between gap-6 w-full h-fit p-6 bg-gradient-to-b from-green-50 to-white dark:from-green-900 dark:to-black border-2 border-green-200 dark:border-green-800 rounded-2xl shadow-xs dark:shadow-lg'>
            <div className="flex justify-start items-center gap-4">
                <div className="flex items-center bg-green-200 dark:bg-green-900/20 text-green-600 dark:text-green-400 px-3 py-3 rounded-full w-fit gap-2 animate-pulse">
                    <AudioWaveform  />
                </div>
                <h3 className="body text-xl line-clamp-1 text-green-600 dark:text-neutral-200">
                    Spotify Last Played
                </h3>
            </div>

            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row gap-4 items-center">
                    <Image
                        src={track.albumImageUrl}
                        width={1000}
                        height={1000}
                        alt="Spotify Last Played"
                        className="h-24 sm:h-32 xl:h-48 w-auto rounded-xl"
                    />
                    <div className="flex flex-col gap-2">
                        <h4 className="body text-xl xl:text-3xl line-clamp-1 text-neutral-800 dark:text-neutral-200">
                            {track.name}
                        </h4>
                        <p className="body-light text-base xl:text-xl line-clamp-1 text-neutral-600">
                            {track.artist}
                        </p>
                        <Link
                            href={track.spotifyUrl}
                            rel="canonical"
                            target="_blank"
                            className="body-light text-base xl:text-xl w-fit text-green-600 border-b border-green-600 flex"
                        >
                            Play on Spotify
                            <MoveRight className="ml-2" />
                        </Link>
                    </div>
                </div>

                {/* Music visualizer bar */}
                <MusicVisualizer />
            </div>
        </div>
    );
}

export default Spotify;