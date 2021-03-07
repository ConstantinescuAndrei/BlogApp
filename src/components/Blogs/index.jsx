import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import BlogCard from './BlogCard/BlogCard'
import { useSelector } from 'react-redux';


const CardForm = () => {    
    const b = useSelector(state => state.blog);
    
    return (
        <Grid container spacing={2} item xs={10} md={8}>
            {
                b.blogs.map((blog) => {
                    return <BlogCard
                                key={blog._id}
                                id={blog._id}
                                title={blog.title}
                                content={blog.content}
                                author={blog.author}
                            />
                })
            }
        </Grid>
    )
}

export default CardForm