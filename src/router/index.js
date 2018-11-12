import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Login from '@/page/Login'
import Index from '@/page/Index'
import Iframe from '@/page/iframe/iframe'
import ArticleManage from '@/page/article/articleManage'
import User from '@/page/user/user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/home',
      component: Home,
      children: [
        {path: "", component: Index},
        {path:"/articleManage", component:ArticleManage},
        {path:"/Iframe/:path", component:Iframe},
        {path:"/user", component:User}
      ]
    }
  ]
})
