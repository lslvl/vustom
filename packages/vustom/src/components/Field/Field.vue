<template>
  <div class="field-container">
    <div
      class="field"
      :class="[
        color,
        getErrors ? 'danger' : '',
        loading ? 'loading' : '',
        disabled ? 'disabled' : ''
      ]"
    >
      <div class="field-prepend" v-if="$slots.prepend">
        <slot name="prepend"></slot>
      </div>
      <div class="field-control">
        <label
          :for="id"
          :class="[
            modelValue ||
            modelValue != '' ||
            focused ||
            placeholder.length ||
            (type === 'number' && typeof modelValue === 'string')
              ? 'upper'
              : '',
          ]"
        >
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
            @blur="onBlur($event)"
          />
        </div>
      </div>
      <div class="field-append" v-if="$slots.append">
        <slot name="append"></slot>
      </div>
    </div>

    <div class="field-errors" v-if="getErrors">
      <div class="field-error" v-for="error in errors">
        <span>{{ error }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch, onMounted } from "vue";

const props = defineProps({
  type: { type: String, default: "text" },
  modelValue: { type: [String, Number] },
  id: String,
  placeholder: { type: String, default: "" },
  color: String,
  loading: Boolean,
  disabled: Boolean,
  errors: { type: [Array, String] },
  min: Number,
  max: Number,
  cleanErrorsOnUpdate: { type: Boolean, default: true },
});
const emit = defineEmits(["update:modelValue", "focus", "blur"]);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
var getErrors = computed(() => props.errors);

var focused = ref(false);

function onFocus(e) {
  focused.value = true;
  emit("focus", e);
}
function onBlur(e) {
  focused.value = false;
  emit("blur", e);
}

watch(
  () => props.errors,
  (oldV, newV) => {
    if (newV) {
      getErrors.value = newV;
    }
  }
);

watch(
  () => props.modelValue,
  () => {
    if (props.cleanErrorsOnUpdate) {
      getErrors.value = false;
    }
  }
);
</script>