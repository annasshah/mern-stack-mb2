import React from 'react'
import {blogs as blogList} from '../utils/data'
import BlogCard from '../components/BlogCard'

const Blogs = () => {
  return (
    <div className='grid grid-cols-4 gap-4 container mx-auto'>
      {
        blogList.map((blog) => {
          return <BlogCard data={blog} />
        })
      }
    </div>
  )
}

export default Blogs
