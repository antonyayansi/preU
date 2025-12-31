export default {
    name: 'auth',
    path: '/auth',
    component: () => import('../layouts/AuthLayout.vue'),
    children: [
        {
            name: 'auth.login',
            path: 'login',
            component: () => import('../views/Login.vue'),
        }
    ]
}