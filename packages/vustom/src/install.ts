// Components
import Bouton from './components/Bouton/Bouton.vue'
import Checkbox from './components/Checkbox/Checkbox.vue'
import Dropdown from './components/Dropdown/Dropdown.vue'
import Field from './components/Field/Field.vue'
import Form from './components/Form/Form.vue'
import List from './components/List/List.vue'
import ListItem from './components/ListItem/ListItem.vue'
import Notification from './components/Notification'
import Tag from './components/Tag/Tag.vue'
import Toggler from './components/Toggler/Toggler.vue'
import Tooltip from './components/Tooltip/Tooltip.vue'
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
    app.component('field', Field)
    app.component('fields', Form)
    app.component('list', List)
    app.component('list-item', ListItem)
    app.component('tag', Tag)
    app.component('toggler', Toggler)
    app.component('tooltip', Tooltip)
    // Directives
    app.directive('click-outside', ClickOutside)
    app.directive('ripple', Ripple)

    app.use(Notification)
  }
}
