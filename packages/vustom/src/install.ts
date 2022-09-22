// Components
import Bouton from './components/Bouton/Bouton.vue'
import Bulle from './components/Bulle/Bulle.vue'
import Checkbox from './components/Checkbox/Checkbox.vue'
import Disclaimer from './components/Disclaimer/Disclaimer.vue'
import Dropdown from './components/Dropdown/Dropdown.vue'
import Field from './components/Field/Field.vue'
import List from './components/List/List.vue'
import ListItem from './components/ListItem/ListItem.vue'
import Modal from './components/Modal/Modal.vue'
import Notification from './components/Notification'
import Tag from './components/Tag/Tag.vue'
import Toggler from './components/Toggler/Toggler.vue'
import Tooltip from './components/Tooltip/Tooltip.vue'
// Directives
import ClickOutside from './directives/click-outside'
import Ripple from './directives/ripple'
//
import form from './functions/form'
import mediable from './functions/mediable'
import themable from './functions/themable'

export default {
  // Install plugin.
  install: (app: any, options: any) => {
    // Components
    app.component('bouton', Bouton)
    app.component('bulle', Bulle)
    app.component('checkbox', Checkbox)
    app.component('disclaimer', Disclaimer)
    app.component('dropdown', Dropdown)
    app.component('field', Field)
    app.component('list', List)
    app.component('list-item', ListItem)
    app.component('modal', Modal)
    app.component('tag', Tag)
    app.component('toggler', Toggler)
    app.component('tooltip', Tooltip)
    // Directives
    app.directive('click-outside', ClickOutside)
    app.directive('ripple', Ripple)
    // Mix 
    app.use(Notification)
    app.provide('form', form)
    // Others
    mediable()
    app.provide('themable', themable)
  }
}
