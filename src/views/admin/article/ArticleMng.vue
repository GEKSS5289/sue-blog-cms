<template>
  <div class="sue-container"  :class="{'blog-readme-begin':status,'blog-readme-end':!status}">
    <div class="article-table">
      <router-link tag="a" to="/admin/article/list">文章列表</router-link>
      <router-link tag="a" to="/admin/article/write" class="table-2">写文章</router-link>
      <!--      <api-router-link tag="a">写文章</api-router-link>-->
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
  import {defineComponent, ref, Ref} from 'vue'
  import {BlogInit} from "@/common/utils/BLogInit";
  import {ArticeDescModel} from "@/common/model/datamodel";

  export default defineComponent({
    name: "ArticleMng",
    setup(){



      return{
        ...BlogInit(),

      }
    }
  })
</script>

<style lang="scss" scoped>
  .sue-container{
    .article-table{
      margin-bottom: 30px;
      .table-2{
        margin-left: 20px;
      }
      .router-link-active{
        border-bottom: 2px solid #1ABC9C!important;
        color: #1ABC9C !important;
        background:none;
      }
      a{
        color: #333333;
        font-size: 24px;
        border-bottom: 2px solid white;
        padding-bottom: 5px;
      }
    }
  }
</style>
