<template>

  <div class="blocks">

    <div class="block1">
      <span>1</span>
    </div>

    <div class="block2">
      <span>2</span>
    </div>

    <div class="block3">
      <span>3</span>
    </div>

    <div class="block4">
      <span>4</span>
    </div>

    <div class="block5">
      <span>5</span>
    </div>

    <div class="block6">
      <span>6</span>
    </div>

    <div class="block7">
      <span>7</span>
    </div>

    <div class="block8">
      <span>8</span>
    </div>

    <div class="block9">
      <span>9</span>
    </div>

  </div>

</template>

<style lang="sass" scoped>
.blocks
  display: grid
  grid-template-columns: 1fr 1fr

.block
  background: var(--vustom-fill-2)
  border: 1px solid var(--vustom-fill-border)

.block1
  box-shadow: var(--vustom-shadow-1)
.block2
  box-shadow: var(--vustom-shadow-2)
.block3
  box-shadow: var(--vustom-shadow-3)
.block4
  box-shadow: var(--vustom-shadow-4)
.block5
  box-shadow: var(--vustom-shadow-5)
.block6
  box-shadow: var(--vustom-shadow-6)
.block7
  box-shadow: var(--vustom-shadow-7)
.block8
  box-shadow: var(--vustom-shadow-8)
.block9
  box-shadow: var(--vustom-shadow-9)

.block,
.block1,
.block2,
.block3,
.block4,
.block5,
.block6,
.block7,
.block8,
.block9
  align-items: center
  display: flex
  transition: .5s
  min-height: 6rem
  margin: 2rem
  justify-content: center
  padding: 2rem
  text-align: center

</style>
