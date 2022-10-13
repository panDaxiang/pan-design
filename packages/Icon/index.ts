import Icon from './src/icon.vue';
import { App } from 'vue'

Icon.install = (app: App): void => {
  app.component(Icon.name, Icon)
}

export default Icon
