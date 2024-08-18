<script lang="ts">
    import Lid from "$lib/Lid.svelte";
    import type { PageData } from "./$types";
    import { imageBuilder } from "$lib";

    type Lid = {
        fotoAsset: any;
        naam: string;
        functie?: string;
        level: "Yapper" | "Actief Yapper" | "Echt Actief Yapper";
    };

    export let data: PageData;

    const alleLeden: Lid[] = data.leden.map((e: any) => {
        return {
            naam: e.naam,
            functie: e.functie,
            level: e.level,
            fotoAsset: e.image,
        };
    });
</script>

<h2 class="text-3xl">Leden</h2>
Hieronder vind je de leden van Echt Actief Yaplandia.

{#each ["Echt Actief Yapper", "Actief Yapper", "Yapper"] as level}
    <h3 class="text-xl">{level}s</h3>
    <div class="grid lg:grid-cols-2 gap-4 w-full max-w-2/3">
        {#each alleLeden.filter((lid) => lid.level == level) as lid}
            <Lid
                functie={lid.functie}
                img={imageBuilder.image(lid.fotoAsset).width(400).url()}
                naam={lid.naam}
            />
        {/each}
    </div>
{/each}
