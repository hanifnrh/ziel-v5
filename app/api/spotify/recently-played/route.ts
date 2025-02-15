import { NextResponse } from "next/server";

const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID!;
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET!;
const SPOTIFY_REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN!;

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const RECENTLY_PLAYED_ENDPOINT = "https://api.spotify.com/v1/me/player/recently-played?limit=1";

const getAccessToken = async () => {
    const response = await fetch(TOKEN_ENDPOINT, {
        method: "POST",
        headers: {
            Authorization: `Basic ${Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString("base64")}`,
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            grant_type: "refresh_token",
            refresh_token: SPOTIFY_REFRESH_TOKEN,
        }),
    });

    return response.json();
};

export async function GET() {
    const { access_token } = await getAccessToken();

    const res = await fetch(RECENTLY_PLAYED_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });

    const data = await res.json();

    if (!data.items || data.items.length === 0) {
        return NextResponse.json({ error: "No recently played tracks" }, { status: 404 });
    }

    const track = data.items[0].track;

    return NextResponse.json({
        name: track.name,
        artist: track.artists.map((artist: any) => artist.name).join(", "),
        albumImageUrl: track.album.images[0].url,
        spotifyUrl: track.external_urls.spotify,
    });
}
