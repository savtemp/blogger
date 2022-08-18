<template>
  <div class="row home-page justify-content-center">
    <div class="col-10" v-for="b in blog" :key="b.id">
      <BlogCard :blog="b" />
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import {blogsService} from '../services/BlogsService.js'
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState.js';
import BlogCard from '../components/BlogCard.vue';

export default {
    setup() {
        async function getBlogs() {
            try {
                await blogsService.getBlogs();
            }
            catch (error) {
                logger.error(error);
                Pop.error(error);
            }
        }
        onMounted(() => {
            getBlogs();
        });
        return {
            blog: computed(() => AppState.blogs)
        };
    },
    components: { BlogCard }
}
</script>

<style scoped lang="scss">

</style>
