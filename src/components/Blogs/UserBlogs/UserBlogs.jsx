import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import UserBlogCard from './UserBlogCard/UserBlogCard';

const UserBlogs = () => {
    const user = useSelector(state => state.user);
    const b = useSelector(state => state.blog)
    

    return (
        <Grid container spacing={2} item xs={10} md={8}>
            {
                b.blogs.map((blog) => {
                    if(blog.author === user.firstName) {
                        return <UserBlogCard
                                    key={blog._id}
                                    id={blog._id}
                                    title={blog.title}
                                    content={blog.content}
                                    author={blog.author}
                                />
                    }
                })
            }
        </Grid>
    )
}

export default UserBlogs