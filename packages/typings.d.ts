/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent, App } from 'vue';
  const component: DefineComponent<{}, {}, any> & { install(app: App): void };
  export default component
}