<script setup lang="ts">
const inputValue = defineModel<string>("inputValue");
const inputElement = useTemplateRef("input");
const { focused } = useFocus(inputElement);

// Prevent the default behavior of the mousedown event to avoid losing focus on the input element when clicking on the clear button
function preventDefault(event: MouseEvent) {
    // Check that the target element is not an input element to avoid preventing selection with cursor drag
    if (focused.value && (event.target as HTMLElement).tagName.toLowerCase() !== "input") event.preventDefault();
}

function clearInput() {
    inputValue.value = "";
}
</script>

<template>
    <div
        class="min-w-0 h-10 rounded-full flex"
    >
        <div
            class="relative h-full rounded-l-full border flex items-center"
            :class="[focused ? 'w-[576px] border-[#1c62b9]' : 'w-[544px] ml-8 border-r-0 border-[#c6c6c6]']"
            @mousedown="preventDefault"
        >
            <IconSearch v-if="focused" class="absolute left-4 -z-10 w-5 h-5 " />
            <input
                ref="input"
                v-model="inputValue"
                type="search"
                placeholder="Search"
                autocomplete="off"
                autocorrect="off"
                class="w-full h-full py-2 rounded-l-full outline-none bg-transparent [&::-webkit-search-cancel-button]:hidden"
                :class="[focused ? 'pl-12 pr-[37px]' : 'pl-4 pr-[38px]']"
            >
            <div
                v-if="inputValue"
                class="absolute w-8 h-8 rounded-full hover:bg-[rgba(0,0,0,0.05)] cursor-pointer flex items-center justify-center"
                :class="[focused ? 'right-0.5' : 'right-[3px]']"
                @click="clearInput"
            >
                <IconXmark class="=w-[18px] h-[18px]" />
            </div>
        </div>
        <div
            class="shrink-0 w-16 h-full pr-0.5 rounded-r-full border border-[#c6c6c6] bg-[#f8f8f8] flex items-center justify-center"
            :class="{ 'hover:bg-[#f0f0f0] cursor-pointer': inputValue }"
        >
            <IconSearch class="w-6 h-6" />
        </div>
    </div>
</template>
