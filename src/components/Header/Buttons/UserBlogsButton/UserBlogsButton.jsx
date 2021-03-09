import React from 'react'
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import BookIcon from '@material-ui/icons/Book';

const useStyles = makeStyles((theme) => ({
    button: {
        marginLeft: "5px"
    },
    link: {
        textDecoration: "none",
        color: "inherit",
        [theme.breakpoints.down('md')]: {
            display: "flex",
            justifyContent: "center",
        }
    }
}))

const UserBlogsButton = () => {
    const classes = useStyles();

    return (
        <Link to="/blogs" className={classes.link}>
            <Button
                variant="outlined"
                color="inherit"
                className={classes.button}
                startIcon={<BookIcon />}
            >
                Blogs
            </Button>
        </Link>
    )
}

export default UserBlogsButton
