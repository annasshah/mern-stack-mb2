import React, { useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router'
import { blogs } from '../utils/data'
import { useNavigation } from 'react-router'

const BlogDetails = () => {
  const params = useParams()

  const location = useLocation()

  // const [blogData, setBlogData] = useState(null)

  // useEffect(() => {

  //   !(() => {

  //     const title = params.slug

  //     const findBlog = blogs.find((blog) => blog.title === title)

  //     setBlogData(findBlog)

  //   })()

  // }, [])


  console.log(location.state)

  const blogData = useMemo(() => {
      const title = params.slug
      return blogs.find((blog) => blog.title === title)
  }, [])



  return (
    <div className='container mx-auto'>
      {
        blogData ? <div>
          <h1 className='text-2xl font-bold '>{params.slug}</h1>
          <p>{blogData.body}</p>

        </div> : null
      }
    </div>
  )
}

export default BlogDetails
