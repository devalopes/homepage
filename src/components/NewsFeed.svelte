<script lang="ts">
  import { getRssFeed } from "../utilities/articles";
  export let url: string;
  
  async function parseRss() {
    return getRssFeed(url);
  };
</script>

<div>
  {#await parseRss()}
    <p>Loading...</p>
  {:then rss}
    <div>
      <!-- svelte-ignore security-anchor-rel-noreferrer -->
      <a href={rss ? rss.link : "#"} rel="norefferer" target="_blank">
        <h1 class="text-xl underline hover:text-syntax.hover">
          {rss ? rss.title : ""}
        </h1>
      </a>
      {#each rss ? rss.items : [] as news}
        <li class="hover:text-syntax.hover py-2">
          <!-- svelte-ignore security-anchor-rel-noreferrer -->
          <a rel="norefferrer" target="_blank" href={news.link}>{news.title}</a>
        </li>
        <!-- svelte-ignore security-anchor-rel-noreferrer -->
        <a
          class="float-right text-sm text-gray-500 hover:text-syntax.hover"
          rel="norefferrer"
          target="_blank"
          href={news.comments}>comments</a
        >
      {/each}
    </div>
  {:catch error}
    <p class="text-red-400">{error.message}</p>
  {/await}
</div>
