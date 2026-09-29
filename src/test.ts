import { createServerFn } from "@tanstack/react-start";
export const test = createServerFn({ method: "POST" }).handler(async ({ data }) => { return true; });
