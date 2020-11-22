<template>

  <div class="sue-container" :class="{'blog-readme-begin':status,'blog-readme-end':!status}">
    <div class="file-list">
      <div class="file-item" v-for="(item,index) in dataList.fileData" :key="index">
        <div class="file-info">
          <h1 class="file-name">{{item.fileName}}</h1>
          <h2 class="file-size">文件大小:{{item.fileSize}}kb</h2>
          <h2 class="file-push-time">上传时间:{{item.createdTime}}</h2>
        </div>
        <div class="file-op">
          <h2 v-if="item.fileUsable" class="no-offer" @click="offerOrNoOffer(item.id)">不提供</h2>
          <h2 v-else @click="offerOrNoOffer(item.id)">提供</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
    import {defineComponent,reactive} from 'vue'
    import {BlogInit} from "@/common/utils/BLogInit";
    import {FileModel} from "@/common/model/datamodel";
    import axios from 'axios'
    import {blogAdminApi} from "@/common/api-router/apirouter";
    import router from "@/router";
    export default defineComponent({
        name: "FileMng",
        setup(){

          const dataList = reactive({
            fileData:Array<FileModel>()
          })

          axios.get(blogAdminApi.fileApi).then(res=>{
            for(let i = 0;i<res.data.data.length;i++){
              dataList.fileData.push(res.data.data[i])
            }
            console.log(dataList.fileData)
          })

          const offerOrNoOffer=(id:number)=>{
            axios.put(blogAdminApi.fileApi+"/"+id)
            router.go(0)
          }

          return{
            ...BlogInit(),
            dataList,
            offerOrNoOffer
          }
        }
    })
</script>

<style lang="scss" scoped>
.sue-container{
  .file-list{
    .file-item{
      margin-bottom:20px;
      padding: 20px;
      border-left: 5px solid #1ABC9C;
      background-color:#FBFCFC;
      color: #1ABC9C;
      width: 500px;

      .file-info{
        display: flex;
        align-items: center;
        //width: 700px;
        justify-content: flex-start;
        //background-color: red;
        flex-direction: column;
        .file-name{

          margin-right: 30px;
          //word-wrap:break-word;
          //background-color: red;
          text-overflow :ellipsis;
          overflow:hidden;
        }
        .file-size{

          margin-right: 30px;
        }
        .file-push-time{

          margin-right: 30px;
        }
      }
      .file-op{
        h2{
          border: 1px solid #1ABC9C;
          border-radius: 5px;
          padding: 5px;
          width: 80px;
          text-align: center;
          cursor: pointer;
        }
        .no-offer{
          border: 1px solid #E74C3C;
          color: #E74C3C;
        }
      }
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}
</style>
