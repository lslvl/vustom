<template>
  <span
    v-ripple="clickable"
    class="tag"
    :class="[
      loading ? 'loading' : '',
      disabled ? 'disabled' : '',
      transparent ? 'transparent' : '',
      rounded ? 'rounded' : '',
      iconly ? 'iconly' : '',
      outlined ? 'outlined' : '',
      inverted ? 'inverted' : '',
      tiny ? 'tiny' : '',
      small ? 'small' : '',
      large ? 'large' : '',
      huge ? 'huge' : '',
      block ? 'block' : '',
      hoverable || clickable ? 'hoverable' : '',
      deletable ? 'deletable' : '',
      color]"
    :disabled="disabled"
    @click="onClick()">
    <div class="icon" v-if="$slots.icon">
      <slot name="icon"></slot>
    </div>
    <slot>{{ name }}</slot>
    <div class="delete" v-if="deletable" @click.stop="onDelete()">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </div>
  </span>
</template>

<script setup>
const emit = defineEmits(['delete', 'click'])

const props = defineProps({
  name: String,
  color: String,
  loading: Boolean,
  disabled: Boolean,
  transparent: Boolean,
  iconly: Boolean,
  rounded: Boolean,
  outlined: Boolean,
  inverted: Boolean,
  tiny: Boolean,
  small: Boolean,
  large: Boolean,
  huge: Boolean,
  block: Boolean,
  clickable: Boolean,
  hoverable: Boolean,
  deletable: Boolean
})

function onClick() {
  emit('click')
}
function onDelete() {
  emit('delete')
}
</script>
