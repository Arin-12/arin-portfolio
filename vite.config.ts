import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { viteSingleFile } from "vite-plugin-singlefile";

// viteSingleFile inlines JS/CSS into one index.html (handy for hosting anywhere).
export default defineConfig({ plugins: [react(), tailwindcss(), viteSingleFile()] });
