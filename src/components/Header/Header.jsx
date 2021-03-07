import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";
import { useSelector, useDispatch } from 'react-redux'; 
import DesktopHeader from './DesktopHeader/DesktopHeader';
import PhoneHeader from './PhoneHeader/PhoneHeader';

const useStyles = makeStyles((theme) => ({
    grid: {
        margin: 0,
    },
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

const Header = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    const user = useSelector(state => state.user);

    return (
            <AppBar 
                position="static">
                <Toolbar>
                    <Typography 
                        variant="h4"
                        className={classes.title}
                    >
                        {user.username}
                    </Typography>
                    {
                        matches ? 
                        (
                            <DesktopHeader />
                        ) : 
                        (
                            <PhoneHeader />
                        )
                    }    
                </Toolbar>
            </AppBar>
    );
}

export default Header
