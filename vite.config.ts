import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
        alias: [
            {
                // find: '@', replacement: path.resolve(__dirname, 'src'),
                find: '@',
                replacement: fileURLToPath(new URL('./src', import.meta.url)),
            },
        ],
        //alias: 
        //    {
        //        src: "/src"
        //    },
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler',
                //api: 'modern',
                additionalData: `
            @use "@/constants" as *;`,
            },
        },
        devSourcemap: true,
    },
})
