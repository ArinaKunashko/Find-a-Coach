import { createRouter, createWebHistory } from "vue-router";
import CoachDetails from "@/pages/coaches/CoachDetails.vue";
import CoachesList from "@/pages/coaches/CoachesList.vue";
import CoachRegistation from "@/pages/coaches/CoachRegistation.vue";
import ContactCoach from "@/pages/requests/ContactCoach.vue";
import RequestReceived from "@/pages/requests/RequestReceived.vue";
import NotFound from "@/pages/NotFound.vue";
import UserAuth from "@/pages/auth/UserAuth.vue";
import store from "@/store/store.js";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/coaches",
    },
    {
      path: "/coaches",
      name: "CoachesList",
      component: CoachesList,
    },
    {
      path: "/coaches/:id",
      name: "CoachDetails",
      component: CoachDetails,
      props: true,
      children: [
        {
          path: "contact",
          component: ContactCoach,
        },
      ],
    },
    {
      path: "/requests",
      meta: { requiresAuth: true },
      name: "RequestReceived",
      component: RequestReceived,
    },
    {
      path: "/register",
      meta: { requiresAuth: true },
      name: "CoachRegistation",
      component: CoachRegistation,
    },
    {
      path: "/auth",
      meta: { requiresUnauth: true },
      name: "UserAuth",
      component: UserAuth,
    },
    {
      path: "/:notFound(.*)",
      name: "NotFound",
      component: NotFound,
    },
  ],
});

router.beforeEach(function (to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next("/auth");
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next("/coaches");
  } else {
    next();
  }
});
export default router;
