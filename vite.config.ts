/*
 * @Author: LOG
 * @FilePath: \vue-page\vite.config.ts
 * @Descripttion: 
 * @version: 
 * @Date: 2022-05-02 09:10:02
 * @LastEditors: LOG
 * @LastEditTime: 2022-05-29 21:58:16
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import WindiCSS from "vite-plugin-windicss";

const {resolve} = require("path");
// element-plus
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    WindiCSS(),
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  base:'/vue-page/',
  resolve: {
    alias: {
      
      "@": resolve(__dirname, "./src"),
    },
  },
});

