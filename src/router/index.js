import { createRouter, createWebHistory } from 'vue-router';


const routes = [
  {
    path: '/',
    component: () => import("../components/HelloWorld.vue")
  },

  {
    name: "homepage",
    path: '/homepage',
    component: () => import("../components/Homepage.vue"), 
  },
  {
    name: "homepage1",
    path: '/homepage1',
    component: () => import("../components/Homepage-1.vue"),
  },
  {
    name: "homepage2",
    path: '/homepage2',
    component: () => import("../components/Homepage-2.vue"),
  },
  {
    name: "homepage3",
    path: '/homepage3',
    component: () => import("../components/Homepage-3.vue"),
  },
  {
    name: "homepage4",
    path: '/homepage4',
    component: () => import("../components/Homepage-4.vue"),
  },
  {
    name: "homepage5",
    path: '/homepage5',
    component: () => import("../components/Homepage-5.vue"),
  },
  {
    name: "homepage1.1",
    path: '/homepage1.1/:id',
    component: () => import("../components/Homepage-1.1.vue"), 
  },
  {
    name: "world",
    path: '/world',
    component: () => import("../components/World.vue"), 
  },
  {
    name: "display",
    path: '/display',
    component: () => import("../components/Display.vue"), 
  },

];

const router = createRouter({
  history: createWebHistory(), // 使用 HTML5 History 模式
  routes,
});

export default router;
