import { AppState } from "../AppState.js"
import { Blog } from "../models/Blog.js"
import { logger } from "../utils/Logger.js"
import { bcwSandbox } from "./AxiosService.js"


class BlogsService {
    async getBlogs(){
        const res = await bcwSandbox.get('/api/blogs')
        logger.log(res.data)
        AppState.blogs = res.data.map(b => new Blog(b))
    }

    setActiveBlog(blog){
        AppState.activeBlog = blog
    }
    async getBlogById(blogId){
        const res = await bcwSandbox.get(`api/blogs/${blogId}`)
        // logger.log('what is a blog post', res.data)
        AppState.activeBlog = new Blog(res.data)
    }

    async createBlog(blogData){
        const res = await bcwSandbox.post(`api/blogs`, blogData)
        AppState.blogs.unshift(new Blog(res.data))
    }

    async deleteBlog(blogId){
        let url = `/${blogId}`
        await bcwSandbox.delete(url)
        AppState.blogs = AppState.blogs.filter(b => b.id != blogId)
    }
}


export const blogsService = new BlogsService()