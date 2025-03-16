import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
    {
        rules: {
            "eqeqeq": ["error", "always"],
            "no-console": "warn",
            "no-lonely-if": "error",
            "no-useless-rename": "error",
            "prefer-const": "error",
            "require-await": "error",
            "vue/attribute-hyphenation": ["error", "never"],
            "vue/block-lang": ["error", { script: { lang: "ts" }, style: { lang: "css" } }],
            "vue/block-order": ["error", { order: ["script", "template", "style"] }],
            "vue/comma-dangle": ["error", "never"],
            "vue/html-indent": ["error", 4],
            "vue/max-attributes-per-line": ["error", { singleline: { max: 5 }, multiline: { max: 1 } }],
            "vue/multi-word-component-names": "off",
            "vue/no-v-html": "off",
            "vue/singleline-html-element-content-newline": ["error", {
                ignoreWhenNoAttributes: true,
                ignoreWhenEmpty: true,
                externalIgnores: ["h1", "h2", "h3", "h4", "h5", "h6"]
            }],
            "vue/v-on-event-hyphenation": ["error", "never"],
            "@stylistic/comma-dangle": ["error", "never"],
            "@stylistic/indent": ["error", 4],
            "@stylistic/member-delimiter-style": ["error", {
                multiline: { delimiter: "semi", requireLast: true },
                singleline: { delimiter: "semi", requireLast: true }
            }],
            "@stylistic/quotes": ["error", "double"],
            "@stylistic/semi": ["error", "always"],
            "@stylistic/semi-style": ["error", "last"],
            "@typescript-eslint/unified-signatures": "off"
        }
    }
);
