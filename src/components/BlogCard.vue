<template>
    <div class="blog-card card selectable my-2">
        <div class="card-body">
            <div class="card-title">
                <h6>
                    {{blog.title}} || {{new Date(blog.createdAt).toLocaleDateString('en-US')}}
                </h6>
            </div>
        </div>
    </div>
</template>


<script>
import { Blog } from '../models/Blog.js';

export default {
    props: {
        blog: {type: Blog, required: true}
    },
    setup(props){
        return{}
    }
}
</script>


<style lang="scss" scoped>
</style>