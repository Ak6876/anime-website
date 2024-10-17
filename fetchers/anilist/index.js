import sendQuery from './query';
import recentlyAiredQuery from './recentlyAired.gql';
import animeQuery from './anime.gql';


/**
 * @typedef {import("./types").RecentAnimeData} RecentAnimeData
 * @returns {Promise<RecentAnimeData>}
 */
async function getRecentEpisodes() {
    const apiRet = await sendQuery(recentlyAiredQuery);

    if (apiRet.error) {
        return Promise.reject(error);
    }

    return apiRet.data.Page.airingSchedules;
}

/**
 * @param {number} id - Anilist ID of anime
 * @typedef {import("./types").Anime} Anime
 * @returns {Promise<Anime>}
 */
async function getAnimeInfo(id) {
    const apiRet = await sendQuery(animeQuery, { id });

    if (apiRet.error) {
        return Promise.reject(error);
    }

    if (!apiRet.data.Media) {
        return Promise.reject('No Anime found with the id')
    }

    return apiRet.data.Media;
}

export { getRecentEpisodes, getAnimeInfo };
