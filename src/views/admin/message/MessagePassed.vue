<template>
  <div class="message-list" :class="{'blog-readme-begin':status,'blog-readme-end':!status}">
    <div class="message-item" v-for="(item,index) in messageData.messageList" :key="index">
      <div class="message-info">
        <h1 class="message-emoji">📜</h1>
        <p class="message-content">{{item.content}}</p>
        <h4 class="message-time">{{item.createdTime}}</h4>
      </div>
      <div class="message-operation">
        <div class="btn-not-pass" @click="failMsg(item.id)">❌删除</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive} from 'vue'
import {Message} from "@/common/model/datamodel";
import axios from "axios";
import {blogAdminApi} from "@/common/api-router/apirouter";
import router from "@/router";
import {BlogInit} from "@/common/utils/BLogInit";
export default defineComponent({
  name: "MessagePassed",
  setup(){
    const messageData = reactive({
      messageList:Array<Message>()
    })

    axios.get(blogAdminApi.messagePassApi).then(res=>{
      for(let i = 0;i<res.data.data.length;i++){
        messageData.messageList.push(res.data.data[i])
      }
    })



    const failMsg = (itemId:number)=>{
      axios.delete(blogAdminApi.messageApi+"/"+itemId).then(res=>{
        router.go(0)
      })
    }

    return{
      ...BlogInit(),
      messageData,

      failMsg
    }
  }
})
</script>

<style lang="scss" scoped>
.message-list{
  .message-item{
    margin-bottom: 20px;
    border-radius: 5px;
    border: 1px solid #1ABC9C;
    padding: 20px;
    .message-info{
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: #1ABC9C;
      margin-bottom: 20px;

      .message-content{
        font-size: 20px;
        width: 620px;
        margin-right: 100px;
        margin-left: 20px;
        font-weight: bold;

      }
      .message-time{
        font-size: 18px;
      }
      .message-emoji{
        font-size: 50px;
      }

    }
    .message-operation{
      display: flex;
      font-size: 15px;
      align-items: center;
      justify-content: flex-end;
      .btn-pass{
        border: 1px solid #1ABC9C;
        border-radius: 5px;
        color: #1ABC9C;
        padding: 10px;
        width: 100px;
        text-align: center;
        cursor: pointer;
        margin-right: 30px;
        transition: all 0.3s;
        &:hover{
          background-color: #1ABC9C;
          color: white;

        }
      }
      .btn-not-pass{
        border: 1px solid #E74C3C;
        border-radius: 5px;
        color: #E74C3C;
        padding: 10px;
        width: 100px;
        text-align: center;
        transition: all 0.3s;
        cursor: pointer;
        &:hover{
          background-color: #E74C3C;
          color: white;

        }
      }
    }
  }
}
</style>
