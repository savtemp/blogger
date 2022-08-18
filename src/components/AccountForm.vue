<template>
  <form class="card account-form" @submit.prevent="handleSubmit()">
    <div class="card-body text-start">
      <div>
        <label for="name">Name:</label>
        <input class="form-control" type="text" name="name" v-model="editable.name" required>
      </div>
      <div>
        <label for="picture">Picture:</label>
        <input class="form-control" type="text" name="picture" v-model="editable.picture" required>
      </div>
      <div>
        <label for="cover-img">Cover Image:</label>
        <input class="form-control" type="text" name="cover-img" v-model="editable.coverImg" required>
      </div>
      <div>
        <label for="bio">Bio:</label>
        <input class="form-control" type="text" name="bio" v-model="editable.bio" required>
      </div>
      <div>
        <button type="submit" class="btn btn-primary w-100 my-3">Save Account</button>
      </div>
    </div>
  </form>
</template>



<script>
import { ref, watchEffect } from 'vue';
import { AppState } from '../AppState';
import { router } from '../router.js';
import { accountService } from '../services/AccountService';
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';

export default {
  setup() {
    const editable = ref({})
    watchEffect(() => {
      if (!AppState.account) {
        return
      } editable.value = { ...AppState.account }
    })

    return {
      editable,
      async handleSubmit() {
        try {
          await accountService.editAccount(editable.value)
          router.push({name: 'Profile', params: { profileId: editable.value.id}})
        } catch (error) {
          logger.error('[handling submit]', error)
          Pop.error(error)
        }
      }
    };
  },
};
</script>



<style>
</style>