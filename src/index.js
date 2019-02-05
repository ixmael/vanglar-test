import Vue from 'vue';

import { firebase } from '@services/firebase';

import App from '~/App';
import router from '~/router';

import "~/themes";

Vue.config.productionTip = false;

let app = null;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App),
    }).$mount('#app');
  }
});
