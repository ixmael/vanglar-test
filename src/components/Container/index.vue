<template>
  <div id="container">
    <router-view
      v-bind:onLogin="onLogin"
      v-bind:onLogout="onLogout"
      v-bind:isAuth="isAuth"
    />
  </div>
</template>

<script>
export default {
  name: 'container',
  props: {
    isAuth: Boolean,
    onLogin: Function,
    onLogout: Function,
  },
  data() {
    return {};
  },
}
</script>


<style>
#container {
  flex-grow: 1;
  display: flex;
  align-items: flex-start;
  width: 100vw;
}

#container > div {
  width: 100vw;
}

@media only screen and (min-width: 1200px) {
  #container {
    width: 900px;
  }
}
</style>
