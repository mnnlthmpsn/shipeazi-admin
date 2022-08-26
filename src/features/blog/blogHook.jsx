import { useState } from "react"
import usePost from "../../utils/usePost"

const useBlogHook = () => {

    const { execute } = usePost("admin/add_blog_post")
    const [blogPost, setBlogPost] = useState({})
    
    const handleChange = e => {
        setBlogPost({ ...blogPost, [e.target.name]: e.target.value })
    }

    const handleContentChange = (event, editor) => {
        const data = editor.getData()
        setBlogPost({ ...blogPost, content: data })
    }

    const createPost = async e => {
        e.preventDefault()
        console.log(blogPost)
        const data = await execute(JSON.stringify(blogPost))
        console.log(data)
    }

    return { handleChange, createPost, handleContentChange }
}


export default useBlogHook