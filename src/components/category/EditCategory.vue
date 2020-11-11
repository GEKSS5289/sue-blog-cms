<template>
  <div class="sue-container" :class="{'blog-readme-begin':status,'blog-readme-end':!status}" v-if="isShow">
    <div class="category-edit-area">
      <h1>修改分类信息</h1>
      <input type="text" placeholder="修改分类Emoji" v-model="categoryInfo.categoryImg">
      <input type="text" placeholder="修改分类名称" v-model="categoryInfo.categoryName">
      <h4 style="color: red;margin-bottom: 10px">{{errorMsg}}</h4>
      <div class="push-category" @click="updateCategory(categoryInfo.categoryId)">修改</div>
    </div>
  </div>
  <div v-else class="sue-container error-show"  :class="{'blog-readme-begin':status,'blog-readme-end':!status}">
    <h1>❗{{errorMsg}}</h1>
  </div>
</template>

<script lang="ts">
import {defineComponent,reactive, ref} from 'vue'
import {BlogInit} from "@/common/utils/BLogInit";
import {useRoute} from 'vue-router'
import axios from "axios";
import {blogAdminApi} from "@/common/api-router/apirouter";
import { CategoryModel} from "@/common/model/datamodel";
import router from "@/router";
export default defineComponent({
  name: "EditCategory",
  setup(){
    const categoryInfo = reactive({
      categoryName:'',
      categoryImg:'',
      categoryId:0,
    })

    const errorMsg = ref('')
    const isShow = ref(true)

    axios.get(blogAdminApi.categoryApi+"/"+useRoute().params.id).then(res=>{
      console.log(res)
      categoryInfo.categoryName = res.data.data.categoryName
      categoryInfo.categoryImg = res.data.data.categoryImg
      categoryInfo.categoryId = res.data.data.id
    }).catch(error=>{
      errorMsg.value = error.response.data.data.errorMsg
      isShow.value = false
    })

    function updateCategory(categoryId:number){
      // console.log(useRoute().params.id)
      let category:CategoryModel = {
        categoryName :categoryInfo.categoryName,
        categoryImg:categoryInfo.categoryImg
      }


      axios.put(blogAdminApi.categoryApi+"/"+categoryId,category).then(res=>{
        router.push('/admin/category')
      }).catch(error=>{
        errorMsg.value = error.response.data.data.errorMsg

      })

    }
    return{
      ...BlogInit(),
      categoryInfo,
      updateCategory,
      errorMsg,
      isShow
    }
  }
})
</script>

<style lang="scss" scoped>


.error-show{
  h1{
    background-color: #EC7063;
    border-left: 5px solid #E74C3C;
    padding: 20px;
    color: #333333;
  }
}
.category-edit-area{
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
</style>
