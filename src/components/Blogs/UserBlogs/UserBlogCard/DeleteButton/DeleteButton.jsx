import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { saveBlogs } from '../../../../../Redux/actions';

const DeleteButton = ({ id }) => {
    const deleteLink = "http://localhost:5000/blogs/delete-blog";
    const getBlogsLink = "http://localhost:5000/blogs";
    const dispatch = useDispatch();
    const blogId = {
        id
    }

    const deleteButtonHandle = () => {
        console.log(id);
        async function deleteBlog() {
            const response = await axios.post(deleteLink, blogId);
            const response2 = await axios.get(getBlogsLink);
            console.log(response2);
            console.log(response);
            dispatch(saveBlogs(response2.data));
        }

        deleteBlog();
    }

    return (
        <Button
            variant="contained"
            color="primary"
            startIcon={<DeleteIcon />}   
            onClick={deleteButtonHandle}
        >
            Delete this blog
        </Button>
    )
}

export default DeleteButton