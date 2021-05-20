import vue from 'vue'
import Router from 'vue-router'

import Home from "@/views/Home"
import About from "@/views/About"
import Error from '@/views/Error'
import CoinDetail from '@/views/CoinDetail'

vue.use(Router)

export default new Router({
 mode: "history",

 routes: [
    {
        path: "/",
        name: "Home",
        component: Home
    },

    {
        path: "/about",
        name: "About",
        component: About
    },
    {
        path: '/coin/:id',
        name: 'coin-detail',
        component: CoinDetail
      },

    {
        path: '*',
        name: 'Error',
        component: Error
    }
 ]

});