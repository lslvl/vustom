import Bouton from './components/Bouton/Bouton.vue'
import Dropdown from './components/Dropdown/Dropdown.vue'
import List from './components/List/List.vue'
import ListItem from './components/ListItem/ListItem.vue'
import ClickOutside from './directives/click-outside'
import Ripple from './directives/ripple'

export default {
  // Install plugin.
  install: (app, options) => {
    // Components
    app.component('bouton', Bouton)
    app.component('dropdown', Dropdown)
    app.component('list', List)
    app.component('list-item', ListItem)
    // Directives
    app.directive('click-outside', ClickOutside)
    app.directive('ripple', Ripple)
  }
}
