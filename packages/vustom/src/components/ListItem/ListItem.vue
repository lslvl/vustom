<template>
  <div
    v-ripple="!($slots.control)"
    class="list-item"
    :class="[
      !($slots.control) ? 'clickable' : '',
      !($slots.control) ? 'hoverable' : '',
      (!$slots.control &&  $slots.content) ? 'not-centered-v' : '',
      disabled ? 'disabled' : '',
      color
    ]">
    <div class="icon" v-if="$slots.icon">
      <slot name="icon"></slot>
    </div>
    <div class="control" v-if="$slots.control">
      <slot name="control"></slot>
    </div>
    <div :class="[$slots.content ? 'with-content' : 'no-content']">
      <div class="slot">
        <slot></slot>
      </div>
      <div class="content" v-if="$slots.content">
        <slot name="content"></slot>
      </div>
    </div>
    <div class="extra" v-if="$slots.extra">
      <slot name="extra"></slot>
    </div>
  </div>
</template>

<script setup>
import './list_item.sass'

const props = defineProps(['color', 'disabled'])
</script>
