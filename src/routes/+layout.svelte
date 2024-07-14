<script>
    import "../app.css";
    import schild from "../assets/schild.svg";
    let links = ["over", "statuten", "filosofie", "leden"]
</script>

<div class="flex flex-col justify-stretch items-center w-screen h-screen overflow-x-hidden bg-gray-200 p-6 lg:p-12 gap-2">
    <div class="bg-white rounded-full px-6 py-2 shadow-md w-full flex flex-row justify-between mb-6">
        <div class="h-2">
            <a href="/" class="font-bold text-lg">
                <img src={schild} class="w-24" alt="Het Echt Actief Yaplandiaschild">
            </a>
        </div>
        <div />
        <div class="flex flex-row gap-4">
            {#each links as link}
                <a href={link}>{link}</a>
            {/each}
        </div>
    </div>
    <slot />
</div>
