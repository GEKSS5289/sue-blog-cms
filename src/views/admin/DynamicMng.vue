<template>
  <div class="sue-container" :class="{'blog-readme-begin':status,'blog-readme-end':!status}">
    <div class="dynamic-list">
      <div class="dynamic-item">
      <div class="dynamic-info">
        <h1 class="dynamic-title">美丽的世界</h1>
        <p class="dynamic-content">我们存在的地方是一座美丽的小山在这里</p>
        <h1 class="dynamic-mood">心情:😂</h1>
        <h1 class="dynamic-time">时间:2020</h1>
      </div>
      <div class="dynamic-options">
        <h1 class="edit">编辑</h1>
        <h1 class="delete">删除</h1>
      </div>
    </div>
      <div class="dynamic-item">
        <div class="dynamic-info">
          <h1 class="dynamic-title">美丽的世界</h1>
          <p class="dynamic-content">我们存在的地方是一座美丽的小山在这里</p>
          <h1 class="dynamic-mood">心情:😂</h1>
          <h1 class="dynamic-time">时间:2020</h1>
        </div>
        <div class="dynamic-options">
          <h1 class="edit">编辑</h1>
          <h1 class="delete">删除</h1>
        </div>
      </div>
      <div class="dynamic-item">
        <div class="dynamic-info">
          <h1 class="dynamic-title">美丽的世界</h1>
          <p class="dynamic-content">我们存在的地方是一座美丽的小山在这里</p>
          <h1 class="dynamic-mood">心情:😂</h1>
          <h1 class="dynamic-time">时间:2020</h1>
        </div>
        <div class="dynamic-options">
          <h1 class="edit">编辑</h1>
          <h1 class="delete">删除</h1>
        </div>
      </div>
    </div>

    <div class="dynamic-write">
      <h1>随写佚态</h1>
      <textarea placeholder="我有灵感了....."></textarea>
      <div class="dynamic-push">发表</div>
    </div>

  </div>
</template>

<script lang="ts">
  import {defineComponent} from 'vue'
  import {BlogInit} from "@/common/utils/BLogInit";

  export default defineComponent({
    name: "DynamicMng",
    setup(){



      return{
        ...BlogInit()
      }
    }
  })
</script>

<style lang="scss" scoped>
  @import "../../assets/style/mixin";
  .sue-container{
    /*background-color: red;*/
    display: flex;
    flex-direction: row;
    /*width: 1500px !important;*/
    align-items: center;
    .dynamic-write{
      h1{
        margin-bottom: 10px;
      }
      background-color: #1ABC9C;
      /*width: 300px;*/
      margin-left: 10px;
      padding: 20px;
      color: white;
      display: flex;
      flex-direction: column;
      textarea{
        padding: 10px;
        background: none;
        color: white;
        font-size: 20px;
        width: 400px;
        height: 100px;
        @include textareaDef();
        margin-bottom: 20px;
      }
      .dynamic-push{
        padding: 10px;
        background-color: white;
        color: #1ABC9C;
        width: 50px;
        height: 10px;
        font-weight: bold;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        margin-left: 345px;
      }
    }
    .dynamic-list{
      display: inline-block;
      /*padding: 50px;*/
      /*border-radius: 10px;*/
      /*background-color: #FBFCFC;*/
      .dynamic-item{
        /*width: 500px;*/
        border-left: 5px solid #1ABC9C;
        padding: 20px;
        display: flex;
        flex-direction: row;
        transition: all 1s;
        align-items: center;
        justify-content: space-between;

        .dynamic-info{
          p{
            font-size: 22px;
            /*margin-top: 20px;*/
            /*font-weight: bold;*/
            /*margin-left: 20px;*/
            margin-bottom: 20px;
            line-height: 30px;
          }



        }
        .dynamic-options{
          margin-left: 50px;
          /*background-color: #ff6600;*/
          h1{
            font-size: 15px;
            margin-bottom: 10px;
            cursor: pointer;
          }
        }


        margin-bottom: 30px;
        &:hover{

          @include shadowHover();
        }

      }
    }
  }
</style>
