<template>
  <write-space btntitle="发布"></write-space>
</template>

<script lang="ts">
import { defineComponent ,ref,reactive} from 'vue'
import {BlogInit} from "@/common/utils/BLogInit";
import marked from 'marked'
import axios from 'axios'
import { blogAdminApi } from '@/common/api-router/apirouter';
import {ArticleModel} from "@/common/model/datamodel";
import router from "@/router";
import WriteSpace from "@/components/article/WriteSpace.vue";
export default  defineComponent({
  name: 'WriteArticle',
  components:{
    WriteSpace
  },
  setup(){

    const articleContent  = ref('')//输入的数据
    const mk2Html = ref('')
    const articleTitle = ref('')
    const previewStatus = ref(false)
    const previewAndEdit = ref('预览')
    function mk2HtmlHandle (){
      mk2Html.value = marked(articleContent.value)
      console.log(mk2Html.value)
    }
    function preview(){
      previewStatus.value = !previewStatus.value
      if(previewStatus.value){
        previewAndEdit.value = '编辑';
      }else{
        previewAndEdit.value = '预览';
      }
    }

    function pushArticle() {
      let data:ArticleModel = {
        authorId :1,
        categoryId:1,
        content:articleContent.value,
        title:articleTitle.value
      };

      axios.post(blogAdminApi.articleApi,data).then(res=>{
        if(res.data.status == 200){
          articleContent.value = '';
          articleTitle.value = '';
          mk2Html.value = '';
          router.push('/admin/article/list')
        }
      })


    }
    return{
      mk2Html,
      content: articleContent,
      mk2HtmlHandle,
      ...BlogInit(),
      previewStatus,
      preview,
      pushArticle,
      previewAndEdit,
      articleTitle
    }
  }
})
</script>

<style lang="scss" scoped>

@import "../../../assets/style/mixin";
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

      /*margin-left: 200px;*/

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
    .article-preview{
      h1{
        cursor: pointer;
        transition: all 1s;
        &:hover{
          color: #1ABC9C;
        }
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

  .markdown-html{
    word-wrap: normal;
    padding: 20px;
    /*background-color: red;*/
    overflow-y: auto;
    //overflow-x: auto;
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
      overflow-y: auto !important;
      //overflow-x: auto !important;
      margin-bottom: 20px;
      &::placeholder{
        color: #5D6D7E !important;
      }
    }

  }

}
</style>
