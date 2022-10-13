import Button from '../button'
import Icon from '../icon'
import { App } from 'vue'

const components = [Button, Icon]

components.forEach(component => {
  component.install = (app: App): void => {
    app.component(component.name, component)
  }
})

export {
  Button,
  Icon
}
