import { createClient } from "microcms-js-sdk";

export const client = createClient({
    serviceDomain: "blog-tutorial-nextjs-show",
    apiKey: process.env.API_KEY,
});