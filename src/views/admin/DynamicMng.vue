<template>
  <div class="sue-container" :class="{'blog-readme-begin':status,'blog-readme-end':!status}">


    <div class="dynamic-write">
      <div class="dynamic-header">
        <h1>随写佚态</h1>
        <div class="mood-list">
          <h1 class="mood" @click="clickActive">{{mood}}</h1>
          <div class="mood-select" :class="{'active':active,'no-active':!active}" >
            <div class="mood-item" v-for="(item,index) in dataList.data" @click="selectdMood(item)">{{item}}</div>
          </div>
        </div>
      </div>

      <textarea v-model="dynamicContent" placeholder="我有灵感了....."></textarea>
      <div class="dynamic-push" @click="pushDynamic">发表</div>
    </div>


    <div class="dynamic-list">
      <div class="dynamic-item" v-for="(item,index) in dataList.dynamicData">
        <div class="dynamic-info" v-if="dynamicShow">
          <p class="dynamic-content">{{item.content}}</p>
          <h1 class="dynamic-mood">心情:{{item.mood}}</h1>
          <h1 class="dynamic-time">时间:{{item.createdTime}}</h1>
        </div>
        <div class="dynamic-edit" v-else>
          <textarea placeholder="修改内容....." v-model="editContent">{{editContent==''?item.content:editContent}}</textarea>
          <h1 class="dynamic-mood" @click="clickEdit(item.mood)">心情:{{editMood==''?item.mood:editMood}}</h1>
          <div class="edit-mood-list">
            <div class="edit-mood-select" :class="{'edit-active':editActive,'edit-no-active':!editActive}" >
              <div class="edit-mood-item" v-for="(item,index) in dataList.data" @click="editSelectdMood(item)">{{item}}</div>
            </div>
          </div>
        </div>
        <div class="dynamic-options" v-if="dynamicShow">
          <h1 class="edit" @click="editDynamic(item.id)">编辑</h1>
          <h1 class="delete" @click="deleteDynamic(item.id)">删除</h1>
        </div>
        <div class="dynamic-options" v-else>
          <h1 class="edit" @click="saveContent(item.id)">保存</h1>
          <h1 class="delete" @click="cancelUpdate">取消</h1>
        </div>
      </div>

    </div>



  </div>
</template>

<script lang="ts">
  import {defineComponent, ref,reactive} from 'vue'
  import {BlogInit} from "@/common/utils/BLogInit";
  import axios from 'axios'
  import {blogAdminApi, blogIndexApi} from "@/common/api-router/apirouter";
  import {useRoute} from "vue-router";
  import router from "@/router";
  import {Dynamic, DynamicModel, UpdateDynamic} from "@/common/model/datamodel";
  export default defineComponent({
    name: "DynamicMng",
    setup(){

      const active = ref(false)
      const editActive = ref(false)
      const mood = ref('😂')
      const editMood = ref('')
      const dynamicContent = ref('')
      const dynamicShow = ref(true)
      const editContent = ref('')
      const dataList = reactive({
        data:Array(),
        dynamicData:Array<Dynamic>()
      })

      dataList.data.push('😂')
      dataList.data.push('😘')
      dataList.data.push('😊')
      dataList.data.push('😭')
      dataList.data.push('😜')
      dataList.data.push('😱')


      function clickActive(){
        active.value = !active.value
      }

      function selectdMood(item:string){
        console.log(item)
        mood.value = item
      }


      function editSelectdMood(item:string){
        editMood.value = item
      }


      function pushDynamic() {
        let dynamicData: DynamicModel = {
          mood: mood.value,
          uid: 1,
          content: dynamicContent.value
        }
        axios.post(blogAdminApi.dynamicApi,dynamicData).then(res=>{
          if(res.data.status == 200){
            router.go(0)
          }
        })
      }

      function deleteDynamic(itemId:number){
        axios.delete(blogAdminApi.dynamicApi+'/'+itemId).then(res=>{
          router.go(0)
        }).catch(error=>{
          console.log("错误")
        })
      }

      function editDynamic(itemId:number){
        dynamicShow.value = !dynamicShow.value
        let dynamicData = dataList.dynamicData.filter(item=>item.id == itemId)
        editContent.value =dynamicData[0].content
        editMood.value = dynamicData[0].mood
      }


      function saveContent(itemId:number){
        let updateDynamic:UpdateDynamic={
          mood:editMood.value,
          content:editContent.value
        }
         axios.put(blogAdminApi.dynamicApi+'/'+itemId,updateDynamic).then(res=>{
           router.go(0)
         })
      }

      function cancelUpdate(){
        dynamicShow.value = !dynamicShow.value
      }

     function clickEdit(){
        editActive.value = !editActive.value
     }

     function scanner(item:string){
        console.log(item+"1")
     }

      axios.get(blogAdminApi.dynamicApi).then(res=>{
        for (let i = 0; i < res.data.data.length; i++) {
          dataList.dynamicData.push(res.data.data[i])
        }
      })



      return{
        editActive,
        dataList,
        ...BlogInit(),
        active,
        mood,
        clickActive,
        pushDynamic,
        selectdMood,
        deleteDynamic,
        dynamicContent,
        dynamicShow,
        editDynamic,
        cancelUpdate,
        saveContent,
        editSelectdMood,
        clickEdit,
        editMood,
        editContent,
        scanner
      }
    }
  })
</script>

<style lang="scss" scoped>
  @import "../../assets/style/mixin";
  .sue-container{
    /*background-color: red;*/
    display: flex;
    flex-direction: column;
    /*width: 1500px !important;*/
    position: relative;
    /*align-items: center;*/
    .dynamic-write{
      /*width: 00px;*/
      margin-bottom: 30px;
      .dynamic-header{
        display: flex;
        align-items:center;
        justify-content: space-between;
        .mood-list{
          position: relative;
          .mood{
            cursor: pointer;
          }
          .mood-item{
            font-size: 20px;
            margin-bottom: 8px;
            cursor: pointer;
            transition: all 1s;
            &:hover{
              transform: scale(1.5);
            }
          }
        }
      }
      h1{
        margin-bottom: 10px;
      }
      background-color: #1ABC9C;
      /*width: 300px;*/
      /*margin-left: 10px;*/
      padding: 20px;
      color: white;
      display: flex;
      flex-direction: column;
      textarea{
        padding: 10px;
        background: none;
        color: white;
        font-size: 20px;

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
      }
    }
    .dynamic-list{
      display: inline-block;
      /*padding: 50px;*/
      /*border-radius: 10px;*/
      /*background-color: #FBFCFC;*/

      .dynamic-item{
        width: 600px;
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
          /*background-color: red;*/
        }

        .dynamic-edit {
          textarea {
            //margin-left:-5px;
            color: #1ABC9C;

            line-height: 40px;
            font-size: 20px;
            //height: 50px;
            width: 400px;

            @include textareaDef();
            //margin-bottom: 20px;
          }
          .dynamic-mood{
            cursor: pointer;
          }
          .edit-mood-list{
            position: relative;
            .edit-mood-select{
              display: flex;
              flex-direction: row;
              .edit-mood-item{
                font-size: 20px;
                //margin-bottom: 8px;
                padding: 5px;
                cursor: pointer;

                transition: all 0.3s;
                &:hover{
                  transform: scale(1.2);
                }
              }
            }
          }
        }
        .dynamic-options{
          /*width: 200px;*/
          width: 200px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-left: 50px;

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
