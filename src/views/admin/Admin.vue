<template>
    <cms-nav></cms-nav>
    <div class="admin-container container">
      <div class="admin-left">
        <div class="menu-list">
          <router-link to="/admin/sue" tag="a" class="menu-item">
           <h4>😀SUE</h4>
          </router-link>
          <router-link  to="/admin/sue" tag="a" class="menu-item">
            <h4>📃杂文管理</h4>
          </router-link>
          <router-link  to="/admin/sue" tag="a" class="menu-item">
            <h4>🍦佚态管理</h4>
          </router-link>
          <router-link  to="/admin/sue" tag="a" class="menu-item">
            <h4>☕踩艰管理</h4>
          </router-link>
          <router-link to="/admin/sue" tag="a" class="menu-item">
            <h4>📄文件管理</h4>
          </router-link>
          <router-link to="/admin/sue" tag="a" class="menu-item">
            <h4>👌留言管理</h4>
          </router-link>
          <router-link to="/admin/sue" tag="a" class="menu-item">
            <h4>🍩日志查看</h4>
          </router-link>
        </div>
      </div>
      <div class="admin-rigth">
        <div class="admin-nav">
          <div class="nav-item">
            日志管理
            <div class="close">X</div>
          </div>
          <div class="nav-item">
            日志管理
            <div class="close">X</div>
          </div>
          <div class="nav-item">
            日志管理
            <div class="close">X</div>
          </div>
          <div class="nav-item">
            日志管理
            <div class="close">X</div>
          </div>
        </div>
        <router-view></router-view>
      </div>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue'
    import CmsNav from "@/components/nav/CmsNav.vue";
    export default defineComponent({
        name: "Admin",
        components:{
          CmsNav
        }
    })
</script>

<style lang="scss" scoped>
.admin-container{
  margin-top: 10px;
  /*height: 500px;*/
  /*width: 100% !important;*/
  /*background-color: #FBFCFC;*/
  display: flex;
  padding: 30px;
  flex-direction: row;
  margin-bottom: 100px;
  /*background-color: red;*/
  .admin-left{

    .menu-list{
      padding: 20px;
      background-color: #FBFCFC;
      border-radius: 10px;
      a{
        display: block;
        text-decoration: none;
        color: #273746;
      }
    }
    .menu-item{
      text-decoration: none;
      border-radius: 10px;
      margin-bottom: 10px;
      width: 150px;

      h4{
        text-align: center;
        font-size: 20px;
      }
      padding: 30px;
      transition: all 0.7s;
      &:hover{
        background-color: #1ABC9C;
        color: #FBFCFC;
      }

    }
  }
  .admin-rigth{
    .admin-nav{
      /*padding: 10px;*/
      margin-left: 50px;
      /*background-color: red;*/
      display: flex;
      margin-bottom: 30px;
      .nav-item:nth-child(1){
        margin-left: 0;
      }
      .nav-item{
        width: 100px;
        padding: 5px;
        text-align: center;
        background-color: #1ABC9C;
        color: white;
        font-weight: bold;
        position: relative;
        transition: all 1s;
        margin-left: 5px;
        &:hover{
          background-color: #3683d6;
        }
        .close{
          width: 10px;
          height: 10px;
          position: absolute;
          /*background-color:red;*/
          top: 0px;
          left: 100px;
          /*padding: 1px;*/
          cursor: pointer;
        }
      }
    }
  }
}
</style>
