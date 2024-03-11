import './assets/main.css'

import { createApp } from 'vue'
import {createRouter, createWebHashHistory} from "vue-router";
import App from './App.vue'
import Home from "@/pages/Home.vue";
import Blog from "@/pages/Blog.vue";
import Register from "@/pages/Register.vue";
import Login from "@/pages/Login.vue";

/** @type {Readonly<import("vue-router").RouteRecordRaw[]>} */
const routes = [
    { path: "/", component: Home },
    { path: "/register", component: Register },
    { path: "/login", component: Login },
    { path: "/blog/:id", component: Blog }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

createApp(App).use(router).mount('#app')
