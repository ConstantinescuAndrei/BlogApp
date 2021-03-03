import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import BlogCard from './BlogCard/BlogCard'
import { useSelector } from 'react-redux';
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
    div: {
        display: "inline",
        marginLeft: "10%",
        marginRight: "10%"
    }
})

const CardForm = () => {    
    const b = useSelector(state => state.blog);
    const classes = useStyles();
    
    return (
        <>
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
        </>
    )
}

export default CardForm