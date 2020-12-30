import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Meeting from '@/components/Meeting'
import Search from '@/components/Search'
import Food from '@/components/Food'
import Map from '@/components/Map'

Vue.use(Router)

export default new Router({
  routes: [
    { 
      //Path表示添加组件到的位置，/表示添加到当前页面
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Meeting',
      name: 'Meeting',
      component: Meeting
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    },
    {
      path: '/Food',
      name: 'Food',
      component: Food
    },
    {
      path: '/Map',
      name: 'Map',
      component: Map
    }
  ]
})
