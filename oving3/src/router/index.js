import { createRouter, createWebHistory } from 'vue-router'
import Calc from '../views/CalculatorView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'calculator',
            component: Calc,
        },
        {
            path: '/contactForm',
            name: 'contactform',
            component: ContactView,
        },
    ],
})

export default router