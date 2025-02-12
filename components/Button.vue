<script setup lang="ts">
import type { RouteLocationAsPathGeneric, RouteLocationAsRelativeGeneric } from "vue-router";
import type { _GlobalComponents } from "#components";

// Create a type that returns names of all icon components without the "Icon" prefix
type Icon = keyof {
    [K in keyof _GlobalComponents as K extends `Icon${infer U}` ? U : never]: _GlobalComponents[K];
};

defineProps({
    variant: {
        type: String as PropType<"default" | "transparent" | "cta">,
        default: "default"
    },
    icon: {
        type: String as PropType<Icon>
    },
    label: {
        type: String,
        validator(value, props) {
            return Boolean(props.icon || props.label);
        },
        // Set default value to empty string to activate the validator if no value is provided
        default: ""
    },
    to: {
        type: [String, Object] as PropType<string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric>
    }
});

const NuxtLink = resolveComponent("NuxtLink");
const hasClickEventListener = computed(() => Boolean(getCurrentInstance()?.vnode.props?.onClick));
</script>

<template>
    <component
        :is="to ? NuxtLink : 'button'"
        :type="to ? undefined : 'button'"
        :to
        class="shrink-0 flex items-center justify-center"
        :class="{
            'w-fit h-9 px-[15px] rounded-[18px]': label,
            'w-10 h-10 rounded-full': !label,
            'pl-[9px] gap-[6px]': label && icon,
            'cursor-default': !to && !hasClickEventListener,
            'bg-[rgba(0,0,0,0.05)] hover:bg-[rgba(0,0,0,0.1)]': variant === 'default',
            'hover:bg-[rgba(0,0,0,0.05)]': variant === 'transparent',
            'border border-[rgba(0,0,0,0.1)] hover:bg-[#def1ff] hover:border-transparent ': variant === 'cta'
        }"
    >
        <component
            :is="'Icon' + icon"
            v-if="icon"
            class="w-6 h-6"
            :class="{ '[&>path]:fill-[#065fd4]': variant === 'cta' }"
        />
        <span
            v-if="label"
            class="text-sm leading-8 font-medium"
            :class="{ 'text-[#065fd4]': variant === 'cta' }"
        >
            {{ label }}
        </span>
    </component>
</template>
