<template>
  <div id="vanglar">
    <Header
      v-bind:onLogin="login"
      v-bind:onLogout="logout"
      v-bind:isAuth="isAuth"
    />
    <Container
      v-bind:onLogin="login"
      v-bind:onLogout="logout"
      v-bind:isAuth="isAuth"
    />
  </div>
</template>

<script>
import { firebase } from '@services/firebase';

import Header from '@components/Header';
import Container from '@components/Container';

export default {
  name: 'app',
  //props: ['isAuth'],
  data() {
    return {
      isAuth: false,
    };
  },
  components: {
    Header,
    Container,
  },
  methods: {
    login(email, password) {
      firebase.auth().signInWithEmailAndPassword(email, password).then(
        (user) => {
          this.isAuth = true;
          this.$router.replace('/');
        },
        (err) => {
          alert('Error: ' + err.message);
        }
      );
    },
    logout() {
      firebase.auth().signOut()
        .then(() =>  {
          this.isAuth = false;
          this.$router.replace('/');
        })
        .catch((err) => {
          alert('Error: ' + err.message);
        });
    }
  },
}
</script>

<style>
#vanglar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}
</style>
