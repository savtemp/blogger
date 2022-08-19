<template>
  <div class="row home-page justify-content-center">
    <div class="col-10" v-for="b in blog" :key="b.id">
      <BlogCard :blog="b" />
    </div>
    <button class="btn btn-fab btn-primary" title="Add Blog Post" data-bs-toggle="modal" data-bs-target="#blog-form" @click="setActiveBlog()"><i class="mdi mdi-plus f-18 text-dark"></i></button>
  </div>
  <!-- SECTION Modal for create a blog post -->
  <div class="modal fade" id="blog-form" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          <BlogForm />
        </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
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
import BlogForm from '../components/BlogForm.vue';

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
            blog: computed(() => AppState.blogs),
            setActiveBlog() {
                blogsService.setActiveBlog({});
            }
        };
    },
}
</script>

<style scoped lang="scss">
.btn-fab{
  position: fixed;
  border-radius: 50px;
  height: 65px;
  width: 65px;
  bottom: 6rem;
  right: 2rem;
}

</style>
