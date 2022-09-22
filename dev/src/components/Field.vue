<template>
  <field v-model="test"> Email </field>

  <br />

  <field o v-model="test"> Email </field>

  <br />

  <field type="password" v-model="test"> Mot de passe </field>

  <br />

  <field type="number" v-model="number" :min="0" :max="5"> Quantité </field>

  <br />

  <field type="number" v-model="number2" :min="0" :max="5"> Quantité </field>

  <br />

  <field disabled v-model="test"> Email </field>

  <br />

  <field v-model="test" :loading="true"> Email </field>

  <br />

  <field
    v-model="test"
    :loading="loading2"
    color="success"
    @focus="loading2 = true"
    @blur="loading2 = false"
  >
    Email
  </field>

  <br />

  <field v-model="test" color="success"> Email </field>

  <br />

  <field disabled v-model="test"> Email </field>

  <br />

  <field v-model="test" :placeholder="'louis@example.com'"> Email </field>

  <br />

  <field
    v-model="test"
    :placeholder="'louis@example.com'"
    :errors="errors"
    @keydown.enter="resetErrors()"
  >
    Email
    <template #tip> 5/50 </template>
  </field>

  <br />

  <field
    v-model="test"
    :placeholder="'louis@example.com'"
    :errors="errors"
    :cleanErrorsOnUpdate="false"
  >
    Email
    <template #tip> 5/50 </template>
    <template #append>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
        />
      </svg>
    </template>
  </field>

  <br />

  <field>
    <template #append> i </template>
    zaeeazzea
    <template #tip> ici </template>
  </field>

  <br />

  <field v-model="test">
    zaeeazzea
    <template #prepend>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
        />
      </svg>
    </template>
  </field>
</template>

<script setup>
import { ref } from "vue";

const test = ref("test@example.com");
const number = ref(5);
const number2 = ref("string, not a number");

const loading2 = ref(false);

const errorsInit = ["You must have uppercase letters", "You're not connected"];

var errors = ref(errorsInit);

function resetErrors() {
  console.log("pressed");
  errors.value = [...errorsInit, "Another error !"];
}
</script>