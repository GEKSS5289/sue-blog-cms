import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Login from "@/views/Login.vue";
import Admin from "@/views/admin/Admin.vue";
import Sue from "@/views/admin/Sue.vue";
import DynamicMng from "@/views/admin/DynamicMng.vue";
import ArticleMng from "@/views/admin/ArticleMng.vue";
import MessageMng from "@/views/admin/MessageMng.vue";
import LogsMng from "@/views/admin/LogsMng.vue";
import IssueMng from "@/views/admin/IssueMng.vue";
import FileMng from "@/views/admin/FileMng.vue";
import ArticleList from "@/views/admin/ArticleList.vue"
import WriteArticle from "@/views/admin/WriteArticle.vue";
import EditArticle from "@/views/admin/EditArticle.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path:'/admin',
    component:Admin,
    redirect:'/admin/sue',
    children:[
      {
        path:'/admin/sue',
        name:'sue',
        component:Sue
      },
      {
        path:'/admin/dynamic',
        name:'dynamic',
        component:DynamicMng
      },
      {
        path:'/admin/article',
        name:'article',
        component:ArticleMng,
        redirect:'/admin/article/list',
        children:[
          {
            path:'/admin/article/list',
            name:'articlelist',
            component:ArticleList
          },
          {
            path:'/admin/article/write',
            name:'writearticle',
            component:WriteArticle
          },
          {
            path:'/admin/article/edit/:id',
            name:'editarticle',
            component:EditArticle
          }
        ]
      },
      {
        path:'/admin/message',
        name:'message',
        component:MessageMng
      },
      {
        path:'/admin/logs',
        name:'logs',
        component:LogsMng
      },
      {
        path:'/admin/issue',
        name:'issue',
        component:IssueMng
      },
      {
        path:'/admin/file',
        name:'file',
        component:FileMng
      },
    ]
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
