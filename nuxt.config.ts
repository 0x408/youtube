// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@nuxt/eslint", "@nuxt/fonts", "@nuxtjs/tailwindcss", "@vueuse/nuxt"],
    components: {
        dirs: [
            {
                global: true,
                path: "~/components/icon",
                prefix: "Icon"
            },
            "~/components"
        ]
    },
    devtools: { enabled: true },
    experimental: {
        defaults: {
            nuxtLink: {
                activeClass: "",
                exactActiveClass: ""
            }
        }
    },
    compatibilityDate: "2024-11-01",
    eslint: {
        config: {
            stylistic: true
        }
    }
});
