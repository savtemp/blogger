<template>
  <div class="container-fluid">
    <div class="row my-3 justify-content-between">
      <div class="col-md-6">
        <AccountForm />
      </div>
      <div class="col-md-5 text-end">
        <h3>Welcome {{ account.name }}</h3>
        <img class="rounded" :src="account.picture" alt="" />
        <p>{{ account.email }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import AccountForm from '../components/AccountForm.vue';
export default {
  name: "Account",
  setup() {
    return {
      account: computed(() => AppState.account)
    };
  },
  components: { AccountForm }
}
</script>

  <style scoped>
  </style>
