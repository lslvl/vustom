<template>

  <bouton>
    axis: 'y', x: 'left'
    <tooltip position="top">I'm a tooltip</tooltip>
  </bouton>

  <bouton>
    axis: 'y', x: 'center'
    <tooltip position="top">I'm a tooltip</tooltip>
  </bouton>

  <dropdown>

    <template #activator="{ on }">
      <bouton v-on="on">
        <template #icon>
          icon
        </template>
        Dropdown
      </bouton>
    </template>

    <list>
      <list-item>
        <field>Search...</field>
      </list-item>

      <dropdown position="right bottom">
        <template #activator="{ on }">
          <list-item v-on="on">
            Nested dropdown
            <template #extra>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </template>
          </list-item>
        </template>
        <list>
          <list-item>Hello 3</list-item>
          <dropdown position="right bottom">
            <template #activator="{ on }">
              <list-item v-on="on">
                Nested dropdown
                <template #extra>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </template>
              </list-item>
            </template>
            <list>
              <list-item>Hello 3</list-item>
              <dropdown position="right bottom">
                <template #activator="{ on }">
                  <list-item v-on="on">
                    Nested dropdown
                    <template #extra>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </template>
                  </list-item>
                </template>
                <list>
                  <list-item>Hello 3</list-item>
                  <list-item>Hello 3</list-item>
                  <list-item color="danger">Hello 3</list-item>
                  <list-item>Hello 3</list-item>
                  <list-item>Hello 3</list-item>
                  <list-item color="success">Hello 3</list-item>
                </list>
              </dropdown>
              <list-item color="danger">Hello 3</list-item>
              <list-item>Hello 3</list-item>
              <list-item>Hello 3</list-item>
              <list-item color="success">Hello 3</list-item>
            </list>
          </dropdown>
          <list-item color="danger">Hello 3</list-item>
          <list-item>Hello 3</list-item>
          <list-item>Hello 3</list-item>
          <list-item color="success">Hello 3</list-item>
        </list>
      </dropdown>

      <list-item>Hello 3</list-item>
      <list-item color="danger">Hello 3</list-item>
      <list-item>Hello 3</list-item>
      <list-item>Hello 3</list-item>
      <list-item color="success">Hello 3</list-item>

    </list>

  </dropdown>

  <dropdown hoverable>

    <template #activator="{ on }">
      <bouton v-on="on">
        <template #icon>
          icon
        </template>
        Hover me
      </bouton>
    </template>

    <list>

      <list-item>Hello 3</list-item>
      <list-item>Hello 3</list-item>
      <list-item color="danger">Hello 3</list-item>
      <list-item>Hello 3</list-item>
      <list-item>Hello 3</list-item>
      <list-item color="success">Hello 3</list-item>

    </list>

  </dropdown>

  <dropdown>
    <template #contextmenu="{ on }">
      <div v-on="on" style="height:10rem;width:10rem;background:#0000ff14">
        Context menu zone
      </div>
    </template>
    <list>
      <list-item>Hello 3</list-item>
      <list-item>Hello 3</list-item>
      <list-item color="danger">Hello 3</list-item>
      <list-item>Hello 3</list-item>
      <list-item>Hello 3</list-item>
      <list-item color="success">Hello 3</list-item>
    </list>
  </dropdown>

  <dropdown :contextmenu="contextmenuInfo" @hide="contextmenuInfo = { left: 0, top: 0 }">
    <list>
      <list-item>Hello 3</list-item>
      <list-item>Hello 3</list-item>
      <list-item color="danger">Hello 3</list-item>
      <list-item>Hello 3</list-item>
      <list-item>Hello 3</list-item>
      <list-item color="success">Hello 3</list-item>
    </list>
  </dropdown>

  <div @contextmenu.prevent="contextmenuInfo.left = $event.clientX, contextmenuInfo.top = $event.clientY" style="height:10rem;width:10rem;background:#0000ff14">
    Context menu zone
  </div>

  <dropdown>

    <template #activator="{ on }">
      <bouton v-on="on">
        <template #icon>
          icon
        </template>
        Dropdown
      </bouton>
    </template>

    <list>

      <span class="list-label">Label</span>

      <list-item>
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
          </svg>
        </template>
        Hello 1
      </list-item>

      <span class="list-label">Label</span>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

      <list-item :disabled="true">Hello 2</list-item>

      <list-item>Hello 3</list-item>

      <list-item>
        <template #control>
          <toggler :checked="true"></toggler>
        </template>
        Un switch
      </list-item>

      <list-item>
        <template #control>
          <toggler :checked="true" color="success"></toggler>
        </template>
        Un switch
      </list-item>

      <list-item>
        <template #control>
          <checkbox :checked="true" color="success" id="test"></checkbox>
        </template>
        Hello 3
      </list-item>

      <hr>

      <span class="list-label">Label</span>

      <list-item>
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </template>
        Hello 3
        <template #content>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
        </template>
      </list-item>

      <list-item>Hello 3</list-item>

      <hr>

      <list-item color="danger">Hello 3</list-item>

      <list-item color="danger" :disabled="true">
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </template>
        Delete
      </list-item>

    </list>

  </dropdown>

  <dropdown>

    <template #activator="{ on }">
      <bouton v-on="on">
        <template #icon>
          icon
        </template>
        Dropdown
      </bouton>
    </template>

    <list>

      <span class="list-label">Label</span>

      <list-item>
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
          </svg>
        </template>
        Hello 1
      </list-item>

      <span class="list-label">Label</span>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

      <list-item :disabled="true">Hello 2</list-item>

      <list-item>Hello 3</list-item>

      <list-item>
        <template #control>
          <toggler :checked="true"></toggler>
        </template>
        Un switch
      </list-item>

      <list-item>
        <template #control>
          <toggler :checked="true" color="success"></toggler>
        </template>
        Un switch
      </list-item>

      <list-item>
        <template #control>
          <checkbox :checked="true" color="success" id="test"></checkbox>
        </template>
        Hello 3
      </list-item>

      <hr>

      <span class="list-label">Label</span>

      <list-item>
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </template>
        Hello 3
        <template #content>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
        </template>
      </list-item>

      <list-item>Hello 3</list-item>

      <hr>

      <list-item color="danger">Hello 3</list-item>

      <list-item color="danger" :disabled="true">
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </template>
        Delete
      </list-item>

    </list>

  </dropdown>

</template>

<script setup>
import { ref } from 'vue'

var contextmenuInfo = ref({
  top: 0,
  left: 0
})
</script>