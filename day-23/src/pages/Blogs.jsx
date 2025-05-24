import React, { useEffect, useState } from 'react'
// import {blogs as blogList} from '../utils/data'
import BlogCard from '../components/BlogCard'
import { child, get, ref } from 'firebase/database'
import { database } from '../firebase'

const Blogs = () => {
  const [dataList, setdataList] = useState([])


  useEffect(() => {
    const dbRef = ref(database)

    get(child(dbRef, `blogs`)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());

        const data = Object.values(snapshot.val())

        setdataList(data)
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });



  }, [])

  return (
    <div className='grid grid-cols-4 gap-4 container mx-auto'>
      {
        dataList.map((blog) => {
          return <BlogCard data={blog} />
        })
      }
    </div>
  )
}

export default Blogs
