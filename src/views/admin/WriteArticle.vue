<template>
  <div class="write-container">
    <div class="write-header">
      <input type="text" placeholder="文章名" class="article-title">
      <div class="article-category">
        <h1>文章分类</h1>
        <div v-if="false" class="category-list">
          <div class="category-item">SpringBoot</div>
          <div class="category-item">Java</div>
          <div class="category-item">SpringCloud</div>
          <div class="category-item">Redis</div>
        </div>
      </div>

    </div>
    <div class="work-spaces">

    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default  defineComponent({
    name: 'WriteArticle'

  })
</script>

<style lang="scss" scoped>
  .write-container{
    background-color: #FBFCFC;
    padding: 20px;

    .write-header{
      display: flex;
      align-items: center;
      justify-content: space-between;
      .article-title{
        font-size: 24px;
        padding: 20px;
        width: 400px;
        border:none;

        background:none;
      }
      .article-category{

        margin-left: 200px;

        font-size: 10px;
        /*background-color: #1ABC9C;*/
        /*color: white;*/
        padding: 10px;

        h1{
          cursor: pointer;
          transition: all 1s;
          &:hover{
            color: #1ABC9C;
          }
        }
        .category-list{
          position: absolute;
          /*padding: 30px;*/
          background-color: #1ABC9C;
          color: white;
        }
      }
    }

  }
</style>
