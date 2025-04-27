import React from 'react'
import { Link, useNavigate } from 'react-router'
const BlogCard = ({ data }) => {
    const {
        title,
        body,
    } = data

    const navigate = useNavigate()



    const navigateHandle = () => {

        navigate(`/blog/${title}`, {state: data})

    }



    return (
        <div className='border border-gray-400 rounded-md py-3 px-2'>

            <h1 className='font-bold text-2xl'>{title}</h1>
            <p className='line-clamp-2'>{body}</p>

            {/* <Link to={`/blog/${title}`}>
                Click here to readmore
            </Link> */}
            
            <button onClick={navigateHandle}>
            Click here to readmore
            </button>
        </div>
    )
}

export default BlogCard
