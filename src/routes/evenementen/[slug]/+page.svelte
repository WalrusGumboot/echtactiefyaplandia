<script lang="ts">
    import { imageBuilder } from "$lib";
    import { PortableText } from "@portabletext/svelte";
    export let data;
    console.log(data)
</script>

<h2 class="text-3xl">{data.evenement.naam}</h2>
<img
    class="w-full lg:max-w-[50vw]"
    src={imageBuilder.image(data.evenement.afbeelding).url()}
    alt={data.evenement.naam}
/>

{#if data.mssFotos.length}
    <a class="rounded-md p-4 bg-white hover:shadow-md" href={"/galerij/" + data.mssFotos[0].slug}>
        Naar de foto's van dit evenement
    </a>
{/if}

<p>Start: {new Date(data.evenement.start).toLocaleString("en-GB")}</p>
{#if data.evenement.einde}
    <p>Einde: {new Date(data.evenement.einde).toLocaleString("en-GB")}</p>
{/if}

<div class="self-start" id="content">
    <h2 class="text-xl mb-4">Informatie</h2>
    <PortableText value={data.evenement.body} components={{}} />
</div>

<style lang="postcss">
    #content ul {
        list-style-type: disc;
        list-style-position: inside;
    }

    #content a {
        color: theme(colors.blue.500);
        text-decoration: underline;
    }
</style>