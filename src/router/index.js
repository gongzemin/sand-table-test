import Vue from 'vue';
import Router from 'vue-router';
// import DECoreViewer from '@/views/DECoreViewer.vue'
import Test from '@/views/Test.vue'
// const DECoreViewer = () => import ('@/views/DECoreViewer')

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'DECoreViewer',
            component: DECoreViewer
        },
        // {
        //     path: '/test',
        //     component: Test
        // }
    ]
})