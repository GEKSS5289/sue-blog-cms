<template>

  <div class="sue-container" :class="{'blog-readme-begin':status,'blog-readme-end':!status}">
    IssueMng
  </div>
</template>

<script lang="ts">
  import {defineComponent} from 'vue'
  import {BlogInit} from "@/common/utils/BLogInit";

  export default defineComponent({
    name: "IssueMng",
    setup(){


      return{
        ...BlogInit(),
      }
    }
  })
</script>

<style lang="scss" scoped>

</style>
