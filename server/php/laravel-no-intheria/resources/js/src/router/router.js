import {createRouter, createWebHashHistory} from "vue-router";
import routes from "./routes.js";


const router = createRouter({
    history: createWebHashHistory(),
    linkActiveClass: 'router-view-active',
    routes,
});

export default router;
