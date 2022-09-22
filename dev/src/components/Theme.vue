<template>

  <div>
    var themable = inject('themable')

    themable.theme -> gets the current theme, 'light' or 'dark'
    themable.set('dark') -> set the theme to 'dark'

    Saves the theme in localStorage
  </div>

  <div class="blocks">

    <div class="block">
      <span class="color">{{ text }}</span>
      <span class="color1">{{ text }}</span>
      <span class="color2">{{ text }}</span>
      <span class="color3">{{ text }}</span>
      <span class="color4">{{ text }}</span>
      <span class="color5">{{ text }}</span>
      <span class="color6">{{ text }}</span>
      <span class="color7">{{ text }}</span>
      <span class="color8">{{ text }}</span>

      <div class="tags">

        <tag>Tag</tag>

        <tag color="success">Tag</tag>

        <tag color="danger">Tag</tag>

        <tag color="alert">Tag</tag>

        <tag color="info">Tag</tag>

      </div>

      <div class="tags">

        <tag outlined>Tag</tag>

        <tag color="success" outlined>Tag</tag>

        <tag color="danger" outlined>Tag</tag>

        <tag color="alert" outlined>Tag</tag>

        <tag color="info" outlined>Tag</tag>

      </div>

      <div class="tags">

        <tag inverted>Tag</tag>

        <tag inverted color="success">Tag</tag>

        <tag inverted color="danger">Tag</tag>

        <tag inverted color="alert">Tag</tag>

        <tag inverted color="info">Tag</tag>

      </div>
    </div>

    <div class="block1">
      <span class="color">{{ text }}</span>
      <span class="color1">{{ text }}</span>
      <span class="color2">{{ text }}</span>
      <span class="color3">{{ text }}</span>
      <span class="color4">{{ text }}</span>
      <span class="color5">{{ text }}</span>
      <span class="color6">{{ text }}</span>
      <span class="color7">{{ text }}</span>
      <span class="color8">{{ text }}</span>

      <div class="tags">

        <tag>Tag</tag>

        <tag color="success">Tag</tag>

        <tag color="danger">Tag</tag>

        <tag color="alert">Tag</tag>

        <tag color="info">Tag</tag>

      </div>

      <div class="tags">

        <tag outlined>Tag</tag>

        <tag color="success" outlined>Tag</tag>

        <tag color="danger" outlined>Tag</tag>

        <tag color="alert" outlined>Tag</tag>

        <tag color="info" outlined>Tag</tag>

      </div>

      <div class="tags">

        <tag inverted>Tag</tag>

        <tag inverted color="success">Tag</tag>

        <tag inverted color="danger">Tag</tag>

        <tag inverted color="alert">Tag</tag>

        <tag inverted color="info">Tag</tag>

      </div>
    </div>

    <div class="block2">
      <span class="color">{{ text }}</span>
      <span class="color1">{{ text }}</span>
      <span class="color2">{{ text }}</span>
      <span class="color3">{{ text }}</span>
      <span class="color4">{{ text }}</span>
      <span class="color5">{{ text }}</span>
      <span class="color6">{{ text }}</span>
      <span class="color7">{{ text }}</span>
      <span class="color8">{{ text }}</span>

      <div class="tags">

        <tag>Tag</tag>

        <tag color="success">Tag</tag>

        <tag color="danger">Tag</tag>

        <tag color="alert">Tag</tag>

        <tag color="info">Tag</tag>

      </div>

      <div class="tags">

        <tag outlined>Tag</tag>

        <tag color="success" outlined>Tag</tag>

        <tag color="danger" outlined>Tag</tag>

        <tag color="alert" outlined>Tag</tag>

        <tag color="info" outlined>Tag</tag>

      </div>

      <div class="tags">

        <tag inverted>Tag</tag>

        <tag inverted color="success">Tag</tag>

        <tag inverted color="danger">Tag</tag>

        <tag inverted color="alert">Tag</tag>

        <tag inverted color="info">Tag</tag>

      </div>
    </div>

    <div class="block3">
      <span class="color">{{ text }}</span>
      <span class="color1">{{ text }}</span>
      <span class="color2">{{ text }}</span>
      <span class="color3">{{ text }}</span>
      <span class="color4">{{ text }}</span>
      <span class="color5">{{ text }}</span>
      <span class="color6">{{ text }}</span>
      <span class="color7">{{ text }}</span>
      <span class="color8">{{ text }}</span>

      <div class="tags">

        <tag>Tag</tag>

        <tag color="success">Tag</tag>

        <tag color="danger">Tag</tag>

        <tag color="alert">Tag</tag>

        <tag color="info">Tag</tag>

      </div>

      <div class="tags">

        <tag outlined>Tag</tag>

        <tag color="success" outlined>Tag</tag>

        <tag color="danger" outlined>Tag</tag>

        <tag color="alert" outlined>Tag</tag>

        <tag color="info" outlined>Tag</tag>

      </div>

      <div class="tags">

        <tag inverted>Tag</tag>

        <tag inverted color="success">Tag</tag>

        <tag inverted color="danger">Tag</tag>

        <tag inverted color="alert">Tag</tag>

        <tag inverted color="info">Tag</tag>

      </div>
    </div>

    <div class="block4">
      <span class="color">{{ text }}</span>
      <span class="color1">{{ text }}</span>
      <span class="color2">{{ text }}</span>
      <span class="color3">{{ text }}</span>
      <span class="color4">{{ text }}</span>
      <span class="color5">{{ text }}</span>
      <span class="color6">{{ text }}</span>
      <span class="color7">{{ text }}</span>
      <span class="color8">{{ text }}</span>

      <div class="tags">

        <tag>Tag</tag>

        <tag color="success">Tag</tag>

        <tag color="danger">Tag</tag>

        <tag color="alert">Tag</tag>

        <tag color="info">Tag</tag>

      </div>

      <div class="tags">

        <tag outlined>Tag</tag>

        <tag color="success" outlined>Tag</tag>

        <tag color="danger" outlined>Tag</tag>

        <tag color="alert" outlined>Tag</tag>

        <tag color="info" outlined>Tag</tag>

      </div>

      <div class="tags">

        <tag inverted>Tag</tag>

        <tag inverted color="success">Tag</tag>

        <tag inverted color="danger">Tag</tag>

        <tag inverted color="alert">Tag</tag>

        <tag inverted color="info">Tag</tag>

      </div>
    </div>

  </div>

