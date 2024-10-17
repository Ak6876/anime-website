enum Status {
    FINISHED,
    RELEASING,
    NOT_YET_RELEASED,
    CANCELLED,
    HIATUS,
};

export type Anime = {
    id: number,
    idMal: number,
    title: {
      romaji: string,
    },
    status: Status,
    description: string,
}

type AiringSchedule = {
    airingAt: number,
    episode: number,
    media: {
      id: number,
      idMal: number,
      title: {
        romaji: string,
      },
    },
};

export type RecentAnimeData = [AiringSchedule];
