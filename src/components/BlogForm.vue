<template>
    <form class="blog-form" @submit.prevent="handleSubmit">
        <p>Create A Blog Post</p>
        <input class="form-control" type="text" placeholder="Title" v-model="editable.title">
        <input class="form-control" type="url" placeholder="Picture" v-model="editable.picture">
        <textarea class="form-control" name="body" cols="30" rows="10" v-model="editable.body" style="resize:none"></textarea>
        <button type="submit" class="btn btn-primary w-100 mt-2">Post</button>
    </form>
</template>


<script>
import { ref, watchEffect } from 'vue';
import { blogsService } from '../services/BlogsService.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';

export default {
    setup(){
        const editable = ref({})

        return{
            editable,

            async handleSubmit(){
                try {
                    await blogsService.createBlog(editable.value)
                    Pop.success('Great Job! You created a blog post!')
                } catch (error) {
                    logger.log('[Creating Blog]', error)
                    Pop.error(error)
                }
            }
        }
    }
}
</script>


<style lang="scss" scoped>
</style>