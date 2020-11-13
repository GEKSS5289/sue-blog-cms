import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Login from "@/views/Login.vue";
import Admin from "@/views/admin/Admin.vue";
import Sue from "@/views/admin/Sue.vue";
import DynamicMng from "@/views/admin/DynamicMng.vue";
import ArticleMng from "@/views/admin/article/ArticleMng.vue";
import MessageMng from "@/views/admin/message/MessageMng.vue";
import LogsMng from "@/views/admin/LogsMng.vue";
import IssueMng from "@/views/admin/IssueMng.vue";
import FileMng from "@/views/admin/FileMng.vue";
import ArticleList from "@/views/admin/article/ArticleList.vue"
import WriteArticle from "@/views/admin/article/WriteArticle.vue";
import EditArticle from "@/views/admin/article/EditArticle.vue";
import CategoryMng from "@/views/admin/CategoryMng.vue";
import EditCategory from "@/components/category/EditCategory.vue";
import MessagePassed from "@/views/admin/message/MessagePassed.vue";
import MessageCheckPending from "@/views/admin/message/MessageCheckPending.vue";
import MessageNotPass from "@/views/admin/message/MessageNotPass.vue";

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
            name:'articleList',
            component:ArticleList
          },
          {
            path:'/admin/article/write',
            name:'writeArticle',
            component:WriteArticle
          },
          {
            path:'/admin/article/edit/:id',
            name:'editArticle',
            component:EditArticle
          },

        ]
      },
      {
        path:'/admin/category',
        name:'category',
        component:CategoryMng
      },
      {
        path:'/admin/message',
        name:'message',
        component:MessageMng,
        redirect:'/admin/message/audit',
        children:[
          {
            path:'/admin/message/passed',
            name:'messagePassed',
            component:MessagePassed
          },
          {
            path:'/admin/message/audit',
            name:'messageCheckPending',
            component:MessageCheckPending
          },
          {
            path:'/admin/message/fail',
            name:'messageNotPass',
            component:MessageNotPass
          },

        ]
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
      {
        path:'/admin/category/edit/:id',
        name:'editcategory',
        component:EditCategory
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
