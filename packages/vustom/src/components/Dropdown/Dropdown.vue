<template>

  <div class="dropdown-container" :ref="'__dropdown_activator_' + id">

    <div class="dropdown-activator" :class="{ 'active': visible }">
      <slot name="activator" :on="{ click: click }"></slot>
    </div>

    <div
      class="dropdown"
      :class="{ 'active': visible }"
      :style="['left:' + left + 'px;', 'top:' + top + 'px;']"
      :ref="'__dropdown_' + id"
      v-if="visible"
      v-click-outside="() => visible = false">

      <slot></slot>

    </div>

  </div>

</template>

<script>
import './dropdown.sass'

// Directives
import ClickOutside from '../../directives/click-outside'

var Id = ((i) => () => i++ )(0)

export default {

  data() {
    return {
      visible: false,

      left: 0,
      top: 0,
      id: Id()
    }
  },

  methods: {
    click() {
      this.visible = !this.visible
    },
    /**
     *
     */
    setPosition() {
      this.$nextTick(() => {
        // get top, left, width, height of the element .Tooltip
        var activator = this.$refs['__dropdown_activator_' + this.id].getBoundingClientRect()
        var dropdown = this.$refs['__dropdown_' + this.id].getBoundingClientRect()
        var offsetLeft = activator.left - dropdown.width
        var offsetRight = window.innerWidth - (activator.left + activator.width + dropdown.width)
        // set the position left and top values
        // no space left
        if (offsetLeft < 0) {
          this.left = activator.left
          this.top = activator.top + activator.height
        } else {
          // no space right
          if (offsetRight < 0) {
            this.left = activator.left - dropdown.width + activator.width
            this.top = activator.top + activator.height
          } else {
            this.left = activator.left
            this.top = activator.top + activator.height
          }
        }
      })
    }
  },

  watch: {
    'visible': function() {
      if(this.visible) {
        this.setPosition()
      }
    }
  },

  directives: {
    ClickOutside
  }

}
</script>
