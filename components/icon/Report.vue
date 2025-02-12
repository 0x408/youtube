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
        <path v-if="variant === 'solid'" clip-rule="evenodd" fill-rule="evenodd" d="M5 3h6.073a1.5 1.5 0 011.342.83L13 5h5.5A1.5 1.5 0 0120 6.5v8a1.5 1.5 0 01-1.5 1.5h-5.573a1.5 1.5 0 01-1.342-.83L11 14H6v7a1 1 0 11-2 0V3h1Z" />
        <path v-else clip-rule="evenodd" fill-rule="evenodd" d="M4.75 3H4v18.25c0 .414.336.75.75.75s.75-.336.75-.75V14H11l.585 1.17c.254.509.774.83 1.342.83H18.5c.828 0 1.5-.672 1.5-1.5v-8c0-.828-.672-1.5-1.5-1.5H13l-.585-1.17C12.16 3.32 11.64 3 11.073 3H4.75Zm.75 9.5h6.427l.415.83.585 1.17H18.5v-8h-6.427l-.415-.83-.585-1.17H5.5v8Z" />
    </svg>
</template>
