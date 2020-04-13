import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import SignUp from '../views/SignUp.vue';
import ReEnterEmail from '../views/ReEnterEmail.vue';
import ResetPassword from '../views/ResetPassword.vue';
import VerifyOTP from '../views/VerifyOTP.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: SignUp
    },
    {
        path: '/reset-password',
        name: ReEnterEmail.name,
        component: ReEnterEmail
    },
    {
        path: '/reset-password/verify-otp',
        name: `ResetPassword${VerifyOTP.name}`,
        component: VerifyOTP
    },
    {
        path: '/reset-password/update',
        name: ResetPassword.name,
        component: ResetPassword,
        beforeEnter: (to, from, next) => {
            if (
                sessionStorage.getItem('auth') &&
                sessionStorage.getItem('email')
            ) {
                next();
            } else next('/signup');
        }
    },
    {
        path: '*',
        redirect: '/'
    }
];

const router = new VueRouter({
    routes,
    base: process.env.APPLICATION_PATH,
    mode: process.env.HISTORY_MODE ? 'history' : 'hash'
});

export default router;
