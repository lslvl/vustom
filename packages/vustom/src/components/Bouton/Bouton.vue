<template>
  <button
    v-ripple
    class="bouton"
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
      color]"
    :disabled="disabled"
    :type="type">
    <div class="icon" v-if="$slots.icon">
      <slot name="icon"></slot>
    </div>
    <slot>{{ name }}</slot>
  </button>
</template>

<script setup>
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
  type: { type: String, default: 'button'}
})
</script>
