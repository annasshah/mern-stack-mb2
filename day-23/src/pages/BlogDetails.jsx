import React, { useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router'
import { blogs } from '../utils/data'
import { useNavigation } from 'react-router'
import { child, get, onValue, ref } from 'firebase/database'
import { database } from '../firebase'

const BlogDetails = () => {
  const params = useParams()
  const [blogData, setBlogData] = useState(null)

  useEffect(() => {

    const starCountRef = ref(database, 'blogs/' + params.slug);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setBlogData(data)
    });



  }, [])


  // console.log(location.state)

  // const blogData = useMemo(() => {
  //   const title = params.slug
  //   return blogs.find((blog) => blog.title === title)
  // }, [])



  return (
    <div className='container mx-auto'>
      {
        blogData ? <div>
          <h1 className='text-2xl font-bold '>{blogData.title}</h1>
          <p>{blogData.content}</p>

        </div> : null
      }
    </div>
  )
}

export default BlogDetails
