import { AppState } from "../AppState.js"
import { Blog } from "../models/Blog.js"
import { logger } from "../utils/Logger.js"
import { bcwSandbox } from "./AxiosService.js"


class BlogsService {
    async editBlog(blogData){
        let res = await bcwSandbox.put(`api/blogs/${blogData.id}`, blogData)
        let blog = new Blog(res.data)
        let blogIndex = AppState.blogs.findIndex(b => b.id == blogData.id)
        AppState.blogs.splice(blogIndex, 1, blog)
    }
    async getBlogs(){
        const res = await bcwSandbox.get('/api/blogs')
        logger.log(res.data)
        AppState.blogs = res.data.map(b => new Blog(b))
    }

    async createBlog(blogData){
        const res = await bcwSandbox.post(`api/blogs`, blogData)
        AppState.blogs.unshift(new Blog(res.data))
    }
    async deleteBlog(blogId){
        let url = `api/blogs/${blogId}`
        await bcwSandbox.delete(url)
        AppState.blogs = AppState.blogs.filter(b => b.id != blogId)
    }
    setActiveBlog(blog){
        AppState.activeBlog = blog
    }
    async getBlogById(blogId){
        const res = await bcwSandbox.get(`api/blogs/${blogId}`)
        // logger.log('what is a blog post', res.data)
        AppState.activeBlog = new Blog(res.data)
    }


}


export const blogsService = new BlogsService()