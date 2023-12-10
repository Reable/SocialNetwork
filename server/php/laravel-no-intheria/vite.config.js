import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path';

export default defineConfig({
    server:{
        hmr:{
            host: 'localhost'
        }
    },
    plugins: [
        vue(),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
    resolve:{
        alias:{
            '@': resolve(__dirname, 'resources', 'js', 'src')
        }
    }
});
