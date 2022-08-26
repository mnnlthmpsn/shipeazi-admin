import useBlogHook from './blogHook';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


export const CreateBlog = () => {

    const { handleChange, handleContentChange, createPost } = useBlogHook()

    return (
        <div className="h-screen w-screen flex items-center justify-center bg-gray-100 backdrop-blur-lg">
            <form className="border p-10 rounded-lg bg-white space-y-5 container" onSubmit={createPost}>
                <div className="space-y-2">
                    <label htmlFor="cover_photo" className="font-semibold">Cover Photo URL</label>
                    <input type="text" name="cover_photo" className="form-control" onChange={handleChange} required />
                </div>

                <div className="space-y-2">
                    <label htmlFor="post_title" className="font-semibold">Post Title</label>
                    <input type="text" name="title" className="form-control" onChange={handleChange} required />
                </div>

                <div>
                    <label htmlFor="content" className='font-semibold'>Post Content</label>
                    <CKEditor 
                        editor={ClassicEditor}
                        onChange={handleContentChange}
                    />
                </div>

                <div className="flex justify-end">
                    <button className='btn-primary' type='submit'>Add Blog Post</button>
                </div>
            </form>
        </div>
    )
}