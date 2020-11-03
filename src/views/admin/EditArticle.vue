<template>
    <write-space btntitle="修改"></write-space>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import WriteSpace from "@/components/article/WriteSpace.vue";
export default defineComponent({
  name: "EditArticle",
  components:{
    WriteSpace
  }
})
</script>

<style lang="scss" scoped>

</style>
