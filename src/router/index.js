import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Contents from '@/components/Content/Contents'
import CreateContent from '@/components/Content/createContent'
import Profile from '@/components/User/Profile'
import Signin from '@/components/User/Signin'
import Signup from '@/components/User/Signup'
import Content from '@/components/Content/Content'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contents',
      name: 'Contents',
      component: Contents
    },
    {
      path: '/content/new',
      name: 'CreateContent',
      component: CreateContent
    },
    {
      path: '/content/:id',
      name: 'Content',
      props: true,
      component: Content
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    }
  ],
  mode: 'history'
})
