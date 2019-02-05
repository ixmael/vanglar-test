<template>
  <div id="signup">
    <div>
      <h1>Registrarse</h1>
      <div class="form-field">
        <label>Correo electrónico</label>
        <input type="text" v-model="email" placeholder="usuario@dominio.com" />
      </div>
      <div class="form-field">
        <label>Contraseña</label>
        <input type="password" v-model="password" placeholder="123456" />
      </div>
      <div class="form-field">
        <label>Repetir contraseña</label>
        <input type="password" v-model="repeatedPassword" placeholder="123456" />
      </div>
      <div class="form-action">
        <button class="button" @click="signUp">Registrarse</button>
      </div>
      <p class="form-text">
        ¿Ya tiene una cuenta? Puede <router-link to="/login">ingresar</router-link>.
      </p>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'signup',
  data() {
    return {
      email: '',
      password: '',
      repeatedPassword: '',
    };
  },
  methods: {
    signUp: function () {
      if (this.email.length === 0 || this.password !== this.repeatedPassword) {
        alert("Las contraseñas no coinciden.");
      }
      else {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
          (user) => {
            alert('Tu cuenta fue creada, ahora puedes ingresar.');
            this.$router.replace('home');
          },
          (err) => {
            alert('Ocurrió un error: ' + err.message)
          }
        );
      }
    },
  },
};
</script>


<style>
#signup {
  /*background: green;*/
  width: 100vw;
}
</style>
