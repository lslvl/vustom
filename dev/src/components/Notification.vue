<template>

  <bouton @click="notifyMe()">Notify me</bouton>

  <bouton color="danger" @click="notifyMe('danger')">danger</bouton>

  <bouton color="success" @click="notifyMe('success')">success</bouton>

  <bouton color="info" @click="notifyMe('info')">info</bouton>

  <bouton color="alert" @click="notifyMe('alert')">alert</bouton>

</template>

<script setup>
import { inject } from 'vue'

const notify = inject('notify')

function notifyMe(type) {

  return notify({
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiat nulla pariatur. Excepteur sint occaecat cupidatat non proident..',
    type: type,
    title: 'Custom title'
  })
}
</script>
