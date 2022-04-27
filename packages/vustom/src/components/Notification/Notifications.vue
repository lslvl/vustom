<template>

  <div class="notifications">
    <transition-group name="notifications">
      <Notification
        v-for="item in items.slice().reverse()"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :content="item.content"
        :theme="item.theme"
        :timer="item.timer"
        @close="close"
      />
    </transition-group>
  </div>

</template>

<script>
import Notification from './Notification.vue'
import { emitter } from './events'

var Id = ((i) => () => i++)(0)

export default {
  name: 'Notifications',

  data() {
    return {
      items: [],
      emitter: emitter
    }
  },

  mounted() {
    this.emitter.on('add', this.add)
    this.emitter.on('close', this.close)
  },

  methods: {
    add(event) {
      var item = {
        id: Id(),
        title: event.title,
        content: event.content,
        theme: event.type,
        timer: event.timer ? event.timer : 5000,
      }
      this.items.push(item)
    },
    close(id) {
      var index = this.items
        .map(function (item) {
          return item.id
        })
        .indexOf(id)
      this.items.splice(index, 1)
    },
  },

  components: {
    Notification,
  },
}
</script>
