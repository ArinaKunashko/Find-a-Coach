import { createRouter, createWebHistory } from "vue-router";
import CoachDetails from "@/pages/coaches/CoachDetails.vue";
import CoachesList from "@/pages/coaches/CoachesList.vue";
import CoachRegistation from "@/pages/coaches/CoachRegistation.vue";
import ContactCoach from "@/pages/requests/ContactCoach.vue";
import RequestReceived from "@/pages/requests/RequestReceived.vue";
import NotFound from "@/pages/NotFound.vue";

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
      path: "/request",
      name: "RequestReceived",
      component: RequestReceived,
    },
    {
      path: "/register",
      name: "CoachRegistation",
      component: CoachRegistation,
    },
    {
      path: "/:notFound(.*)",
      name: "NotFound",
      component: NotFound,
    },
  ],
});

export default router;
