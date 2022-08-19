<template>
<div class="row">
    <div class="blog-page" v-if="blog">
        <div :title="blog.title">
            <h1>{{new Date(blog.createdAt).toLocaleDateString('en-US')}}</h1>
            <img class="img-fluid" :src="blog.imgUrl" alt="">
            <div>
                <p>{{blog.body}}</p>
            </div>
        </div>
        <div>
            <button class="btn btn-info" @click="adjustBlog(blog)">Edit Blog Post</button>
            <button class="btn btn-danger" @clock="deleteBlog(blog)">Delete Blog Post</button>
        </div>
    </div>
</div>
</template>


<script>
import { computed } from '@vue/reactivity';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { AppState } from '../AppState.js';
import { blogsService } from '../services/BlogsService.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import BlogForm from '../components/BlogForm.vue';

export default {
    setup() {
        const route = useRoute();
        async function getBlogById() {
            try {
                await blogsService.getBlogById(route.params.blogId);
            }
            catch (error) {
                logger.error("[getting blog by id]", error);
                Pop.error(error);
            }
        }
        onMounted(() => {
            getBlogById();
        });
        return {
            blog: computed(() => AppState.activeBlog),
            adjustBlog(blog) {
                blogsService.setActiveBlog(blog);
            },
            async deleteBlog(blog) {
                try {
                    const yes = await Pop.confirm("Delete the blog post?");
                    if (!yes) {
                        return;
                    }
                    await blogsService.deleteBlog(blog.id);
                }
                catch (error) {
                    logger.error("[Deleting Blog]", error);
                    Pop.error(error);
                }
            }
        };
    },
    components: { BlogForm }
}
</script>


<style lang="scss" scoped>
</style>