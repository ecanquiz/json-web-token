import {createRouter, createWebHistory} from 'vue-router'
import type {RouteRecordRaw} from 'vue-router'
import { computed } from "vue"
import { useAuthStore } from '../stores/'

import auth from "@/middleware/auth"
import guest from "@/middleware/guest"
import admin from "@/middleware/admin"

import middlewarePipeline from "../router/middlewarePipeline"


const storeAuth = computed(() => useAuthStore())

const routes: Array<RouteRecordRaw> = [
  {
    path: "/dashboard",
    name: "dashboard",
    meta: { middleware: [auth], layout: "default" },
    component: () => import("@/views/Dashboard.vue").then(m => m.default)
  },
  {
    path: "/login",
    name: "Login",
    meta: { middleware: [guest], layout: "empty" },
    component: () => import("@/views/Login.vue").then(m => m.default),
    alias: '/'
  }, {
    path: "/register",
    name: "Register",    
    meta: { middleware: [guest], layout: "empty" },
    component: () => import("@/views/Register.vue").then(m => m.default)
  }, {
    path: "/users",
    name: "users",
    meta: { middleware: [auth] }, //admin
    component: () => import("@/views/User/Index.vue").then(m => m.default)
  }, {
    path: "/users/create",
    name: "userCreate",
    meta: { middleware: [auth] }, // admin
    component: () => import("@/views/User/CreateOrEdit.vue").then(m => m.default),
    props: true
  }, {
    path: "/users/edit/:id(\\d+)",
    name: "userEdit",
    meta: { middleware: [auth] }, // admin
    component: () => import("@/views/User/CreateOrEdit.vue").then(m => m.default),
    props: true
  }





, {
  path: "/profile",
  name: "profile",
  meta: { middleware: [auth] },
  component: () => import("@/views/Profile.vue").then(m => m.default),
}, {
  path: "/about",
  name: "About",
  meta: { middleware: [guest], layout: "empty" },
  component: () => import("@/components/About.vue").then(m => m.default)
}, {
  path: "/:catchAll(.*)",
  name: "NotFound",
  meta: { middleware: [guest], layout: "empty" },
  component: () => import("@/components/NotFound.vue").then(m => m.default),    
}

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),  
  routes,
  scrollBehavior(to, from, savedPosition): any {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  const middleware:any = to.meta.middleware;
  const context = { to, from, next, storeAuth };

  if (!middleware) {
    return next();
  }

  middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1),
  });
});

export default router