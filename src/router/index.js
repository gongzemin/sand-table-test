import Vue from 'vue';
import Router from 'vue-router';
import SandTable from '@/views/DECoreViewer.vue'
import Test from '@/views/Test.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            component: SandTable
        },
        // {
        //     path: '/test',
        //     component: Test
        // }
    ]
})