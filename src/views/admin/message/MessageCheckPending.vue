<template>
  <div class="message-list" :class="{'blog-readme-begin':status,'blog-readme-end':!status}" v-if="isShow">
    <div class="message-item" v-for="(item,index) in messageData.messageList" :key="index">
      <div class="message-info">
        <h1 class="message-emoji">📧</h1>
        <p class="message-content">{{item.content}}</p>
        <h4 class="message-time">{{item.createdTime}}</h4>
      </div>
      <div class="message-operation">
        <div class="btn-pass" @click="passMsg(item.id)">通过</div>
        <div class="btn-not-pass" @click="failMsg(item.id)">不通过</div>
      </div>
    </div>
  </div>
  <div v-else class="null-message" :class="{'blog-readme-begin':status,'blog-readme-end':!status}">
    <h1>😭暂时没有新留言</h1>
  </div>
</template>

<script lang="ts">
import {defineComponent,reactive,ref} from 'vue'
import {BlogInit} from "@/common/utils/BLogInit";
import axios from 'axios'
import {Message} from "@/common/model/datamodel";
import {blogAdminApi} from "@/common/api-router/apirouter";
import router from "@/router";
export default defineComponent({
  name: "MessageCheckPending",
  setup(){
    const isShow = ref(true)

    const messageData = reactive({
      messageList:Array<Message>()
    })

    axios.get(blogAdminApi.messageApi).then(res=>{

      if(res.data.data.length == 0){
        isShow.value = false
      }else{
        for(let i = 0;i<res.data.data.length;i++){
          messageData.messageList.push(res.data.data[i])
        }
      }
    })

    const passMsg = (itemId:number)=>{
      axios.put(blogAdminApi.messagePassApi+"/"+itemId).then(res=>{
        router.go(0)
      })
    }

    const failMsg = (itemId:number)=>{
      axios.delete(blogAdminApi.messageApi+"/"+itemId).then(res=>{
        router.go(0)
      })
    }

    return{
      ...BlogInit(),
      messageData,
      passMsg,
      failMsg,
      isShow
    }
  }
})
</script>

<style lang="scss" scoped>
.null-message{
  background-color: #FEF9E7;
  border-left: 5px solid #F1C40F;
  padding: 20px;
  color: #F4D03F;
}
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
      justify-content: flex-start;
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
