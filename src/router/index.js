import Vue from "vue";
import VueRouter from "vue-router";
// import * as VueRouter from 'vue-router'
// import {CreateRouter,createWebHistory} from 'vue-router';

Vue.use(VueRouter)

import Login from '../pages/login/Login.vue';
import Register from '../pages/register/Register.vue';
import Search from '../pages/search/Search.vue';
import Home from '../pages/home/Home.vue'


const routes = [
        {
            path: '/',
            component: Home
        },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/search',
        component: Search
    }]

const router = new VueRouter({
    routes,
    mode: 'history'
})


export default router