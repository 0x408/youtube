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
        <path v-if="variant === 'solid'" clip-rule="evenodd" fill-rule="evenodd" d="M2.882 4.515c-.819.13-1.377.898-1.247 1.717L2 8.538v10.961c0 .829.672 1.5 1.5 1.5h17c.828 0 1.5-.671 1.5-1.5v-11.5H6.456L21.78 5.572l-.39-2.47c-.13-.817-.898-1.376-1.717-1.246l-16.79 2.66ZM4 13h2.5l-2-3H4v3Zm16 0h-.5l-2-3H20v3ZM9.5 13h2l-2-3h-2l2 3Zm7 0h-2l-2-3h2l2 3Z" />
        <path v-else clip-rule="evenodd" fill-rule="evenodd" d="m3.116 5.998 16.79-2.66.157.988-16.79 2.66-.157-.988Zm-1.481.235c-.13-.819.428-1.587 1.247-1.717l16.79-2.659c.819-.13 1.587.429 1.716 1.247l.157.988.234 1.481-1.481.235L6.463 7.999H22v11.5c0 .829-.672 1.5-1.5 1.5h-17c-.828 0-1.5-.671-1.5-1.5V8.539L1.79 7.22l-.156-.987Zm7.698 3.266h-2L9 11.999H6l-1.667-2.5H3.5v10h17v-10h-3.167L19 12h-3l-1.667-2.501h-2L14 12h-3L9.333 9.499Z" />
    </svg>
</template>
