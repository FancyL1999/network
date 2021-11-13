import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Document from "../components/config/Document";
import Interaction from "../components/config/Interaction";
import Check from "../components/Check";

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/config/document',
      name: 'Document',
      component: Document
    },
    {
      path:'/config/interaction',
      name: 'Interaction',
      component: Interaction
    },
    {
      path:'/check',
      name: 'Check',
      component: Check
    }
  ]
})

export default router
