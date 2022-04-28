<template>

  <div class="field-container">

    <div class="field" :class="[
      color,
      errors ? 'danger' : '',
      loading ? 'loading' : '',
      disabled ? 'disabled' : ''
    ]">
      <div class="field-prepend" v-if="$slots.prepend">
        <slot name="prepend"></slot>
      </div>
      <div class="field-control">
        <label :for="id" :class="[
          modelValue || modelValue != '' ||
          focused || placeholder.length ||
          (type === 'number' && typeof modelValue === 'string') ? 'upper' : ''
        ]">
          <slot></slot>
        </label>
        <div class="field-tip" v-if="$slots.tip">
          <slot name="tip"></slot>
        </div>
        <div class="field-control__body">
          <input
            :type="type"
            :id="id"
            :value="modelValue"
            :placeholder="placeholder"
            :disabled="disabled"
            :min="min"
            :max="max"
            @input="$emit('update:modelValue', $event.target.value)"
            @focus="onFocus($event)"
            @blur="onBlur($event)"/>
        </div>
      </div>
      <div class="field-append" v-if="$slots.append">
        <slot name="append"></slot>
      </div>
    </div>

    <div class="field-errors" v-if="errors">
      <div class="field-error" v-for="error in errors">
        <span>{{ error }}</span>
      </div>
    </div>

  </div>

</template>

<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  type: { type: String, default: 'text' },
  modelValue: { type: [String, Number] },
  id: String,
  placeholder: { type: String, default: '' },
  color: String,
  loading: Boolean,
  disabled: Boolean,
  errors: Array,
  min: Number,
  max: Number
})
const emit = defineEmits(['update:modelValue', 'focus', 'blur'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})

var focused = ref(false)

function onFocus(e) {
  focused.value = true
  emit('focus', e)
}
function onBlur(e) {
  focused.value = false
  emit('blur', e)
}
</script>
