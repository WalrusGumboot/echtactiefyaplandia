<script lang="ts">
    import { imageBuilder } from "$lib";
    export let data;
    let _ = console.log(data);
</script>

<h2 class="text-3xl">Galerij</h2>
Hieronder vind je foto's van onze activiteiten, alsook andere foto's.

{#if data.entries && data.entries.length}
    <div class="grid lg:grid-cols-3 gap-4 w-full max-w-2/3">
        {#each data.entries as entry}
            <a
                class="bg-white rounded-md p-4 flex flex-row items-center gap-4"
                href={"galerij/" + entry.slug}
            >
                <img
                    class="aspect-square w-16"
                    src={imageBuilder
                        .image(entry.foto)
                        .width(200)
                        .height(200)
                        .url()}
                    alt={entry.naam}
                />
                <div class="flex flex-col">
                    <h3 class="text-xl">{entry.naam}</h3>
                    <p class="text-neutral-600">{new Date(entry.datum).toLocaleDateString("nl-BE")}</p>
                </div>
            </a>
        {/each}
    </div>
{/if}