</template>

<script setup>
import { ref } from 'vue'

var text = ref('Vustom text')
</script>

<style lang="sass" scoped>
.blocks
  display: grid
  grid-template-columns: 1fr 1fr

.block
  background: var(--vustom-fill)
  border-bottom: 4px solid var(--vustom-fill-border)
  &:hover
    background: var(--vustom-fill-hover)

.block1
  background: var(--vustom-fill-1)
  border-bottom: 4px solid var(--vustom-fill-1-border)
  &:hover
    background: var(--vustom-fill-1-hover)
.block2
  background: var(--vustom-fill-2)
  border-bottom: 4px solid var(--vustom-fill-2-border)
  &:hover
    background: var(--vustom-fill-2-hover)
.block3
  background: var(--vustom-fill-3)
  border-bottom: 4px solid var(--vustom-fill-3-border)
  &:hover
    background: var(--vustom-fill-3-hover)
.block4
  background: var(--vustom-fill-4)
  border-bottom: 4px solid var(--vustom-fill-4-border)
  &:hover
    background: var(--vustom-fill-4-hover)


.block,
.block1,
.block2,
.block3,
.block4
  transition: .5s
  min-height: 10rem
  margin: 2rem
  padding: 2rem
  & .color
    color: var(--vustom-color)
  & .color1
    color: var(--vustom-color-1)
  & .color2
    color: var(--vustom-color-2)
  & .color3
    color: var(--vustom-color-3)
  & .color4
    color: var(--vustom-color-4)
  & .color5
    color: var(--vustom-color-5)
  & .color6
    color: var(--vustom-color-6)
  & .color7
    color: var(--vustom-color-7)
  & .color8
    color: var(--vustom-color-8)
  & > span
    display: block
    font-size: 1rem
  & > .tags
    margin-top: 1rem
</style>
