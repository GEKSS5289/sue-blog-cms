<template>
    <edit-space btntitle="修改"  :article-id="articleId"></edit-space>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import EditSpace from "@/components/article/EditSpace.vue";
import router from "@/router";

export default defineComponent({
  name: "EditArticle",
  components:{
    EditSpace
  },
  setup(){



    return{
      articleId:router.currentRoute.value.params.id
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
