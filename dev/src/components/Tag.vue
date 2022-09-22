<template>

  Tags

  <div class="tags">

    <tag>Just a tag</tag>

    <tag color="success">Just a tag</tag>

    <tag color="danger">Just a tag</tag>

    <tag color="alert">Just a tag</tag>

    <tag color="info">Just a tag</tag>

  </div>

  <div class="tags">

    <tag deletable clickable @click="onClick('azeaze')">Just a tag</tag>

    <tag deletable clickable @click="onClick('azeaze')" @delete="onDelete()" color="success">Just a tag</tag>

    <tag deletable clickable @click="onClick('azeaze')" @delete="onDelete()" color="danger" outlined rounded>Just a tag</tag>

    <tag deletable clickable @click="onClick('azeaze')" @delete="onDelete()" color="alert" outlined>Just a tag</tag>

    <tag deletable clickable @click="onClick('azeaze')" @delete="onDelete()" color="info" rounded>Just a tag</tag>

  </div>

  <div class="tags">

    <tag inverted>Just a tag</tag>

    <tag inverted color="success">Just a tag</tag>

    <tag inverted color="danger">Just a tag</tag>

    <tag inverted color="alert">Just a tag</tag>

    <tag inverted color="info">Just a tag</tag>

  </div>

  <div class="tags">

    <tag outlined>Just a tag</tag>

    <tag outlined color="success">Just a tag</tag>

    <tag outlined color="danger">Just a tag</tag>

    <tag outlined color="alert">Just a tag</tag>

    <tag outlined color="info">Just a tag</tag>

  </div>

  <div class="tags">

    <tag rounded>Just a tag</tag>

    <tag rounded color="success">Just a tag</tag>

    <tag rounded color="danger">Just a tag</tag>

    <tag rounded color="alert">Just a tag</tag>

    <tag rounded color="info">Just a tag</tag>

  </div>

  <div class="tags">

    <tag rounded>Just a tag</tag>

    <tag rounded outlined color="success">Just a tag</tag>

    <tag rounded outlined color="danger">Just a tag</tag>

    <tag rounded outlined color="alert">Just a tag</tag>

    <tag rounded outlined color="info">Just a tag</tag>

  </div>

  <div class="tags">

    <tag :loading="loading" rounded @click="toggleLoading()">Click me</tag>

    <tag :loading="loading" rounded color="success" @click="toggleLoading()">Click me</tag>

    <tag :loading="loading" outlined color="danger" @click="toggleLoading()">Click me</tag>

    <tag :loading="loading" color="alert" @click="toggleLoading()">Click me</tag>

    <tag :loading="loading" rounded inverted color="info" @click="toggleLoading()">Click me</tag>

  </div>

  <div class="tags">

    <tag disabled rounded>Just a tag</tag>

    <tag disabled rounded color="success">Just a tag</tag>

    <tag disabled outlined color="danger">Just a tag</tag>

    <tag disabled color="alert">Just a tag</tag>

    <tag disabled rounded outlined color="info">Just a tag</tag>

  </div>

  <div class="tags">

    <tag rounded>
      <template #icon>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      </template>
      Just a tag
    </tag>

    <tag color="success">
      <template #icon>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      </template>
      Just a tag
    </tag>

    <tag outlined color="danger">
      <template #icon>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      </template>
      Just a tag
    </tag>

    <tag color="alert">
      <template #icon>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      </template>
      Just a tag
    </tag>

    <tag loading color="info">
      <template #icon>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      </template>
      Just a tag
    </tag>

  </div>

  <div class="tags">

    <tag tiny>Tiny tag</tag>

    <tag small color="success">Small tag</tag>

    <tag color="danger">Normal tag</tag>

    <tag large color="alert">Large tag</tag>

    <tag huge color="info">Huge tag</tag>

  </div>

</template>

<script setup>
import { ref, inject } from 'vue'

var loading = ref(true)
setInterval(() => toggleLoading(), 5000)
var toggleLoading = () => loading.value = !loading.value

var notify = inject('notify')

function onClick() { notify('Clicked') }
function onDelete() { notify('Deleted') }
</script>

<style scoped lang="sass">
.tags
  display: flex
  margin-bottom: 4rem
  & > *
    &:not(:last-child)
      margin-right: 1rem
</style>
