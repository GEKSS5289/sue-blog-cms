<template>

  <div class="write-container" :class="{'blog-readme-begin':status,'blog-readme-end':!status}">
    <div class="write-header">

      <input type="text" v-model="article.articleData.title" placeholder="文章名" class="article-title">
      <div class="article-preview">
        <h1 @click="preview">{{previewAndEdit}}</h1>
      </div>
      <div class="article-category">
        <h1 @click="clickCategory">{{categorySelect}}</h1>
        <div v-if="categoryStatus"  class="category-list">
          <div class="category-item" v-for="(item,index) in categoryList.categorys" :key="index" @click="categorySelectItem(item)">{{item.categoryImg}}{{item.categoryName}}</div>
        </div>
      </div>
      <div class="article-submit">
        <h1 @click="pushArticle">{{btntitle}}</h1>
      </div>
    </div>

    <div class="work-spaces" v-if="!previewStatus">
      <textarea placeholder="创作吧...." v-model="article.articleData.content" @input="mk2HtmlHandle"></textarea>
    </div>

    <div class="markdown-html" v-html="mk2Html" v-if="previewStatus">
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent ,ref,reactive,toRefs} from 'vue'
import {BlogInit} from "@/common/utils/BLogInit";
import marked from 'marked'
import axios from 'axios'
import { blogAdminApi } from '@/common/api-router/apirouter';
import {ArticleModel, Category} from "@/common/model/datamodel";
import router from "@/router";
export default  defineComponent({
  name: 'WriteSpace',
  components:{

  },
  props:{
    btntitle: {
      type: String
    },

    articleId:{
      type:Number
    }


  },
  setup(props){

    const articleContent  = ref('')//输入的数据
    const mk2Html = ref('')
    const articleTitle = ref('')
    const previewStatus = ref(false)
    const previewAndEdit = ref('预览')
    const article = reactive({
      articleData:{
        content:'',
        title:'',
        categoryId:'',
        id:''
      }
    })

    const categoryStatus = ref(false)


    const categoryList = reactive({
      categorys:Array<Category>()
    })


    const categoryData = reactive({
      categoryId:0,
      categoryName:''
    })


    const categorySelect = ref('文章分类')

    function categorySelectItem(category:Category){
      categorySelect.value = category.categoryName
      categoryStatus.value = !categoryStatus.value
      categoryData.categoryName = category.categoryName
      categoryData.categoryId = category.id
    }

    axios.get(blogAdminApi.categoryApi).then(res=>{
      for(let i = 0;i<res.data.data.length;i++){
        categoryList.categorys.push(res.data.data[i])
        console.log(res.data.data[i])
      }

    })

    function clickCategory(){
      categoryStatus.value = !categoryStatus.value
    }



    axios.get(blogAdminApi.articleApi+'/'+props.articleId).then(res=>{
      // console.log(res)

      article.articleData.content = res.data.data.content
      article.articleData.title = res.data.data.title
      article.articleData.categoryId = res.data.data.categoryId
      article.articleData.id = res.data.data.id
      // console.log(article.articleData.content)
      // console.log(article.articleData.title)
      // console.log(article.articleData.categoryId)
      // console.log(article.articleData.id)
      categoryData.categoryId = res.data.data.categoryId
      mk2Html.value = marked(article.articleData.content)
    })



    function mk2HtmlHandle (){
      mk2Html.value = marked(article.articleData.content)
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
        categoryId:categoryData.categoryId,
        content:article.articleData.content,
        title:article.articleData.title
      };

      axios.put(blogAdminApi.articleApi+'/'+props.articleId,data).then(res=>{
        if(res.data.status == 200){
          article.articleData.content = '';
          article.articleData.title = '';
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
      articleTitle,
      categoryStatus,
      categoryList,
      clickCategory,
      article,
      categorySelect,
      categorySelectItem
    }
  }
})
</script>

<style lang="scss" scoped>
@import "../../assets/style/mixin";
.category-list{
  position: absolute;
  margin-top: 10px;
  /*padding: 30px;*/


  background-color: #FBFCFC;
  color: white;
  @include shadow();
  .category-item{
    padding: 10px;
    transition: all 0.3s;
    cursor: pointer;
    color: #333333;
    font-weight: bold;
    &:hover{
      background-color: #1ABC9C;
      color: white;

    }
  }
}
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
