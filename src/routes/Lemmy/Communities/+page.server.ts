import { LemmyHttp } from 'lemmy-js-client';
import { env } from '$env/dynamic/private';


/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {

    let baseUrl = env.LEMMY_SERVER;
    let client: LemmyHttp = new LemmyHttp(baseUrl);

    let communityA = await client.listCommunities({ type_: "All", page: 1, limit: 50 });

    return {
        post: { title: "Lemmy server " + env.LEMMY_SERVER,
           content: "this is without login, anonymous user",
           },
        communities: communityA.communities
    };
}
