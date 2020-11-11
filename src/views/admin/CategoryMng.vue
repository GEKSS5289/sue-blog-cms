<template>
  <div class="sue-container"  :class="{'blog-readme-begin':status,'blog-readme-end':!status}" >

    <div class="category-list">
      <div class="category-item" v-for="(item,index) in categoryData.data" :key="index" :class="{'smallStatus':scaleStatus,'bigStatus':!scaleStatus}">
        <div class="category-item-info">
          <h1 class="category-emoji">{{item.categoryImg}}</h1>
          <h4 class="category-name">{{item.categoryName}}</h4>
        </div>
        <div class="category-item-options">
          <router-link :to="'/admin/category/edit/'+item.id" tag="a" style="color: #1ABC9C;"><h4 class="category-item-edit">编辑</h4></router-link>
          <h4 class="category-item-del" @click="deleteCategoryById(item.id)">删除</h4>
        </div>
      </div>
    </div>
    <div class="category-add">
      <h1>添加分类</h1>
      <div class="input-category">
        <input class="category-emoji" placeholder="输入分类Emoji" v-model="categoryEmoji"/>
        <input  class="category-name" placeholder="输入分类名" v-model="categoryName"/>
      </div>

      <h1 style="color: red">{{errorMsg}}</h1>

      <div class="category-options">
        <div class="push-category" @click="addCategory">添加</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent,ref,reactive } from 'vue'
import {BlogInit} from "@/common/utils/BLogInit";
import {Category, CategoryModel} from "@/common/model/datamodel";
import axios from "axios";
import {blogAdminApi} from "@/common/api-router/apirouter";
import router from "@/router";
export default defineComponent({
  name: "CategoryMng",

  setup() {
    const categoryData = reactive({
      data:Array<Category>()
    })

    const categoryName = ref('')
    const errorMsg = ref('')
    const categoryEmoji = ref('')


    function addCategory(){
      let categoryItem:CategoryModel = {
        categoryImg:categoryEmoji.value,
        categoryName:categoryName.value
      }
      axios.post(blogAdminApi.categoryApi,categoryItem).then(res=>{
        router.go(0)
      }).catch(error=>{
        errorMsg.value = error.response.data.data.errorMsg
      })

    }

    function deleteCategoryById(categoryId:number){
      axios.delete(blogAdminApi.categoryApi+"/"+categoryId).then(res=>{
        router.go(0)
      })
    }

    axios.get(blogAdminApi.categoryApi).then(res=>{
      for (let i = 0; i < res.data.data.length; i++) {
        categoryData.data.push(res.data.data[i])
      }
      console.log(res)
    })



    return{
      ...BlogInit(),
      categoryName,
      categoryEmoji,
      categoryData,
      errorMsg,
      addCategory,
      deleteCategoryById,

    }
  }
})
</script>

<style lang="scss" scoped>
@import "../../assets/style/basic";
.sue-container{
  .category-add{
    //width: 100px;
    align-items: center;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 30px;
    padding: 30px;
    //background-color: #5D6D7E;
    background-color: #FBFCFC;
    .category-options{
      .push-category{
        cursor: pointer;
        //background-color: #1ABC9C;
        width: 100px;
        border: 1px solid #1ABC9C;
        height: 30px;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        color: #1ABC9C;
        transition: all 1s;
      }
    }
    .input-category{

      input{
        border-radius: 5px;
        width: 200px;
        padding: 10px;
        //background-color: #1ABC9C;
        color: #1ABC9C;

        border: 1px solid #1ABC9C;
        //margin-bottom: 20px;
        margin-top: 10px;
        margin-bottom: 10px;
        margin-right: 20px;
      }
      input::placeholder{
        color: #1ABC9C;
        font-weight: bold;
      }
    }

  }
  .category-list{
    display: flex;
    flex-direction: row;
    background-color: #FBFCFC;
    padding: 20px;
    border-radius: 5px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start ;

    .category-item{
      //width: 300px;
      margin-right: 30px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 20px;
      //background-color: #1ABC9C;
      margin-bottom: 20px;
      border: 1px solid #1ABC9C;
      transition: all 0.3s !important;
      &:hover{
        transform: scale(1.1);
        border: 1px solid #1ABC9C;
      }
      .category-item-info{
        display: flex;
        align-items: center;
      }
      .category-item-options{
        margin-left: 20px;
        padding: 20px;
        font-size: 15px;
        color: #1ABC9C;
        .category-item-del{
          cursor: pointer;
        }
        .category-item-edit{
          cursor: pointer;
          margin-bottom: 10px;
        }
      }
      .category-name{
        font-size: 24px;
        margin-left: 10px;
        color: #1ABC9C;
      }
      border-radius: 5px;

    }
  }
}
</style>
