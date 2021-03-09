import React, { useState } from 'react'
import { useMediaQuery, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import axios from 'axios';
import BookIcon from '@material-ui/icons/Book';

const useStyles = makeStyles(theme => ({
    button: {
        marginLeft: "5px",
        [theme.breakpoints.down("md")] : {
            marginRight: "5px",
            marginBottom: "5px"
        }
    }
}))

const CreateNewBlogButton = () => {
    const classes = useStyles();
    const createNewBlogLink = "http://localhost:5000/blogs/new-blog";
    const [dialog, setDialog] = useState(false);
    const user = useSelector(state => state.user);
    const [newBlog, setNewBlog] = useState({
        title: "",
        content: "",
        imageLink: "",
        author: user.firstName
    })

    const theme = useTheme();
    const headerButtonsStyle = useMediaQuery(theme.breakpoints.up('md'));

    const createNewBlogHandle = (e) => {
        e.preventDefault();
        const temporaryBlog = newBlog;
        console.log(temporaryBlog);

        async function fetchData() {
            const result = await axios.post(createNewBlogLink, temporaryBlog);
            console.log(result);
        }

        fetchData();
    }

    return (
        <div style={headerButtonsStyle ? {display: "inline"} : {display: "flex", justifyContent: "center"}}>
            <Button
                variant="outlined"
                color="inherit"
                className={classes.button}
                onClick={() => setDialog(true)}
                startIcon={<BookIcon />}
            >
                Create blog
            </Button>
            {
                dialog ? (
                    <Dialog
                        open={dialog}
                        onClose={() => setDialog(false)}
                        aria-labelledby="form-dialog-title"
                    >
                        <DialogTitle id="form-dialog-title">
                            Create new blog
                        </DialogTitle>
                        <DialogContent>
                            <TextField
                                margin="dense"
                                color="secondary"
                                id="title"
                                label="Title"
                                type="text"
                                fullWidth
                                onChange={(e) => setNewBlog({...newBlog, title: e.target.value})}
                            />
                            <TextField
                                margin="dense"
                                color="secondary"
                                id="src"
                                label="Place your image link here"
                                type="text"
                                fullWidth
                                onChange={(e) => setNewBlog({...newBlog, imageLink:e.target.value})}
                            />
                            <TextField
                                margin="dense"
                                color="secondary"
                                id="content"
                                label="Content..."
                                type="text"
                                multiline
                                fullWidth
                                onChange={(e) => setNewBlog({...newBlog, content:e.target.value})}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button
                                color="secondary"
                                variant="contained"
                                onClick={createNewBlogHandle}
                            >
                                Create blog
                            </Button>
                            <Button 
                                color="secondary"
                                variant="contained"
                                onClick={() => setDialog(false)}
                            >
                                Close
                            </Button>
                        </DialogActions>
                    </Dialog>
                ) : ''
            }          
        </div>
    )
}

export default CreateNewBlogButton
