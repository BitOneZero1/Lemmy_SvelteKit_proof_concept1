<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<h1>{data.post.title}</h1>
<div>{@html data.post.content}</div>


    <h2>Communities</h2>
    <ul>
        {#each data.communities as community}
            <li>
               {community.community.id}
                - <a href="{data.server}/c/{community.community.name}">!{community.community.name}</a>
                - {community.community.title}
                - instance: {community.community.instance_id}
                - subs: {community.counts.subscribers}
                <br />
                {community.community.description}
            </li>
        {/each}
    </ul>

