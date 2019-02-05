<template>
  <div id="login">
    <div>
      <h1>Ingresar</h1>
      <div class="form-field">
        <label>Correo electrónico</label>
        <input type="text" v-model="email" placeholder="usuario@dominio.com" />
      </div>
      <div class="form-field">
        <label>Contraseña</label>
        <input type="password" v-model="password" placeholder="123456" />
      </div>
      <div class="form-action">
        <button class="button" @click="login">Ingresar</button>
      </div>
      <p class="form-text">
        ¿No tiene cuenta? Puede <router-link to="/signup">registrarse</router-link>.
      </p>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'login',
  props: {
    isAuth: Boolean,
    onLogin: Function,
    onLogout: Function,
  },
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login: function () {
      this.onLogin(this.email, this.password);
    }
  },
};
</script>


<style>
#login {
  /*background: yellow;*/
  width: 100vw;
}

.form-action > button {
  width: 100%;
}
</style>
