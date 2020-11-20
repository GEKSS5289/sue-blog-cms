<template>

  <div class="sue-container" :class="{'blog-readme-begin':status,'blog-readme-end':!status}">
    <div class="file-list">
      <div class="file-item">
        <div class="file-info">
          <h1 class="file-name">Myfdsafsfsafsdafsafdsafsql</h1>
          <h2 class="file-size">文件大小:19kb</h2>
          <h2 class="file-push-time">上传时间:2020</h2>
        </div>
        <div class="file-op">
          <h2>不提供</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue'
    import {BlogInit} from "@/common/utils/BLogInit";

    export default defineComponent({
        name: "FileMng",
        setup(){
          return{
            ...BlogInit(),
          }
        }
    })
</script>

<style lang="scss" scoped>
.sue-container{
  .file-list{
    .file-item{
      padding: 20px;
      border-left: 5px solid #1ABC9C;
      background-color:#FBFCFC;
      color: #1ABC9C;
      .file-info{
        display: flex;
        align-items: center;
        width: 700px;
        justify-content: space-between;
        //background-color: red;

        .file-name{
          margin-right: 20px;
          //word-wrap:break-word;
          width: 100px;
          text-overflow :ellipsis;
          overflow:hidden;
        }
        .file-size{
          margin-right: 20px;
        }
        .file-push-time{
          margin-right: 20px;
        }
      }
      .file-op{
        h2{
          border: 1px solid #1ABC9C;
          border-radius: 5px;
          padding: 5px;
          width: 80px;
          text-align: center;
        }
      }
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}
</style>
