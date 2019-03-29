// import Vue from 'vue'
// import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

const Router = require('vue-router')


// 设备管理页面
const ManagePage = r => require.ensure([], () => r(require('../pages/ManagePage')), 'ManagePage');

// 设备信息详情
const DetailPage = r => require.ensure([], () => r(require('../pages/DetailPage')), 'DetailPage');

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/ManagePage',
        },
        {
            path: '/ManagePage',
            name: 'ManagePage',
            component: ManagePage,
            meta:{
                title: "管理页面",
            }
        },
        {
            path: '/DetailPage',
            name: 'DetailPage',
            component: DetailPage,
            meta:{
                title: "信息详情",
            }
        },
    ]
})
