<script lang="ts">
    import joakimLanduytFoto from "../../assets/leden/joakim_landuyt.webp";
    import nielsLibeerFoto from "../../assets/leden/niels_libeer.webp";
    import simeonDuwelFoto from "../../assets/leden/simeon_duwel.webp";
    import andriesDeKlerckFoto from "../../assets/leden/andries_de_klerck.webp";
    import freeStaquetFoto from "../../assets/leden/free_staquet.webp";
    import hardwinVoorspoelsFoto from "../../assets/leden/hardwin_voorspoels.webp";

    import mattBriersFoto from "../../assets/leden/matt_briers.webp";

    import leandroMatthysFoto from "../../assets/leden/leandro_matthys.webp";

    import Lid from "$lib/Lid.svelte";

    type Lid = {
        foto: string;
        naam: string;
        functie?: string;
    };

    const echtActiefYappers: Lid[] = [
        {
            foto: joakimLanduytFoto,
            naam: "Joakim Van Dooren Landuyt",
            functie: "Praeses",
        },
        {
            foto: nielsLibeerFoto,
            naam: "Niels Libeer",
            functie: "Vicepreses",
        },
        {
            foto: simeonDuwelFoto,
            naam: "Simeon Duwel",
            functie: "Yap-actis",
        },
        {
            foto: andriesDeKlerckFoto,
            naam: "Andries De Klerck",
            functie: "Maior",
        },
        {
            foto: freeStaquetFoto,
            naam: "Free Staquet",
            functie: "Quaestor",
        },
    ];

    const actiefYappers: Lid[] = [
        {
            foto: hardwinVoorspoelsFoto,
            naam: "Hardwin Voorspoels",
            functie: "HAK",
        },
        {
            foto: mattBriersFoto,
            naam: "Matt Briers",
            functie: "Matteriaal",
        },
    ];

    const yappers: Lid[] = [
        {
            foto: leandroMatthysFoto,
            naam: "Leandro Matthys",
            functie: "Cameratelaar",
        },
    ];
</script>

<h2 class="text-3xl">Leden</h2>
Hieronder vind je de leden van Echt Actief Yaplandia.

<h3 class="text-xl">Echt Actief Yappers</h3>

<div class="grid lg:grid-cols-2 gap-4 w-full max-w-2/3">
    {#each echtActiefYappers as lid}
        <Lid functie={lid.functie} img={lid.foto} naam={lid.naam} />
    {/each}
</div>

<h3 class="text-xl">Actief Yappers</h3>
<div class="grid lg:grid-cols-2 gap-4 w-full max-w-2/3">
    {#each actiefYappers as lid}
        <Lid functie={lid.functie} img={lid.foto} naam={lid.naam} />
    {/each}
</div>

<h3 class="text-xl">Yappers</h3>
<div class="grid lg:grid-cols-2 gap-4 w-full max-w-2/3">
    {#each yappers as lid}
        <Lid functie={lid.functie} img={lid.foto} naam={lid.naam} />
    {/each}
</div>
