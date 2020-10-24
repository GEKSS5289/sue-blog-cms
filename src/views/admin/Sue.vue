<template>
  <div class="sue-container" :class="{'blog-readme-begin':status,'blog-readme-end':!status}">

    <div class="sue-header">
      <div class="welcome-title">
        <h1>WELCOME SUE</h1>
        <h4>有志者，事竟成</h4>
      </div>
    </div>

    <div class="sue-middle">
      <div class="sue-info">
        <div class="sue-info-item">
          <img src="../../../public/image/icon/cangku.png" alt="">
          <h4>佚态总数:50</h4>
        </div>
        <div class="sue-info-item">
          <img src="../../../public/image/icon/shui.png" alt="">
          <h4>杂文总数:50</h4>
        </div>
        <div class="sue-info-item">
          <img src="../../../public/image/icon/huo.png" alt="">
          <h4>踩艰总数:50</h4>
        </div>
        <div class="sue-info-item">
          <img src="../../../public/image/icon/shiwu.png" alt="">
          <h4>文件总数:50</h4>
        </div>
        <div class="sue-info-item">
          <img src="../../../public/image/icon/fangke.png" alt="">
          <h4>访客:50</h4>
        </div>
      </div>
      <div class="sue-auther-area">
        <div class="sue-auther-info">
          <div class="auther-img"></div>
          <h1 class="sue-auther-name">舒顺</h1>
          <h4 class="sue-qq">📡496966859</h4>
          <h4 class="sue-signature">一路一路，不知归路</h4>
        </div>
        <div class="sue-watch-area">
          <div class="sue-watch-item">
            <img src="../../../public/image/icon/feiji.png" alt="">
            <router-link to="/admin" tag="a" class="sue-btn">撰写杂文</router-link>
          </div>
          <div class="sue-watch-item">
            <img src="../../../public/image/icon/changcheng.png" alt="">
            <router-link to="/admin" tag="a" class="sue-btn">记录踩艰</router-link>
          </div>
          <div class="sue-watch-item">
            <img src="../../../public/image/icon/sun.png" alt="">
            <router-link to="/admin" tag="a" class="sue-btn">随写佚态</router-link>
          </div>
          <div class="sue-watch-item">
            <img src="../../../public/image/icon/huojian.png" alt="">
            <router-link to="/admin" tag="a" class="sue-btn">上传文件</router-link>
          </div>
        </div>
      </div>
    </div>

<!--    <div class="sue-footer">-->

<!--    </div>-->
  </div>
</template>

<script lang="ts">
    import {defineComponent,ref} from 'vue'
    import {BlogInit} from '@/utils/BLogInit'

    export default defineComponent({
        name: "Sue",
        setup(){
          return{
            ...BlogInit()
          }
        }
    })
</script>

<style lang="scss" scoped>
  @import "../../assets/style/mixin";
  @import "../../assets/style/basic";
.sue-container{

  /*height: 500px;*/
  margin-left: 50px;
  .sue-header{
    display: flex;
    flex-direction: row;
    .welcome-title{
      height: 50px;
      padding: 30px;
      border-radius: 10px;
      background-color: #FBFCFC;
      color: #1ABC9C;
      h1{
        font-size: 40px;
      }
      h4{
        font-size: 10px;
      }
      transition: all 0.4s;
      &:hover{
        @include shadowHover();
      }
    }
  }

  .sue-middle{
    display: flex;
    flex-direction: column;
    /*align-items: center;*/
    margin-top: 30px;
    /*background-color: #FBFCFC;*/
    /*justify-content: center;*/

    .sue-info{
      /*width:1400px;*/
      display: flex;
      flex-wrap: wrap;
      /*justify-content: center;*/

      .sue-info-item:nth-child(1),.sue-info-item:nth-child(5){
        margin-left: 0;
    }
      .sue-info-item{
        /*width: 0px;*/
        margin-left: 10px;
        display: flex;
        align-items: center;
        border-radius: 10px;
        margin-bottom: 30px;
        background-color: #FBFCFC;
        padding: 30px;
        justify-content: center;
        /*width: 200px;*/

        h4{
          font-size: 20px;
          /*background-color: red;*/
          margin-left: 10px;
        }
        transition: all .5s;
        &:hover{
          @include shadowHover();
        }
      }

    }
    .sue-auther-area{

      margin-top: -30px;
      display: flex;
      flex-direction: row;
      /*align-items: center;*/
      /*justify-content: center;*/
      align-items: center;
      .sue-auther-info{

        width: 365px;
        padding: 30px;
        height: 210px;
        background-color:#FBFCFC;
        color: #333333;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 15px;
        transition: all 1s;
        /*&:hover{*/
        /*  background-color: #ff6600;*/
        /*  color: white;*/
        /*}*/
        .auther-img{
          width: 80px;
          height: 80px;

          border-radius: 50%;
          background-image: url("../../../public/image/back/chunri.jpg");

          background-size: cover;
          margin-bottom: 10px;
        }
        .sue-auther-name{
          font-size: 30px;
          text-align: center;
          margin-bottom: 5px;
        }
        .sue-qq{
          font-size: 20px;
          text-align: center;
          margin-bottom: 5px;
        }
        .sue-signature{
          /*font-size: 20px;*/
          font-weight: bold;
          text-align: center;
        }
      }

      .sue-watch-area{
        display: flex;
        flex-wrap: wrap;
        width: 570px;


        margin-top: 30px;
        /*justify-content: center;*/
        .sue-watch-item{
          padding: 28px;
          width: 200px;
          height: 65px;
          display: flex;
          align-items: center;
          background-color: #FBFCFC;

          border-radius: 15px;
          margin-left: 20px;
          margin-bottom: 30px;
          justify-content: flex-start;
          transition: all 0.3s;
          &:hover{
            @include shadowHover();
            color: white;
          }
          h4{
            margin-left: 20px;
            font-size: 10px;
            font-weight: bold;
          }
          .sue-btn{
            margin-left: 50px;
            width: 70px;
            height: 30px;
            /*margin-left: 20px;*/
            border-radius: 15px;
            color: white;
            font-weight: bold;
            background-color: #1ABC9C;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.7s;
            cursor: pointer;
            &:hover{
             @include shadowHover();
            }
          }
        }
      }
    }

  }


  .sue-footer{
    margin-top: 30px;
    width: 500px;
    height: 500px;
    background-color: red;
  }

}
</style>
