import { createWebHashHistory, createRouter } from "vue-router";
import ContactBook from "@/views/ContactBook.vue";

const routes = [
    {
        path: "/",
        name: "contactbook",
        component: ContactBook,
    },

    //them duong dan den trang 404
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component:() => import("@/views/NotFound.vue"),
    },

    //them duong dan den trang edit
    {
        path: "/contacts/:id",
        name: "contact.edit",
        component:() => import("@/views/ContactEdit.vue"),
        props: true //truyền các biến trong $route.params vào làm props
    },

    //them lien he moi add
    {
        path: "/contacts/add",
        name: "contact.add",
        component:() => import("@/views/ContactAdd.vue"),
    },
];

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;