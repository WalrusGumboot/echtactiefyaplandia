<script lang="ts">
    import { LightboxGallery, GalleryImage, GalleryThumbnail } from 'svelte-lightbox';
    import { imageBuilder } from "$lib";
    import type { PageData } from "./$types.js";
    export let data: PageData;
</script>

<h2 class="text-3xl mb-6">{data.entry.naam}</h2>

<LightboxGallery>
    <svelte:fragment slot="thumbnail">
        <div class="grid gap-4 grid-cols-2 lg:grid-cols-5">
            {#each data.entry.fotos as foto}
                <GalleryThumbnail>
                    <img src={imageBuilder.image(foto).maxWidth(400).url()} alt="">
                </GalleryThumbnail>
            {/each}
        </div>
    </svelte:fragment>
    {#each data.entry.fotos as foto}
        <GalleryImage>
            <img src={imageBuilder.image(foto).url()} alt="">
        </GalleryImage>
    {/each}
</LightboxGallery>
