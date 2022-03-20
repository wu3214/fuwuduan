import Vue from "vue";
import VueRouter from "vue-router";
import yonghu from "@/views/yonghu.vue";
import login from "@/views/login.vue";
import firstpage from "@/views/firstpage.vue";
import guanliyuan from "@/views/guanliyuan.vue";
import chart from "@/views/chart.vue"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "login",
  },
  {
    path: "/login",
    component: login,
  },
  {
    path: "/firstpage",
    component: firstpage,
    redirect: "yonghu",
    children: [
      {
        path: "/yonghu",
        component: yonghu,
      },
      {
        path: "/guanliyuan",
        component: guanliyuan,
      },
      {
        path: "/chart",
        component: chart,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
