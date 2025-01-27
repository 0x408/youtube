import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
    {
        rules: {
            "eqeqeq": ["error", "always"],
            "no-console": "warn",
            "no-lonely-if": "error",
            "no-unused-vars": ["warn"],
            "no-useless-rename": "error",
            "prefer-const": "error",
            "require-await": "error",
            "vue/block-lang": ["error", { script: { lang: "ts" }, style: { lang: "css" } }],
            "vue/block-order": ["error", { order: ["script", "template", "style"] }],
            "vue/html-indent": ["error", 4],
            "vue/max-attributes-per-line": ["error", { singleline: { max: 5 }, multiline: { max: 1 } }],
            "vue/multi-word-component-names": "off",
            "vue/singleline-html-element-content-newline": ["error", {
                ignoreWhenNoAttributes: true,
                ignoreWhenEmpty: true,
                externalIgnores: ["h1", "h2", "h3", "h4", "h5", "h6"]
            }],
            "@stylistic/comma-dangle": ["error", "never"],
            "@stylistic/indent": ["error", 4],
            "@stylistic/quotes": ["error", "double"],
            "@stylistic/semi": ["error", "always"],
            "@stylistic/semi-style": ["error", "last"]
        }
    }
);
