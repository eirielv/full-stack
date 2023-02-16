import { createRouter, createWebHistory } from 'vue-router'
import CalculatorView from '../views/CalculatorView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'calculator',
            component: CalculatorView,
        },
        {
            path: '/contact-form',
            name: 'contact-form',
            component: ContactView,
        },
    ],
})

export default router