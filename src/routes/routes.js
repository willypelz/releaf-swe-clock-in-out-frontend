import HomeLayout from '@/home/layout/Layout.vue';

const routes = [
  {
    path: '/',
    redirect: 'staffs',
    component: HomeLayout,
    children: [
      {
        path: '/login',
        name: 'authLogin',
        component: () => import( '../home/login/Login.vue')
      },
      {
        path: '/home',
        name: 'home',
        component: () => import( '../dashboard/staffs/Staffs.vue')
      },
      {
        path: '/staffs',
        name: 'staffs',
        component: () => import( '../dashboard/staffs/Staffs.vue')
      },
      {
        path: '/staffs/:slug',
        name: 'staff',
        component: () => import( '../dashboard/staff/Staff.vue')
      },
      {
        path: '/clock-in-out',
        name: 'clockInOut',
        component: () => import( '../dashboard/clock-in-out/ClockInOut.vue')
      },
      {
        path: '/register',
        name: 'authRegister',
        component: () => import( '../home/register/Register.vue')
      }
    ]
  },

];

export default routes;
