const ANILIST_API_URL = 'https://graphql.anilist.co';

/**
 * @param {string} query - GraphQL query
 * @param {Object} [variables={}] - GraphQL query variables
 * @returns {Promise<{data?: Object, error?: Object}>}
 */
export default async function (query, variables = {}) {
    const res = await fetch(ANILIST_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query, variables }),
    });

    return res.json();
}
