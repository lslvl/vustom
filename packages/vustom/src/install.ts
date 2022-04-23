// Components
import Bouton from './components/Bouton/Bouton.vue'
import Checkbox from './components/Checkbox/Checkbox.vue'
import Dropdown from './components/Dropdown/Dropdown.vue'
import InputText from './components/InputText/InputText.vue'
import List from './components/List/List.vue'
import ListItem from './components/ListItem/ListItem.vue'
import Toggler from './components/Toggler/Toggler.vue'
// Directives
import ClickOutside from './directives/click-outside'
import Ripple from './directives/ripple'

export default {
  // Install plugin.
  install: (app, options) => {
    // Components
    app.component('bouton', Bouton)
    app.component('checkbox', Checkbox)
    app.component('dropdown', Dropdown)
    app.component('input-text', InputText)
    app.component('list', List)
    app.component('list-item', ListItem)
    app.component('toggler', Toggler)
    // Directives
    app.directive('click-outside', ClickOutside)
    app.directive('ripple', Ripple)
  }
}
