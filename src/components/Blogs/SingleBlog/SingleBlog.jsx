import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux";
import TheWholeBlog from './TheWholeBlog/TheWholeBlog';

const SingleBlog = ({ match }) => {    
    const b = useSelector(state => state.blog);
    const id = match.params.id;
    
    return (
        <>
            {
                b.blogs.map((blog) => {
                    console.log(blog);
                    if(blog._id === id) {
                        console.log("Hup")
                        return <TheWholeBlog 
                                    title={blog.title}
                                    content={blog.content}
                                    author={blog.author}
                                    image={blog.imageLink}
                                />
                    }
                })
            }
        </>
    )
}

export default SingleBlog
