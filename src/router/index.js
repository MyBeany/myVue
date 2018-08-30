import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Login from '@/page/Login'
import Index from '@/page/Index'
import ArticleManage from '@/page/article/articleManage'

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
        {path:"/articleManage", component:ArticleManage}
      ]
    }
  ]
})
