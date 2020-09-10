import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from './views/Main.vue'
import Api from './views/Api.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history', // 
    base: process.env.BASE_URL, // 따로 지정하지 않는다면 default '/'를 갖는다.
    routes: [
        {
            path: '/',
            name: 'main',
            component: Main
        }, {
            path: '/api',
            name: 'api',
            component: Api
        }/* , {
            path: '/page2',
            name: 'page2',
            component: () => import('./views/Page2.vue')
        } */
    ]
})