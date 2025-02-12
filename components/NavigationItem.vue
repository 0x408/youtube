<script setup lang="ts">
import type { RouteLocationAsPathGeneric, RouteLocationAsRelativeGeneric } from "vue-router";
import type { _GlobalComponents } from "#components";

// Create a type that returns names of all icon components without the "Icon" prefix
type Icon = keyof {
    [K in keyof _GlobalComponents as K extends `Icon${infer U}` ? U : never]: _GlobalComponents[K];
};

const props = defineProps({
    to: {
        type: [String, Object] as PropType<string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric>
    },
    icon: {
        type: String as PropType<Icon>,
        required: true
    },
    label: {
        type: String,
        required: true
    }
});

const route = useRoute();
const isCurrentRoute = computed(() => route.path === props.to);

const NuxtLink = resolveComponent("NuxtLink");
const hasClickEventListener = computed(() => Boolean(getCurrentInstance()?.vnode.props?.onClick));
</script>

<template>
    <component
        :is="to ? NuxtLink : 'div'"
        :to
        class="h-10 px-3 rounded-[10px] flex gap-6 items-center text-sm hover:bg-[rgba(0,0,0,0.05)] [&>svg]:w-6 [&>svg]:h-6"
        :class=" {
            'bg-[rgba(0,0,0,0.05)] font-medium cursor-default': isCurrentRoute,
            'cursor-pointer': hasClickEventListener
        }"
    >
        <component :is="'Icon' + icon" :variant="isCurrentRoute ? 'solid' : 'regular'" />
        <span>{{ label }}</span>
    </component>
</template>
