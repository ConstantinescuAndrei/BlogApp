import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AppBar, Toolbar, Typography, Button, Paper } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/styles";
import { useSelector, useDispatch } from 'react-redux'; 
import { logout } from '../../Redux/actions';
import RegisterButton from "./RegisterButton/RegisterButton";
import LoginButton from "./LoginButton/LoginButton";
import BlogsButton from './BlogsButton/BlogsButton';
import CreateNewBlog from './CreateNewBlog/CreateNewBlog';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    
    },
    typography: {
        display: "inline"
    },
    buttons: {
        marginLeft: "5px"
    }
}))

const Header = ({handleBlogs}) => {
    const classes = useStyles();
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const logoutHandle = (e) => {
        e.preventDefault();
        dispatch(logout());
    }

    return (
        <div>
            <AppBar 
                position="static">
                <Toolbar>
                    <Typography 
                        variant="h6"
                        className={classes.title}>
                        Blog Application
                    </Typography>
                    <BlogsButton handleBlogs={handleBlogs}/>
                    {
                        !user.username ? (
                            <div>     
                                <LoginButton />
                                <RegisterButton />
                            </div>
                            
                        ) : (
                            <div>
                                <CreateNewBlog />
                                <Button 
                                    color="inherit" 
                                    variant="outlined" 
                                    className={classes.buttons} 
                                    onClick={logoutHandle}
                                    startIcon={<ExitToAppIcon />}
                                >
                                    Logout
                                </Button>
                            </div>
                            
                        )
                    }                    
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header
