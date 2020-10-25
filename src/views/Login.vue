<template>

    <div class="login-container">

        <h1 class="hi-title">SUE-BLOG-CMS</h1>
        <div class="login-window">
          <div class="login-left">
            <div class="login-icon"></div>
            <h1 class="login-title">admin</h1>
          </div>
          <div class="login-right">
            <div class="login-input">
              <h4>ACCOUNT</h4>
              <input type="text" maxlength="32" placeholder="输入您的管理员账号">
              <h4>PASSWORD</h4>
              <input type="password" maxlength="32" placeholder="输入您的密码">
              <router-link to="/admin" class="login-btn">LOGIN</router-link>
            </div>
          </div>
        </div>

    </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue'

    export default defineComponent({
        name: "Login"
    })
</script>

<style lang="scss" scoped>
  @import "../assets/style/mixin.scss";
  .login-container{
    background-image: url("../../public/image/back/shanjian.jpg");
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


    .hi-title{
      position: absolute;
      background-size: cover;
      margin-top: -600px;

      font-size: 40px;
      color:  #273746;
    }



    .login-window{
      background-repeat: no-repeat;
      /*position: absolute;*/
      /*background-size: cover;*/

      width: 700px;
      /*height: 400px;*/
      background-color: white;
      margin-left:auto;
      margin-right: auto;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-top:-100px;

      .login-left{
        width: 250px;
        height: 400px;
        /*background-color:#FBFCFC;*/
        display: flex;

        flex-direction: column;
        align-items: center;
        justify-content: center;

        h1{
          color: #5D6D7E;
          margin-top: 10px;
        }
        .login-icon{
          /*margin-top: 150px;*/

          width: 95px;
          height: 66px;
          background-image: url("../../public/image/icon/yj.png");
        }
      }
      .login-right{
        width: 350px;

        display: flex;

        flex-direction: row;
        align-items: center;
        justify-content: center;
        .login-input{

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          h4{
            margin-bottom: 10px;
            font-weight: bold;
          }
          .login-btn{
            width: 80px;
            border-radius: 15px;
            height: 30px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            background-color: #1ABC9C;
            /*border: 4px solid #1ABC9C;*/
            /*padding: 10px;*/
            color: #FBFCFC;
            transition: all 1s;
            font-weight: bold;
            font-size: 15px;
            cursor: pointer;
          }
          input{
            width: 200px;
            height: 30px;
            padding: 15px;
            margin-bottom: 30px;
            /*border: none;*/
            border-bottom:none;

            border-left: none;

            border-right:none;
            border-top: none;
            font-size: 20px;
            background:#FBFCFC;
            border-radius: 15px;
            outline:none;
            /*border:none;*/
          }
        }
      }
    }
  }

</style>
