<template>
    <div class="blog-card card selectable no-select my-2" :title="blog.title">
        <router-link :to="{name: 'Blog', params: {blogId: blog.id}}">
        <div class="card-body">
            <div class="card-title">
                <h6 class="text-dark">
                    {{blog.title}} | {{new Date(blog.createdAt).toLocaleDateString('en-US')}}
                </h6>
            </div>
        </div>
        </router-link>

        <div class="blog-creator" v-if="blog.creator">
            <router-link :to="{name: 'Profile', params: {profileId: blog.creator.id}}">
                <img class="img-fluid" :src="blog.creator.picture" alt="" :title="blog.creator.name">
            </router-link>
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

.blog-card{
    min-height: 80px;
}
.blog-creator{
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    position: absolute;
}

img{
    transition: all .15s linear;
    border-radius: 50px;
    height: 45px;
    width: 45px;
    object-fit: cover;
    object-position: center;

    &:hover{
        transform: translateY(-3px);
    }
}

</style>