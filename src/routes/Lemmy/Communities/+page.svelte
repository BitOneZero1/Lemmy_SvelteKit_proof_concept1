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
                - !{community.community.name}
                - {community.community.title}
                - instance: {community.community.instance_id}
                - subs: {community.counts.subscribers}
                <br />
                {community.community.description}
            </li>
        {/each}
    </ul>

