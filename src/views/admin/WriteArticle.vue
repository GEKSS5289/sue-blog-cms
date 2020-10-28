<template>
  <div class="write-container" :class="{'blog-readme-begin':status,'blog-readme-end':!status}">
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
      <div class="article-submit">
        <h1>发布</h1>
      </div>
    </div>

    <div class="work-spaces">
       <textarea placeholder="创作吧...." v-model="context" @input="mk2HtmlHandle"></textarea>
    </div>

    <div class="markdown-html" v-html="mk2Html">
    </div>

  </div>
</template>

<script lang="ts">
  import { defineComponent ,ref,reactive} from 'vue'
  import {BlogInit} from "@/common/utils/BLogInit";
  import marked from 'marked'
  export default  defineComponent({
    name: 'WriteArticle',
    components:{

    },
    setup(){

      const context  = ref('')//输入的数据
      const mk2Html = ref('')
      function mk2HtmlHandle (){
        mk2Html.value = marked(context.value)
        console.log(mk2Html.value)
      }
      return{
        mk2Html,
        context,
        mk2HtmlHandle,
        ...BlogInit(),
      }
    }
  })
</script>

<style lang="scss" scoped>

  @import "../../assets/style/mixin";
  .write-container{
    background-color: #FBFCFC;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 10px;

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

        /*font-size: 10px;*/
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
      .article-submit{
        background-color: #1ABC9C;
        color:white;
        width: 100px;
        text-align: center;
        border-radius: 5px;
        padding-top: 5px;
        padding-bottom: 5px;
        cursor: pointer;


      }
    }

    .work-spaces{

      padding: 10px;
      display: flex;
      textarea{
          padding: 10px;
          background: none;
          color: #333333;
          font-size: 20px;
          width: 950px;
          height: 600px;
          @include textareaDef();
          margin-bottom: 20px;
        &::placeholder{
          color: #5D6D7E !important;
        }
      }

    }

  }
</style>
