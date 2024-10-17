'use client';

import useSWR from "swr";
import { getRecentEpisodes, getAnimeInfo } from "@/fetchers/anilist";
import { useEffect } from "react";

export default function TestPage() {
    const { data: recentEps, error: eper, isLoading: epel } = useSWR('get-recent-eps', getRecentEpisodes);
    const { data: anime, error: aError, isLoading: aIsLoading } = useSWR(154673, getAnimeInfo);

    useEffect(() => {
        if (epel) return;
        if (eper) return console.log(eper);
        console.log(recentEps.map(ed => ed.media.title.romaji));
    }, [epel, recentEps]);

    useEffect(() => {
        if (aIsLoading) return;
        if (aError) return console.log(aError);
        console.log(anime.title.romaji, anime.status);
    }, [aIsLoading, anime]);

    return <h1>hi</h1>
}
