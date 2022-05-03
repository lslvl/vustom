import { createApp, defineComponent, reactive } from "vue"
import { emitter } from './events'

import Notification from './Notification.vue'
import Notifications from './Notifications.vue'

export default {

  install(app, options = {}) {

    if (this.installed) return

    this.installed = true
    this.options = options

    app.component('notifications', Notifications)

    const notify = (args) => {

      if (typeof args === 'string') {
        args = { title: '', content: args }
      }

      emitter.emit('add', reactive(args))
    }

    const name = options.name || 'notify'

    app.config.globalProperties[name] = notify
    app.provide(name, notify)
  }
}
