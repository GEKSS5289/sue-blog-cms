<template>
  <div class="app">
    <router-view/>
  </div>

</template>
<script lang="ts">
  import {defineComponent} from 'vue'
  import "@/assets/style/reset.scss"
  import "@/assets/style/basic.scss"
  import "@/assets/style/mixin.scss"
  export default defineComponent({
    name: "App",

  })
</script>

<style>

</style>
