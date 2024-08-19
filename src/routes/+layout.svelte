<script>
    import { beforeNavigate } from "$app/navigation";

    import "../app.css";
    import schild from "../assets/schild.svg";
    let links = ["over", "evenementen", "statuten", "filosofie", "leden"];

    let mobielMenuOpen = false;

    beforeNavigate(() => {
        mobielMenuOpen = false;
    });
</script>

{#if mobielMenuOpen}
    <div
        class="w-screen h-screen z-[100] flex flex-col justify-center items-center gap-4"
    >
        <button
            on:click={() => {
                mobielMenuOpen = false;
            }}>sluit menu</button
        >
        <div class="h-12" />
        <a href="/">home</a>
        {#each links as link}
            <a href={"/" + link}>{link}</a>
        {/each}
    </div>
{:else}
    <div
        class="flex flex-col justify-stretch items-center w-screen h-screen overflow-x-hidden bg-gray-200 p-6 lg:p-12 gap-2"
    >
        <!-- MOBIEL TOPBAR -->
        <div
            class="lg:hidden rounded-sm w-full bg-white flex flex-row justify-between p-2 mb-8"
        >
            <div class="h-2">
                <img
                    src={schild}
                    class="w-12"
                    alt="Het Echt Actief Yaplandiaschild"
                />
            </div>
            <button
                on:click={() => {
                    mobielMenuOpen = true;
                }}>menu</button
            >
        </div>

        <!-- NIET-MOBIEL TOPBAR -->
        <div
            class="hidden bg-white rounded-full px-6 py-2 shadow-md w-full lg:flex flex-row justify-between mb-6"
        >
            <div class="h-2">
                <a href="/" class="font-bold text-lg">
                    <img
                        src={schild}
                        class="w-24"
                        alt="Het Echt Actief Yaplandiaschild"
                    />
                </a>
            </div>
            <div></div>
            <div class="flex flex-row gap-4">
                {#each links as link}
                    <a href={"/" + link}>{link}</a>
                {/each}
            </div>
        </div>
        <slot></slot>
        <p class="h-12 text-gray-200">yap</p>

        {#if !mobielMenuOpen}
            <footer
                class="absolute bottom-0 left-0 right-0 h-12 flex flex-row bg-white p-2 items-center justify-center border-t-2 border-black gap-4"
            >
                <a
                    class="text-blue-500 underline"
                    href="https://www.instagram.com/echt.actief.yaplandia"
                    >Instagram</a
                >

                <a
                    class="text-blue-500 underline"
                    href="https://www.facebook.com/profile.php?id=61564095374775"
                    >Facebook</a
                >
            </footer>
        {/if}
    </div>
{/if}
