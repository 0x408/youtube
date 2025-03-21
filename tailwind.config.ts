import type { Config } from "tailwindcss";

export default <Partial<Config>>{
    theme: {
        extend: {
            fontFamily: {
                sans: ["Roboto", "sans-serif"]
            }
        }
    },
    content: [],
    plugins: []
};
