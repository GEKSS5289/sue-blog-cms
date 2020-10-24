<template>
  <div class="admin-nav">
    <div class="nav-container container">
      <h1>🔔SUE-BLOG-CMS</h1>
    </div>
  </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue'

    export default defineComponent({
        name: "CmsFooter"
    })
</script>

<style lang="scss" scoped>
  .admin-nav{
    width: 100%;
    padding: 30px;
    .nav-container{
      padding: 10px;
      h1{
        font-size: 30px;
      }

    }
  }
</style>
