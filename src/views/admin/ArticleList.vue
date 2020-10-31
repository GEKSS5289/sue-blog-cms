<template>
  <div class="article-list"  :class="{'blog-readme-begin':status,'blog-readme-end':!status}">
    <div class="article-item" v-for="(item,index) in articledesclist.data" :key="index" >
      <div class="item-info">
        <h1>{{item.title}}</h1>
        <h1>发布时间:{{item.createdTime}}</h1>
      </div>
      <div class="item-options">
        <h2 class="article-edit options">编辑</h2>
        <h2 class="article-delete options">删除</h2>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {defineComponent , reactive} from 'vue'
  import {BlogInit} from "@/common/utils/BLogInit";
  import {ArticeDescModel} from "@/common/model/datamodel";
  import axios from 'axios'
  import {blogAdminApi} from "@/common/api-router/apirouter";
  export default  defineComponent({
    name: 'ArticleList',
    setup(){

      const articledesclist = reactive({
        data:Array<ArticeDescModel>(),
      })

      axios.get(blogAdminApi.articleApi).then(res=>{
        for (let i = 0; i < res.data.data.length; i++) {
          articledesclist.data.push(res.data.data[i])
        }
      })


      return{
        articledesclist,
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
        .options{
          border-radius: 15px;
          text-align: center;

          color: white;
          width: 80px;
          cursor: pointer;
        }
        .article-edit{
          background-color: #1ABC9C;
        }
        .article-delete{
          background-color: #E74C3C;
        }
      }
    }
  }
</style>
