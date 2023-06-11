import { LemmyHttp } from 'lemmy-js-client';
import { env } from '$env/dynamic/private';


/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {

    let baseUrl = env.LEMMY_SERVER;
    let headers = params.headers;
    let client: LemmyHttp = new LemmyHttp(baseUrl);

    //if (1==1) {
    let loginForm = {
        username_or_email: env.LEMMY_USERNAME,
        password: env.LEMMY_PASSWORD,
      };
      let loginClient = await client.login(loginForm);
    //}

    let communityA = await client.listCommunities({ type_: "Subscribed", page: 1, limit: 50, auth: loginClient.jwt });

    return {
        post: { title: "Lemmy server " + env.LEMMY_SERVER,
           content: "Lemmy username: " + env.LEMMY_USERNAME
        },
        communities: communityA.communities,
        server: env.LEMMY_SERVER
    };
}
