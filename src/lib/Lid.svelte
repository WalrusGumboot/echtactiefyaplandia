<script lang="ts">
    export let img;
    export let naam;
    export let functie;
</script>

<div class="overflow-hidden h-24 flex flex-row gap-4 items-center px-4 bg-white rounded-md shadow-md">
    <img src={img} alt={`${naam} - ${functie}`} class="w-32 aspect-square rounded-full relative -left-10 object-cover">
    <div>
        <h3 class="text-lg font-bold leading-tight">{naam}</h3>
        {#if functie != undefined}<p>{functie}</p>{/if}
    </div>
</div>