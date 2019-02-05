<template>
  <nav id="navigation">
    <router-link to="/">Inicio</router-link>
    <router-link to="/results" v-if="isAuth">Resultados</router-link>
    <button class="flat" v-if="isAuth" @click="onLogout">Salir</button>
    <router-link v-else to="/login">Ingresar</router-link>
  </nav>
</template>

<script>
import { firebase } from '@services/firebase';

export default {
  name: 'Header',
  props: {
    isAuth: Boolean,
    onLogin: Function,
    onLogout: Function,
  },
  data() {
    return {
      //isAuth: firebase.auth().currentUser ? true : false,
    };
  },
  methods: {
  },
}
</script>


<style>
#navigation {
  background: #00DBDB;
  display: flex;
  justify-content: center;
  width: 100vw;
}

#navigation > a {
  color: #000000;
  text-transform: uppercase;
  padding: 15px;
  margin: 10px;
  display: block;
  text-decoration: none;
}

#navigation > a.router-link-exact-active {
  background: #75F4F4;
  border: none;
  border-radius: 5px;
  font-weight: bold;
}

.flat {
  padding: 15px;
  margin: 10px;
}
</style>
