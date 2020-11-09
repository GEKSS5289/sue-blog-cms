<template>
  <div class="sue-container"  :class="{'blog-readme-begin':status,'blog-readme-end':!status}">
    <div class="category-list">
      <div class="category-item" v-for="(item,index) in categoryData.data" :key="index">
        <div class="category-item-info">
          <h1 class="category-emoji">{{item.categoryImg}}</h1>
          <h4 class="category-name">{{item.categoryName}}</h4>
        </div>
        <div class="category-item-options">
          <h4 class="category-item-edit">编辑</h4>
          <h4 class="category-item-del">删除</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent,ref,reactive } from 'vue'
import {BlogInit} from "@/common/utils/BLogInit";
import {Category} from "@/common/model/datamodel";
import axios from "axios";
import {blogAdminApi} from "@/common/api-router/apirouter";
export default defineComponent({
  name: "CategoryMng",

    setup() {
      const categoryData = reactive({
        data:Array<Category>()
      })

      axios.get(blogAdminApi.categoryApi).then(res=>{
        for (let i = 0; i < res.data.data.length; i++) {
          categoryData.data.push(res.data.data[i])
        }
        console.log(res)
      })



      return{
        ...BlogInit(),
        categoryData
      }
    }
})
</script>

<style lang="scss" scoped>
@import "../../assets/style/basic";
  .sue-container{
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
        background-color: #1ABC9C;
        margin-bottom: 20px;

        .category-item-info{
          display: flex;
          align-items: center;
        }
        .category-item-options{
          margin-left: 20px;
          padding: 20px;
          font-size: 15px;
          color: white;
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
          color: white;
        }
        border-radius: 5px;

      }
    }
  }
</style>
