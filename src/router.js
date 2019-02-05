import Vue from 'vue';
import Router from 'vue-router';

import { firebase } from '@services/firebase';

//import Home from '@views/Home';
//import Login from '@views/Login';
//import SignUp from '@views/SignUp';
//import Result from '@views/Result';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/login',
    },
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ '@views/Home'),
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "login" */ '@views/Login'),
    },
    {
      path: '/signup',
      name: 'signup',
      //component: SignUp,
      component: () => import(/* webpackChunkName: "signup" */ '@views/SignUp')
    },
    {
      path: '/results',
      name: 'result',
      //component: Result,
      component: () => import(/* webpackChunkName: "result" */ '@views/Result'),
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) {
    console.log("TO_LOGIN");
    next('login');
  }
  else
    next();
});

export default router;
