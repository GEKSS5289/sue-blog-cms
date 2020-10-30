<template>

  <div class="sue-container" :class="{'blog-readme-begin':status,'blog-readme-end':!status}">
    <div class="issue-list">
      <div class="issue-item">
        <div class="issue-info">
          <h1 class="issue-title">java的问题我们都知道</h1>
          <h1 class="issue-time">2020</h1>
        </div>
        <div class="issue-options">
          <h1 class="issue-edit">编辑</h1>
          <h1 class="issue-delete">删除</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {defineComponent} from 'vue'
  import {BlogInit} from "@/common/utils/BLogInit";

  export default defineComponent({
    name: "IssueMng",
    setup(){


      return{
        ...BlogInit(),
      }
    }
  })
</script>

<style lang="scss" scoped>
.sue-container{
  .issue-list{
    .issue-item{
      width: 500px;
      height: 100px;
      padding: 20px;
      background-color: #1ABC9C;
      color: white;
      border-radius: 5px;
      display: flex;

      align-items: center;
      justify-content: space-between;
      &:hover{
        /*.issue-options{*/
        /*  opacity: 1;*/
        /*}*/
      }
      .issue-info{

      }
      .issue-options{
        transition: all 1s;
        /*opacity: 0;*/
        h1{
          font-size: 18px;
          cursor: pointer;
        }
       .issue-edit{
         margin-bottom: 20px;
       }
      }
    }
  }
}
</style>
