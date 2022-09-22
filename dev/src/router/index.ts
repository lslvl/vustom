import { createRouter, createWebHistory } from 'vue-router'
// all views
import Index from './../components/Index.vue'
import Bouton from './../components/Bouton.vue'
import Bulle from './../components/Bulle.vue'
import Content from './../components/Content.vue'
import Disclaimer from './../components/Disclaimer.vue'
import Dropdown from './../components/Dropdown.vue'
import Field from './../components/Field.vue'
import List from './../components/List.vue'
import Mediable from './../components/Mediable.vue'
import Modal from './../components/Modal.vue'
import Notification from './../components/Notification.vue'
import Shadow from './../components/Shadow.vue'
import Tag from './../components/Tag.vue'
import Theme from './../components/Theme.vue'
import Tooltip from './../components/Tooltip.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { name: 'index', path: '/', component: Index },
    { name: 'bouton', path: '/bouton', component: Bouton },
    { name: 'bulle', path: '/bulle', component: Bulle },
    { name: 'content', path: '/content', component: Content },
    { name: 'disclaimer', path: '/disclaimer', component: Disclaimer },
    { name: 'dropdown', path: '/dropdown', component: Dropdown },
    { name: 'field', path: '/field', component: Field },
    { name: 'list', path: '/list', component: List },
    { name: 'mediable', path: '/mediable', component: Mediable },
    { name: 'modal', path: '/modal', component: Modal },
    { name: 'notification', path: '/notification', component: Notification },
    { name: 'shadow', path: '/shadow', component: Shadow },
    { name: 'tag', path: '/tag', component: Tag },
    { name: 'theme', path: '/theme', component: Theme },
    { name: 'tooltip', path: '/tooltip', component: Tooltip },
  ]
})

export default router
