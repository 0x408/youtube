<script setup lang="ts">
defineProps({
    variant: {
        type: String as PropType<"regular" | "solid">,
        default: "regular"
    }
});
</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path v-if="variant === 'solid'" clip-rule="evenodd" fill-rule="evenodd" d="M22.146 11.146a.5.5 0 01-.353.854H20v7.5a1.5 1.5 0 01-1.5 1.5H14v-8h-4v8H5.5A1.5 1.5 0 014 19.5V12H2.207a.5.5 0 01-.353-.854L12 1l10.146 10.146Z" />
        <path v-else clip-rule="evenodd" fill-rule="evenodd" d="M22.146 11.146a.5.5 0 01-.353.854H20v7.5a1.5 1.5 0 01-1.5 1.5h-5v-7h-3v7h-5A1.5 1.5 0 014 19.5V12H2.207a.5.5 0 01-.353-.854L12 1l10.146 10.146ZM18.5 9.621l-6.5-6.5-6.5 6.5V19.5H9V13a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v6.5h3.5V9.621Z" />
    </svg>
</template>
