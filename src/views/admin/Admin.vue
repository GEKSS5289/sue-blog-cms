<template>
  <cms-nav></cms-nav>
  <div class="admin-container container ">
    <div class="admin-left">
      <div class="menu-list">
        <router-link :to="'/admin/sue'" tag="a" class="menu-item" @click="clickRouter('/admin/sue','sue-me')">
          <h4>😀SUE</h4>
        </router-link>
        <router-link  :to="{name:'dynamic'}"  class="menu-item" @click="clickRouter('/admin/dynamic','sue-dynamic')" >
          <h4>🍦佚态管理</h4>
        </router-link>
        <router-link  :to="{name:'article'}" tag="a" class="menu-item"  @click="clickRouter('/admin/article','sue-article')">
          <h4>📃杂文管理</h4>
        </router-link>
        <router-link  :to="{name:'issue'}"  tag="a" class="menu-item" @click="clickRouter('/admin/issue','sue-issue')" >
          <h4>☕踩艰管理</h4>
        </router-link>
        <router-link  :to="{name:'file'}" tag="a" class="menu-item" @click="clickRouter('/admin/file','sue-file')">
          <h4>📄文件管理</h4>
        </router-link>
        <router-link  :to="{name:'message'}" tag="a" class="menu-item" @click="clickRouter('/admin/message','sue-message')" >
          <h4>👌留言管理</h4>
        </router-link>
        <router-link  :to="{name:'logs'}" tag="a" class="menu-item" @click="clickRouter('/admin/logs','sue-logs')">
          <h4>🍩日志查看</h4>
        </router-link>
      </div>
    </div>
    <div class="admin-rigth">
      <div class="admin-nav">
        <div v-if="status!==false" v-for="(item,key,index) in localStorage" :key=index>
          <router-link v-show="key.indexOf('sue')!==-1" :to="`${item}`" tag="a" class="nav-item">
            <h2>🧪</h2><h4>{{key.substr(4)}}</h4>
            <div class="close" @click.stop="close(key)">x</div>
          </router-link >
        </div>
        <div v-else>
          <router-link :to="`/admin/sue`" tag="a" class="nav-item">
            <h2>🧪</h2><h4>me</h4>
            <div class="close" @click.stop="close(key)">x</div>
          </router-link >
        </div>

      </div>

      <router-view ></router-view>
    </div>
  </div>
</template>

<script lang="ts">
  import {defineComponent} from 'vue'
  import CmsNav from "@/components/nav/CmsNav.vue";
  import {BlogInit} from "@/common/utils/BLogInit";
  import {BlogNav, routerNav} from "@/common/utils/BlogNav";

  export default defineComponent({
    name: "Admin",
    components:{
      CmsNav
    },
    setup(){
      // localStorage.setItem('sue-aa','sfaf')
      // localStorage.setItem('sue-aa','sfaf')
      return{
        ...BlogInit(),
        ...BlogNav(),
        localStorage,
        status:routerNav()
      }
    }
  })
</script>

<style lang="scss" scoped>

  @import "../../assets/style/basic";
  .admin-container{
    margin-top: 10px;
    display: flex;
    padding: 30px;


    flex-direction: row;
    margin-bottom: 100px;
    justify-content: center;

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
        border-radius: 5px;
        margin-bottom: 10px;
        width: 150px;
        padding: 20px;

        h4{
          text-align: center;
          font-size: 20px;
        }

        transition: all 0.7s;
        &:hover{
          background-color: #1ABC9C;
          color: #FBFCFC;
        }

      }
    }
    .admin-rigth{
      /*background-color: red;*/
      .admin-nav{
        width: 1100px;
        margin-left: 50px;
        display: flex;
        margin-bottom: 30px;
        overflow-x: auto;
        .router-link-active{
          background-color: #1ABC9C !important;
          color: white !important;
        }
        .nav-item{
          width: 150px;

          padding: 5px;
          text-align: center;
          /*border-radius: 5px;*/
          background-color: #FBFCFC;
          color: #1ABC9C;
          font-weight: bold;
          position: relative;
          transition: all 1s;
          /*margin-left: 5px;*/
          display: flex;
          align-items: center;
          justify-content: space-between;
          &:hover{
            background-color: #1ABC9C;
            color: white;
          }
          h4{
            font-size: 16px;
          }
          .close{
            font-size: 17px;
            width: 20px;
            height: 20px;
            /*background-color: red;*/
            line-height: 20px;
            /*padding: 1px;*/
            cursor: pointer;

          }
        }
      }
    }
  }
</style>
