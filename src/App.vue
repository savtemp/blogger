<template>
<div class="d-flex">
  <div class="container-fluid left-bar bg-dark text-center">
    <div class="my-5">
      <router-link :to="{name: 'Home'}" class="text-success lighten=30 pt-5 mb-3">
        <b>Blogger</b>
      </router-link>
    </div>
    <!-- TODO maybe add router link to profile page -->
    <div>
      <Login class="pt-3" />
    </div>
  </div>
  <main class="container-fluid">
    <router-view />
  </main>

</div>
</template>

<script>
import { computed } from 'vue';
import { AppState } from './AppState';
import Login from './components/Login.vue';

export default {
    name: "App",
    setup() {
        return {
            appState: computed(() => AppState)
        };
    },
    components: { Login }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

.left-bar{
  height: 100vh;
  width: 200px;
}

main{
  max-height: 100vh;
  overflow-y: auto;
  padding-bottom: 5rem;
}
</style>
