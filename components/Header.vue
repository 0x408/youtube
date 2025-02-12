<script setup lang="ts">
const { width } = useWindowSize();
const server = computed(() => import.meta.server);

onPrehydrate((element) => {
    const template = /<!--\[-->[\s\S]*?<!--\]-->/;

    if (window.innerWidth >= 768) element.children[2].innerHTML = element.children[2].innerHTML.replace(template, "<!--v-if-->");
    else element.children[1].outerHTML = "<!--v-if-->";
});
</script>

<template>
    <header class="h-14 pl-3 pr-6 flex items-center justify-between gap-3">
        <div class="min-w-[228px] px-1 flex flex-row items-center gap-4">
            <Button icon="Bars" variant="transparent" />
            <NuxtLink to="/" class="w-fit h-10 flex items-center justify-center">
                <Logo class="w-[93px] h-5" aria-label="Home" />
            </NuxtLink>
        </div>

        <div v-if="server || width >= 768" class="min-w-0 flex items-center justify-center gap-4">
            <SearchBar />
            <Button icon="Microphone" />
        </div>

        <div class="shrink-0 flex items-center justify-end gap-3">
            <template v-if="server || width <= 767">
                <Button icon="Search" variant="transparent" />
                <Button icon="Microphone" variant="transparent" />
            </template>

            <Button variant="transparent" icon="Ellipsis" />
            <Button variant="cta" icon="User" label="Sign in" />
        </div>
    </header>
</template>
