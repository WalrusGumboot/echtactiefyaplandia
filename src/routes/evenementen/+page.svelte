<script lang="ts">
    import { imageBuilder } from "$lib";
    import type { PageData } from "./$types";
    export let data: PageData;
</script>

<h2 class="text-3xl">Evenementen</h2>

{#if data.opkomendeEvenementen}
    Hieronder vind je onze opkomende evenementen.

    <div class="grid lg:grid-cols-2 gap-4 w-full max-w-2/3">
        {#each data.opkomendeEvenementen as evenement}
            <a
                class="bg-white rounded-md p-4 flex flex-col lg:flex-row justify-between gap-4"
                href={"evenementen/" + evenement.slug}
            >
                <div>
                    <h3 class="text-xl">{evenement.naam}</h3>
                    <p>{evenement.start.toLocaleString("en-GB")}</p>
                </div>
                <img
                    class="w-full lg:w-1/2 h-full relative right-0"
                    src={imageBuilder.image(evenement.fotoAsset).url()}
                    alt={evenement.naam}
                />
            </a>
        {/each}
    </div>
{:else}
    Helaas hebben we op het ogenblik geen evenementen gepland. Kijk binnenkort
    nog een keer!
{/if}

{#if data.afgelopenEvenementen && data.afgelopenEvenementen.length}
    Hieronder vind je evenementen die afgelopen zijn.

    <div class="grid lg:grid-cols-3 gap-4 w-full max-w-2/3">
        {#each data.afgelopenEvenementen as evenement}
            <a
                class="bg-white rounded-md p-4 flex flex-row items-center gap-4"
                href={"evenementen/" + evenement.slug}
            >
                <img
                    class="aspect-square w-16"
                    src={imageBuilder
                        .image(evenement.fotoAsset)
                        .width(200)
                        .height(200)
                        .url()}
                    alt={evenement.naam}
                />
                <div class="flex flex-col">
                    <h3 class="text-xl">{evenement.naam}</h3>
                    <p class="text-neutral-600">{new Date(evenement.start).toLocaleDateString("nl-BE")}</p>
                </div>
            </a>
        {/each}
    </div>
{/if}
