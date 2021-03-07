import React from 'react'
import axios from 'axios'
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useSelector, useDispatch } from "react-redux";
import { saveBlogs } from "../../../../Redux/actions";
import { Link } from "react-router-dom";
import BookIcon from '@material-ui/icons/Book';

const useStyles = makeStyles((theme) => ({
    button: {
        marginLeft: "5px"
    },
    link: {
        textDecoration: "none",
        color: "inherit"
    }
}))

const BlogsButton = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const blogsLink = "http://localhost:5000/blogs";

    const getBlogs = () => {
        async function fetchBlogs() {
            const response = await axios.get(blogsLink);
            dispatch(saveBlogs(response.data));
        }

        fetchBlogs();
    }

    return (
        <Link to="/blogs" className={classes.link}>
            <Button
                variant="outlined"
                color="inherit"
                className={classes.button}
                onClick={getBlogs}
                startIcon={<BookIcon />}
            >
                Blogs
            </Button>
        </Link>
    )
}

export default BlogsButton
