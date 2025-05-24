import React, { useState } from 'react'
import InputComponent from '../components/InputComponent'
import { child, push, ref, set } from 'firebase/database'
import { database } from '../firebase'
import toast from 'react-hot-toast'

const CreateBlog = () => {
    const [formData, setFormData] = useState({})
    const [loading, setLoading] = useState(false)

    const changeHandle = (key, value) => {

        setFormData((pre) => {

            return { ...pre, [key]: value }
        })
    }


    const submitHandle = (e) => {
        e.preventDefault()
        setLoading(true)

        console.log(formData)

        const newBlogKey = push(child(ref(database), 'blogs')).key;

        set(ref(database, 'blogs/' + newBlogKey), {
            ...formData,
            key: newBlogKey
        })

        toast.success('New blog created successfully')
        e.target.reset()
        setLoading(false)


    }




    return (
        <div className='container mx-auto'>

            <h1 className='font-bold text-2xl mb-3'>
                Create new blog
            </h1>

            <form onSubmit={submitHandle} className='space-y-5'>
                <InputComponent onChange={(e) => changeHandle('title', e.target.value)} required placeholder='Enter title' />

                <textarea onChange={(e) => changeHandle('content', e.target.value)} placeholder='Enter blog' rows={7} className='w-full py-2 px-2 border border-gray-400 rounded-md focus:outline-none' />


                <button disabled={loading} className='w-fit px-5 disabled:opacity-35 bg-blue-700 text-white rounded-md py-2 text-center'>
                    {loading ? "Loading..." : "Create"}
                </button>
            </form>

        </div>
    )
}

export default CreateBlog
