<template>

  <h1>Installation</h1>

  1
  <p>In package.json, add :</p>
  <code>"vustom": "git+ssh://git@github.com:lslvl/vustom.git"</code>
  <p>to the dependencies</p>

  <p>run :</p>
  <code>npm install</code>
  <p>or</p>
  <code>npm update</code>

  2
  <p>In your main file, main.js, import Vustom</p>
  <code>import Vustom from 'vustom'</code>

  <p>add Vustom to your app</p>
  <code>
    import App from '@/App.vue'
    import router from '@/router'

    const app = createApp(App)

    app.use(Vustom)
    .mount('#app')
  </code>

  3
  <p>Customize your SASS variables</p>
  <p>go to your main sass file, main.sass</p>
  <p>customize evert variable you want</p>
  <code>$danger: yellow</code>
  <p>and import Vustom style just after</p>
  <code>@import './../../packages/vustom/src/sass/vustom.sass'</code>

  You're ready to go !
</template>
