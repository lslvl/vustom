<template>

  <div class="app">

    <div class="app-nav">

      <h1>
        <svg
           xmlns="http://www.w3.org/2000/svg"
           version="1.1"
           viewBox="0 0 48.213013 49.192219"
           height="49.192219mm"
           width="48.213013mm">
          <g transform="translate(-19.297664,-111.2868)">
            <path
               d="m 19.297664,160.26447 14.428817,-29.55367 19.059386,-0.17949 14.511796,29.70905 h -9.999998 l -14.000001,-28.1647 -14,28.17961 z"
               style="fill:#25589f;fill-opacity:1;" />
            <path
               d="m 29.297664,160.25527 14,-28.17961 14.000001,28.17961 -5.000001,-0.0735 -9,-17.27772 -9,17.3949 z"
               style="fill:#143058;" />
            <path
               d="m 19.510675,111.32128 24,49.15774 24,-49.13363 h -10 l -14,28.16469 -14,-28.1796 z"
               style="fill:#5c90d9ff;" />
            <path
               d="m 29.510675,111.33048 14,28.1796 14,-28.1796 -5,0.0735 -9,17.27772 -9,-17.3949 z"
               style="fill:#25589fff;" />
          </g>
        </svg>
      </h1>

      <div class="app-themes__switch">
        <bouton small :class="[themable.theme == 'dark' ? 'inverted success' : '']" @click="themable.set('dark')">Dark</bouton>
        <bouton small :class="[themable.theme == 'light' ? 'inverted success' : '']" @click="themable.set('light')">Light</bouton>
      </div>

      <ul>
        <list-item @click="$router.push({ name: 'index' })" :active="$route.name == 'index'">Accueil</list-item>
        <list-item @click="$router.push({ name: 'bouton' })" :active="$route.name == 'bouton'">Bouton</list-item>
        <list-item @click="$router.push({ name: 'bulle' })" :active="$route.name == 'bulle'">Bulle</list-item>
        <list-item @click="$router.push({ name: 'content' })" :active="$route.name == 'content'">Content</list-item>
        <list-item @click="$router.push({ name: 'disclaimer' })" :active="$route.name == 'disclaimer'">Disclaimer</list-item>
        <list-item @click="$router.push({ name: 'dropdown' })" :active="$route.name == 'dropdown'">Dropdown</list-item>
        <list-item @click="$router.push({ name: 'field' })" :active="$route.name == 'field'">Field</list-item>
        <list-item @click="$router.push({ name: 'list' })">
          List
          <template #extra>
            <tag small color="success">1234</tag>
          </template>
        </list-item>
        <list-item @click="$router.push({ name: 'mediable' })">Mediable</list-item>
        <list-item @click="$router.push({ name: 'modal' })">Modal</list-item>
        <list-item @click="$router.push({ name: 'notification' })">Notification</list-item>
        <list-item @click="$router.push({ name: 'shadow' })">Shadow</list-item>
        <list-item @click="$router.push({ name: 'tag' })">Tag</list-item>
        <list-item @click="$router.push({ name: 'theme' })">Theme</list-item>
        <list-item @click="$router.push({ name: 'tooltip' })">Tooltip</list-item>
      </ul>

    </div>

    <div class="app-body">

      <div class="app-container">

        <RouterView/>

      </div>

    </div>

  </div>

  <notifications/>

</template>

<style lang="sass">
@import './sass/app.sass'
</style>

<script setup>
import { inject } from 'vue'

var themable = inject('themable')
</script>
