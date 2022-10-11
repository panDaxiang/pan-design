import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import typescript2 from 'rollup-plugin-typescript2'

export default defineConfig({
  base: '',
  mode: 'devolopment',
  plugins: [vue()]
})