<template>
  <div class="article-list"  :class="{'blog-readme-begin':status,'blog-readme-end':!status}">
    <div class="article-item">
      <div class="item-info">
        <h1>JAVAfdgdsgfdgdfsgfdsgds心得</h1>
        <h1>发布时间:2020</h1>
      </div>
      <div class="item-options">
        <h2 class="article-edit">编辑</h2>
        <h2 class="article-delete">删除</h2>
      </div>
    </div>
    <div class="article-item">
      <div class="item-info">
        <h1>JAVAfdgdsgfdgdfsgfdsgds心得</h1>
        <h1>发布时间:2020</h1>
      </div>
      <div class="item-options">
        <h2 class="article-edit">编辑</h2>
        <h2 class="article-delete">删除</h2>
      </div>
    </div>
    <div class="article-item">
      <div class="item-info">
        <h1>JAVAfdgdsgfdgdfsgfdsgds心得</h1>
        <h1>发布时间:2020</h1>
      </div>
      <div class="item-options">
        <h2 class="article-edit">编辑</h2>
        <h2 class="article-delete">删除</h2>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import {BlogInit} from "@/common/utils/BLogInit";

  export default  defineComponent({
    name: 'ArticleList',
    setup(){
      return{
        ...BlogInit()
      }
    }

  })
</script>

<style lang="scss" scoped>
  .article-list{

    display: flex;
    flex-direction:column;

    /*padding: 20px;*/
    .article-item{
      background-color: #FBFCFC;
      margin-bottom: 20px;
      padding: 20px;

      border-left:5px solid #1ABC9C;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      .item-options{
        width: 200px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .article-edit{

          background-color: #1ABC9C;
          border-radius: 15px;
          text-align: center;
          color: white;
          width: 80px;

        }
        .article-delete{
          background-color: red;
          border-radius: 15px;
          text-align: center;
          color: white;
          width: 80px;
        }
      }
    }
  }
</style>
